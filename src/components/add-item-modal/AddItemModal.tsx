import { FC } from "react";

import CrossIcon from "../../assets/img/CrossIcon.png";
import Button from "../button/Button";
import { Size } from "../../const/size";
import { Labels } from "../../const/labels";
import { Colors } from "../../const/colors";
import InputRadio from "../input-radio/InputRadio";
import InputNumber from "../input-number/InputNumber";
import styles from "./AddItemModal.module.css"
import InputSelect from "../input-select/InputSelect";
import InputFile from "../input-file/InputFile";

interface AddItemModalProps {
  closeModal: () => any;
  addItemCard: () => any;
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
  "Bar counter,"
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
          <InputFile/>
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