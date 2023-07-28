import Link from "next/link";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body>
        {baseUrl}
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
