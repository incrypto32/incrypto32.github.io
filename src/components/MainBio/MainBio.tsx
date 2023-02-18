import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faTwitter, faTelegram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import styles from "./MainBio.module.css";

const MainBio = () => {
  return (
    <div className={styles.main}>
      {/* Responsive image */}
      <div className={styles.profileImg}>
        <Image
          src="/images/profile.jpg"
          alt="Krishna"
          width={200}
          height={200}
        />
      </div>
      <h1>{"Hi, I'm Krishna"} 👋🏻</h1>

      <p className={styles.bio}>
        {`Hello there! I'm a software engineer driven by a never-ending curiosity for new and innovative technologies. Currently, I'm on a mission to dive deep into the exciting world of web3 as a Developer Success Engineer at Edge & Node, where I work on The Graph, an indexing protocol for blockchains. Debugging and problem-solving are my passions, and I have a diverse skill set including experience with Flutter, Golang, and Typescript. But what really sets me apart is my love for learning. Whether it's a new programming language or a new way to approach a problem, I'm always eager to expand my knowledge.`}
      </p>

      <div className={styles.links}>
        <a href="https://github.com/incrypto32" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://linkedin.com/in/incrypto32" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
        <a href="https://twitter.com/incrypto32" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="https://t.me/incrypto32" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTelegram} />
        </a>
      </div>
    </div>
  );
};

export default MainBio;
