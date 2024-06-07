export interface User {
  id: string;
  name: string;
  role: string;
  image: string;
  age: number;
}

export interface UserForm {
  name: string;
  image: string;
  Email: string;
  age: string;
  role: string;
  isActive: boolean;
}