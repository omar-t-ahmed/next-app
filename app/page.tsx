import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <main>
      <h1>What would you like to ask?</h1>
      <Link href='/users'>All Users</Link>
      <ProductCard/>
    </main>
  );
}
