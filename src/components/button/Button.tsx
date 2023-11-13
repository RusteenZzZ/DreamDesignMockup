import { FC } from "react";

import { Colors } from "../../const/colors";
import styles from "./Button.module.css";

interface ButtonProps {
  label: string,
  onClick: (arg: any) => void,
  backgroundColor: Colors,
  labelColor: Colors,
}

const Button: FC<ButtonProps> = (props) => {

  const buttonStyle = {
    backgroundColor: props.backgroundColor,
    color: props.labelColor,
  }

  return (
    <button
      className={styles.button}
      style={buttonStyle}
      onClick={props.onClick}
    >
      {props.label}
    </button>
  )
}

export default Button