export type ExtensionPoint = 'Editor' | 'MaterialComponent' | 'RuleNode'

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
     * 插件名称（唯一ID）
     */
    id: string;
    /**
     * 插件名称（字母、数字、下划线组成）
     */
    name: string
    /**
     * 组件
     */
    components: MaterialComponentType[];

}

export type PluginResource = PluginDefinition & {

    src?: string
}