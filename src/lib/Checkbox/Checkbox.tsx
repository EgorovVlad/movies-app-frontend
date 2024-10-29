import styles from './styles.module.css';
import { TChechboxProps } from './types';

export const Checkbox = (props: TChechboxProps) => {
  return (
    <label className={styles.container}>
      {props.label}
      <input type="checkbox" {...props} />
      <span className={styles.checkmark} />
    </label>
  );
};