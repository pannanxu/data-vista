

class Api {
    
    baseUrl: string


    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }
    
    public get(url: string) {
        return fetch(url);
    }

}


export default Api;