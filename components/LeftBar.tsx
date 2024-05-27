import LeftBarNavigationLink from "./LeftBarNavigations";
import { NavigationLinks } from "@/constants";

const LeftBar = () => {
  return (
    <div className="hidden sm:block lg:min-h-full lg:min-w-[250px] 2xl:w-[350px]">
      <div className="pt-20 sticky top-0 pl-5 pr-4">
        <ul className="flex flex-col gap-6">
          {NavigationLinks.map((l) => (
            <LeftBarNavigationLink key={l.title} l={l} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LeftBar;
