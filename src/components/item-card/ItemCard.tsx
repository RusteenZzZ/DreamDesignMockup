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
  const [num, setNum] = useState<number>(0);
  const [image, setImage] = useState<string | null>(null);

  const chooseRandomImage = () => {
    const randomValue = Math.floor(Math.random() * 1685) + 1;
    setNum(randomValue);
  }

  const loadImage = async () => {
    try {
      const dynamicImport = await import("./../../ai/img/" + num + ".jpg");
      setImage(dynamicImport.default);
    } catch (error) {
      console.error('Error loading image:', error);
    }
  };

  if (num !== 0)
    loadImage();

  return (
    <div className={styles.itemCard}>
      <div className={styles.buttons}>
        <div className={`${styles.button} ${styles.deleteButton}`} onClick={deleteItemCard}>
          <img width={18} src={DeleteIcon} />
        </div>
        <div className={`${styles.button} ${styles.lockButton}`}>
          <img width={18} src={LockIcon} />
        </div>
        <div className={`${styles.button} ${styles.randomizeButton}`} onClick={chooseRandomImage}>
          <img width={18} src={RandomizeIcon} />
        </div>
      </div>
      {
        image
          ? <img width={200} src={image} />
          : <></>
      }
    </div>
  )
}


export default ItemCard