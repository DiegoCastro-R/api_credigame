import { Request, Response } from 'express';
import { createUserService } from '../services';

export const createNewUser = async (req: Request, res: Response) => {
  try {
    const { name, lastName, email, password } = req.body;
    await createUserService({
      name,
      lastName,
      email,
      password,
    }).then((response) => {
      return res.json(response);
    });
  } catch (err) {
    return res.json({ success: false, message: err });
  }
};
