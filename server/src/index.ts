import cors from "cors";
import express from "express";
import session from "express-session";
import http from "http";
import { Server } from "socket.io";

import { logger } from "./config/logger";
import { corsMiddleware } from "./middleware/corsMiddleware";

const app = express();
const server = http.createServer(app);

export const io = new Server(server, {
    cors: {
        origin:
            process.env.NODE_ENV == "production"
                ? process.env.CLIENT_URI_PROD
                : process.env.CLIENT_URI,
    },
});

app.use(cors(corsMiddleware));

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));

server.listen(process.env.PORT || 8080, () => {
    (async function () {
        try {
            console.log("This part of code is not avaialable in the script right now");
        } catch (error) {
            logger.error(error);
        }
    })();
    logger.info(`Server is listening on http://localhost:${8080}`);
});

