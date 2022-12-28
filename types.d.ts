
interface LayoutProps {
    children: React.ReactNode;
}
interface SocialProps {
  children?: React.ReactNode;
  show?: boolean;
  vertical?: boolean;
}

interface CardProps {
  children?: React.ReactNode;
  image: string;
  title: string;
  link?: string;
  body?: string;
  year?: string;
}

interface Project {   
  title: string;
  year: string;
  image: string;
  link:  string;
  body:  string;
}