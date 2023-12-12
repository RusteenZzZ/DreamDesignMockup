import { FC } from "react";

import styles from "./InputNumber.module.css"

interface InputNumberProps {
  placeholder: string,
}

const InputNumber: FC<InputNumberProps> = ({placeholder}) => {
  return (
    <input className={styles.inputNumber} placeholder={placeholder} type="number" />
  )
}

export default InputNumber