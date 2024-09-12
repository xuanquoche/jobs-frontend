export interface User {
  fullname?: string;
  email: string;
  password: string;
  avatar?: string;
  confirmPassword?: string;
  role: {
    name: string;
  };
}

export interface UserLoginform {
  email: string;
  password: string;
  data?: {
    access_token: string;
    refresh_token: string;
    role: {
      name: string;
      _id: string;
      description: string;
    };
  };
}
export interface FormErrors {
  fullname?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
}

export interface Creator {
  skills?: string[];
  level?: string;
  fullname?: string;
  email?: string;
  address?: string;
  avatar?: string;
  description?: string;
  phone?: string;
}
