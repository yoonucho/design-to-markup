import Image from 'next/image';
import styles from './styles.module.scss';
export interface SlideCardProps {
  children?: React.ReactNode;
  imageSrc?: string;
  imageAlt?: string;
  className?: string;
}

export const SlideCard = ({
  children,
  imageSrc,
  imageAlt = '',
  className = '',
}: SlideCardProps) => {
  // children만 있는 경우: 완전 커스텀
  if (children && !imageSrc) {
    return <div className={`${styles.card} ${className}`}>{children}</div>;
  }

  // imageSrc가 있는 경우: 기본 레이아웃 (이미지 + body)
  return (
    <div className={`${styles.card} ${className}`}>
      {imageSrc && (
        <div className={styles.imageWrapper}>
          <Image src={imageSrc} alt={imageAlt} loading='lazy' width={460} height={436} />
        </div>
      )}
      {children && <div className={styles.cardBody}>{children}</div>}
    </div>
  );
};
