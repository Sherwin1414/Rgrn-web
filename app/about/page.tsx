import Link from 'next/link';
import { getSession } from '@/lib/dal';
import CardNav from '@/components/CardNav';

export const metadata = {
  title: 'About Us | RGRN Funeral',
  description: 'Learn more about our funeral services and mission',
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

export default async function AboutPage() {
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
        />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 py-20 pt-28">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-bold text-slate-900 dark:text-white mb-6">
            About RGRN Funeral
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl">
            Serving families with compassion and professionalism since 2020
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                Our Mission
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-4">
                At RGRN Funeral, we believe that honoring loved ones should be accessible, 
                transparent, and filled with dignity. Our mission is to provide compassionate, 
                professional funeral services that help families celebrate the lives of those 
                they've lost.
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-400">
                We've embraced modern technology to make funeral planning simpler, more 
                affordable, and more respectful. Every family deserves exceptional service 
                during their time of need.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Our Values</h3>
              <ul className="space-y-3">
                <li>✓ Compassion in every interaction</li>
                <li>✓ Respect for your loved ones</li>
                <li>✓ Transparency in pricing</li>
                <li>✓ Professional service excellence</li>
                <li>✓ Innovation in funeral care</li>
                <li>✓ Community support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="bg-slate-50 dark:bg-slate-800/50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12 text-center">
            Our Founders
          </h2>
          <div className="flex flex-col items-center mb-10">
            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-blue-600 shadow-xl mb-6">
              <img
                src="https://www.image2url.com/r2/default/images/1780919141068-692e1787-f07a-4dae-9328-68314b0f7a60.jpg"
                alt="Founders of RGRN Funeral Services"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              Lisa Guevarra Naguit &amp; Enrique Naguit
            </h3>
            <p className="text-blue-600 dark:text-blue-400 font-medium">Founders, RGRN Funeral Services</p>
          </div>
          <div className="max-w-3xl mx-auto text-center text-lg text-slate-600 dark:text-slate-400 space-y-6">
            <p>
              In 2018, Lisa Guevarra Naguit and Enrique Naguit established RGRN Funeral Services with the goal of helping families during the loss of a loved one. They wanted to provide caring, respectful, and reliable funeral services that would give comfort and support to families during difficult times.
            </p>
            <p>
              With the help of the RGRN Team, the company has been able to provide quality service to every family they serve. The team is committed to treating clients with kindness, respect, and understanding, ensuring that their needs are met with care and professionalism.
            </p>
            <p>
              Since its founding, Lisa Guevarra Naguit, Enrique Naguit, and the entire RGRN Team have continued to work hard to provide the best possible service. Through their dedication and teamwork, RGRN Funeral Services remains committed to serving families with compassion, dignity, and support, helping them honor the memories of their loved ones.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 dark:bg-blue-900 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold text-white mb-6">
            Ready to Plan Ahead?
          </h3>
          <p className="text-lg text-blue-100 mb-8">
            Explore our services and packages, or contact us for personalized assistance.
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