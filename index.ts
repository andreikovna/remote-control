import { mouse } from "@nut-tree/nut-js";
import { httpServer } from "./src/http_server";
import { startApp } from "./src/websocket";

const HTTP_PORT = 8181;

console.log(`Start Application on the http://localhost:${HTTP_PORT} port!`);
httpServer.listen(HTTP_PORT);

startApp();
