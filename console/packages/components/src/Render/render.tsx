import React, {useEffect} from "react";
import {loadComponent} from "../Plugin";


const RenderComponent: React.FC<{
    component: React.ReactElement | string,
    config?: Record<any, any>
}> = (props) => {
    const {component, config = {}} = props;
    const [RemoteComponent, setRemoteComponent] = React.useState<React.FC<any>>();

    const isReactElement = React.isValidElement(component);

    useEffect(() => {
        if (!isReactElement) {
            loadComponent(component as string).then((res) => {
                setRemoteComponent(() => res.Error);
            }).catch(() => {
                // setRemoteComponent(<div>加载失败</div>);
            });
        }
    }, [component]);

    return isReactElement ? component : (RemoteComponent ? <RemoteComponent {...config}/> : <div>加载失败</div>);
};

export default RenderComponent;