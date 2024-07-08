import Header from "@/components/Header/Header";
import styles from "./styles.module.css";
import Title from "@/components/Title/Title";
import Subtitle from "@/components/Subtitle/Subtitle";
import Image from "next/image";
import logo from "../../public/logowhite.png";
import Button from "@/components/Button/Button";

export default function Home() {
  return (
    <div className={styles.firstScreen}>
      <Header />
      <main className={styles.main}>
        <Image src={logo} width={125} height={125} alt="Logo" />
        <div className={styles.textContainer}>
          <Title>Hydra, the security that never sleeps.</Title>
          <Subtitle>
            Increasing the cybersecurity of companies and people since 2021.
          </Subtitle>
        </div>
        <div className={styles.buttonContainer}>
          <Button>Cybersecurity for companies</Button>
          <Button>Cybersecurity for people</Button>
        </div>
      </main>
    </div>
  );
}
