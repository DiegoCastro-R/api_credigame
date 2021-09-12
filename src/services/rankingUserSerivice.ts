import { IUser } from '../dtos/User.dto';

const User = require('../models/Users.model');

const rankingUser = async () => {
  const resData = await User.find()
    .select('name lastName score -_id')
    .limit(10)
    .sort([['score', -1]])
    .exec()
    .then(async (userRes: IUser[]) => ({ success: true, data: userRes }));
  return resData;
};

export default rankingUser;
