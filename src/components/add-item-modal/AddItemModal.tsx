import { FC, useState } from "react";
import axios from "axios";

import CrossIcon from "../../assets/img/CrossIcon.png";
import Button from "../button/Button";
import { Size } from "../../const/size";
import { Labels } from "../../const/labels";
import { Colors } from "../../const/colors";
import InputRadio from "../input-radio/InputRadio";
import InputNumber from "../input-number/InputNumber";
import InputSelect from "../input-select/InputSelect";
import InputFile from "../input-file/InputFile";
import styles from "./AddItemModal.module.css"

interface AddItemModalProps {
  closeModal: () => any;
  addItemCards: (paths: Array<string>) => Promise<any>;
}

const optionsStyle1 = [
  "Minimalist",
  "Contemporary",
  "Modern",
  "Traditional",
  "Transitional",
  "Rustic",
]
const optionsStyle2 = [
  "Industrial",
  "Scandinavian",
  "Bohemian",
  "Coastal",
  "Mid-Century Modern",
  "Art Deco",
]
const optionsStyle3 = [
  "Art Nouveau",
  "Mediterranean",
  "Asian",
  "Tropical",
  "Electric",
]

const optionsCategory1 = [
  "Bed",
  "Wardrobe",
  "Dresser",
  "Nightstand",
  "Vanity table",
  "Mirror",
]
const optionsCategory2 = [
  "Sofa",
  "Armchair",
  "Coffee table",
  "TV stand",
  "Shelving unit",
]
const optionsCategory3 = [
  "Dining table",
  "Dining chair",
  "Bar counter",
]
const optionsCategory4 = [
  "Writing desk",
  "Chair",
  "Bookshelf"
]
const optionsCategory5 = [
  "Kitchen table",
  "Kitchen chair",
  "Cabinet",
  "Kitchen fittings",
  "Accessoirs",
]

const optionsMaterials = [
  "Wood",
  "Plywood",
  "Hardboard",
  "Plastic",
  "Textile",
  "Glass",
  "Raw material",
  "Steel",
  "Velvet",
  "Stone",
  "Concrete",
  "Resin",
]

const optionsColours = [
  "Brown",
  "Green",
  "Orange",
  "Pink",
  "Purple",
  "Red",
  "White",
  "Yellow",
  "Black",
  "Blue",
  "Gray",
  "Magenta",
  "Cyan",
]

const AddItemModal: FC<AddItemModalProps> = ({
  closeModal,
  addItemCards,
}) => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const clickOnBackgroundHandler = () => {
    closeModal();
  }

  const clickOnModalHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  }

  const handleSearchSimilarImage = async () => {
    if (selectedImage) {
      const formData = new FormData();
      formData.append('image', selectedImage);
      console.log("1");
      const response = await axios.post('http://localhost:5000/search-similar', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log("2");
      const similarImages = response.data.split("\n")
      const s1Image = similarImages[similarImages.length - 6]
      const s2Image = similarImages[similarImages.length - 5]
      const s3Image = similarImages[similarImages.length - 4]
      const s4Image = similarImages[similarImages.length - 3]
      const s5Image = similarImages[similarImages.length - 2]
      const s1 = await import("../../ai/img/" + s1Image.trim());
      const s2 = await import("../../ai/img/" + s2Image.trim());
      const s3 = await import("../../ai/img/" + s3Image.trim());
      const s4 = await import("../../ai/img/" + s4Image.trim());
      const s5 = await import("../../ai/img/" + s5Image.trim());
      const addedPaths = [];
      addedPaths.push(s1.default);
      addedPaths.push(s2.default);
      addedPaths.push(s3.default);
      addedPaths.push(s4.default);
      addedPaths.push(s5.default);
      addItemCards(addedPaths);
      closeModal();
    } else {
      console.log("No image uploaded!");
    }
  }

  return (
    <div className={styles.background} onClick={clickOnBackgroundHandler}>
      <div className={styles.addItemModal} onClick={clickOnModalHandler}>
        <div className={styles.modalInput}>
          <InputFile setSelectedImage={setSelectedImage} />
        </div>
        <hr />
        <div className={styles.modalInput}>
          <b className={styles.label}>
            {Labels.STYLE}
          </b>
          <div className={styles.options}>
            <div className={styles.optionsColumn}>
              {
                optionsStyle1.map((option, id) =>
                  <InputRadio label={option} key={id} id={id} />
                )
              }
            </div>
            <div className={styles.optionsColumn}>
              {
                optionsStyle2.map((option, id) =>
                  <InputRadio label={option} key={id} id={id} />
                )
              }
            </div>
            <div className={styles.optionsColumn}>
              {
                optionsStyle3.map((option, id) =>
                  <InputRadio label={option} key={id} id={id} />
                )
              }
            </div>
          </div>
        </div>
        <hr />
        <div className={styles.modalInput}>
          <b className={styles.label}>
            {Labels.CATEGORY}
          </b>
          <div className={styles.options}>
            <div className={styles.optionsColumn}>
              <b>
                {Labels.BEDROOM}
              </b>
              {
                optionsCategory1.map((option, id) =>
                  <InputRadio label={option} key={id} id={id} />
                )
              }
            </div>
            <div className={styles.optionsColumn}>
              <b>
                {Labels.LIVING_ROOM}
              </b>
              {
                optionsCategory2.map((option, id) =>
                  <InputRadio label={option} key={id} id={id} />
                )
              }
            </div>
            <div className={styles.optionsColumn}>
              <b>
                {Labels.DINING_ROOM}
              </b>
              {
                optionsCategory3.map((option, id) =>
                  <InputRadio label={option} key={id} id={id} />
                )
              }
            </div>
            <div className={styles.optionsColumn}>
              <b>
                {Labels.STUDY_OFFICE}
              </b>
              {
                optionsCategory4.map((option, id) =>
                  <InputRadio label={option} key={id} id={id} />
                )
              }
            </div>
            <div className={styles.optionsColumn}>
              <b>
                {Labels.KITCHEN}
              </b>
              {
                optionsCategory5.map((option, id) =>
                  <InputRadio label={option} key={id} id={id} />
                )
              }
            </div>
          </div>
        </div>
        <hr />
        <div className={styles.modalInput}>
          <div className={styles.horizontalInputs}>
            <div className={styles.verticalInputs}>
              <div className={styles.verticalInput}>
                <b className={styles.label}>
                  {Labels.SIZE}
                </b>
              </div>
              <div className={styles.verticalInput}>
                <b className={styles.label}>
                  {Labels.MATERIAL}
                </b>
              </div>
              <div className={styles.verticalInput}>
                <b className={styles.label}>
                  {Labels.COLOUR}
                </b>
              </div>
              <div className={styles.verticalInput}>
                <b className={styles.label}>
                  {Labels.BUDGET}
                </b>
              </div>
            </div>
            <div className={styles.verticalInputs}>
              <div className={styles.verticalInput}>
                <div className={styles.roundedInput}>
                  <InputNumber placeholder={Labels.PLACEHOLDER_LENGTH} />
                </div>
                <img height={20} src={CrossIcon} />
                <div className={styles.roundedInput}>
                  <InputNumber placeholder={Labels.PLACEHOLDER_WIDTH} />
                </div>
                <img height={20} src={CrossIcon} />
                <div className={styles.roundedInput}>
                  <InputNumber placeholder={Labels.PLACEHOLDER_HEIGHT} />
                </div>
              </div>
              <div className={styles.verticalInput}>
                <div className={styles.roundedInput}>
                  <InputSelect list={optionsMaterials} />
                </div>
              </div>
              <div className={styles.verticalInput}>
                <div className={styles.roundedInput}>
                  <InputSelect list={optionsColours} />
                </div>
              </div>
              <div className={styles.verticalInput}>
                <div className={styles.roundedInput}>
                  <InputNumber placeholder={Labels.PLACEHOLDER_MIN} />
                </div>
                <div className={styles.rundedInput}>
                  <InputNumber placeholder={Labels.PLACEHOLDER_MAX} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
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
                onClick={() => handleSearchSimilarImage()}
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