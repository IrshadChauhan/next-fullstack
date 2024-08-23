import React from "react";
import styles from "./page.module.css";
import Button from "@/components/button/button";
import Image from "next/image";

const Category = ({ params }) => {
  return (
    <div className={styles.container}>
      <div className={styles.mainTitle}>{params.category}</div>
      <div className={styles.items}>
        <div className={styles.item}>
          <div className={styles.textDiv}>
            <h1 className={styles.title}>Creative Portfolio</h1>
            <p className={styles.desc}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptates minus molestiae itaque earum culpa vero qui tempora
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptates minus molestiae itaque earum culpa vero qui tempora
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptates minus molestiae itaque earum culpa vero qui tempora
              </p>
            <Button url={"#"} text={"See More"} />
          </div>
          <div className={styles.imgContainer}>
            {/* <p>hello</p> */}
            <Image fill={true} src={"/hero.png"} alt="" className={styles.img}/>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.textDiv}>
            <h1 className={styles.title}>Creative Portfolio</h1>
            <p className={styles.desc}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptates minus molestiae itaque earum culpa vero qui tempora
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptates minus molestiae itaque earum culpa vero qui tempora
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptates minus molestiae itaque earum culpa vero qui tempora
              </p>
            <Button url={"#"} text={"See More"} />
          </div>
          <div className={styles.imgContainer}>
            {/* <p>hello</p> */}
            <Image fill={true} src={"/hero.png"} alt="" className={styles.img}/>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.textDiv}>
            <h1 className={styles.title}>Creative Portfolio</h1>
            <p className={styles.desc}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptates minus molestiae itaque earum culpa vero qui tempora
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptates minus molestiae itaque earum culpa vero qui tempora
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptates minus molestiae itaque earum culpa vero qui tempora
              </p>
            <Button url={"#"} text={"See More"} />
          </div>
          <div className={styles.imgContainer}>
            {/* <p>hello</p> */}
            <Image fill={true} src={"/hero.png"} alt="" className={styles.img}/>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.textDiv}>
            <h1 className={styles.title}>Creative Portfolio</h1>
            <p className={styles.desc}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptates minus molestiae itaque earum culpa vero qui tempora
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptates minus molestiae itaque earum culpa vero qui tempora
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptates minus molestiae itaque earum culpa vero qui tempora
              </p>
            <Button url={"#"} text={"See More"} />
          </div>
          <div className={styles.imgContainer}>
            {/* <p>hello</p> */}
            <Image fill={true} src={"/hero.png"} alt="" className={styles.img}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
