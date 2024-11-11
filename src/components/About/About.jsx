import React from "react";

import styles from "./About.module.css";
import { setImage } from "../../util";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={setImage("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={setImage("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I'm a frontend developer with 4 years of experience in building responsive, scalable, and maintainable web applications using modern frontend technologies such as React, JavaScript, HTML/CSS, and TypeScript. Proven track record of delivering high-quality solutions on time and exceeding expectations.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={setImage("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I do have backend experience in designing and developing scalable, efficient, and reliable server-side applications using Java, Spring Boot, and RESTful APIs.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
