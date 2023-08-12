class CoreEvent {
    eventName: string;

    protected constructor(eventName: string) {
        this.eventName = eventName;
    }
}

export default CoreEvent;