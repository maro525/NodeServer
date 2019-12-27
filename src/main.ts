// import { ServerAPI } from "./serverModule";
import { ExpressAPI } from "./expressModule";

class Main {
    constructor() {
        // const serverAPI = new ServerAPI();
        // serverAPI.initServer();
        const expressAPI = new ExpressAPI();
        expressAPI.init();
    }
}

const main = new Main();