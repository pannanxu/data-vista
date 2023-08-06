import {action, makeAutoObservable} from "mobx";
import Guides from "@scena/guides";
import FreelyService from "../Viewer/FreelyService";

class FreelyRulerService {
    freelyService: FreelyService

    horizontal: Guides | undefined
    vertical: Guides | undefined

    unit: number = 100

    constructor(freelyService: FreelyService) {
        this.freelyService = freelyService;
        makeAutoObservable(this, {
            init: action,
            calcUnit: action
        })
    }

    public init(hor: HTMLElement, ver: HTMLElement) {
        this.calcUnit(this.freelyService.zoom);
        if (!this.horizontal) {
            this.horizontal = new Guides(hor, {
                type: "horizontal",
                displayDragPos: true,
                useResizeObserver: true,
                dragPosFormat: (v) => `${v}px`,
                zoom: this.freelyService.zoom,
                unit: this.unit
            }).on("changeGuides", e => {
                console.log('changeGuides', e.guides);
            });
        }
        if (!this.vertical) {
            this.vertical = new Guides(ver, {
                type: "vertical",
                displayDragPos: true,
                useResizeObserver: true,
                dragPosFormat: (v) => `${v}px`,
                zoom: this.freelyService.zoom,
                unit: this.unit
            }).on("changeGuides", e => {
                console.log('changeGuides', e.guides);
            });
        }
    }

    public resize() {
        this.horizontal?.resize();
        this.vertical?.resize();
    }

    public calcUnit(zoom: number) {
        this.unit = zoom < 1
            ? Math.max(100, Math.round(50 * (1 - zoom) * 10))
            : Math.round(50 / zoom);
    }

    public onZoom(zoom: number) {
        this.calcUnit(zoom);
        this.horizontal?.setState({
            zoom: zoom,
            unit: this.unit
        })
        this.vertical?.setState({
            zoom: zoom,
            unit: this.unit
        })
    }

    public onScroll(left: number, top: number) {
        this.horizontal?.scroll(left);
        this.horizontal?.scrollGuides(top);
        this.vertical?.scroll(top);
        this.vertical?.scrollGuides(left);
    }
}

export default FreelyRulerService;