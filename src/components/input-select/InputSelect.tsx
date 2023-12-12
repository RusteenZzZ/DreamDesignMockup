import { FC } from "react";

import styles from "./InputSelect.module.css";

interface InputSelectProps {
  list: Array<string>,
}

const InputSelect: FC<InputSelectProps> = ({ list }) => {
  return (
    <select className={styles.inputSelect}>
      {
        list.map((option, id) =>
          <option value={option} key={id} >{option}</option>
        )
      }
    </select>
  )
}

export default InputSelect