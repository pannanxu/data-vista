import {ExtensionPoint} from "core/ExtensionPoint";

export type MaterialComponentType = {
    name: string
    component: any
    configMapSchema?: Record<string, any>
}

export type PluginDefinition = {

    /**
     * 插件名称 
     */
    name: string;

    /**
     * 扩展点
     */
    extensionPoints: ExtensionPoint;

    /**
     * 组件
     */
    components: MaterialComponentType[];

}