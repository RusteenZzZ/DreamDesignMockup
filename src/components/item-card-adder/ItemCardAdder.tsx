import { FC } from "react";

import AddIcon from "../../assets/img/AddIcon.png"
import styles from "./ItemCardAdder.module.css"

interface ItemCardAdderProps {
  openModal: () => any;
}

const ItemCardAdder: FC<ItemCardAdderProps> = ({ openModal }) => {

  const ItemCardAdderClickHandler = () => {
    openModal();
  }

  return (
    <div className={styles.itemCardAdder} onClick={ItemCardAdderClickHandler}>
      <div className={styles.addIcon}>
        <img width={40} src={AddIcon} />
      </div>
    </div>
  )
}

export default ItemCardAdder