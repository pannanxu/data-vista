import ConfigMapService from "./configMap/ConfigMapService";
import ConfigMapRepository from "../repository/ConfigMapRepository";
import Api from "../api/api";
import Apis from "../api/apis";
import MaterialService from "./material/MaterialService";
import ComponentService from "./component/ComponentService";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || '/';

class CoreService {

    readonly api = new Api(baseUrl);
    readonly apis: Apis = new Apis(this.api);
    readonly configMapService: ConfigMapService;
    readonly materialService: MaterialService;
    readonly componentService: ComponentService;

    constructor() {
        this.configMapService = new ConfigMapService(new ConfigMapRepository(this.apis))
        this.materialService = new MaterialService()
        this.componentService = new ComponentService()
    }
}

export default CoreService;
