export interface User {
    username?: string,
    email: string,
    password: string,
    avatar?: string,
  }
  
export interface UserLoginform {
  identifier: string;
  password: string;
  jwt?: string;
}
  export interface FormErrors {
    username?: string;
    email?: string;
    password?: string;
  }
  