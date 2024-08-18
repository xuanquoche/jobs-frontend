export interface User {
  fullname?: string;
  email: string;
  password: string;
  avatar?: string;
  confirmPassword?: string;
  role: number;
}

export interface UserLoginform {
  email: string;
  password: string;
  data?: {
    access_token: string;
    refresh_token: string;
  };
}
export interface FormErrors {
  fullname?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
}

export interface Creator {
  skill?: string;
  level?: string;
  fullname?: string;
  email?: string;
  location?: string;
  avatar?: string;
  decription?: string;
  phone?: string;
}
