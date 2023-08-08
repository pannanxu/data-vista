import React from "react";
import EditorLayout from "@data-vista/ui/EditorLayout";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export default function EditorPageLayout({
                                             children,
                                         }: {
    children: any;
}) {
    return (
        <EditorLayout.Layout>
            {children}
        </EditorLayout.Layout>
    );
}
