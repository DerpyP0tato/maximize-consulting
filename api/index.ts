import express, { type Request, Response } from "express";
import { registerRoutes } from "../server/routes";
import { createServer } from "http";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const server = createServer(app);

// Use a promise to ensure routes are registered before handling requests
const routesRegistered = registerRoutes(server, app);

export default async function handler(req: Request, res: Response) {
    await routesRegistered;
    app(req, res);
}
