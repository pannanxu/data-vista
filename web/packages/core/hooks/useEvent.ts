"use client"
import Eventbus, {Events} from "../eventbus/Eventbus";
import {useMemo} from "react";
import {useUnmount} from "ahooks";


const eventbus = new Eventbus();

const useEvent = <T extends keyof Events>(type: T, handler: (data: Events[T]) => void) => {

    useMemo(() => {
        eventbus.bus.on(type, handler)
    }, [])

    useUnmount(() => {
        eventbus.bus.off(type, handler)
    })
}

const publishEvent = <T extends keyof Events>(type: T, data: Events[T]) => {
    eventbus.bus.emit(type, data)
}

export {
    useEvent,
    publishEvent
};