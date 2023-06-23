'use client';

import './experience-dialog.scss';

import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { type PropsWithChildren, useState } from 'react';

export type ExperienceDialogProps = PropsWithChildren<{
  open?: boolean;
  onClose?: () => void;
  onCloseRedirect?: string;
}>;

export function ExperienceDialog(props: ExperienceDialogProps) {
  const { children, open: initialState, onClose, onCloseRedirect } = props;

  const [open, setOpen] = useState(initialState ?? false);

  const router = useRouter();

  const handleClosing = () => {
    setOpen(false);
    onClose?.();
    if (onCloseRedirect) {
      router.push(onCloseRedirect);
    }
  };

  const backdrop = (
    <motion.div
      className="backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={handleClosing}
    />
  );

  const content = (
    <motion.div
      className="content"
      transition={{ ease: [0.16, 1, 0.29, 0.99], duration: 0.4 }}
      initial={{ y: '2vh', opacity: 1 }}
      animate={{ y: '0', opacity: 1 }}
      exit={{ y: '2vh', opacity: 0 }}
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