import { Request, Response } from 'express';
import { createUserService, authenticateUserService } from '../services';

export const createNewUser = async (req: Request, res: Response) => {
  try {
    const { name, lastName, email, password } = req.body;
    await createUserService({
      name,
      lastName,
      email,
      password,
    }).then((response) => res.json(response));
  } catch (err) {
    return res.json({ success: false, message: err });
  }
};

export const authenticateUser = async (req: Request, res: Response) => {
  try {
    await authenticateUserService(req.body).then((response) => res.json(response));
  } catch (err) {
    return res.json({ success: false, message: err });
  }
};
