import bcrypt from 'bcrypt';
import { Response } from 'express';
import { IUser } from '../dtos';

const User = require('../models/Users.model');

const hashPassword = async (password: string) => {
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
  return hash;
};

const handleUser = async (UserData: IUser) => {
  const hashedPass = await hashPassword(UserData.password);
  await User.create({
    name: UserData.name,
    lastName: UserData.lastName,
    email: UserData.email,
    password: hashedPass,
  });
};

const createNewUser = async (UserData: IUser) => {
  const hasAlreadyUsedEmail = await User.find({ email: UserData.email }).exec();
  if (hasAlreadyUsedEmail.length) return { success: false, message: 'Email Already in use' };
  await handleUser(UserData);
  return { success: true, message: 'User successfuly created' };
};

export default createNewUser;
