declare module 'react-scroll' {
  interface ScrollProps {
    to: string;
    smooth?: boolean;
    duration?: number;
    className?: string;
    children: React.ReactNode;
  }

  export const Link: React.FC<ScrollProps>;
}