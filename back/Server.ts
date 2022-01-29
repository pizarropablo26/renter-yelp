import express, { Express, Request, Response } from "express";
import path from "path";

export class Server {

  private app: Express;

  constructor(app: Express) {
    this.app = app;

    this.app.use(express.static(path.resolve("./") + "/build/front"));

    this.app.get("/", (req: Request, res: Response) => {
      res.sendFile(path.resolve("./") + "/build/front/index.html");
    });
    this.app.get("/api", (req: Request, res: Response): void => {
      res.send("You have reached the API!");
    });
  }

  public start(port: number): void {
    this.app.listen(port, () => console.log(`Server listening on port ${port}!`));
  }
}