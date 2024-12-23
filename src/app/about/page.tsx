import Link from "next/link";

export default function About() {
    return (
        <div className="container">
            <header>
                <h4 className="simple-resume-header">Simple Resume</h4>
            </header>
            <nav>
                <ul className="navigation-list">
                    <li className="navigation-item">
                        <Link href="/">Home</Link>
                    </li>
                    <li className="navigation-item">
                        <Link href="/about">About</Link>
                    </li>
                    <li className="navigation-item">
                        <Link href="/skills">Skills</Link>
                    </li>
                    <li className="navigation-item">
                        <Link href="/education">Education</Link>
                    </li>
                    <li className="navigation-item">
                        <Link href="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
            <main>
                <h3 className="about-title">About Me</h3>
                <div className="about-container">
                    <h4><b>Name:</b> Tooba</h4>
                    <h4><b>Father&apos;s Name:</b> Muhammad Yameen</h4> 
                    <h4><b>Nationality:</b> Pakistani</h4>
                    <h4><b>Date of Birth:</b> 1-August-2003</h4>
                    <h4><b>Religion:</b> Islam</h4>
                </div>
            </main>
        </div>
    );
}
