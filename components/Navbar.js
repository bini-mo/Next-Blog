
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-black text-white p-4">
      <ul className="flex gap-6">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/blog">Blog</Link></li>
      </ul>
    </nav>
  );
}
