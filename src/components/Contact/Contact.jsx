import React from "react";

import styles from "./Contact.module.css";
import { setImage} from "../../util";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2 className={styles.content}>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={setImage("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:vanamgouthamireddy@email.com">vanamgouthamireddy@mail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={setImage("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/gouthami-vanam/">linkedin.com/in/gouthami-vanam</a>
        </li>
        <li className={styles.link}>
          <img src={setImage("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://www.github.com/myname">https://github.com/gouthamivanam</a>
        </li>
      </ul>
    </footer>
  );
};
