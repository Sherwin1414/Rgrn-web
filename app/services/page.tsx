import Link from 'next/link';
import { getSession } from '@/lib/dal';
import CardNav from '@/components/CardNav';

export const metadata = {
  title: 'Services | RGRN Funeral',
  description: 'Explore our comprehensive funeral services',
};

const services = [
  {
    title: 'Traditional Funeral Service',
    description: 'A formal service with viewing and burial, honoring time-honored traditions.',
    features: [
      'Viewing and visitation hours',
      'Funeral ceremony',
      'Graveside service',
      'Casket and flowers',
      'Transportation',
    ],
  },
  {
    title: 'Cremation Service',
    description: 'A respectful cremation with memorial service options.',
    features: [
      'Cremation process',
      'Memorial service',
      'Urn selection',
      'Ash scattering options',
      'Certification & documentation',
    ],
  },
  {
    title: 'Memorial Service',
    description: 'Celebrate life with a personalized memorial gathering.',
    features: [
      'Customizable ceremonies',
      'Music and readings',
      'Photo displays',
      'Venue coordination',
      'Refreshments & reception',
    ],
  },
  {
    title: 'Burial Service',
    description: 'Professional grave preparation and burial arrangements.',
    features: [
      'Grave site selection',
      'Vault preparation',
      'Headstone coordination',
      'Burial ceremony',
      'Cemetery liaison',
    ],
  },
  {
    title: 'Transportation Service',
    description: 'Dignified transport of your loved one.',
    features: [
      'Local transportation',
      'Long-distance arrangements',
      'Air transport coordination',
      'International transfer',
      'Documentation assistance',
    ],
  },
  {
    title: 'Funeral Planning',
    description: 'Plan ahead with our pre-planning services.',
    features: [
      'Pre-arrangement counseling',
      'Preference documentation',
      'Payment plan options',
      'Benefit guidance',
      'Family consultation',
    ],
  },
];

export default async function ServicesPage() {
  const session = await getSession();

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
      <section className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 py-20 pt-28">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Our Services
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl">
            Comprehensive funeral services designed to honor your loved ones with dignity and respect
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div key={index} className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-6">
                    {service.description}
                  </p>
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-4">Includes:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3 text-slate-600 dark:text-slate-400">
                        <span className="text-blue-600 dark:text-blue-400 font-bold">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-slate-50 dark:bg-slate-800/50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12 text-center">
            Why Choose Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: '💰',
                title: 'Transparent Pricing',
                description: 'No hidden fees. All prices clearly listed upfront.',
              },
              {
                icon: '👥',
                title: 'Expert Team',
                description: 'Licensed professionals with years of experience.',
              },
              {
                icon: '🕐',
                title: '24/7 Availability',
                description: 'Available whenever you need us, day or night.',
              },
              {
                icon: '✨',
                title: 'Personal Touch',
                description: 'Customized services tailored to your needs.',
              },
            ].map((item, index) => (
              <div key={index} className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-slate-200 dark:border-slate-700 text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-slate-900 dark:text-white mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 dark:bg-blue-900 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold text-white mb-6">
            Ready to Book a Service?
          </h3>
          <p className="text-lg text-blue-100 mb-8">
            Explore our packages or contact our team for personalized assistance.
          </p>
          <div className="flex gap-4 justify-center">
            <a href="/packages" className="px-8 py-3 bg-white text-blue-600 hover:bg-slate-100 rounded-lg font-medium">
              View Packages
            </a>
            <a href="/contact" className="px-8 py-3 border-2 border-white text-white hover:bg-blue-700 rounded-lg font-medium">
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 dark:bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4">RGRN Funeral</h4>
              <p className="text-slate-400">Professional funeral services</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="/services" className="hover:text-white">Our Services</a></li>
                <li><a href="/packages" className="hover:text-white">Packages</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="/about" className="hover:text-white">About</a></li>
                <li><a href="/contact" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <p className="text-slate-400 text-sm">09162505163</p>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-slate-400 text-sm">
            <p>&copy; 2024 RGRN Funeral. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
