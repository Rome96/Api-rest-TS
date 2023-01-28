import { hashSync, genSaltSync, compare, hash} from "bcryptjs";

const encryptPassword = (password: string) => {
  const salt = genSaltSync(10)
  // const passwordHash = await hash(password, salt)
  return hashSync(password, salt)
};

const verifyPassword = () => {};


export {
  encryptPassword,
  verifyPassword
};