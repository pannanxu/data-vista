import ViewerController from "./viewer.controller";
import RulerController from "./ruler.controller";
import {autorun} from "mobx";
import MoveController from "./move.controller";
import {useMount} from "ahooks";

class FreelyController {

    readonly viewer: ViewerController;
    readonly horizontalRuler: RulerController;
    readonly verticalRuler: RulerController;
    readonly move: MoveController;

    constructor() {
        this.viewer = new ViewerController();
        this.horizontalRuler = new RulerController('horizontal');
        this.verticalRuler = new RulerController('vertical');
        this.move = new MoveController()
    }

    public handleResize() {
        this.horizontalRuler.resize();
        this.verticalRuler.resize();
    }

    public createRuler(horizontal: HTMLDivElement, vertical: HTMLDivElement) {
        const zoom = this.viewer.zoom;
        this.horizontalRuler.init(horizontal, zoom);
        this.verticalRuler.init(vertical, zoom);

        const onZoomAutorun = autorun(() => {
            const _zoom = this.viewer.zoom;
            this.horizontalRuler.onZoom(_zoom);
            this.verticalRuler.onZoom(_zoom);
        })

        const onScrollAutorun = autorun(() => {
            const scroll = this.viewer.scroll;
            this.horizontalRuler.onScroll(scroll.scrollLeft, scroll.scrollTop)
            this.verticalRuler.onScroll(scroll.scrollLeft, scroll.scrollTop)
        })
        return () => {
            onZoomAutorun()
            onScrollAutorun()
        }
    }
}

export default FreelyController;