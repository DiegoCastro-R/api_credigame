export interface IUser {
  id?: string;
  name: string;
  lastName: string;
  email: string;
  password: string;
}

export interface IUserAuth {
  email: string;
  password: string;
}
