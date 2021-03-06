import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const imageURL = "https://i.imgur.com/FB9CeRi.jpg";

const imageBase64 =
  "data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAKAAYDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAgEAABAwQCAwAAAAAAAAAAAAABAgMRAAQFBhIiB0Hh/8QAFQEBAQAAAAAAAAAAAAAAAAAAAgT/xAAbEQABBAMAAAAAAAAAAAAAAAADAAECEQQSUf/aAAwDAQACEQMRAD8ArbDXLc79sVnh322AxwWsvHkhQX2QEgkgQJHUD3M0qIxVw815b2BLTriAbJkkJURJn6aUhElqo8gI2nVcX//Z";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Image
          src={imageURL}
          alt="Vercel Logo"
          width={400}
          height={500}
          blurDataURL={imageBase64}
          placeholder="blur"
        />
      </main>
    </div>
  );
};

export default Home;
