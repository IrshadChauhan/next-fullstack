import Image from "next/image";
import Hero from "../../public/hero.png";
import styles from "./page.module.css";
import Button from "@/components/button/button";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Better Design For Your Digital Product</h1>
        <p className={styles.desc}>
          Turning your Ideas into Reality. We bring together the teams from the
          global tech industry.
        </p>
        <Button url={'/portfolio'} text={'See Our Works'} />
      </div>
      <div className={styles.item}>
          <Image className={styles.img} src={Hero} alt="Hero Image" />
      </div>
    </div>
  );
}
