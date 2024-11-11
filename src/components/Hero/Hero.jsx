import React from "react";

import styles from "./Hero.module.css";
import { setImage } from "../../util";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Gouthami Vanam</h1>
        <p className={styles.description}>
        Driven Software Engineer with 4 years of experience in product development with good interpersonal skills. I Thrive 
in dynamic environments from front-end & back-end development emphasizing accessibility. With strong technical 
proficiency, I manage projects from development to enhancement. Excited about the chance to work with cutting-edge 
technology and contribute to a top-notch development team 
      </p>
        <a href="mailto:myemail@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={setImage("hero/myImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
