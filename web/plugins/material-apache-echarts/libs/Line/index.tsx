"use client"
import {useEffect, useRef, useTransition} from "react";

import * as echarts from 'echarts/core';
import {GridComponent} from 'echarts/components';
import {LineChart} from 'echarts/charts';
import {UniversalTransition} from 'echarts/features';
import {CanvasRenderer} from 'echarts/renderers';

echarts.use([GridComponent, LineChart, CanvasRenderer, UniversalTransition]);

const Line = () => {

    const lineRef = useRef(null)
    const [_, startTransition] = useTransition()

    const init = () => {
        if (lineRef.current) {
            const myChart = echarts.init(lineRef.current);
            myChart.setOption({
                xAxis: {
                    type: 'category',
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        data: [150, 230, 224, 218, 135, 147, 260],
                        type: 'line'
                    }
                ]
            });
        }
    }

    useEffect(() => {
        startTransition(() => init())
    }, []);

    return <div style={{
        width: 300,
        height: 300
    }} ref={lineRef}>line loading...</div>;
};

export default Line