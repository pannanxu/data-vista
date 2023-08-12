import InfiniteViewer from "infinite-viewer";
import {makeAutoObservable} from "mobx";
import {FreelyScrollType, FreelyViewportType} from "./freely.types";

const createInfiniteViewer = (controller: ViewerController,
                              viewer: HTMLDivElement,
                              viewport: HTMLDivElement) => {

    const infiniteViewer = new InfiniteViewer(
        viewer,
        viewport,
        {
            wheelScale: 0.001,
            useAutoZoom: true,
            zoomRange: [0.2, 1]
        }
    );
    infiniteViewer.on("pinch", (e) => {
        controller.setZoom(e.zoom)
    })
    infiniteViewer.on("scroll", (e) => {
        controller.setScroll({
            scrollLeft: e.scrollLeft,
            scrollTop: e.scrollTop
        })
    });
    return infiniteViewer;
}

class ViewerController {

    /**
     * 视口配置
     */
    viewport: FreelyViewportType = {
        width: 1280,
        height: 1080
    }
    /**
     * 视口缩放比例
     */
    zoom: number = 1.0
    /**
     * 视口移动位置
     */
    scroll: FreelyScrollType = {
        scrollTop: 0,
        scrollLeft: 0
    }
    /**
     * 无限滚动组件实例
     */
    infiniteViewer: InfiniteViewer | undefined
    /**
     * 无限滚动组件Dom
     */
    viewer: HTMLDivElement | undefined
    /**
     * 画布视口Dom
     */
    viewportEl: HTMLDivElement | undefined

    constructor() {
        makeAutoObservable(this);
    }

    public setZoom(zoom: number) {
        this.zoom = zoom;
    }

    public setScroll(scroll: FreelyScrollType) {
        this.scroll = scroll
    }

    public setWindow(viewport: FreelyViewportType) {
        this.viewport = viewport
        if (this.viewportEl) {
            this.viewportEl.style.width = `${this.viewport.width}px`
            this.viewportEl.style.height = `${this.viewport.height}px`
        }
    }

    public init(viewer: HTMLDivElement, viewportEl: HTMLDivElement) {
        if (!this.infiniteViewer) {
            this.viewer = viewer;
            this.viewportEl = viewportEl;

            // 初始化时将画布缩放到可视区域
            const containerWidth = this.viewer.clientWidth;
            const viewportWidth = this.viewport.width;
            const zoom = containerWidth / viewportWidth;
            this.setZoom(zoom)

            this.infiniteViewer = createInfiniteViewer(this, viewer, viewportEl)
            this.infiniteViewer.setZoom(zoom)
            this.infiniteViewer.scrollCenter()
        }
    }
}

export default ViewerController