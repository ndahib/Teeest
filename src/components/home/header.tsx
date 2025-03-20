import { BookImage, MapIcon, MapPin, Menu, UserRound, X } from "lucide-react";
import { useState } from "preact/hooks";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header className="sticky top-0 w-full">
      <div className="px-2 lg:px-8 py-2.5 flex flex-wrap justify-between items-center mx-auto w-[90%]">
        <a href="#" className="flex itmes-center">
          <img
            src="../../src/assets/logo.png"
            className="mr-3 h-40 sm:h-[170px] w-40 sm:w-[213px]"
            alt="Logo of Trip"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex md:gap-6">
          <ul className="lg:flex font-semibold space-x-10 mt-0 text-2xl">
            <li>
              <a
                href="#"
                className="py-2 pr-4 pl-3 text-white rounded hover:text-primary-200"
                aria-current="page"
              >
                Destinations
              </a>
            </li>
            <li>
              <a
                href="#"
                className="py-2 pr-4 pl-3 text-white rounded hover:text-primary-200
                    lg:p-0"
                aria-current="page"
              >
                Members
              </a>
            </li>
            <li>
              <a
                href="#"
                className="py-2 pr-4 pl-3 text-white rounded hover:text-primary-200
                    lg:p-0"
                aria-current="page"
              >
                Gallery
              </a>
            </li>
          </ul>
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={showMenu} onOpenChange={setShowMenu}>
          {console.log(showMenu)}
          <SheetTrigger asChild>
            <button className="lg:hidden" onClick={() => setShowMenu(true)}>
              {showMenu ? (
                <X size={35} />
              ) : (
                <Menu className="text-white" size={35} />
              )}
            </button>
          </SheetTrigger>
          {showMenu && (
            <SheetContent side="left" className="">
              <nav className="flex gap-8 pt-12">
                <ul className="flex flex-col gap-6 font-semibold space-x-12 mt-0 text-2xl">
                  <li>
                    <a
                      href="#"
                      className="flex flex-row py-2 pr-4 pl-3 text-primary-900 rounded hover:text-primary-200"
                      aria-current="page"
                    >
                      <MapPin size={35} className="text-primary-900 pr-2" />
                      <span>Destinations</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex flex-row py-2 pr-4 pl-3 text-primary-900 rounded hover:text-primary-200"
                      aria-current="page"
                    >
                      <UserRound size={35} className="text-primary-900 pr-2" />
                      <span>Members</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex flex-row py-2 pr-4 pl-3 text-primary-900 rounded hover:text-primary-200"
                      aria-current="page"
                    >
                      <BookImage size={35} className="text-primary-900 pr-2" />
                      <span>Gallery</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </SheetContent>
          )}
        </Sheet>
      </div>
    </header>
  );
}
