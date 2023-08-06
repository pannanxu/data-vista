import {makeAutoObservable} from "mobx";
import InfiniteViewer from "infinite-viewer";

export type FreelyScrollType = {
    scrollTop: number,
    scrollLeft: number,
}
export type FreelyWindowType = {
    width: number,
    height: number,
}

const createInfiniteViewer = (freelyService: FreelyService,
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
        freelyService.setZoom(e.zoom)
    })
    infiniteViewer.on("scroll", (e) => {
        freelyService.setScroll({
            scrollLeft: e.scrollLeft,
            scrollTop: e.scrollTop
        })
    });
    return infiniteViewer;
}

class FreelyService {

    window: FreelyWindowType = {
        width: 1280,
        height: 1080
    }
    zoom: number = 1.0
    scroll: FreelyScrollType = {
        scrollTop: 0,
        scrollLeft: 0
    }
    infiniteViewer: InfiniteViewer | undefined
    viewer: HTMLDivElement | undefined
    viewport: HTMLDivElement | undefined

    constructor() {
        makeAutoObservable(this);
    }

    public setZoom(zoom: number) {
        this.zoom = zoom;
    }

    public setScroll(scroll: FreelyScrollType) {
        this.scroll = scroll
    }

    public setWindow(window: FreelyWindowType) {
        this.window = window
        if (this.viewport) {
            this.viewport.style.width = `${this.window.width}px`
            this.viewport.style.height = `${this.window.height}px`
        }
    }

    public init(viewer: HTMLDivElement, viewport: HTMLDivElement) {
        if (!this.infiniteViewer) {
            this.viewer = viewer;
            this.viewport = viewport;

            // 初始化时将画布缩放到可视区域
            const containerWidth = this.viewer.clientWidth;
            const viewportWidth = this.window.width;
            const zoom = containerWidth / viewportWidth;
            this.setZoom(zoom)

            this.infiniteViewer = createInfiniteViewer(this, viewer, viewport)
            this.infiniteViewer.setZoom(zoom)
            this.infiniteViewer.scrollCenter()
        }
    }
}

export default FreelyService;