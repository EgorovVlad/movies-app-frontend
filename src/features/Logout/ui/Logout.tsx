'use client';

import { logout } from '@/features/Logout/api/logout';
import IconLogout from '@/lib/icons/IconLogout';
import styles from './styles.module.css';

export const Logout = () => {
  return (
    <div className={styles['logout-btn']} role="button" onClick={logout}>
      <span className={styles.title}>Logout</span>
      <IconLogout className={styles.icon} />
    </div>
  );
};
