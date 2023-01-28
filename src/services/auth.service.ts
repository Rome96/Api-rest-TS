import UserModel from "../models/user.model";
import { Auth } from "../../src/interfaces/auth.interface"
import { User } from "../interfaces/user.interface";

const loginUser = async () => {};

const registerNewUser = async (Auth: User) => {
  const checkEmail = await UserModel.findOne({email: Auth.email});
  if (checkEmail) return "ALLREADY USER";
  const credentialUser = {
    name: Auth.name,
    email: Auth.email,
    password: Auth.password
  };
  return await UserModel.create(credentialUser);
};

export {
  loginUser,
  registerNewUser
};