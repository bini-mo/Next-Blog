import Link from 'next/link';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-indigo-600 to-purple-700 text-white flex flex-col items-center justify-center p-10 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
          Welcome to <span className="text-yellow-300">Bini Blog</span>
        </h1>
        <p className="text-xl md:text-2xl max-w-xl mb-8">
         Only My Opinions Matter!
        </p>
        <Link
          href="/blog"
          className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-full hover:bg-yellow-300 transition"
        >
          Read the Blog
        </Link>
      </div>
    </>
  );
}

