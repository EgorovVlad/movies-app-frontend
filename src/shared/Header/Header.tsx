'use client';

import type { PropsWithChildren } from 'react';

import { Logout } from '@/features/Logout';
import styles from './styles.module.css';

export const Header = (props: PropsWithChildren) => {
  return (
    <header className={styles.header}>
      <Logout />
      {props.children}
    </header>
  );
};