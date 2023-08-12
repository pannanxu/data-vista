import Guides from "@scena/guides";
import {makeAutoObservable} from "mobx";

type RulerType = 'horizontal' | 'vertical'

class RulerController {

    type: RulerType;
    ruler: Guides | undefined
    unit: number

    constructor(type: RulerType) {
        makeAutoObservable(this)
        this.type = type;
        this.unit = 100;
    }

    public init(element: HTMLElement, initZoom: number) {
        this.calcUnit(initZoom);
        if (!this.ruler) {
            this.ruler = new Guides(element, {
                type: this.type,
                displayDragPos: true,
                useResizeObserver: true,
                dragPosFormat: (v) => `${v}px`,
                zoom: initZoom,
                unit: this.unit
            }).on("changeGuides", e => {
                console.log('changeGuides', e.guides);
            });
        }
    }

    public resize() {
        this.ruler?.resize();
    }

    public calcUnit(zoom: number) {
        this.unit = zoom < 1
            ? Math.max(100, Math.round(50 * (1 - zoom) * 10))
            : Math.round(50 / zoom);
    }

    public onZoom(zoom: number) {
        this.calcUnit(zoom);
        this.ruler?.setState({
            zoom: zoom,
            unit: this.unit
        })
    }

    public onScroll(left: number, top: number) {
        if (this.type === 'horizontal') {
            this.ruler?.scroll(left);
            this.ruler?.scrollGuides(top);
        } else {
            this.ruler?.scroll(top);
            this.ruler?.scrollGuides(left);
        }
    }
}

export default RulerController;