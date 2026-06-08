import { getSession } from '@/lib/dal';
import CardNav from '@/components/CardNav';

export const metadata = {
  title: 'FAQ | RGRN Funeral',
  description: 'Frequently asked questions about our funeral services',
};

const faqs = [
  {
    category: 'General Questions',
    questions: [
      {
        q: 'What is RGRN Funeral?',
        a: 'RGRN Funeral is a professional funeral services company dedicated to providing compassionate and dignified funeral arrangements for families. We offer comprehensive services including traditional funerals, cremations, and memorial services.',
      },
      {
        q: 'How long have you been in business?',
        a: 'We have been serving families with professionalism and compassion since 2020. Our experienced team continues to uphold the highest standards in funeral care.',
      },
      {
        q: 'Are your services available 24/7?',
        a: 'Yes, we provide 24/7 support for families in need. You can reach us anytime at 09162505163.',
      },
    ],
  },
  {
    category: 'Services & Packages',
    questions: [
      {
        q: 'What funeral services do you offer?',
        a: 'We offer traditional funerals, cremation services, memorial services, burial services, transportation services, and funeral pre-planning.',
      },
      {
        q: 'Can I customize my package?',
        a: 'Absolutely! All our packages can be customized with add-on services like flowers, catering, photography, and more.',
      },
      {
        q: 'How do I book a service?',
        a: 'You can sign up for an account, browse our packages, and select the one that fits your needs. You can also contact us directly.',
      },
    ],
  },
  {
    category: 'Pricing & Payments',
    questions: [
      {
        q: 'Are your prices transparent?',
        a: 'Yes, we believe in complete transparency. All prices are clearly listed on our packages page.',
      },
      {
        q: 'What payment methods do you accept?',
        a: 'We accept all major credit cards, debit cards, and bank transfers. We also offer flexible payment plans.',
      },
    ],
  },
  {
    category: 'Support',
    questions: [
      {
        q: 'How do I contact you?',
        a: 'You can reach us via the Contact page, email us, or call 09162505163 for 24/7 support.',
      },
      {
        q: 'Can I schedule a consultation?',
        a: 'Yes, we offer free consultations to discuss your needs, preferences, and questions. Contact us to schedule yours.',
      },
    ],
  },
];

export default async function FAQPage() {
  const session = await getSession();

  const navItems = [
    { label: 'About', bgColor: '#1e293b', textColor: '#fff', links: [{ label: 'Company', href: '/about' }, { label: 'FAQ', href: '/faq' }] },
    { label: 'Services', bgColor: '#334155', textColor: '#fff', links: [{ label: 'Our Services', href: '/services' }, { label: 'Packages', href: '/packages' }, { label: 'Pricing', href: '/pricing' }] },
    { label: 'Support', bgColor: '#475569', textColor: '#fff', links: [{ label: 'Contact', href: '/contact' }, { label: 'Dashboard', href: '/dashboard' }] },
  ];

  return (
    <div className="w-full">
      <CardNav items={navItems} baseColor="#fff" menuColor="#1e293b" buttonBgColor="#2563eb" buttonTextColor="#fff" isLoggedIn={!!session} ctaHref={session ? '/dashboard/profile' : '/login'} ctaLabel="Sign In" ease="power3.out" />
      <section className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 py-20 pt-28">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-bold text-slate-900 dark:text-white mb-6">Frequently Asked Questions</h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl">Find answers to common questions about our services</p>
        </div>
      </section>
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-12">
            {faqs.map((category, catIdx) => (
              <div key={catIdx}>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">{category.category}</h2>
                <div className="space-y-4">
                  {category.questions.map((item, qIdx) => (
                    <div key={qIdx} className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-slate-200 dark:border-slate-700">
                      <h3 className="font-semibold text-slate-900 dark:text-white mb-2">{item.q}</h3>
                      <p className="text-slate-600 dark:text-slate-400">{item.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-blue-600 dark:bg-blue-900 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold text-white mb-6">Still Have Questions?</h3>
          <p className="text-lg text-blue-100 mb-8">Contact our team for personalized assistance.</p>
          <a href="/contact" className="inline-block px-8 py-3 bg-white text-blue-600 hover:bg-slate-100 rounded-lg font-medium">Contact Us</a>
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