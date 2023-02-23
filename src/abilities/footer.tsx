import Image from "next/image";
import heraklion_logo from "@static/heraklion_logo.png";

const repo = "https://github.com/keybraker/keybraker.github.io";

export default function Footer() {
  return (
    <>
      <div className="mt-4 flex flex-col items-center justify-between border-t border-gray-300 xs:flex-row xs:items-stretch">
        <span className="mt-4 flex w-full flex-row justify-between text-sm">
          <Image src={heraklion_logo} alt="The source of truth" width={24} />
          <a rel="noopener noreferrer" target="_blank" href={repo}>
            <span className="hover:underline">
              Made with NextJS and Tailwind, take a look
            </span>
          </a>
        </span>
      </div>
    </>
  );
}
