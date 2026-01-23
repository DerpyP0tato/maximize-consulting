import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <Link href="/">
              <a className="text-xl font-bold font-heading tracking-tight text-white mb-4 block">
                Maximize<span className="text-white/60">Consulting</span>
              </a>
            </Link>
            <p className="text-zinc-400 max-w-sm mb-6">
              Automation, analytics, and technical strategy for small teams. 
              We help you build systems that scale.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-zinc-400">
              <li><Link href="/services"><a className="hover:text-white transition-colors">Automation</a></Link></li>
              <li><Link href="/services"><a className="hover:text-white transition-colors">Analytics</a></Link></li>
              <li><Link href="/services"><a className="hover:text-white transition-colors">Technical Strategy</a></Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-zinc-400">
              <li><Link href="/about"><a className="hover:text-white transition-colors">About</a></Link></li>
              <li><Link href="/how-it-works"><a className="hover:text-white transition-colors">Process</a></Link></li>
              <li><Link href="/contact"><a className="hover:text-white transition-colors">Contact</a></Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-zinc-500">
          <p>&copy; {new Date().getFullYear()} Maximize Consulting. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
