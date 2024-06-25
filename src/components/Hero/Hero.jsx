import React from "react";

import styles from "./Hero.module.css";
import { setImage } from "../../util";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Gouthami Vanam</h1>
        <p className={styles.description}>
        Software Engineer with around 4 years of experience in crafting
 visually appealing and user-friendly interfaces. Proficient in React,
 TypeScript, Java, and Figma Design System with a proven ability to lead
 and mentor a high-performing development team. Excited about the
 chance to work with cutting-edge technology and contribute to a top
notch development team.
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
