"use client"
import React from "react";
import {PluginComponent, registerPlugin} from "@data-vista/plugin";
import pluginCanvasFreely from "@data-vista/plugin-canvas-freely";
import pluginMaterialAntdCharts from "@data-vista/plugin-material-antd-charts";
import pluginMaterialApacheEcharts from "@data-vista/plugin-material-apache-echarts";
import EditorLayout from "@data-vista/ui/EditorLayout";
import ThemeColorScheme from "@data-vista/ui/ThemeColorScheme";
import EditorMaterials from "@data-vista/editor/Materials";
import ConfigMapEditor from "@data-vista/editor/ConfigMap";

[pluginMaterialAntdCharts, pluginCanvasFreely, pluginMaterialApacheEcharts, {
    id: '@data-vista/plugin-starter',
    name: 'PluginStarter',
    src: 'http://localhost:801/main.js',
    components: [
        {
            name: 'plugin-line',
            extensionPoints: 'MaterialComponent'
        }
    ]
} as any].forEach(e => registerPlugin(e));

export default function LayoutPage({searchParams}: { searchParams: { pluginId: string, layout: string } }) {
    return <>
        <EditorLayout.Header>
            <ThemeColorScheme/>
        </EditorLayout.Header>
        <EditorLayout.Component>
            <EditorMaterials/>
        </EditorLayout.Component>
        <EditorLayout.Editor>
            <PluginComponent id={searchParams.pluginId} component={searchParams.layout}/>
        </EditorLayout.Editor>
        <EditorLayout.Config>
            <ConfigMapEditor/>
        </EditorLayout.Config>
    </>;
}
