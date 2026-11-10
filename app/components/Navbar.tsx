import Link from "next/link"; // 1. Il manquait cet import

export function Navbar() {
    return (
        <nav className="bg-gray-800 text-white p-4">
            <ul className="flex space-x-4">
                <li>
                    <Link href="/" className="hover:text-gray-400">
                        Home
                    </Link>
                </li>
                <li>
                    <Link href="/my_first_page" className="hover:text-gray-400">
                        My First Page
                    </Link>
                </li>
                <li>
                    <Link href="/page_cv" className="hover:text-gray-400">
                        page de cv
                    </Link>
                </li>
            </ul>
        </nav>
    );
}