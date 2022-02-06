import React from "react";
import Styles from "../styles/components/soc.module.css";
import Data from '../data/soc'

export default function RotatingCard({
  shortform,
  name,
  description,
  id,
}) {
  return (
    <div className={Styles.card}>
      <div className={Styles.cardfront}>
      
        <img
          className={Styles.img1}
          src={`/media/images/societies/${shortform}.png`}
          loading="lazy"
          alt="image01"
          width={700}
          height={800}
        />
        <h1 style={{fontSize: "25px"}}>{name}</h1>
      </div>
      <div className={Styles.cardback}>
        <div className={Styles.cardbackcontent}>
          <h3>{name}</h3>
          <p>{description}</p>
          <a
            className={`${Styles.button} ${Styles.a1}`}
            title="Lorem Ipsum"
            href={"/societies/" + id}
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
}
