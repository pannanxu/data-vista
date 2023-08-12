import {makeAutoObservable} from "mobx";
import Moveable, {getElementInfo} from "moveable";
import Selecto from "selecto";
import {publishEvent} from "@data-vista/core";
import OnSelected from "@data-vista/core/event/OnSelected";

const DimensionViewable = {
    name: "dimensionViewable",
    props: [],
    events: [],
    render(moveable: Moveable, React: any) {
        const rect = moveable.getRect();
        return React.createElement("div", {
            key: "dimension-viewer",
            className: "moveable-dimension",
            style: {
                position: "absolute",
                left: `${rect.width / 2}px`,
                top: `${rect.height + 20}px`,
                background: "#4af",
                borderRadius: "2px",
                padding: "2px 4px",
                color: "white",
                fontSize: "13px",
                whiteSpace: "nowrap",
                fontWeight: "bold",
                willChange: "transform",
                transform: `translate(-50%, 0px)`
            }
        }, [Math.round(rect.offsetWidth), " x ", Math.round(rect.offsetHeight)]);
    }
};

const Editable = {
    name: "editable",
    props: [],
    events: [],
    render(moveable: any, React: any) {
        const rect = moveable.getRect();
        const {pos2} = moveable.state;
        const EditableViewer = moveable.useCSS("div", `
    {
        position: absolute;
        left: 0px;
        top: 0px;
        will-change: transform;
        transform-origin: 0px 0px;
    }
    .custom-button {
        width: 24px;
        height: 24px;
        margin-bottom: 4px;
        background: #4af;
        border-radius: 4px;
        appearance: none;
        border: 0;
        color: white;
        font-weight: bold;
 }
     `);
        return React.createElement(EditableViewer, {
            key: "editable-viewer",
            className: "moveable-editable",
            style: {
                transform: `translate(${pos2[0]}px, ${pos2[1]}px) rotate(${rect.rotation}deg) translate(10px)`
            }
        }, [
            React.createElement("button", {
                className: "custom-button",
                onClick: () => {
                    alert("+");
                }
            }, ["+"]),
            React.createElement("button", {
                className: "custom-button",
                onClick: () => {
                    alert("-");
                }
            }, ["-"]),
        ]);
    }
};

export default class MoveController {

    private moveable: Moveable | undefined
    private selector: Selecto | undefined

    constructor() {
        makeAutoObservable(this)
    }

    public createMoveable(viewer: HTMLDivElement) {

        this.moveable = new Moveable(viewer, {
            origin: false, // 关闭中心的圆点
            draggable: true, // 设置可以拖动
            resizable: true, // 设置可以改变大小
            rotatable: true, // 设置可以旋转
            scalable: true, // 设置可以缩放
            throttleScale: 0, // 设置缩放的阈值
            keepRatio: false, // 设置可以等比缩放
            useResizeObserver: true, // 设置可以监听组件的宽高变化
            useMutationObserver: true, // 监听元素大小位置等
            elementGuidelines: ['.viewport', '.freely-component'], // 参与辅助线的组件
            props: {
                dimensionViewable: true,
                editable: true,
            },
            ables: [DimensionViewable, Editable],
            snappable: true, // 辅助线
            snapDirections: {
                "top": true, "left": true, "bottom": true, "right": true, "center": true,
                "middle": true
            },
            snapThreshold: 5,
            // throttleDrag: 5,
            elementSnapDirections: {
                "top": true,
                "left": true,
                "bottom": true,
                "right": true,
                "center": true,
                "middle": true
            },
            maxSnapElementGuidelineDistance: 100,
            maxSnapElementGapDistance: 80,
            // 分别绘制行列的前后中间的辅助线, |  -  |  -  |  -  | -  |
            verticalGuidelines: [],
            horizontalGuidelines: [],
        })
            // 组件拖动
            .on("drag", ({target, transform}) => {
                target.style.transform = transform;
            })
            .on("dragGroup", ({events}) => {
                events.forEach(({target, transform}) => {
                    target.style.transform = transform;
                })
            })
            // 宽高修改
            .on("resize", ({target, transform, width, height}) => {
                target.style.transform = transform;
                target.style.width = `${width}px`;
                target.style.height = `${height}px`;
            })
            .on("resizeGroup", ({events}) => {
                events.forEach(({target, transform, width, height}) => {
                    target.style.transform = transform;
                    target.style.width = `${width}px`;
                    target.style.height = `${height}px`;
                })
            })
            // 旋转
            .on("rotate", ({target, transform}) => {
                target.style.transform = transform;
            })
            .on("rotateGroup", ({events}) => {
                events.forEach(({target, transform}) => {
                    target.style.transform = transform;
                })
            })
            // 缩放
            .on("scale", ({target, transform}) => {
                target.style.transform = transform;
            })
            .on("scaleGroup", ({events}) => {
                events.forEach(({target, transform}) => {
                    target.style.transform = transform;
                })
            });

    }

    public createSelector(viewer: HTMLDivElement) {
        this.selector = new Selecto({
            dragContainer: viewer,
            selectableTargets: [".viewer .viewport .freely-component"],
            selectByClick: true,
            selectFromInside: false,
            continueSelect: false,
            toggleContinueSelect: "shift",
            keyContainer: window,
            hitRate: 100,
            getElementRect: getElementInfo
        })
            .on("dragStart", e => {
                const dom = e.inputEvent.target;
                const isMoveableObject = this.moveable?.isMoveableElement(dom);
                if (isMoveableObject) {
                    e.stop();
                    return;
                }
                const result = this.moveable?.getTargets().some(t => t === dom || t.contains(dom));
                if (result) {
                    e.stop();
                    return;
                }
            })
            .on("select", e => {
                e.added.forEach(el => {
                    el.classList.add("selected");
                });
                e.removed.forEach(el => {
                    el.classList.remove("selected");
                });
            })
            .on("selectEnd", e => {
                if (e.isDragStart) {
                    const dom = e.inputEvent;
                    dom.preventDefault();
                    setTimeout(() => this.moveable?.dragStart(dom));
                }
                this.setSelect(e.selected as HTMLDivElement[])
            });
    }

    public setSelect(component: HTMLDivElement[]) {
        if (this.moveable) {
            this.moveable.target = component;
            const ids = component.map(e => e.dataset.id).filter(e => e);
            publishEvent('OnSelected', new OnSelected(ids as string[]))
        }
    }
}
