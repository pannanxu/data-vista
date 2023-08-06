import FreelyService from "./Viewer/FreelyService";
import FreelyRulerService from "./Ruler/FreelyRulerService";

const freelyService = new FreelyService();
const freelyRulerService = new FreelyRulerService(freelyService);

const useFreely = () => {
    return {freelyService, freelyRulerService}
}

export {
    useFreely
}