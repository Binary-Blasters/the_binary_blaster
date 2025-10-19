export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  link: string;
  color: string;
}

export interface FormData {
  name: string;
  email: string;
  message: string;
}

export interface MailOption {
  name: string;
  email: string;
  message: string;
}
export interface ContactReqBody {
  name: string;
  email: string;
  message: string;
}
