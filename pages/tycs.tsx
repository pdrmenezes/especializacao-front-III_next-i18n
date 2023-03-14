import { NextPage, NextPageContext } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { defaultLocale, TEXTS_BY_LANGUAGE } from "../locale/constants";
import styles from "../styles/TYC.module.css";
import { TyC, TyCsAPIResponse } from "../types";

type IProps = {
  data: TyCsAPIResponse;
};

const TermosCondicoes: NextPage<IProps> = ({ data }) => {
  const router = useRouter();
  const lang = router.locale;

  const { HEADER, MAIN } = TEXTS_BY_LANGUAGE[lang as keyof typeof TEXTS_BY_LANGUAGE] ?? TEXTS_BY_LANGUAGE[defaultLocale];

  if (!data) return null;

  const { version, tycs } = data;

  const renderTyc: (tyc: TyC) => JSX.Element = ({ id, description, title }) => (
    <div key={id}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );

  return (
    <div className={styles.tycContainer}>
      <Head>
        <title>{HEADER.TYCS}</title>
        <meta name="description" content="termos e condições de Loja Gratuito" />
      </Head>
      <h2>{MAIN.TYCS}</h2>
      <p>{version}</p>
      {tycs.map(renderTyc)}
    </div>
  );
};

export async function getStaticProps(context: NextPageContext) {
  const lang = context.locale;
  const baseUrl = "https://especializacao-front-iii-next-i18n.vercel.app";

  const response = await fetch(`${baseUrl}/api/tycs/${lang}`);

  const data = await response.json();

  return {
    props: { data },
  };
}

export default TermosCondicoes;
