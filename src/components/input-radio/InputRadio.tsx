import { FC } from "react";

import styles from "./InputRadio.module.css";

interface InputRadioProps {
  label: string,
  id: number,
}

const InputRadio: FC<InputRadioProps> = ({ label, id }) => {
  return (
    <div>
      <input className={styles.radio} name={`${id}`} type="radio" />
      <label htmlFor={`${id}`}>{label}</label>
    </div>
  )
}

export default InputRadio