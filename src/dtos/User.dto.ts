export interface IUser {
  id?: string;
  name: string;
  lastName: string;
  email: string;
  score: number;
  password: string;
}

export interface IUserAuth {
  email: string;
  password: string;
}
