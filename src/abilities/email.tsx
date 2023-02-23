import { HiOutlineReply } from "@react-icons/all-files/hi/HiOutlineReply";
import { useEffect, useState } from "react";

const mail = "iantsiakkas@gmail.com";
const mailto = "mailto:" + mail;
const subject =
  "?subject=" + "I'm%20contacting you in regards to the troubled cities site";
const body = "&body=" + "Email%20Body";

function useHasMounted() {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  return hasMounted;
}

export default function Email() {
  const hasMounted = useHasMounted();

  return (
    <section className="my-6 rounded-[10px] border border-black bg-gray-200 p-2.5 shadow-xl">
      {/* <HeadScene /> */}
      <div className="flex-start flex justify-between font-bold">Manifesto</div>

      <div className="my-1 border border-dashed border-black"></div>

      <div>
        <p className="mt-2 whitespace-pre-line">
          As it happens with cities, they aren&apos;t perfect. Growing on the
          backbone of questionable decision making and carrying the burden of
          the past, they evolve in ways not only bad, but many times really bad.
        </p>
        <p className="mt-2 whitespace-pre-line">
          Here we strive to propose high quality/value solution for officials.
          Proposals must meet the a high standard and give proven quality from
          people who have to tackle the chalenges they try to solve in their
          daily lifes.
        </p>
      </div>

      <div className="flex-end align-start h-42 mt-7 flex justify-between gap-1">
        <a
          className="flex h-full w-24 items-center justify-around gap-0 rounded-full border border-black bg-white py-1.5 px-2.5 shadow-md hover:bg-gray-200"
          href={`${mailto}${subject}`}
        >
          <HiOutlineReply />
          <span>Reply</span>
        </a>
      </div>
    </section>
  );
}
