import { FC, useState } from "react";

import { Colors } from "../../const/colors";
import { Size } from "../../const/size";
import styles from "./Button.module.css";

interface ButtonProps {
  size: Size,
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

  let fontSize;
  let padding;
  switch (props.size) {
    case Size.small:
      fontSize = "small";
      padding = "5px 10px 5px 10px"
      break;
    case Size.medium:
      fontSize = "medium";
      padding = "8px 16px 8px 16px"
      break;
    case Size.large:
      fontSize = "large";
      padding = "10px 20px 10px 20px";
      break;
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
    fontSize,
    padding,
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