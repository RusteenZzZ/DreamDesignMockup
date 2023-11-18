import { FC } from "react";

import Button from "../button/Button";
import { Labels } from "../../const/labels";
import { Colors } from "../../const/colors";
import styles from "./Navbar.module.css";
import InputText from "../input-text/InputText";

const Navbar: FC = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <img width={100} height={100} src="./assets/img/DreamDesignLogo.png" />
      </div>
      <div className={styles.navbarMain}>
        <div className={styles.navbarContent1}>
          <div className={styles.title}>
            <div className={styles.title1}>
              {Labels.TITLE1}
            </div>
            <div className={styles.title2}>
              {Labels.TITLE2}
            </div>
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
        <div className={styles.navbarContent2}>
        </div>
      </div>
    </div>
  )
}

export default Navbar