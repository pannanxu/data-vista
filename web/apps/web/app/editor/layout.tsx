import React from "react";
import LayoutUI, {LayoutHeader, LayoutMain, LayoutSideNav, LayoutSidePane} from "@data-vista/ui/LayoutUI";
import EditorMaterials from "@data-vista/editor/Materials";
import ConfigMapEditor from "@data-vista/editor/ConfigMap";
import ThemeColorScheme from "@data-vista/ui/ThemeColorScheme";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export default function EditorPageLayout({
                                             children,
                                         }: {
    children: React.ReactNode;
}) {
    return (
        <LayoutUI>
            <LayoutHeader>
                Editor
                <ThemeColorScheme/>
            </LayoutHeader>
            <LayoutSideNav>
                <EditorMaterials/>
            </LayoutSideNav>
            <LayoutMain>
                {children}
            </LayoutMain>
            <LayoutSidePane>
                <ConfigMapEditor/>
            </LayoutSidePane>
        </LayoutUI>
    );
}
