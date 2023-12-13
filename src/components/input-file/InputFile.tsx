import { ChangeEvent, FC, useState } from "react";

import { Size } from "../../const/size";
import { Labels } from "../../const/labels";
import { Colors } from "../../const/colors";
import Button from "../button/Button";
import styles from "./InputFile.module.css"

interface InputFileProps {
  selectedImage: File | null,
  setSelectedImage: (arg: any) => any,
}

const InputFile: FC<InputFileProps> = ({ selectedImage, setSelectedImage }) => {
  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file)
      console.log(file.name);
    setSelectedImage(file);
  };

  const handleUpload = () => {
    if (selectedImage) {
      const formData = new FormData();
      formData.append('image', selectedImage);
    }
  };

  return (
    <div>
      <Button
        size={Size.small}
        label={""}
        isTransparent={false}
        onClick={handleUpload}
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