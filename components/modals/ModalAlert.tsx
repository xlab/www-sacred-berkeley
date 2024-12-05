'use client';

import styles from '@components/modals/ModalAlert.module.scss';

import * as React from 'react';

import { useModals } from '@components/page/ModalContext';

import Button from '@components/Button';

interface ModalAlertProps {
  message: string;
}

function ModalAlert({ message }: ModalAlertProps) {
  const { close } = useModals();

  return (
    <div className={styles.root}>
      {message}
      <br />
      <br />
      <Button onClick={() => close()}>Close</Button>
    </div>
  );
}

export default ModalAlert;