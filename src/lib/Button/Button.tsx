import type { TButtonProps } from './types';
import styles from './styles.module.css';

export const Button = (props: TButtonProps) => {
  const { variant = 'primary' } = props;
  const className = styles[variant];

  return <button className={className} {...props} />;
};
