import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";

async function getData() {
  const res = await fetch("http://localhost:3000/api/posts",{
    cache:"no-store"
  })

  if(!res.ok){
    throw new Error("Failed to fetch Data!")
  }

  return res.json();

}

const Blog = async () => {
  let posts = await getData();
  
  return (
    <div className={styles.container}>
      <div className={styles.items}>
     { posts.map((post) => (
    <Link href={`/blog/${post._id}`} key={post._id}>
    <div className={styles.item}>
      <div className={styles.imgContainer}>
        <Image
          fill={true}
          src={"/hero.png"}
          alt=""
          className={styles.img}
        />
      </div>
      <div className={styles.textDiv}>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.desc}>
          {post.desc}
        </p>
      </div>
    </div>
  </Link>

      )) }
    
      </div>
    </div>
  );
};

export default Blog;
