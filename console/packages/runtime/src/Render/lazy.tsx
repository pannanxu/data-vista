import loadable from "@loadable/component";
import {loadComponent} from "../Plugin";

const lazy = (url: string) => {
    return loadable(() => {
        return loadComponent(url).then(res => res.Example)
    }, {
        fallback: <div>加载中</div>,
    })
}

export default lazy;