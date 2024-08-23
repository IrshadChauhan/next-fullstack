import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/button/button";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          fill={true}
          alt=""
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1>Digital Storytellers</h1>
          <h2>Handcrafting award winning digital experiences</h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <div className={styles.title}>
            <h1>Who Are We</h1>
          </div>
          <div className={styles.desc}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis,
              commodi impedit! Sequi, consequuntur eaque enim ut, reiciendis
              totam maxime earum similique ullam accusamus ab recusandae vel
              repellendus dicta, alias amet.20
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
              quisquam hic maxime quam, voluptatum voluptate sequi inventore.
              Harum quisquam fugit nisi expedita ex omnis, illo architecto,
              reprehenderit nam quaerat, aspernatur officia asperiores? Dolore
              quo vero assumenda itaque consequatur atque perspiciatis. Porro
              voluptatem temporibus quas fugiat sint quo iure fugit corrupti!
            </p>
            <br />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea voluptate maiores eaque architecto praesentium deleniti doloremque quod ipsum blanditiis cumque, delectus ipsam non totam quis illum et est error expedita, quam debitis, veniam natus distinctio autem at. Possimus, perferendis repellat?</p>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.title}>
            <h1>What We Do?</h1>
          </div>
          <div className={styles.desc}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet hic harum impedit necessitatibus praesentium incidunt quis, asperiores, sit laboriosam commodi a. Officiis incidunt ipsa cum molestias sunt, et unde distinctio amet eos sapiente blanditiis molestiae voluptates eveniet. Voluptates consequuntur delectus accusamus distinctio ratione at aliquid eos. Sapiente optio saepe asperiores!</p>
            <br />
            <p>
              FAST AND HANDY MOBILE APPS
            </p>
            <br />
            <p>
             CREATIVE ILLUSTRATIONS
            </p>
            <br />
            <p>DYNAMIC WEBSITES</p>
            <br />
          <Button url={"/contact"} text={"contact"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
