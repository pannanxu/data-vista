import mitt from 'mitt'

export type Events = {
    DragComponentToCanvas: any
};


class Eventbus {
    
     readonly bus = mitt<Events>(); // inferred as Emitter<Events>

}

export default Eventbus;