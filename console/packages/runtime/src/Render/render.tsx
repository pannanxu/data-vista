import React, {useMemo} from "react";
import lazy from "./lazy.tsx";

const DynamicComponent: React.FC<{
    url: string
} & Record<any, any>> = (props) => {

    const Component = useMemo(() => {
        return lazy(props.url);
    }, [props.url])

    return <Component {...props}/>;
};

export default DynamicComponent;