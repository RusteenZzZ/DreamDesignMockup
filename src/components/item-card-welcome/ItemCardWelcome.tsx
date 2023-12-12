import { FC } from "react";

import styles from "./ItemCardWelcome.module.css";
import { Labels } from "../../const/labels";
import { Text } from "../../const/text";

const ItemCardWelcome: FC = () => {
  return (
    <div className={styles.itemCardWelcome}>
      <div className={styles.content}>
        <b className={styles.paragraph}>
          {Text.WELCOME}
        </b>
        <div className={`${styles.title} ${styles.paragraph}`}>
          <div className={styles.title1}>
            {Labels.TITLE1}
          </div>
          <div className={styles.title2}>
            {Labels.TITLE2}
          </div>
        </div>
        <p className={styles.paragraph}>
          {Text.WELCOME1}
        </p>
        <b className={styles.paragraph}>
          {Text.WELCOME2}
        </b>
        <p className={styles.paragraph}>
          {Text.WELCOME3}
        </p>
      </div>
    </div>
  )
}

export default ItemCardWelcome