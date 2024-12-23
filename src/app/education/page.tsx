import Link from "next/link";

export default function Education() {
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
                <h3 className="education-title">Education</h3>
                <div className="education-container">
                    <ul className="education-list">
                        <li>
                            <strong>Matriculation:</strong> Science from Board of Sindh Education Karachi with 88%
                        </li>
                        <li>
                            <strong>Intermediate:</strong> commerce from Board of Intermediate Education Karachi with 70.14%
                        </li>
                        <li>
                            <strong>Bachelor:</strong> BBA from Metropolitan University Karachi  (ongoing)
                        </li>
                    </ul>
                </div>
            </main>
        </div>
    );
}
