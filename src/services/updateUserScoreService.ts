import { IUser } from '../dtos/User.dto';

const User = require('../models/Users.model');

const updateUserScore = async (user: string, score: number) => {
  await User.findOne({ id: user })
    .exec()
    .then(async (userRes: IUser) => {
      const newScore = userRes.score + score;
      await User.updateOne({ id: user }, { score: newScore }).exec();
    });

  return { success: true, message: 'User score successfuly updated' };
};

export default updateUserScore;
