import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { notFound } from "next/navigation";



const BlogPost = async ({ params }) => {
  console.log(params)
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>title asdfasdfasdf</h1>
          <p className={styles.desc}>
            description lskdj flkajds f;lkajsd f;lkajsd f;lkajsd f;lkajsdfl;akj dsfl;kajds fl;kaj sdf;lkajdsf l;kaj sdfl;kaj sdfl;kaj sdf;lkajsdf l;kasjdf ;lkajsdf l;kasjdf ;laksjdf ;
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