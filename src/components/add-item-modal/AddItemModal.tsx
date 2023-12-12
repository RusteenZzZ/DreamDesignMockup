import { FC } from "react";

import styles from "./AddItemModal.module.css"
import Button from "../button/Button";
import { Size } from "../../const/size";
import { Labels } from "../../const/labels";
import { Colors } from "../../const/colors";

interface AddItemModalProps {
  closeModal: () => any;
  addItemCard: () => any;
}

const AddItemModal: FC<AddItemModalProps> = ({
  closeModal,
  addItemCard,
}) => {

  const clickOnBackgroundHandler = () => {
    closeModal();
  }

  const clickOnModalHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  }

  return (
    <div className={styles.background} onClick={clickOnBackgroundHandler}>
      <div className={styles.addItemModal} onClick={clickOnModalHandler}>
        <div className={styles.modalInput}>
          <Button
            size={Size.small}
            label={Labels.UPLOAD_DESIGN}
            isTransparent={false}
            onClick={() => { }}
            color={Colors.BROWN}
            hoverColor={Colors.BROWN}
            labelColor={Colors.BLACK}
            hoverLabelColor={Colors.WHITE}
          />
        </div>
        <div className={styles.modalInput}>

        </div>
        <div className={styles.modalInput}>

        </div>
        <div className={styles.modalInput}>

        </div>
        <div className={styles.modalInput}>
          <div className={styles.buttonGroup}>
            <div className={styles.button}>
              <Button
                size={Size.small}
                label={Labels.CANCEL}
                isTransparent={false}
                onClick={closeModal}
                color={Colors.BROWN}
                hoverColor={Colors.BROWN}
                labelColor={Colors.WHITE}
                hoverLabelColor={Colors.BLACK}
              />
            </div>
            <div className={styles.button}>
              <Button
                size={Size.small}
                label={Labels.APPLY}
                isTransparent={false}
                onClick={() => {
                  addItemCard();
                  closeModal();
                }}
                color={Colors.LIGHT_GREEN}
                hoverColor={Colors.LIGHT_GREEN}
                labelColor={Colors.WHITE}
                hoverLabelColor={Colors.BLACK}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddItemModal