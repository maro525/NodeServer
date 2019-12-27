import * as http from "http";

export class ServerAPI {
    public initServer(): void {
        const server: http.Server = http.createServer(
            (request: http.IncomingMessage, response: http.ServerResponse) => 
            this.requestHandler(request, response));
        server.listen('5000');
    }

    private requestHandler(request: http.IncomingMessage, response: http.ServerResponse): void {
        response.end('Hello! Node.js with Typescript');
    }
}