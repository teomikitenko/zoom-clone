import Logo from "@/public/icons/logo.svg";
import Image from "next/image";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import BurgerMenu from './BurgerMenu';

const Header = () => {
  return (
    <header>
    <div className="w-full bg-[#1C1F2E] fixed z-20 py-4 px-5 flex justify-between">
      <div className="ml-3 flex gap-2">
        <Image src={Logo} width={35} alt="logo" />
        <h2 className="font-bold text-2xl hidden sm:flex items-center">Yoom</h2>
      </div>
      <div className="flex gap-3">
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
     <BurgerMenu/>
      </div>
      
    </div>
  </header>
  )
}

export default Header