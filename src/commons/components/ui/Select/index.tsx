import styles from '@/commons/components/ui/Select/styles.module.scss';
import type { SelectOption } from '@/commons/constants/types';
import clsx from 'clsx';
import {
  ChangeEvent,
  FocusEvent,
  forwardRef,
  MouseEvent,
  SelectHTMLAttributes,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

type SelectVariant = 'primary' | 'secondary' | 'tertiary';
type SelectSize = 'small' | 'medium' | 'large';

export interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  options: SelectOption[];
  iconSrc?: string;
  wrapperClassName?: string;
  variant?: SelectVariant;
  size?: SelectSize;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      options,
      iconSrc,
      wrapperClassName,
      className,
      variant = 'primary',
      size = 'medium',
      ...rest
    },
    ref,
  ) => {
    const { value, defaultValue, onChange, onFocus, onBlur, onMouseDown, ...nativeProps } = rest;
    const defaultOptionValue = options[0]?.value ?? '';
    const initialValue = value ?? defaultValue ?? defaultOptionValue ?? '';
    const [internalValue, setInternalValue] = useState(initialValue);
    const [isFieldActive, setIsFieldActive] = useState(false);
    const wrapperRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      if (value !== undefined) {
        setInternalValue(value);
      }
    }, [value]);

    const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
      if (value === undefined) {
        setInternalValue(event.target.value);
      }

      setIsFieldActive(false);
      onChange?.(event);
      event.target.blur();
      wrapperRef.current?.focus();
    };

    const handleFocus = (event: FocusEvent<HTMLSelectElement>) => {
      setIsFieldActive(true);
      onFocus?.(event);
    };

    const handleBlur = (event: FocusEvent<HTMLSelectElement>) => {
      setIsFieldActive(false);
      onBlur?.(event);
    };

    const currentValue = value ?? internalValue;
    const selectedLabel = useMemo(() => {
      const matched = options.find((option) => option.value === currentValue);
      const fallback = options.find((option) => option.value === defaultValue) ?? options[0];
      return matched?.label ?? fallback?.label ?? '';
    }, [currentValue, defaultValue, options]);

    const handleMouseDown = (event: MouseEvent<HTMLSelectElement>) => {
      setIsFieldActive(true);
      onMouseDown?.(event);
    };

    const selectProps: SelectHTMLAttributes<HTMLSelectElement> = {
      ...nativeProps,
      onChange: handleChange,
      onFocus: handleFocus,
      onBlur: handleBlur,
      onMouseDown: handleMouseDown,
    };

    if (value !== undefined) {
      selectProps.value = value;
    } else if (defaultValue !== undefined) {
      selectProps.defaultValue = defaultValue;
    } else if (initialValue) {
      selectProps.defaultValue = initialValue;
    }

    const variantClass = styles[`variant-${variant}`] ?? styles['variant-primary'];
    const sizeClass = styles[`size-${size}`] ?? styles['size-medium'];
    const isDisabled = Boolean(rest.disabled);
    const hasIcon = Boolean(iconSrc);

    return (
      <div
        ref={wrapperRef}
        className={clsx(
          styles.wrapper,
          variantClass,
          sizeClass,
          {
            [styles.disabled]: isDisabled,
            [styles.noIcon]: !hasIcon,
          },
          wrapperClassName,
        )}
        data-open={isFieldActive || undefined}
        tabIndex={-1}
      >
        {iconSrc ? (
          <span className={styles.icon} aria-hidden='true'>
            <img src={iconSrc} alt='' role='presentation' />
          </span>
        ) : null}
        <div className={styles.field}>
          <span className={styles.measure} aria-hidden='true'>
            {selectedLabel || '\u00A0'}
          </span>
          <select ref={ref} className={clsx(styles.select, className)} {...selectProps}>
            {options.map(({ value: optionValue, label }) => (
              <option key={optionValue} value={optionValue}>
                {label}
              </option>
            ))}
          </select>
        </div>
        <span className={styles.arrow} aria-hidden='true'>
          <img src='/icons/arrow-down-icon.svg' alt='' role='presentation' />
        </span>
      </div>
    );
  },
);

Select.displayName = 'Select';
