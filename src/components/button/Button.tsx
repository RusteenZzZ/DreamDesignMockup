import { FC, useState } from "react";

import { Colors } from "../../const/colors";
import styles from "./Button.module.css";

interface ButtonProps {
  label: string,
  onClick: (arg: any) => void,
  isTransparent: boolean,
  color: Colors,
  hoverColor: Colors,
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
    backgroundColor: props.isTransparent
      ? Colors.WHITE
      : isHovered
        ? props.hoverColor
        : props.color,
    borderColor: isHovered
      ? props.hoverColor
      : props.color,
    color: isHovered
      ? props.hoverLabelColor
      : props.labelColor,
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