import Link from 'next/link';


const menuItems = [
    {name: "Home", link:"/"},
    {name:"Articles", link:"/articles"},
    {name: "Comments", link:"/comments"},
    {name:"Help", link:"/help"}
];

export function Header() {
    return (
        <div className="navbar bg-base-100 shadow-sm flex justify-between">
            <div >
                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <ul className="menu menu-vertical lg:menu-horizontal bg-base-200 rounded-box">

                {menuItems.map((item) => (<li><a href={item.link}>{item.name}</a></li>))}
            </ul>
            <div >
                <button className="btn btn-square btn-ghost">
                    <svg aria-label="More" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-5 w-5 stroke-current"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path> </svg>
                </button>
            </div>
        </div>

    );
}