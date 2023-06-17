import './container.scss';

import clsx from 'clsx';
import {
  type ComponentPropsWithRef,
  createElement,
  forwardRef,
  type ReactHTML,
  type Ref,
} from 'react';

/** Props for the Container component. */
export type ContainerProps = BaseProps & OmitProps;
type OmitProps = Omit<ComponentPropsWithRef<'div'>, keyof BaseProps>;
type BaseProps = {
  as?: keyof ReactHTML;
};

/** Container component. */
export const Container = forwardRef(function ContainerRoot(
  inProps: ContainerProps,
  ref: Ref<HTMLDivElement>,
) {
  const { children, className, as = 'div', ...props } = inProps;

  const classes = clsx('container', className);

  return createElement(
    as,
    {
      ref,
      className: classes,
      ...props,
    },
    children,
  );
});
