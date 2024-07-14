import { User, UserLoginform } from "../types/users.type";


export const validateAuthen = (values:User) => {
    const errors: Record<string, string> = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+{}|:"<>?]).{8,}$/;
    
    if ( !values.username) {
      errors.username = "Username is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (!passwordRegex.test(values.password)) {
      errors.password = "Password must be at least 8 characters and include at least one uppercase letter, one number, and one special character";
    }
    return errors;
  };

  export const validateFormLogin = (values: UserLoginform) => {
    const errors: Record<string, string> = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  
    if (!values.identifier) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.identifier)) {
      errors.email = "Invalid email format!";
    }
  
    if (!values.password) {
      errors.password = "Password is required!";
    }
  
    return errors;
  };
