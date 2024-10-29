import type { DetailedHTMLProps, ButtonHTMLAttributes, ReactNode, ReactElement } from 'react';

export type TButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  children: string | ReactNode | ReactElement;
};