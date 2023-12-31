import React from "react";

export type MaterialComponent<T = any> = {
    readonly name: string;
    readonly displayName: string;
    readonly icon: string;
    readonly config: any;
    readonly actions: Record<string, string>[]
    readonly events: Record<string, string>[]
    readonly component: React.FC<T>;
}