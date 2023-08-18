import classNames from 'classnames';
import * as styles from './ContextMenu.module.scss';
import React, { useEffect, useRef } from 'react';
import { useCachedState } from '@rain-cafe/react-utils';

export type ContextMenuProps = {
  opened?: boolean;
  target: React.RefObject<HTMLElement>;
};

export function ContextMenu({ opened: externallyOpened = false, target }: ContextMenuProps) {
  const [opened, setOpened] = useCachedState(() => externallyOpened, [externallyOpened]);

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!target.current) return;

    const listener = (event: MouseEvent) => {
      event.preventDefault();
      setOpened(true);
    };

    target.current.addEventListener('contextmenu', listener);

    return () => {
      if (!target.current) return;

      target.current.removeEventListener('contextmenu', listener);
    };
  }, [target]);

  useEffect(() => {
    if (!opened) return;

    const listener = (event: MouseEvent) => {
      if (event.composedPath().includes(ref.current as any)) return;

      setOpened(false);
    };

    // Wait for the next frame to prevent this from instantly triggering
    requestAnimationFrame(() => {
      document.addEventListener('click', listener, {
        passive: true,
      });

      document.addEventListener('contextmenu', listener, {
        passive: true,
      });
    });

    return () => {
      document.removeEventListener('click', listener);
      document.removeEventListener('contextmenu', listener);
    };
  }, [ref, opened]);

  return (
    <div className={classNames(styles.menu, opened && styles.opened)} ref={ref}>
      Context
    </div>
  );
}
