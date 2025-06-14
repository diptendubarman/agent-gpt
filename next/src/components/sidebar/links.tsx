import type { IconType } from "react-icons";
import {
  FaDiscord,
  FaFileCode,
  FaGear,
  FaGithub,
  FaHouse,
  FaLinkedin,
  FaQuestion,
  FaXTwitter,
} from "react-icons/fa6";

type LinkMetadata = {
  name: string;
  href: string;
  icon: IconType;
  className?: string;
};

export const PAGE_LINKS: LinkMetadata[] = [
  {
    name: "Home",
    href: "/",
    icon: FaHouse,
  },
  // {
  //   name: "Help",
  //   href: "https://reworkd.ai/docs",
  //   icon: FaQuestion,
  //   className: "group-hover:text-red-500",
  // },
  {
    name: "Templates",
    href: "/templates",
    icon: FaFileCode,
    className: "transition-transform group-hover:scale-110",
  },
  {
    name: "Settings",
    href: "/settings",
    icon: FaGear,
    className: "transition-transform group-hover:rotate-90",
  },
];

export const SOCIAL_LINKS: LinkMetadata[] = [
  {
    name: "Github",
    href: "https://github.com/diptendubarman/",
    icon: FaGithub,
  },
  {
    name: "Twitter",
    href: "https://x.com/i_mrdk99",
    icon: FaXTwitter,
  },
  
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/diptendu-barman/",
    icon: FaLinkedin,
  },
];
