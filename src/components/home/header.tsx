import { Menu, TentTree, X } from "lucide-react";
import { useState } from "preact/hooks";


export default function Header(){
    const [showMenu, setShowMenu] = useState(false)
    return (
        <header className="flex flex-row  items-center justify-between sm:justify-around p-2 text-white">
            <div className="flex">
                <TentTree className="text-white"/>
                <a href="/" className="text-transparent bg-clip-text bg-gradient-to-br from-yellow-400 to-yellow-500">Tree9Morocco</a>
            </div>
            <nav className="hidden sm:flex justify-between items-center gap-4 font-semibold">
                <a href="#">About</a>
                <a href="#">Discover</a>
                <a href="#">Events</a>
            </nav>
            <button>Sign In</button>
            <nav className="flex sm:hidden flex-col items-end gap-4 font-semibold">
                <button onClick={() => setShowMenu(!showMenu)}>
                    {!showMenu ? <Menu/> : <X/>}
                </button>
                {showMenu ? (
                    <>
                        <a href="#">About</a>
                        <a href="#">Discover</a>
                        <a href="#">Events</a>
                    </>
                ) : (
                    <></>
                )}
            </nav>
        </header>
    )
}