import Api from "./api";

class Apis {
    
    api: Api

    constructor(api: Api) {
        this.api = api;
    }

    public getConfigMap(id: string) {
        return this.api.get(`/api/config/${id}`)
    }
}

export default Apis;