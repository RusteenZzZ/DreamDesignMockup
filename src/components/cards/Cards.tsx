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
import DirectionButton from "../direction-button/DirectionButton";
import { Directions } from "../../const/directions";

const Cards: FC = () => {
  const MAX_NUM_OF_ITEM_CARDS = 20;
  const [groupNum, setGroupNum] = useState<number>(-1);
  const [itemCards, setItemCards] = useState<Array<Array<string>>>([]);
  const [locked, setLocked] = useState<Array<Array<boolean>>>([]);
  const [open, setOpen] = useState<boolean>(false);

  let shouldRegroup = false
  const newItemCards = itemCards.filter(group => {
    if (group.length === 0)
      shouldRegroup = true;
    return group.length !== 0;
  })
  if (shouldRegroup) {
    setItemCards(newItemCards);
    if (newItemCards.length >= 1)
      if (groupNum === 0)
        setGroupNum(newItemCards.length - 1);
      else
        setGroupNum(groupNum - 1);
    else
      setGroupNum(-1);
  }

  const randomizeAll = async () => {
    if (groupNum !== -1) {
      const newRandomizedItemCards = [...itemCards];
      newRandomizedItemCards[groupNum] =
        await Promise.all(
          itemCards[groupNum].map(async (path, id) => {
            if (!locked[groupNum][id]) {
              const randomValue = Math.floor(Math.random() * 1685) + 1;
              const dynamicImport = await import("./../../ai/img/" + randomValue + ".jpg");
              return dynamicImport.default;
            } else {
              return path;
            }
          })
        );
      setItemCards(newRandomizedItemCards);
    }
  }

  const handleOpenModal = () => {
    if (itemCards.length < MAX_NUM_OF_ITEM_CARDS)
      setOpen(true);
  }

  const addItemCards = async (paths: Array<string>) => {
    const addedPathes: Array<string> = [];
    const addedLocks: Array<boolean> = [];
    paths.forEach(path => {
      if (itemCards.length < MAX_NUM_OF_ITEM_CARDS) {
        addedPathes.push(path);
        addedLocks.push(false);
        // setItemCards([...itemCards, path]);
        // setLocked([...locked, false]);
      }
    })
    setItemCards([...itemCards, addedPathes]);
    setLocked([...locked, addedLocks]);
    setGroupNum(itemCards.length);
  }

  const deleteItemCard = (toBeDeletetId: number) => {
    const newItemCardsWihoutDeleted = [...itemCards];
    newItemCardsWihoutDeleted[groupNum] = itemCards[groupNum].filter((_, id) => id !== toBeDeletetId);
    setItemCards(newItemCardsWihoutDeleted);

    const newLockedWithoutDeleted = [...locked];
    newLockedWithoutDeleted[groupNum] = locked[groupNum].filter((_, id) => id !== toBeDeletetId);
    setLocked(newLockedWithoutDeleted);
  }

  const setImage = (path: string, id: number) => {
    const newItamCardsWithImages = [...itemCards];
    newItamCardsWithImages[groupNum] = itemCards[groupNum].map((itemCard, idd) => {
      if (idd === id)
        return path
      else
        return itemCard
    })
    setItemCards(newItamCardsWithImages);
  }

  const triggerLocked = (id: number) => {
    const newLocked = [...locked];
    newLocked[groupNum] = locked[groupNum].map((isLocked, idd) => {
      if (idd === id)
        return !isLocked
      else
        return isLocked
    });
    setLocked(newLocked);
  }

  const handleClickLeft = () => {
    if (groupNum === 0)
      setGroupNum(itemCards.length - 1);
    else
      setGroupNum(groupNum - 1);
  }

  const handleClickRight = () => {
    if (groupNum === itemCards.length - 1)
      setGroupNum(0);
    else
      setGroupNum(groupNum + 1);
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
        <div className={styles.centeredCards}>
          {
            itemCards.length > 1
              ? <DirectionButton direction={Directions.LEFT} onClickHandler={handleClickLeft} />
              : <></>
          }
          {
            itemCards.length === 0
              ?
              <ItemCardWelcome />
              :
              (
                itemCards[groupNum].map((itemCard, id) =>
                  <ItemCard
                    key={id}
                    path={itemCard}
                    deleteItemCard={() => deleteItemCard(id)}
                    setPath={(path) => setImage(path, id)}
                    isLocked={locked[groupNum][id]}
                    triggerLock={() => triggerLocked(id)}
                  />
                )
              )
          }
          {
            itemCards.length > 1
              ? <DirectionButton direction={Directions.RIGHT} onClickHandler={handleClickRight} />
              : <></>
          }
          {
            open
              ?
              <AddItemModal
                closeModal={() => setOpen(false)}
                addItemCards={(paths: Array<string>) => addItemCards(paths)}
              />
              : <></>
          }
        </div>
      </div>
    </div>
  )
}

export default Cards