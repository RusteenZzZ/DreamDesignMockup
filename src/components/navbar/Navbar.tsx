import { FC } from "react";

import Button from "../button/Button";
import { Labels } from "../../const/labels";
import { Colors } from "../../const/colors";
import styles from "./Navbar.module.css";

const Navbar: FC = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <img width={100} height={100} src="./assets/img/DreamDesignLogo.png" />
      </div>
      <div className={styles.navbarMain}>
        <div className={styles.navbarContent}>
          <div className={styles.title}>
            {Labels.TITLE}
          </div>
          <div className={styles.buttonGroup}>
            <div className={styles.button}>
              <Button
                label={Labels.SIGN_IN}
                onClick={() => { }}
                isTransparent={true}
                color={Colors.ACID}
                hoverColor={Colors.BROWN}
                labelColor={Colors.ACID}
                hoverLabelColor={Colors.BROWN}
              />
            </div>
            <div className={styles.button}>
              <Button
                label={Labels.SIGN_UP}
                onClick={() => { }}
                isTransparent={false}
                color={Colors.ACID}
                hoverColor={Colors.BROWN}
                labelColor={Colors.WHITE}
                hoverLabelColor={Colors.WHITE}
              />
            </div>
          </div>
        </div>
        <div className={styles.horizontalLine} />
      </div>
    </div>
  )
}

export default Navbar