import Link from 'next/link';
export default function Navbar(){
 return <nav className="nav">
  <Link className="brand" href="/"><img src="/logo.png" alt="Legend RolePlay"/><span>LEGEND ROLEPLAY</span></Link>
  <div className="navlinks">
   <Link href="/">Home</Link><Link href="/shop">Shop</Link><Link href="/galerie">Galerie</Link>
   <Link href="/application">Application</Link><Link href="/rules">Rules</Link><Link href="/staff">Staff</Link>
  </div>
 </nav>
}