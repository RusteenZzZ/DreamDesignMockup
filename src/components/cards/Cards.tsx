import { FC, useState } from "react";

import ItemCardAdder from "../item-card-adder/ItemCardAdder";
import styles from "./Cards.module.css";
import ItemCardWelcome from "../item-card-welcome/ItemCardWelcome";
import AddItemModal from "../add-item-modal/AddItemModal";
import ItemCard from "../item-card/ItemCard";

const Cards: FC = () => {
  const MAX_NUM_OF_ITEM_CARDS = 5;

  const [itemCards, setItemCards] = useState<Array<string | null>>([]);
  const [open, setOpen] = useState<boolean>(false);

  const handleOpenModal = () => {
    if (itemCards.length < MAX_NUM_OF_ITEM_CARDS)
      setOpen(true);
  }

  const addItemCard = () => {
    if (itemCards.length < MAX_NUM_OF_ITEM_CARDS)
      setItemCards([...itemCards, null]);
  }

  const deleteItemCard = (toBeDeletetId: number) => {
    setItemCards([
      ...(itemCards.filter((_, id) => id !== toBeDeletetId))
    ]);
  }

  const setImage = (path: string, id: number) => {
    setItemCards(itemCards.map((itemCard, idd) => {
      if (idd === id)
        return path
      else
        return itemCard
    }))
  }

  return (
    <div className={styles.cards}>
      {
        itemCards.length < MAX_NUM_OF_ITEM_CARDS
          ?
          <ItemCardAdder openModal={handleOpenModal} />
          :
          <></>
      }
      {
        itemCards.length === 0
          ?
          <ItemCardWelcome />
          :
          (
            itemCards.map((itemCard, id) =>
              <ItemCard
                key={id}
                path={itemCard}
                deleteItemCard={() => deleteItemCard(id)}
                setPath={(path) => setImage(path, id)}
              />
            )
          )
      }
      {
        open
          ?
          <AddItemModal
            closeModal={() => setOpen(false)}
            addItemCard={addItemCard}
          />
          : <></>
      }
    </div>
  )
}

export default Cards