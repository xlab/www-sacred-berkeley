'use client';

import styles from '@components/modals/ModalAlert.module.scss';

import * as React from 'react';
import * as Utilities from '@common/utilities';

import { useModals } from '@components/page/ModalContext';

import Button from '@components/Button';

interface ModalAlertProps {
  buttonText?: string | any;
  message: string;
}

function ModalAlert({ message, buttonText }: ModalAlertProps) {
  const { close } = useModals();

  return (
    <div className={styles.root}>
      {message}
      <br />
      <br />
      <Button onClick={() => close()}>
        {Utilities.isEmpty(buttonText) ? 'Close' : buttonText}
      </Button>
    </div>
  );
}

export default ModalAlert;