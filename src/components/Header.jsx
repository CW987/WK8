import Link from "next/link";

export default function Header() {
    return (
        <>
        <header>
            <h1>App title for all pages</h1> //!Change me
            <nav>
                <Link href={"/"}>Home</Link>
                <Link href={"/about"}>About</Link>
            </nav>
        </header>
        </>
    )
}