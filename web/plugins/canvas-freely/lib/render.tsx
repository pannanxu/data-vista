"use client";
import Move from "./move";
import React from "react";
import {PluginComponent, useCore} from "@data-vista/plugin";
import {observer} from "mobx-react-lite";
import {Component} from "@data-vista/core/types";
import {toJS} from "mobx";


const ComponentItem = observer(({id}: {
    id: string
}) => {
    const {componentService} = useCore();
    const component = componentService.getComponent(id);
    return <Move dataset={{id: component.id}} sx={component.sx}>
        <PluginComponent id={component.pluginId} component={component.component}/>
    </Move>
})

const Components = observer(({getComponents}: { getComponents: () => Component[] }) => {
    const components = getComponents();
    return <>
        {
            components.map(component => {
                return <ComponentItem key={component.id} id={component.id}/>
            })
        }
    </>
})

const Render = () => {
    const {componentService} = useCore()
    return <>
        <Components getComponents={() => toJS(componentService.all)}/>
    </>
}

export default Render;