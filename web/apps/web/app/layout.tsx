import React from "react";

import {VistaBase} from "@data-vista/ui";
import {CoreServiceProvider} from "@data-vista/core";
import {initLoadCoreMaterials} from "@data-vista/materials";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

initLoadCoreMaterials()

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body>
        <CoreServiceProvider>
            <VistaBase>
                {children}
            </VistaBase>
        </CoreServiceProvider>
        </body>
        </html>
    );
}
