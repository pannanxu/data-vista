export type ComponentSx = {
    // 宽
    w: number,
    // 高
    h: number,
    // x轴
    x: number,
    // y轴
    y: number,
    // 层级
    z: number,
    // 旋转角度
    r: number,
    // 缩放
    s: number[]
}

export type Component = {
    /**
     * 组件ID
     */
    id: string;
    /**
     * 插件名称（唯一ID）
     */
    pluginId: string;
    /**
     * 组件名称
     */
    component: string;
    /**
     * 控制组件轴画布中布局的相关属性
     */
    sx: ComponentSx
}