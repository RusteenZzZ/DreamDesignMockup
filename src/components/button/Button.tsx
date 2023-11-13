import { FC, useState } from "react";

import { Colors } from "../../const/colors";
import styles from "./Button.module.css";

interface ButtonProps {
  label: string,
  onClick: (arg: any) => void,
  backgroundColor: Colors,
  hoverBackgroundColor: Colors,
  labelColor: Colors,
  hoverLabelColor: Colors,

}

const Button: FC<ButtonProps> = (props) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  }

  const handleMouseLeave = () => {
    setIsHovered(false);
  }

  const buttonStyle = {
    backgroundColor: isHovered
      ? props.hoverBackgroundColor
      : props.backgroundColor,
    color: isHovered
      ? props.labelColor
      : props.hoverLabelColor,
  }

  return (
    <button
      className={styles.button}
      style={buttonStyle}
      onClick={props.onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {props.label}
    </button>
  )
}

export default Button