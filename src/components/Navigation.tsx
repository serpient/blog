import Link from "next/link";

export default function Navigation() {
  return (
    <nav>
      <Link href="/">
        <h1 className="logo">Spend to Save</h1>
      </Link>

      <div className="nav-container">
        <Link href="/posts">
          <a>blog</a>
        </Link>
      </div>
    </nav>
  );
}
