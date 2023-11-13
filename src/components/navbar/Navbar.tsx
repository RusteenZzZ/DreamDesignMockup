import { FC } from "react";

import Button from "../button/Button";
import { Labels } from "../../const/labels";
import { Colors } from "../../const/colors";
import styles from "./Navbar.module.css";

const Navbar: FC = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.toolbar}>
        <div>
          {Labels.TITLE}
        </div>
        <div className={styles.buttonGroup}>
          <div className={styles.button}>
            <Button
              label={Labels.SIGN_IN}
              onClick={() => {}}
              backgroundColor={Colors.WHITE}
              labelColor={Colors.BLACK}
            />
          </div>
          <div className={styles.button}>
            <Button
              label={Labels.SIGN_UP}
              onClick={() => {}}
              backgroundColor={Colors.ACID}
              labelColor={Colors.WHITE}
            />
          </div>
        </div>
      </div>
      <div className={styles.horizontalLine}>

      </div>
    </div>
  )
}

export default Navbar