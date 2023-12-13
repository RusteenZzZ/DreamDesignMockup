import { FC, useState } from "react";

import DeleteIcon from "../../assets/img/DeleteIcon.png";
import LockIcon from "../../assets/img/LockIcon.png";
import RandomizeIcon from "../../assets/img/RandomizeIcon.png";
import styles from "./ItemCard.module.css";

interface ItemCardsProps {
  label: string;
  deleteItemCard: () => any;
}

const ItemCard: FC<ItemCardsProps> = ({
  label,
  deleteItemCard
}) => {
  const [imagePath, setImagePath] = useState<string>("");

  const chooseRandomImage = () => {
    const randomValue = Math.floor(Math.random() * 1685) + 1;
    setImagePath("./../ai/" + randomValue + ".png");
  }

  return (
    <div className={styles.itemCard}>
      <div className={styles.buttons}>
        <div className={`${styles.button} ${styles.deleteButton}`} onClick={deleteItemCard}>
          <img width={18} src={DeleteIcon} />
        </div>
        <div className={`${styles.button} ${styles.lockButton}`}>
          <img width={18} src={LockIcon} />
        </div>
        <div className={`${styles.button} ${styles.randomizeButton}`}>
          <img width={18} src={RandomizeIcon} />
        </div>
      </div>
      {
        imagePath !== ""
          ? <img src={imagePath} />
          : <></>
      }
    </div>
  )
}


export default ItemCard