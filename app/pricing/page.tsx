import { getSession } from '@/lib/dal';
import CardNav from '@/components/CardNav';

export const metadata = {
  title: 'Pricing | RGRN Funeral',
  description: 'View our transparent funeral service pricing',
};

export default async function PricingPage() {
  const session = await getSession();

  const navItems = [
    { label: 'About', bgColor: '#1e293b', textColor: '#fff', links: [{ label: 'Company', href: '/about' }, { label: 'FAQ', href: '/faq' }] },
    { label: 'Services', bgColor: '#334155', textColor: '#fff', links: [{ label: 'Our Services', href: '/services' }, { label: 'Packages', href: '/packages' }, { label: 'Pricing', href: '/pricing' }] },
    { label: 'Support', bgColor: '#475569', textColor: '#fff', links: [{ label: 'Contact', href: '/contact' }, { label: 'Dashboard', href: '/dashboard' }] },
  ];

  return (
    <div className="w-full">
      <CardNav items={navItems} baseColor="#fff" menuColor="#1e293b" buttonBgColor="#2563eb" buttonTextColor="#fff" isLoggedIn={!!session} ctaHref={session ? '/dashboard/profile' : '/login'} ctaLabel="Sign In" />
      <section className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 py-20 pt-28">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-bold text-slate-900 dark:text-white mb-6">Transparent Pricing</h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl">No hidden fees. All prices clearly listed.</p>
        </div>
      </section>
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { name: 'Basic', price: '$2,500', desc: 'Essential services for simplicity', features: ['Cremation or burial', 'Casket/urn selection', 'Transportation', 'Basic memorial', 'Documentation'] },
              { name: 'Standard', price: '$5,000', desc: 'Comprehensive service', popular: true, features: ['Viewing and visitation', 'Funeral ceremony', 'Casket and flowers', 'Transportation', 'Graveside service', 'Reception facility'] },
              { name: 'Premium', price: '$7,500', desc: 'Enhanced service with premium options', features: ['Extended viewing hours', 'Premium casket', 'Full funeral service', 'Staff coordination', 'Live streaming', 'Reception + catering'] },
              { name: 'VIP', price: '$10,000', desc: 'White-glove premium experience', features: ['24-hour private viewing', 'Premium casket/urn', 'Full ceremony', 'Dedicated staff', 'International arrangements', 'Premium reception', 'Video streaming', 'Guest transportation'] },
            ].map((pkg, idx) => (
              <div key={idx} className={`rounded-lg overflow-hidden ${pkg.popular ? 'ring-2 ring-blue-600 lg:scale-105 bg-white dark:bg-slate-800 shadow-2xl' : 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700'}`}>
                {pkg.popular && <div className="bg-blue-600 text-white text-sm font-semibold py-2 text-center">Most Popular</div>}
                <div className={`p-8 ${pkg.popular ? 'pt-10' : ''}`}>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{pkg.name}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">{pkg.desc}</p>
                  <div className="mb-6"><span className="text-4xl font-bold text-slate-900 dark:text-white">{pkg.price}</span></div>
                  <ul className="space-y-2 mb-6">
                    {pkg.features.map((f, i) => (<li key={i} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400"><span className="text-blue-600 font-bold">✓</span>{f}</li>))}
                  </ul>
                  <a href="/signup" className={`block w-full py-2 px-4 rounded-lg font-medium text-center transition-colors ${pkg.popular ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-900 dark:text-white'}`}>
                    Choose Package
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-blue-600 dark:bg-blue-900 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h3>
          <p className="text-lg text-blue-100 mb-8">Choose a package that fits your family's needs.</p>
          <a href="/packages" className="inline-block px-8 py-3 bg-white text-blue-600 hover:bg-slate-100 rounded-lg font-medium">View All Packages</a>
        </div>
      </section>
      <footer className="bg-slate-900 dark:bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div><h4 className="font-bold mb-4">RGRN Funeral</h4><p className="text-slate-400">Professional funeral services</p></div>
            <div><h4 className="font-bold mb-4">Services</h4><ul className="space-y-2 text-slate-400 text-sm"><li><a href="/services" className="hover:text-white">Our Services</a></li><li><a href="/packages" className="hover:text-white">Packages</a></li></ul></div>
            <div><h4 className="font-bold mb-4">Company</h4><ul className="space-y-2 text-slate-400 text-sm"><li><a href="/about" className="hover:text-white">About</a></li><li><a href="/contact" className="hover:text-white">Contact</a></li></ul></div>
            <div><h4 className="font-bold mb-4">Contact</h4><p className="text-slate-400 text-sm">09162505163</p></div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-slate-400 text-sm"><p>&copy; 2024 RGRN Funeral. All rights reserved.</p></div>
        </div>
      </footer>
    </div>
  );
}