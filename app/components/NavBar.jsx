import Link from "next/link"
export default function NavBar() {
    return (
    <div className="navbar bg-base-100 fixed z-10 shadow-xl">
        <div className="flex-1">
            <Link href="/" className="btn btn-ghost text-xl">POD</Link>
        </div>
        <div className="flex-none">
            <ul className="menu menu-horizontal px-1 gap-3">
                <li><Link href="/search" className="btn bg-primary text-white">SEARCH</Link></li>
                <li><Link className="btn bg-secondary text-white" href="https://t.me/atl5d" target="_blank">T.ME/ATL5D</Link></li>
            </ul>
        </div>
    </div>
    )
}