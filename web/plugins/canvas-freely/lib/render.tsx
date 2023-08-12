"use client";
import Move from "./move";
import React, {useState} from "react";
import {useMount} from "ahooks";
import {nanoid} from "nanoid";
import {PluginComponent} from "@data-vista/plugin";


const Render = () => {
    const [data, setData] = useState<string[]>([]);
    const [time, setTime] = useState<number>()

    useMount(() => {
        setData(Array.from({length: 1}).map(e => nanoid()))
    })

    return <>
        <Move>
            {time},
            <PluginComponent id={'@data-vista/plugin-starter'}
                             component={'plugin-line'}
                             time={time}
                             changeTime={setTime}/>
        </Move>
        <Move>
            <PluginComponent id={'@data-vista/material-antd-charts'}
                             component={'line'}/>
        </Move>
        <Move key={'material-apache-echarts-line'}>
            <PluginComponent id={'@data-vista/material-apache-echarts'}
                             component={'line'}/>
        </Move>
        {
            data?.map((id) => {
                return <Move key={id}>
                    Hello {id}
                </Move>
            })
        }
    </>
}

export default Render;