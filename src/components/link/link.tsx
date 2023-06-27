import './link.scss';

import clsx from 'clsx';
import { motion } from 'framer-motion';
import { type ComponentPropsWithRef, forwardRef, type Ref } from 'react';

/** Props for the Link component. */
export type LinkProps = ComponentPropsWithRef<'a'> & {
  active?: boolean;
};

const loadRef = {
  loaded: false,
  initialAnimation: {
    initial: { x: '-50%', width: '0px' },
    animate: { x: '0%', width: '100%' },
    exit: { x: '50%', width: '0px' },
  },
};

/** Link component. */
export const Link = forwardRef(function ContainerRoot(
  inProps: LinkProps,
  ref: Ref<HTMLAnchorElement>,
) {
  const { children, className, href, active, ...props } = inProps;

  const classes = clsx('link', className);

  return (
    <a
      ref={ref}
      className={classes}
      data-to-scrollspy-id={href?.substring(1)}
      href={href}
      {...props}
    >
      {children}
      {active && (
        <motion.span
          className="underline"
          layoutId="underline"
          // This makes the initial animation different from the movement animation.
          onAnimationComplete={() => {
            if (!loadRef.loaded) {
              loadRef.loaded = true;
            }
          }}
          {...(loadRef.loaded ? {} : loadRef.initialAnimation)}
        />
      )}
    </a>
  );
});
