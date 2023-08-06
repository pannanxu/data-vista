import React from "react";

import {VistaBase} from "@data-vista/ui";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body>
        <VistaBase>
            {children}
        </VistaBase>
        </body>
        </html>
    );
}
