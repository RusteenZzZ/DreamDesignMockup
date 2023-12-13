import { FC } from "react";

import { Directions } from "../../const/directions";
import LeftIcon from "../../assets/img/LeftArrowIcon.png";
import RightIcon from "../../assets/img/RightArrowIcon.png";
import styles from "./DirectionButton.module.css";

interface DirectionButtonProps {
  direction: Directions,
  onClickHandler: () => void,
}

const DirectionButton: FC<DirectionButtonProps> = ({ direction, onClickHandler }) => {
  const directionIcon =
    direction === Directions.LEFT
      ? LeftIcon
      : RightIcon;

  return (
    <div className={styles.directionButton} onClick={onClickHandler}>
      <img width={25} src={directionIcon} />
    </div>
  )
}

export default DirectionButton