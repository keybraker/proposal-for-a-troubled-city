import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";
import { MdEmail } from "@react-icons/all-files/md/MdEmail";
import { MdLocationOn } from "@react-icons/all-files/md/MdLocationOn";
import heraklion_logo from "@static/heraklion_logo.png";
import Image from "next/image";

const mail = "mailto:" + "iantsiakkas@gmail.com";
const address = "http://maps.google.com/?q=" + "Greece, Heraklion - 71305";
const github = "https://github.com/" + "Keybraker";
const twitter = "https://twitter.com/" + "RealTsiakkas";
const linkedin = "https://www.linkedin.com/in/" + "ioannis-t-3365151a2";

function AboutPageInner() {
  return (
    <div className="flex-start flex flex-row items-center justify-around gap-4 align-baseline">
      <a
        aria-label="By clicking you will be taken to Maps"
        rel="noopener noreferrer"
        target="_blank"
        href={address}
      >
        <MdLocationOn className="antialiased" size={"20px"} />
      </a>
      <a
        aria-label="By clicking you will be taken to Mail"
        rel="noopener noreferrer"
        target="_blank"
        href={mail}
      >
        <MdEmail className="antialiased" size={"20px"} />
      </a>
      <a
        aria-label="By clicking you will be taken to Github"
        rel="noopener noreferrer"
        target="_blank"
        href={github}
      >
        <FaGithub className="antialiased" size={"20px"} />
      </a>
      <a
        aria-label="By clicking you will be taken to LinkedIn"
        rel="noopener noreferrer"
        target="_blank"
        href={linkedin}
      >
        <FaLinkedin className="antialiased" size={"20px"} />
      </a>
      <a
        aria-label="By clicking you will be taken to Twitter"
        rel="noopener noreferrer"
        target="_blank"
        href={twitter}
      >
        <FaTwitter className="antialiased" size={"20px"} />
      </a>
    </div>
  );
}

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b-2 border-black">
      <div className="flex flex-col items-center justify-between gap-2 px-2 pt-2 pb-6 backdrop-blur-lg xs:flex-row xs:items-stretch xs:py-4">
        <span className="font-helvetica flex flex-col items-center gap-1 text-2xl font-semibold tn:flex-row xs:gap-2">
          Proposals for a troubled city
        </span>
        <span className="font-helvetica flex flex-col items-center gap-1 text-2xl font-semibold tn:flex-row xs:gap-2">
          <Image src={heraklion_logo} alt="The source of truth" width={24} />
          <span>Heraklion</span>
        </span>
      </div>
    </header>
  );
}
