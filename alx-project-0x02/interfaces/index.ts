export interface User {
  id: number;
  name: string;
}

export interface CardProps {
  title: string;
  content: string;
}

export interface PostModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddPost: (title: string, content: string) => void;
}


export interface ButtonProps {
  size?: 'small' | 'medium' | 'large';
  shape?: 'rounded-sm' | 'rounded-md' | 'rounded-full';
  onClick?: () => void;
  children: React.ReactNode;
}

