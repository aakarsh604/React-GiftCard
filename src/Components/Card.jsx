import React from "react";
import styles from "./card.module.css";

const Card = ({ info }) => {
  return (
    <div className={`${styles.main}`} style={{ background: info.color }}>
      <div className={styles.div1}>
        <p className={styles.para}>{info.date}</p>
        <p className={`${styles.para} ${styles.case}`}>Case Study</p>
        <h1 className={styles.head}>{info.heading}</h1>
        <h1 className={styles.head}>{info.subheading}</h1>
        <p className={styles.para}>{info.devices}</p>
      </div>
      <div className={styles.div2}>
        <img className={styles.image} src={info.logo} alt="" />
        <i className="fa-solid fa-arrow-right-long icon"></i>
      </div>
    </div>
  );
};

export default Card;

//https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3ejmg7T8Y4T5yIzlxL3fvrcHCbKxwuG53xg&usqp=CAU

//https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqxKBVF-iPkIARTpIWo_NIVfR1vGjHN7NAYg&usqp=CAU
