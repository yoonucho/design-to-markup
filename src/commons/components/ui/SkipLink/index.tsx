import { ComponentPropsWithoutRef } from 'react';

type AnchorProps = ComponentPropsWithoutRef<'a'>;

export interface SkipLinkProps extends AnchorProps {
  /**
   * 건너뛸 대상 요소의 id. # 없이 넘겨도 자동으로 처리됩니다.
   * @default 'main-content'
   */
  targetId?: string;
}

export function SkipLink({
  targetId = 'main-content',
  children = 'Skip to main content',
  className,
  ...rest
}: SkipLinkProps) {
  const hrefValue = targetId.startsWith('#') ? targetId : `#${targetId}`;
  const combinedClassName = ['skip-link', className].filter(Boolean).join(' ');

  return (
    <a href={hrefValue} className={combinedClassName} {...rest}>
      {children}
    </a>
  );
}
