import ContactForm from '@/components/forms/contact-form';
import Link from 'next/link';
import { getSession } from '@/lib/dal';
import CardNav from '@/components/CardNav';

export const metadata = {
  title: 'Contact Us | RGRN Funeral',
  description: 'Get in touch with our funeral services team',
};

export default async function ContactPage() {
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
            Contact Us
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl">
            We're here to help. Reach out with any questions or inquiries.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">
                Get in Touch
              </h2>

              <div className="space-y-8">
                {/* Phone */}
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Phone</h3>
                  <p className="text-lg text-blue-600 dark:text-blue-400">09162505163</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Available 24/7</p>
                </div>

                {/* Email */}
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Email</h3>
                  <p className="text-lg text-blue-600 dark:text-blue-400">rgrnfuneral@gmail.com</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">We'll respond within 24 hours</p>
                </div>

                {/* Address */}
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Address</h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    0016 kamias strt, San Isidro, San Luis Pampanga
                  </p>
                </div>

                {/* Hours */}
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Hours</h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    Monday - Friday: 8:00 AM - 6:00 PM<br />
                    Saturday: 9:00 AM - 5:00 PM<br />
                    Sunday: 10:00 AM - 4:00 PM<br />
                    Emergency: 24/7
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                Send us a Message
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-50 dark:bg-slate-800/50 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
            Need Immediate Assistance?
          </h3>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
            Call our 24/7 hotline for emergency support
          </p>
          <a href="tel:09162505163" className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium">
            Call 09162505163
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
