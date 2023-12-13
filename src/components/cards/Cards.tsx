import { FC, useState } from "react";

import ItemCardAdder from "../item-card-adder/ItemCardAdder";
import ItemCardWelcome from "../item-card-welcome/ItemCardWelcome";
import AddItemModal from "../add-item-modal/AddItemModal";
import ItemCard from "../item-card/ItemCard";
import Button from "../button/Button";
import { Size } from "../../const/size";
import { Labels } from "../../const/labels";
import { Colors } from "../../const/colors";
import styles from "./Cards.module.css";

const Cards: FC = () => {
  const MAX_NUM_OF_ITEM_CARDS = 5;

  const [itemCards, setItemCards] = useState<Array<string | null>>([]);
  const [locked, setLocked] = useState<Array<boolean>>([]);
  const [open, setOpen] = useState<boolean>(false);

  const randomizeAll = async () => {
    setItemCards(await Promise.all(
      itemCards.map(async (path, id) => {
        if (!locked[id]) {
          const randomValue = Math.floor(Math.random() * 1685) + 1;
          const dynamicImport = await import("./../../ai/img/" + randomValue + ".jpg");
          return dynamicImport.default;
        } else {
          return path;
        }
      })
    ))
  }

  const handleOpenModal = () => {
    if (itemCards.length < MAX_NUM_OF_ITEM_CARDS)
      setOpen(true);
  }
  
  const addItemCard = async (path: string) => {
    if (itemCards.length < MAX_NUM_OF_ITEM_CARDS) {
      setItemCards([...itemCards, path]);
      setLocked([...locked, false]);
    }
  }

  const deleteItemCard = (toBeDeletetId: number) => {
    setItemCards([
      ...(itemCards.filter((_, id) => id !== toBeDeletetId))
    ]);
    setLocked([
      ...(locked.filter((_, id) => id !== toBeDeletetId))
    ])
  }

  const setImage = (path: string, id: number) => {
    setItemCards(itemCards.map((itemCard, idd) => {
      if (idd === id)
        return path
      else
        return itemCard
    }))
  }

  const triggerLocked = (id: number) => {
    setLocked(locked.map((isLocked, idd) => {
      if (idd === id)
        return !isLocked
      else
        return isLocked
    }))
  }

  return (
    <div className={styles.main}>
      <div className={styles.toolbar}>
        <Button
          size={Size.medium}
          label={Labels.RANDOMIZE_ALL}
          isTransparent={false}
          onClick={randomizeAll}
          color={Colors.BROWN}
          hoverColor={Colors.BROWN}
          labelColor={Colors.WHITE}
          hoverLabelColor={Colors.BLACK}
        />
      </div>
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
                  isLocked={locked[id]}
                  triggerLock={() => triggerLocked(id)}
                />
              )
            )
        }
        {
          open
            ?
            <AddItemModal
              closeModal={() => setOpen(false)}
              addItemCard={(path: string) => addItemCard(path)}
            />
            : <></>
        }
      </div>
    </div>
  )
}

export default Cards