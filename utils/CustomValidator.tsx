
const isEmpty = (value: string) => {
  if (value == "") return "field required";
  return "";
};
const isEmail = (value: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const check = emailRegex.test(value);
  if (!check) return "invalid email";
  return "";
};
const isMin = (value: string) => {
  if (value.length < 8) return "min of 8 characters";
  return "";
};

interface SUser {
  f_name: string;
  l_name: string;
  email: string;
  password: string;
}

interface LUser {
  email: string;
  password: string;
}

const signup_validator = (user: SUser) => {
  let err: SUser = { f_name: "", l_name: "", email: "", password: "" };
  let status = false;

  if (isEmpty(user.f_name)){ 
    err.f_name = isEmpty(user.f_name);
    status = true;
  }
  if (isEmpty(user.l_name)){ 
    err.l_name = isEmpty(user.l_name);
    status = true;
  }
  if (isEmail(user.email)){ 
    err.email = isEmail(user.email);
    status = true;
  }
  if (isMin(user.password)){
    err.password = isMin(user.password);
    status = true;
  }
  
  return {status, err};
};



const login_validator = (user: LUser) => {
  let err: LUser = { email: "", password: "" };
  let status = false;

  if (isEmail(user.email)){ 
    err.email = isEmail(user.email);
    status = true;
  }
  if (isMin(user.password)){
    err.password = isMin(user.password);
    status = true;
  }
  
  return {status, err};
};

export { signup_validator, login_validator };
