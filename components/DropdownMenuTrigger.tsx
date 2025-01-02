'use client';

import styles from '@components/DropdownMenuTrigger.module.scss';

import * as React from 'react';
import * as Position from '@common/position';

import DropdownMenu from '@components/DropdownMenu';
import OutsideElementEvent from '@components/detectors/OutsideElementEvent';

import { createPortal } from 'react-dom';

interface DropdownMenuTriggerProps {
  children: React.ReactElement<React.HTMLAttributes<HTMLElement>>;
  items: any;
}

function DropdownMenuTrigger({ children, items }: DropdownMenuTriggerProps) {
  const [open, setOpen] = React.useState(false);
  const [willClose, setWillClose] = React.useState(false);
  const [placement, setPlacement] = React.useState<Position.Placement>('bottom');
  const [position, setPosition] = React.useState<{ top: number; left: number }>({ top: 0, left: 0 });

  const triggerRef = React.useRef<HTMLDivElement>(null);
  const elementRef = React.useRef<HTMLDivElement>(null);

  const onClick = React.useCallback(() => setOpen(true), []);
  const onHandleFocus = React.useCallback(() => setOpen(true), []);
  const onOutsideEvent = React.useCallback(() => setOpen(false), []);
  const onClose = React.useCallback(() => setWillClose(true), []);

  React.useEffect(() => {
    if (willClose) {
      setOpen(false);
      setWillClose(false);
    }
  }, [willClose]);

  React.useEffect(() => {
    if (!open || !triggerRef.current || !elementRef.current) return;

    const updatePosition = () => {
      const { placement, position } = Position.calculate(triggerRef.current!, elementRef.current!);
      setPlacement(placement);
      setPosition(position);
    };

    updatePosition();

    const handleResizeOrScroll = () => updatePosition();
    const observer = new MutationObserver(() => updatePosition());
    observer.observe(document.body, { attributes: true, childList: true, subtree: true });

    window.addEventListener('resize', handleResizeOrScroll);
    window.addEventListener('scroll', handleResizeOrScroll, true);

    return () => {
      window.removeEventListener('resize', handleResizeOrScroll);
      window.removeEventListener('scroll', handleResizeOrScroll, true);
      observer.disconnect();
    };
  }, [open]);

  const element = open
    ? createPortal(
        <OutsideElementEvent onOutsideEvent={onOutsideEvent}>
          <DropdownMenu
            onClose={onClose}
            ref={elementRef}
            items={items}
            style={{
              position: 'absolute',
              top: `${position.top}px`,
              left: `${position.left}px`,
              zIndex: `var(--z-index-page-dropdown-menus)`,
            }}
            role="dialog"
            aria-modal="true"
          />
        </OutsideElementEvent>,
        document.body
      )
    : null;

  return (
    <div ref={triggerRef} className={styles.root} onClick={onClick} onFocus={onHandleFocus}>
      {React.cloneElement(children, {
        tabIndex: 0,
      })}
      {element}
    </div>
  );
}

export default DropdownMenuTrigger;
