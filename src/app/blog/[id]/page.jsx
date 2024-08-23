import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { notFound } from "next/navigation";


async function getData(id) {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`,{
    cache:"no-store"
  })

  if (!res.ok) {
    return notFound()
  }

  return res.json();

}

const BlogPost = async({ params }) => {

  const post = await getData(params.id)

  return (
    <div className={styles.container}>
      <div className={styles.items}>
        <div className={styles.item}>
          <div className={styles.textDiv}>
            <h1 className={styles.title}>{post.title}</h1>
            <p className={styles.desc}>
            {post.desc}
             </p>
    <div className={styles.profile}>
      <div className={styles.imgUserContainer}>
        
      <Image fill={true}
              src={"/hero.png"}
              alt="user profile"
              className={styles.userImg} />
              </div>
      <div className={styles.userName}> {post.username}</div>
    </div>
          </div>
          <div className={styles.imgContainer}>
            {/* <p>hello</p> */}
            <Image
              fill={true}
              src={"/hero.png"}
              alt=""
              className={styles.img}
            />
          </div>
        </div>
        <div className={styles.description}>
          {post.content}
           </div>
      </div>
    </div>
  );
};

export default BlogPost;
