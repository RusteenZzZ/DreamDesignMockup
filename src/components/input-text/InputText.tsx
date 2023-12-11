import { FC } from "react";

import styles from "./InputText.module.css"

interface InputTextProps {
  placeholder: string,
}

const InputText: FC<InputTextProps> = (props) => {
  return (
    <input className={styles.inputText} type="text" placeholder={props.placeholder} />
  )
}

export default InputText