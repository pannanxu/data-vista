import Link from "next/link";

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body>
        <ul>
            <li><Link href={'/'}>home</Link></li>
            <li><Link href={'/editor'}>editor</Link></li>
            <li><Link href={'/view'}>view</Link></li>
        </ul>
        {children}
        </body>
        </html>
    );
}
