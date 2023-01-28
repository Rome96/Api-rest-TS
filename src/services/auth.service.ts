import UserModel from "../models/user.model";
import { Auth } from "../../src/interfaces/auth.interface"
import { User } from "../interfaces/user.interface";
import { encryptPassword } from "../utils/passwordHandler";

const loginUser = async () => {};

const registerNewUser = async (Auth: User) => {
  const checkEmail = await UserModel.findOne({email: Auth.email});
  if (checkEmail) return "ALLREADY USER";

  const passwordEncrypted = encryptPassword(Auth.password)
  const credentialUser = {
    name: Auth.name,
    email: Auth.email,
    password: passwordEncrypted
  };
  return await UserModel.create(credentialUser);
};

export {
  loginUser,
  registerNewUser
};