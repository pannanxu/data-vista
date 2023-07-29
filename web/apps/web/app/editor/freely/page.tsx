import EditorLayout from "@data-vista/editor/Layout";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: '自由编辑',
}

export default function FreelyEditorPage() {
    return (
        <EditorLayout layout={"freely"}/>
    );
}
