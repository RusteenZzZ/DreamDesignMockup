import { FC, useState } from "react";

import ItemCardAdder from "../item-card-adder/ItemCardAdder";
import styles from "./Cards.module.css";
import ItemCardWelcome from "../item-card-welcome/ItemCardWelcome";
import AddItemModal from "../add-item-modal/AddItemModal";
import ItemCard from "../item-card/ItemCard";

const Cards: FC = () => {
  const [itemCards, setItemCards] = useState<Array<string>>([]);
  const [open, setOpen] = useState<boolean>(false);

  const addItemCard = () => {
    if (itemCards.length < 5)
      setItemCards([...itemCards, "LOREM IPSUM ITEM"]);
  }

  const deleteItemCard = (toBeDeletetId: number) => {
    setItemCards([
      ...(itemCards.filter((_, id) => id !== toBeDeletetId))
    ]);
  }

  return (
    <div className={styles.cards}>
      <ItemCardAdder openModal={() => {
        if (itemCards.length < 5)
          setOpen(true)
      }} />
      {
        itemCards.length === 0
          ? <ItemCardWelcome />
          : (
            itemCards.map((itemCard, id) =>
              <ItemCard
                key={id}
                label={itemCard}
                deleteItemCard={() => deleteItemCard(id)}
              />
            )
          )
      }
      {
        open
          ? <AddItemModal
            closeModal={() => setOpen(false)}
            addItemCard={addItemCard}
          />
          : <></>
      }
    </div>
  )
}

export default Cards