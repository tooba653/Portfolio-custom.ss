import Link from "next/link";

export default function Contact() {
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
                <h3 className="contact-title">Contact Us</h3>
                <div className="contact-container">
                    <h4>
                        <i>Email:</i> yameentooba653@gmail.com
                    </h4>
                    <h4>Phone Numbers: 03452168078 | 03211230384</h4>
                </div>
            </main>
        </div>
    );
}
