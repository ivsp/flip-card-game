import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import styles from "./footer.module.css";
const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <h5>Powered by IVAN</h5>
      <div className={styles.footerContainer__images}>
        <Link href={"https://github.com/ivsp"} target="blank">
          <FaGithub />
        </Link>
        <Link href={"https://www.linkedin.com/in/ivansperez/"} target="blank">
          <FaLinkedin />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
