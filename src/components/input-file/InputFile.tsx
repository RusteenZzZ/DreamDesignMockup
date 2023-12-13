import { ChangeEvent, FC, useState } from "react";

import { Size } from "../../const/size";
import { Labels } from "../../const/labels";
import { Colors } from "../../const/colors";
import Button from "../button/Button";
import styles from "./InputFile.module.css"

interface InputFileProps {
  setSelectedImage: (arg: any) => any,
}

const InputFile: FC<InputFileProps> = ({ setSelectedImage }) => {
  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    setSelectedImage(file);
  };

  return (
    <div>
      <Button
        size={Size.small}
        label={""}
        isTransparent={false}
        onClick={() => {}}
        color={Colors.BROWN}
        hoverColor={Colors.BROWN}
        labelColor={Colors.BLACK}
        hoverLabelColor={Colors.WHITE}
      >
        <input id="image" className={styles.inputFile} type="file" onChange={handleImageChange} accept="image/*" />
        <label className={styles.label} htmlFor="image">{Labels.UPLOAD_DESIGN}</label>
      </Button>
    </div>
  )
}

export default InputFile