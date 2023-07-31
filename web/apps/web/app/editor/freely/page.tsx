import EditorLayout from "@data-vista/editor/Layout";
import {Metadata} from "next";
import {usePluginStore} from "@data-vista/core/plugin/pluginStore";

export const metadata: Metadata = {
    title: '自由编辑',
}

export default function FreelyEditorPage() {

    const {plugins} = usePluginStore();

    console.log('plugins', plugins)

    return (
        <EditorLayout layout={"freely"}/>
    );
}
