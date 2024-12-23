import Link from "next/link";

export default function Skills() {
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
                <h3 className="skills-title">Skills</h3>
                <div className="skills-container">
                    <ul className="skills-list">
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>TypeScript</li>
                        <li>JavaScript</li>
                    </ul>
                </div>
            </main>
        </div>
    );
}
