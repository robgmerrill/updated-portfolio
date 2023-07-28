import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { notFound } from "next/navigation";

async function getData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    cache: 'no-store'
  })

  if (!res.ok) {
    return notFound();
  }

  return res.json();
}


const BlogPost =  async ({ params }) => {
  const data = await getData(params.id);
  console.log(data)
  
  console.log(params)
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.desc}>
            {data.body}
          </p>
          <div className={styles.author}>
            <Image
              src='https://images.pexels.com/photos/3075993/pexels-photo-3075993.jpeg?auto=compress&cs=tinysrgb&w=800'
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>username</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src='https://images.pexels.com/photos/1334607/pexels-photo-1334607.jpeg?auto=compress&cs=tinysrgb&w=800'
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          aldksjf a;lsdjf ;laksdjf;lakjsd f;lakj sdf;lkajsd f;lkaj sdf;lkajsd l;fkja s;dlkfj a;lksdfj l;aksdj fl;aksdjf l;kasdjf ;lkasdjflkasdjf ;laksdj f;laksdjfl;aksdjf ;laksdj f;laksdjf ;laksdjf ;alksdjfl;aksdjf la;ksdjflaksdjf ;laksdjf ;laksjdf ;lakjsdf;laksdjf ;alksdjf;laksdfj 
        </p>
      </div>
    </div>
  );
};

export default BlogPost;