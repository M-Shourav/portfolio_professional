import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const socials = [
  {
    id: 1,
    icon: <FaGithub />,
    path: "https://github.com/M-Shourav",
  },
  {
    id: 2,
    icon: <FaLinkedinIn />,
    path: "",
  },
  {
    id: 3,
    icon: <FaYoutube />,
    path: "https://www.youtube.com/@MasumAhmed-cd",
  },
  {
    id: 4,
    icon: <FaXTwitter />,
    path: "https://x.com/MasumAh68543",
  },
];
const SocialLinks = () => {
  return (
    <div className="flex items-center gap-5">
      {socials?.map((item) => (
        <Link
          key={item?.id}
          href={item?.path}
          target="_blank"
          className="w-9 h-9 flex items-center justify-center
           text-lightSky/80 hover:text-lightSky border text-base
            border-lightSky/80 hover:border-lightSky rounded-full
            duration-300"
        >
          {item?.icon}
        </Link>
      ))}
    </div>
  );
};

export default SocialLinks;
