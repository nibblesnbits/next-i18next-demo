import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { GetStaticPropsContext } from "next";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { t } = useTranslation("common");

  const [apiData, setApiData] = useState<any>();
  const getApiData = async () => {
    const res = await fetch("/api/hello");
    const data = await res.json();
    setApiData(data);
  };
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <h1 className={styles.title}>{t("static")}</h1>
        <h1 className={styles.title}>{apiData?.message}</h1>
        <div>
          <button onClick={getApiData}>Get API Data</button>
        </div>
      </main>
    </>
  );
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ["common"])),
    },
  };
}