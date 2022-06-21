import styles from './Button.module.scss'

type Props = {
  text: string
  onClick?: () => void
}

const Button: React.FC<Props> = (props) => {
  return (
    <button className={styles.button} onClick={props.onClick}>
      {props.text}
    </button>
  )
}

export default Button
