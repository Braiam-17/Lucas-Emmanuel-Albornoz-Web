export interface NavItem {
  id: string;
  label: string;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
  whatsappMessage: string;
  backgroundImage: string;
}

export interface Project {
  title: string;
  category: string;
  location: string;
  images: string[];
}

export interface FormData {
  nombre: string;
  email: string;
  telefono: string;
  mensaje: string;
}

export interface FormErrors {
  nombre?: string;
  email?: string;
  mensaje?: string;
}
