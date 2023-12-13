import { FC, useEffect, useState } from "react";

import DeleteIcon from "../../assets/img/DeleteIcon.png";
import LockIcon from "../../assets/img/LockIcon.png";
import UnlockIcon from "../../assets/img/UnlockIcon.png";
import RandomizeIcon from "../../assets/img/RandomizeIcon.png";
import styles from "./ItemCard.module.css";

interface ItemCardsProps {
  path: string | null;
  deleteItemCard: () => any;
  setPath: (path: string) => any,
  isLocked: boolean,
  triggerLock: () => any,
}

const ItemCard: FC<ItemCardsProps> = ({
  path,
  deleteItemCard,
  setPath,
  isLocked,
  triggerLock,
}) => {
  const [num, setNum] = useState<number>(0);

  const chooseRandomImage = () => {
    if (isLocked)
      return;
    const randomValue = Math.floor(Math.random() * 1685) + 1;
    setNum(randomValue);
  }

  const loadImage = async () => {
    try {
      const dynamicImport = await import("./../../ai/img/" + num + ".jpg");
      setPath(dynamicImport.default);
      setNum(0);
    } catch (error) {
      console.error('Error loading image:', error);
    }
  };

  if (num !== 0) {
    loadImage();
  }

  return (
    <div className={styles.itemCard}>
      <div className={styles.buttons}>
        <div className={`${styles.button} ${styles.deleteButton}`} onClick={deleteItemCard}>
          <img width={18} src={DeleteIcon} />
        </div>
        {
          isLocked
            ?
            <div className={`${styles.button} ${styles.unlockButton}`} onClick={triggerLock}>
              <img width={18} src={UnlockIcon} />
            </div>
            :
            <div className={`${styles.button} ${styles.lockButton}`} onClick={triggerLock}>
              <img width={18} src={LockIcon} />
            </div>
        }
        <div className={`${styles.button} ${styles.randomizeButton}`} onClick={chooseRandomImage}>
          <img width={18} src={RandomizeIcon} />
        </div>
      </div>
      <div className={styles.imageContainer}>
        {
          path
            ? <img width={300} src={path} />
            : <></>
        }
      </div>
    </div>
  )
}


export default ItemCard