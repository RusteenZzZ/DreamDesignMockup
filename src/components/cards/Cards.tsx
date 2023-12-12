import { FC, useState } from "react";

import ItemCardAdder from "../item-card-adder/ItemCardAdder";
import styles from "./Cards.module.css";
import ItemCardWelcome from "../item-card-welcome/ItemCardWelcome";
import AddItemModal from "../add-item-modal/AddItemModal";

const Cards: FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className={styles.cards}>
      <ItemCardAdder openModal={() => setOpen(true)} />
      <ItemCardWelcome />
      {
        open
          ? <AddItemModal closeModal={() => setOpen(false)}/>
          : <></>
      }
    </div>
  )
}

export default Cards