import styles from './button.module.scss';

const Button = ({label, color = 'primary', size = 'medium', handleBtnClick}) => {
  const buttonClasses = [styles.mainButton, styles[color], styles[size]].join(' ');

  return (
    <a className={buttonClasses} onClick={() => handleBtnClick()}>
      {label}
    </a>
  )
}

export default Button