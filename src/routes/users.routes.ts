import { Router, Request, Response } from "express";

import { UserController } from "../controllers";

const UserRouter = Router();

UserRouter.post("/register", UserController.createNewUser);

UserRouter.get("/", (_req: Request, res: Response) => {
  return res.json({ success: true, message: "api is ok" });
});

export default UserRouter;
