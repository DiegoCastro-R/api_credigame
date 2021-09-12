import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { config } from '../configs/jwtConfig';
import { IUser, IUserAuth } from '../dtos';

const User = require('../models/Users.model');

const authenticateUser = async (UserData: IUserAuth) => {
  const SelectedUser: IUser = await User.findOne({ email: UserData.email }).exec();
  if (!SelectedUser) return { success: false, message: 'User not Found' };
  const passwordMatch = await bcrypt.compare(UserData.password, SelectedUser.password);
  if (!passwordMatch) return { success: false, message: 'User Email/Password does not match.' };
  const { id } = SelectedUser;
  const token = jwt.sign({ id }, config.secrect, {
    expiresIn: config.timeout,
  });
  return { success: true, user: { name: SelectedUser.name, email: SelectedUser.email }, token };
};

export default authenticateUser;
