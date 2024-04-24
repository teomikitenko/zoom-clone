import Link from "next/link";
import Image from "next/image";
import Home from "@/public/icons/Home.svg";
import Previous from "@/public/icons/previous.svg";
import Upcoming from "@/public/icons/upcoming.svg";
import Recordings from "@/public/icons/recordings.svg";
import Personal from "@/public/icons/add-personal.svg";

const LeftBar = () => {
  const links = [
    { title: "Home", img: Home, link: "/" },
    { title: "Upcoming", img: Upcoming, link: "upcoming" },
    { title: "Previous", img: Previous, link: "previous" },
    { title: "Recordings", img: Recordings, link: "recordings" },
    { title: "Personal Room", img: Personal, link: "personal-room" },
  ];
  return (
    <div className="h-full min-w-[17%]">
      <div className="pt-10 pl-5">
        <ul className="flex flex-col gap-6">
          {links.map((l) => (
            <Link key={l.title} href={l.link}>
              <div className="flex gap-4">
                <Image src={l.img} width={20} height={20} alt="icon" />
                <p>{l.title}</p>
              </div>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LeftBar;
