"use client"
import Eventbus, {Events} from "../eventbus/Eventbus";
import {useEffect} from "react";


const eventbus = new Eventbus();

const useEvent = <T extends keyof Events>(type: T, handler: (data: Events[T]) => void) => {

    useEffect(() => {
        eventbus.bus.on(type, handler)
        return () => {
            eventbus.bus.off(type, handler)
        }
    }, [])

}

const publishEvent = <T extends keyof Events>(type: T, data: Events[T]) => {
    eventbus.bus.emit(type, data)
}

export {
    useEvent,
    publishEvent
};