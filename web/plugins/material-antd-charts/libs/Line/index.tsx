"use client"
import React, {useEffect, useState, useTransition} from "react";
import {Line as AntLine} from "@ant-design/charts";

const asyncFetch = () => {
    return fetch('https://gw.alipayobjects.com/os/bmw-prod/55424a73-7cb8-4f79-b60d-3ab627ac5698.json')
        .then((response) => response.json())
        .catch((error) => {
            console.log('fetch data failed', error);
        });
};

const config: any = {
    data: [],
    xField: 'year',
    yField: 'value',
    seriesField: 'category',
    xAxis: {
        type: 'time',
    },
    yAxis: {
        label: {
            // 数值格式化为千分位
            formatter: (v: any) => `${v}`.replace(/\d{1,3}(?=(\d{3})+$)/g, (s) => `${s},`),
        },
    },
    supportCSSTransform: true
};

const Line = () => {

    const [data, setData] = useState();
    const [_, start] = useTransition()

    useEffect(() => {
        start(() => {
            asyncFetch().then(res => setData({
                ...config,
                data: res
            }))
        })
    }, []);

    // @ts-ignore
    return data ? <AntLine {...data} /> : <div>line loading...</div>;
};

export default Line