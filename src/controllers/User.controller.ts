import { Request, Response } from 'express';
import {
  createUserService,
  authenticateUserService,
  updateUserScoreService,
  rankingUserService,
} from '../services';

export const createNewUser = async (req: Request, res: Response) => {
  try {
    const { name, lastName, email, password } = req.body;
    await createUserService({
      name,
      lastName,
      email,
      password,
      score: 0,
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

export const updateUserScore = async (req: Request, res: Response) => {
  try {
    const { score } = req.body;
    // @ts-ignore
    await updateUserScoreService(req.user.id, score).then((response) => res.json(response));
  } catch (err) {
    return res.json({ success: false, message: err });
  }
};

export const usersRanking = async (req: Request, res: Response) => {
  try {
    await rankingUserService().then((response) => res.json(response));
  } catch (err) {
    return res.json({ success: false, message: err });
  }
};
