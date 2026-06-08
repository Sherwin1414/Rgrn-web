import Link from 'next/link';
import { getSession } from '@/lib/dal';
import CardNav from '@/components/CardNav';
import FeatureCards from '@/components/feature-cards';
import ServiceCarousel from '@/components/service-carousel';

export const metadata = {
  title: 'RGRN Funeral | Funeral Services',
  description: 'Professional funeral services and arrangements',
};

const navItems = [
  {
    label: 'About',
    bgColor: '#1e293b',
    textColor: '#fff',
    links: [
      { label: 'Company', href: '/about' },
      { label: 'FAQ', href: '/faq' },
    ],
  },
  {
    label: 'Services',
    bgColor: '#334155',
    textColor: '#fff',
    links: [
      { label: 'Our Services', href: '/services' },
      { label: 'Packages', href: '/packages' },
      { label: 'Pricing', href: '/pricing' },
    ],
  },
  {
    label: 'Support',
    bgColor: '#475569',
    textColor: '#fff',
    links: [
      { label: 'Contact', href: '/contact' },
      { label: 'Dashboard', href: '/dashboard' },
    ],
  },
];

export default async function HomePage() {
  const session = await getSession();

  return (
    <div className="w-full">
      <CardNav
        items={navItems}
        baseColor="#fff"
        menuColor="#1e293b"
        buttonBgColor="#2563eb"
        buttonTextColor="#fff"
        isLoggedIn={!!session}
        ctaHref={session ? '/dashboard/profile' : '/login'}
        ctaLabel="Sign In"
        ease="power3.out"
      />

      {/* Hero Section */}
      <section className="relative py-20 pt-28 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('https://www.image2url.com/r2/default/images/1780910399102-ea2ec2de-881e-4509-b4a3-2c72652ca985.png')` }}>
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-2xl">
            <h2 className="text-5xl font-bold text-white mb-6">
              Compassionate Funeral Services
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              We provide professional, respectful, and affordable funeral arrangements to help you honor your loved ones.
            </p>
            <div className="flex gap-4">
              <Link href="/packages" className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium">
                Explore Packages
              </Link>
              <Link href="/contact" className="px-8 py-3 border-2 border-white text-white rounded-lg font-medium hover:bg-white/10">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-12 text-center">
            Why Choose Us
          </h3>
          <FeatureCards />
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-2 text-center">
            📍 Visit Our Location
          </h3>
          <p className="text-center text-slate-600 dark:text-slate-400 mb-2 max-w-2xl mx-auto font-medium">
            0016 kamias strt, San Isidro, San Luis Pampanga
          </p>
          <p className="text-center text-blue-600 dark:text-blue-400 text-sm mb-8">
            📞 09162505163 &nbsp;|&nbsp; ✉️ rgrnfuneral@gmail.com
          </p>
          <div className="rounded-lg overflow-hidden border-2 border-blue-600 dark:border-blue-500 shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3851.423456789012!2d120.8194375!3d15.0248333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396fec139960dfb%3A0xd3807eb347c050c2!2sRgrn%20Funeral%20Servcies!5e0!3m2!1sen!2sph!4v1690000000000!5m2!1sen!2sph"
              width="100%"
              height="420"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="RGRN Funeral Location"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-12 text-center">
            Our Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              'Traditional Funeral Service',
              'Cremation Service',
              'Memorial Service',
              'Burial Service',
              'Transportation Service',
              'Funeral Planning',
            ].map((service, index) => (
              <div key={index} className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow">
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">{service}</h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  Professional and respectful {service.toLowerCase()} arrangements
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Gallery */}
      <section className="bg-slate-50 dark:bg-slate-800/50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-12 text-center">
            Our Service Gallery
          </h3>
          <ServiceCarousel />
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 dark:bg-blue-900 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold text-white mb-6">
            Ready to Plan Ahead?
          </h3>
          <p className="text-lg text-blue-100 mb-8">
            Browse our packages and start planning your funeral arrangements with our simple online process.
          </p>
          <Link href="/packages" className="inline-block px-8 py-3 bg-white text-blue-600 hover:bg-slate-100 rounded-lg font-medium">
            View Packages
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 dark:bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4">RGRN Funeral</h4>
              <p className="text-slate-400">Professional funeral services since 2020</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><Link href="/services" className="hover:text-white">Our Services</Link></li>
                <li><Link href="/packages" className="hover:text-white">Packages</Link></li>
                <li><Link href="/pricing" className="hover:text-white">Pricing</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><Link href="/about" className="hover:text-white">About Us</Link></li>
                <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
                <li><Link href="/faq" className="hover:text-white">FAQ</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <p className="text-slate-400 text-sm">
                Email: rgrnfuneral@gmail.com<br />
                Phone: 09162505163
              </p>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-slate-400 text-sm">
            <p>2024 RGRN Funeral. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}