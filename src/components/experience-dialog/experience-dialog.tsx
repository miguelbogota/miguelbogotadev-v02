'use client';

import './experience-dialog.scss';

import { useEventListener } from '@app-hooks/use-event-listener/use-event-listener';
import { AnimatePresence, motion } from 'framer-motion';
import { type PropsWithChildren, useEffect, useState } from 'react';

export type ExperienceDialogProps = PropsWithChildren<{
  open?: boolean;
  onClose?: () => void;
  onCloseRedirect?: string;
  title?: string;
  allowEscape?: boolean;
}>;

export function ExperienceDialog(props: ExperienceDialogProps) {
  const {
    children,
    open: initialState,
    onClose,
    onCloseRedirect,
    title,
    allowEscape = true,
  } = props;

  const [open, setOpen] = useState(initialState ?? false);

  useEffect(() => {
    if (title && document.title !== title) {
      document.title = title;
      window.history.replaceState({}, title, window.location.pathname);
    }
  }, []);

  const handleClosing = () => {
    setOpen(false);
    onClose?.();
    if (onCloseRedirect) {
      window.history.pushState({}, onCloseRedirect, onCloseRedirect);
      document.title = 'Miguel Bogota';
    }
  };

  useEventListener('keydown', (event) => {
    if (allowEscape && event.key === 'Escape') {
      handleClosing();
    }
  });

  const backdrop = (
    <motion.div
      className="backdrop"
      transition={{
        ease: 'ease',
        duration: 0.1,
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={handleClosing}
    />
  );

  const content = (
    <motion.div
      className="content"
      transition={{
        ease: [0.16, 1, 0.29, 0.99],
        opacity: {
          duration: 0.01,
        },
        y: {
          duration: 0.25,
        },
      }}
      initial={{ y: '1.7vh', opacity: 1 }}
      animate={{ y: '0', opacity: 1 }}
      exit={{ y: '1.7vh', opacity: 0 }}
    >
      {children}
    </motion.div>
  );

  return (
    <AnimatePresence mode="wait">
      {open && (
        <dialog open={open} className="experience-dialog">
          {backdrop}
          {content}
        </dialog>
      )}
    </AnimatePresence>
  );
}
