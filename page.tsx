import Link from 'next/link';
export default function Home(){
 return <section className="hero"><div className="container">
  <img className="hero-logo" src="/logo.png" alt="Legend RolePlay"/>
  <h1>LEGEND <span className="red">ROLEPLAY</span></h1>
  <p className="subtitle">Welcome to Legend RolePlay. Build your story, create your legacy and join the city.</p>
  <div className="actions">
   <a className="btn btn-red" href="https://discord.gg/zYQFXrNWDS" target="_blank" rel="noreferrer">Join Discord</a>
   <a className="btn" href="fivem://connect/80.75.212.180">Connect FiveM</a>
   <Link className="btn" href="/application">Apply Now</Link>
  </div>
 </div></section>
}