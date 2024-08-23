import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/button/button";
const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Lets Keep In Touch</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image src="/contact.png"  fill={true} alt="contact"  className={styles.img} />
        </div>
          <form className={styles.formContainer}>
          <input type="text" placeholder="name" className={styles.input}  />
          <input type="email" placeholder="email" className={styles.input}/>
          <textarea placeholder="message" cols="30" className={styles.textArea}/>
          <Button url="#" text="Send" />
          </form>
      </div>
    </div>
  );
};

export default Contact;
