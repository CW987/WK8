import Link from "next/link";

export default function Header() {
    return (
        <>
        <header>
            <h1>Wolves!</h1>
            <nav>
                <Link href={"/"}>Home </Link>  
                <Link href={"/about"}>About</Link>
            </nav>
        </header>
        </>
    )
}