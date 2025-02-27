import Link from "next/link";

import logoImg from '@/assets/logo.png'
import classes from './main-header.module.css';
import Image from "next/image";
import MainHeaderBackground from "@/components/main-header/main-header-background";
import NavLink from "@/components/main-header/nav-link";

export default function MainHeader() {
    return (
        <>
            <MainHeaderBackground />
            <header className={classes.header}>
                <Link href="/" className={classes.logo}>
                    <Image src={logoImg} alt="A place with food on it" priority/>
                    Next Level Food
                </Link>

                <nav className={classes.nav}>
                    <ul>
                        <li>
                            <NavLink href="/meals">Explore Meals</NavLink>
                        </li>
                        <li>
                            <NavLink href="/community">Foodies Community</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
}