import Link from 'next/link';

export function Header() {
    return (
        <div className="navbar bg-base-100 shadow-sm flex justify-between">
            <div >
                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <ul className="menu menu-vertical lg:menu-horizontal bg-base-200 rounded-box">
                <li><Link to="./common/main">Item 1</Link></li>
                <li><a>Item 2</a></li>
                <li><a>Item 3</a></li>
            </ul>
            <div >
                <button className="btn btn-square btn-ghost">
                    <svg aria-label="More" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-5 w-5 stroke-current"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path> </svg>
                </button>
            </div>
        </div>

    );
}