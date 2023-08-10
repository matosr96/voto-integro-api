export type PartialUser = Partial<User>;

export interface User {
  uuid: string;
  name: string;
  lastname: string;
  email: string;
  password: string;
  photo: string;
  status: string;
}
