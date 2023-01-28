import { Request, Response } from "express";
import { loginUser, registerNewUser } from "../services/auth.service";

const loginController = async ({body}: Request, res: Response) => {
  try {
    const resLoginUser = await loginUser();
  } catch (error) {
    
  }
};

const RegisterController = async ({body}: Request, res: Response) => {
  try {
    const response = await registerNewUser(body);
    res.send(response)
  } catch (error) {
    
  }
};

export {
  loginController,
  RegisterController
};