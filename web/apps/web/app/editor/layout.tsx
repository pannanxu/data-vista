"use client";
import React, {useRef} from "react";
import EditorMaterials from "@data-vista/editor/Materials";
import ConfigMapEditor from "@data-vista/editor/ConfigMap";
import ThemeColorScheme from "@data-vista/ui/ThemeColorScheme";
import EditorLayout from "@data-vista/ui/EditorLayout";
import {initRegisterCoreMaterials} from "@data-vista/materials";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

initRegisterCoreMaterials()

export default function EditorPageLayout({
                                             children,
                                         }: {
    children: any;
}) {

    const canvasRef = useRef<any>()

    return (
        <EditorLayout
            header={<ThemeColorScheme/>}
            configMap={<ConfigMapEditor/>}
            components={<EditorMaterials canvasRef={canvasRef}/>}>
            <div ref={canvasRef}>
                {children}
            </div>
        </EditorLayout>
    );
}
