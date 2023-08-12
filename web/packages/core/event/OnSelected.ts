import CoreEvent from "./CoreEvent";

/**
 * 画布中选中组件
 */
class OnSelected extends CoreEvent {
    /**
     * 组件ID
     */
    components: string[] = []

    constructor(components: string[]) {
        super('OnSelected');
        this.components = components;
    }

}

export default OnSelected