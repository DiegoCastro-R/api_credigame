import { Request, Response } from "express";
import { createUserService } from "../services";

export const createNewUser = (req: Request, res: Response) => {
  try {
    const { name, lastName, email, password } = req.body;
    createUserService({ name, lastName, email, password });

    return res.json({ success: true, message: "User created succesfully" });
  } catch (err) {
    return res.json({ success: false, message: err });
  }
};
