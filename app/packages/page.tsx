import Link from 'next/link';
import { getSession } from '@/lib/dal';
import CardNav from '@/components/CardNav';

export const metadata = {
  title: 'Packages | RGRN Funeral',
  description: 'Browse our funeral service packages',
};

const packages = [
  {
    name: 'Basic',
    price: 2500,
    description: 'Essential funeral services for families seeking simplicity',
    services: [
      'Cremation or burial',
      'Casket/urn selection',
      'Transportation',
      'Basic memorial',
      'Documentation assistance',
    ],
    addOns: ['Flowers', 'Photography', 'Video recording'],
    popular: false,
  },
  {
    name: 'Standard',
    price: 5000,
    description: 'Comprehensive service with viewing and ceremony',
    services: [
      'Viewing and visitation',
      'Funeral ceremony',
      'Casket and flowers',
      'Transportation',
      'Graveside service',
      'Reception facility',
    ],
    addOns: ['Catering', 'Guest book', 'Personalized program'],
    popular: true,
  },
  {
    name: 'Premium',
    price: 7500,
    description: 'Enhanced service with premium options',
    services: [
      'Extended viewing hours',
      'Premium casket selection',
      'Full funeral service',
      'Professional staff',
      'Guest accommodations coordination',
      'Reception with catering',
      'Live streaming ceremony',
    ],
    addOns: ['Band/DJ', 'Video tribute', 'Memorial DVD'],
    popular: false,
  },
  {
    name: 'VIP',
    price: 10000,
    description: 'White-glove service with all premium amenities',
    services: [
      ' 24-hour private viewing',
      'Premium casket/urn',
      'Full funeral ceremony',
      'Dedicated staff member',
      'International arrangements',
      'Premium reception',
      'Video streaming',
      'Guest transportation',
      'Personalization services',
    ],
    addOns: ['Limousine service', 'Custom memorial', 'Concierge service'],
    popular: false,
  },
];

export default async function PackagesPage() {
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
        />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 py-20 pt-28">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Funeral Packages
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl">
            Choose the package that best fits your family's needs and budget
          </p>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {packages.map((pkg, index) => (
              <div 
                key={index} 
                className={`relative rounded-lg overflow-hidden transition-all ${
                  pkg.popular 
                    ? 'ring-2 ring-blue-600 lg:scale-105 bg-white dark:bg-slate-800 shadow-2xl' 
                    : 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:shadow-lg'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-blue-600 text-white text-sm font-semibold py-2 text-center">
                    Most Popular
                  </div>
                )}
                
                <div className={`p-8 ${pkg.popular ? 'pt-16' : ''}`}>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                    {pkg.name}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
                    {pkg.description}
                  </p>

                  {/* Price */}
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-slate-900 dark:text-white">
                      ${pkg.price.toLocaleString()}
                    </span>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">starting price</p>
                  </div>

                  {/* Services List */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Includes:</h4>
                    <ul className="space-y-2">
                      {pkg.services.map((service, serviceIndex) => (
                        <li key={serviceIndex} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                          <span className="text-blue-600 dark:text-blue-400 font-bold">✓</span>
                          {service}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Add-ons */}
                  <div className="mb-6 pb-6 border-b border-slate-200 dark:border-slate-700">
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-2 text-sm">Available Add-ons:</h4>
                    <div className="flex flex-wrap gap-2">
                      {pkg.addOns.map((addOn, addOnIndex) => (
                        <span 
                          key={addOnIndex} 
                          className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded"
                        >
                          {addOn}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <a
                    href="/signup"
                    className={`block w-full py-2 px-4 rounded-lg font-medium text-center transition-colors ${
                      pkg.popular
                        ? 'bg-blue-600 hover:bg-blue-700 text-white'
                        : 'bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-900 dark:text-white'
                    }`}
                  >
                    Choose Package
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="bg-slate-50 dark:bg-slate-800/50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12 text-center">
            Package Comparison
          </h2>
          
          <div className="bg-white dark:bg-slate-800 rounded-lg overflow-hidden border border-slate-200 dark:border-slate-700">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-slate-50 dark:bg-slate-700">
                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900 dark:text-white">Feature</th>
                    {packages.map((pkg) => (
                      <th key={pkg.name} className="px-6 py-4 text-center text-sm font-semibold text-slate-900 dark:text-white">
                        {pkg.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: 'Cremation Option', basic: true, standard: true, premium: true, vip: true },
                    { feature: 'Burial Option', basic: true, standard: true, premium: true, vip: true },
                    { feature: 'Viewing Hours', basic: '2 hours', standard: '4 hours', premium: '8 hours', vip: '24 hours' },
                    { feature: 'Funeral Ceremony', basic: false, standard: true, premium: true, vip: true },
                    { feature: 'Reception Facility', basic: false, standard: true, premium: true, vip: true },
                    { feature: 'Video Streaming', basic: false, standard: false, premium: true, vip: true },
                    { feature: 'Personalization', basic: 'Limited', standard: 'Standard', premium: 'Premium', vip: 'Full' },
                  ].map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? '' : 'bg-slate-50 dark:bg-slate-700/50'}>
                      <td className="px-6 py-4 text-sm font-medium text-slate-900 dark:text-white">
                        {row.feature}
                      </td>
                      {packages.map((pkg) => {
                        const key = pkg.name.toLowerCase() as keyof typeof row;
                        const value = row[key] as boolean | string;
                        return (
                          <td key={pkg.name} className="px-6 py-4 text-center text-sm text-slate-600 dark:text-slate-400">
                            {typeof value === 'boolean' ? (
                              value ? (
                                <span className="text-green-600 dark:text-green-400 font-semibold">✓</span>
                              ) : (
                                <span className="text-slate-400">-</span>
                              )
                            ) : (
                              value
                            )}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12 text-center">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-6">
            {[
              {
                q: 'Can I customize a package?',
                a: 'Yes! All our packages can be customized to meet your specific needs. Contact us to discuss options.',
              },
              {
                q: 'Are there payment plans available?',
                a: 'Yes. We offer flexible payment plans to make our services accessible to all families.',
              },
              {
                q: 'What if I need something not listed?',
                a: 'Please contact us directly. We can arrange additional services based on your needs.',
              },
              {
                q: 'Is there a cancellation policy?',
                a: 'We offer full refunds within 30 days of payment. Contact us for details.',
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-slate-200 dark:border-slate-700">
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">{item.q}</h3>
                <p className="text-slate-600 dark:text-slate-400">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 dark:bg-blue-900 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold text-white mb-6">
            Ready to Get Started?
          </h3>
          <p className="text-lg text-blue-100 mb-8">
            Choose a package or contact us for personalized assistance.
          </p>
          <a href="/contact" className="inline-block px-8 py-3 bg-white text-blue-600 hover:bg-slate-100 rounded-lg font-medium">
            Contact Our Team
          </a>
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
