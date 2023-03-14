import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { defaultLocale, TEXTS_BY_LANGUAGE } from "../../../locale/constants";
import styles from "../../../styles/Header.module.css";

const Header = () => {
  const router = useRouter();
  const { push, pathname, asPath, query, locale } = router;

  const { HEADER } = TEXTS_BY_LANGUAGE[locale as keyof typeof TEXTS_BY_LANGUAGE] ?? TEXTS_BY_LANGUAGE[defaultLocale];

  return (
    <header className={styles.header}>
      <div onClick={() => push("/")} style={{ cursor: "pointer" }}>
        <figure>
          <Image src="/logo.png" alt="logo" width={50} height={50} />
        </figure>
        <div className={styles.appName}>
          <p>{HEADER.TITLE.split(" ")[0]}</p>
          <p>{HEADER.TITLE.split(" ")[1]}</p>
        </div>
      </div>
      <div className={styles.navbar}>
        <Link href="./">{HEADER.PRODUCTS}</Link>
        <Link href="./tycs">{HEADER.TYCS}</Link>

        <select
          onChange={(e) => {
            router.push({ pathname, query }, asPath, { locale: e.target.value });
          }}
        >
          <option value="pt-BR">🇧🇷 Português</option>
          <option value="en-US">🇺🇸 English</option>
          <option value="es-ES">🇪🇸 Español</option>
        </select>
      </div>
    </header>
  );
};

export default Header;
