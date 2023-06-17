import './link.scss';

import clsx from 'clsx';
import { type ComponentPropsWithRef, forwardRef, type Ref } from 'react';

/** Props for the Link component. */
export type LinkProps = ComponentPropsWithRef<'a'>;

/** Link component. */
export const Link = forwardRef(function ContainerRoot(
  inProps: LinkProps,
  ref: Ref<HTMLAnchorElement>,
) {
  const { children, className, ...props } = inProps;

  const classes = clsx('link', className);

  return (
    <a ref={ref} className={classes} {...props}>
      {children}
    </a>
  );
});
