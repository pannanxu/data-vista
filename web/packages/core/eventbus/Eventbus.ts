import mitt from 'mitt'
import OnSelected from '../event/OnSelected';

export type Events = {
    DragComponentToCanvas: any,
    OnSelected: OnSelected
};

class Eventbus {

    readonly bus = mitt<Events>(); // inferred as Emitter<Events>


}

export default Eventbus;