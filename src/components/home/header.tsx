import { TentTree } from "lucide-react";


export default function Header(){
    return (
        <header className="flex flex-row">
            <div className="flex">
                <TentTree />
                <span>Tree9Morocco</span>
            </div>
            <div className="flex justify-between">
                <span>
                    About
                </span>
                <span>
                    Discover
                </span>
                <span>
                    Events
                </span>
            </div>
            <button>Sign In</button>
        </header>
    )
}