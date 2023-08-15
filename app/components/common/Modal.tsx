import { ReactNode } from 'react';
import * as styles from './Modal.module.scss';

export type ModalOptions = {
  children?: ReactNode;
  opened?: boolean;
};

export function Modal({ children, opened }: ModalOptions) {
  if (!opened) return null;

  return (
    <div className={styles.container}>
      <div className={styles.modal}>{children}</div>
    </div>
  );
}
