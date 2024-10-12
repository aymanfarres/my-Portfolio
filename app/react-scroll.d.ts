declare module 'react-scroll' {
    import { FC, ReactNode } from 'react';
  
    export interface LinkProps {
      to: string;
      smooth?: boolean;
      duration?: number;
      onClick?: () => void;
      className?: string;
      children: ReactNode; // children prop
    }
  
    export const Link: FC<LinkProps>;
  }
  