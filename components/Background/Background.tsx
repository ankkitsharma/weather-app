import React from "react";
import styles from "./Background.module.css";

export default function Background() {
  return (
    <div className={styles.backgroundContainer}>
      <div className={styles.clouds}>
        <div className={`${styles.cloud} ${styles.x1}`}></div>
        {/* <!-- Time for multiple clouds to dance around --> */}
        <div className={`${styles.cloud} ${styles.x2}`}></div>
        <div className={`${styles.cloud} ${styles.x3}`}></div>
        <div className={`${styles.cloud} ${styles.x4}`}></div>
        <div className={`${styles.cloud} ${styles.x5}`}></div>
      </div>
    </div>
  );
}
