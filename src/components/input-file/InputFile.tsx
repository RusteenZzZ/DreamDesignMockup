import { ChangeEvent, FC, useState } from "react";

import { Size } from "../../const/size";
import { Labels } from "../../const/labels";
import { Colors } from "../../const/colors";
import Button from "../button/Button";
import styles from "./InputFile.module.css"

const InputFile: FC = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

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

      // You can now send the formData to the server using fetch or an API library
      // For example:
      // fetch('/api/upload', {
      //   method: 'POST',
      //   body: formData,
      // })
      // .then(response => response.json())
      // .then(data => console.log(data))
      // .catch(error => console.error('Error uploading image:', error));

      console.log('Selected Image:', selectedImage);
    } else {
      console.log('No image selected');
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