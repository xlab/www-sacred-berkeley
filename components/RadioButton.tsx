import styles from '@components/RadioButton.module.scss';

import * as React from 'react';
import * as Utilities from '@common/utilities';

interface RadioButtonProps {
  style?: React.CSSProperties;
  name: string;
  value: string;
  selected?: boolean;
  onSelect?: (value: string) => void;
  children?: React.ReactNode;
}

const RadioButton: React.FC<RadioButtonProps> = ({ style, name, value, selected = false, onSelect, children }) => {
  const radioId = `${name}-${value}-radio`;

  const [isFocused, setIsFocused] = React.useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    switch (event.key) {
      case 'Enter':
        event.preventDefault();
        if (onSelect) {
          onSelect(value);
        }
        break;
      case 'ArrowUp':
      case 'ArrowLeft': {
        event.preventDefault();
        const previousFocusable = Utilities.findNextFocusable(document.activeElement, 'previous');
        previousFocusable?.focus();
        break;
      }
      // TODO(jimmylee)
      // I do not want to add Tab here, but I had to.
      case 'Tab':
      case 'ArrowDown':
      case 'ArrowRight': {
        event.preventDefault();
        const nextFocusable = Utilities.findNextFocusable(document.activeElement, 'next');
        nextFocusable?.focus();
        break;
      }
      default:
        break;
    }
  };

  return (
    <div
      className={Utilities.classNames(styles.section, {
        [styles.focused]: isFocused,
      })}
      style={style}
    >
      <input className={styles.input} id={radioId} type="radio" name={name} value={value} checked={selected} onFocus={handleFocus} onBlur={handleBlur} onKeyDown={handleKeyDown} />
      <div className={styles.relative}>
        <label className={styles.figure} htmlFor={radioId}>
          <span aria-hidden="true">{selected ? '◉' : '◯'}</span>
        </label>
      </div>
      <div className={styles.right}>{children}</div>
    </div>
  );
};

export default RadioButton;
