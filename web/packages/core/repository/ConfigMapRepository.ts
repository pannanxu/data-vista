import Apis from "../api/apis";

class ConfigMapRepository {

    private apis: Apis

    constructor(apis: Apis) {
        this.apis = apis;
    }
}

export default ConfigMapRepository;