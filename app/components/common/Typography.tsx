import type { PolymorphicPropsWithoutRef } from 'react-polymorphic-types';
import classnames from 'classnames';
import * as styles from './Typography.module.scss';

export const TypographyDefaultElement = 'h2';

type TypographyTypes = 'h1' | 'h2' | 'h3';

interface TypographyOwnProps<T extends TypographyTypes> {
  type?: T;
  children: React.ReactNode;
  className?: string;
}

export type TypographyProps<
  T extends TypographyTypes,
  E extends React.ElementType = typeof TypographyDefaultElement
> = PolymorphicPropsWithoutRef<TypographyOwnProps<T>, E>;

export function Typography<
  T extends TypographyTypes = typeof TypographyDefaultElement,
  E extends React.ElementType = T
>({ as, type, children, className: externalClassName, ...extraProps }: TypographyProps<T, E>) {
  const Element: React.ElementType = as ?? type ?? TypographyDefaultElement;

  return (
    <Element {...extraProps} className={classnames(styles.typography, styles[type as string], externalClassName)}>
      {children}
    </Element>
  );
}
