export type ExtensionPoint = 'Editor' | 'MaterialComponent' | 'RuleNode'

export type Plugin = MaterialComponentType & {
    pluginId: string
    remote?: string
}

export type MaterialComponentType = {
    name: string
    component: any
    /**
     * 扩展点
     */
    extensionPoints: ExtensionPoint;
} & Record<string, any>

export type PluginDefinition = {

    /**
     * 插件名称 
     */
    project: string;

    /**
     * 组件
     */
    components: MaterialComponentType[];

}