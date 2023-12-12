import { FC } from "react";

import styles from "./AddItemModal.module.css"
import Button from "../button/Button";
import { Size } from "../../const/size";
import { Labels } from "../../const/labels";
import { Colors } from "../../const/colors";

interface AddItemModalProps {
  closeModal: () => any;
}

const AddItemModal: FC<AddItemModalProps> = ({ closeModal }) => {

  const clickOnBackgroundHandler = () => {
    closeModal();
  }

  const clickOnModalHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
  }

  return (
    <div className={styles.background} onClick={clickOnBackgroundHandler}>
      <div className={styles.addItemModal} onClick={clickOnModalHandler}>
        <Button
          size={Size.small}
          label={Labels.UPLOAD_DESIGN}
          isTransparent={false}
          onClick={() => {}}
          color={Colors.BROWN}
          hoverColor={Colors.BROWN}
          labelColor={Colors.BLACK}
          hoverLabelColor={Colors.WHITE}
        />
      </div>
    </div>
  )
}

export default AddItemModal