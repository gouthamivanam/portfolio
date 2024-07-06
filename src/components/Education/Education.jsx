import React from 'react';
import { setImage } from "../../util";
import styles from "./Education.module.css";

export const Education = () => {
    return (
        <section className= {styles.container} id="education">
<h2 className= {styles.title}> Education</ h2>
    <div className={styles.content}>
        <img src={setImage("education/education.png")}
            alt="Education Details"
            className={styles.educationImage} />
        <ul className={styles.educationItems}>
            <li className={styles.educationItem}>
                <div className={styles.educationItemText}>   
                    <h3>December 2023</h3>
                    <p>Master of Science Computer And Information Sciences</p>
                    <p>Southern Arkansas University, Magnolia, AR</p>
                </div>
            </li>
            <li className={styles.educationItem}>
                <div className={styles.educationItemText}>
                    <h3>May 2019</h3>
                    <p>Bachelor of Science Information Technology</p>
                    <p>Jawaharlal Nehru Technological University, Hyderabad, India</p>
                </div>
            </li>
        </ul>
    </div>
</section>
  )
}


