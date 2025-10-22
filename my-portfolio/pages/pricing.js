import Layout from '../components/Layout';
import { FaCheckCircle } from 'react-icons/fa';

const pricingTiers = [
  {
    name: 'Basic',
    price: '$500',
    features: [
      'Up to 5-minute video',
      'Basic Editing & Color Correction',
      '2 Rounds of Revisions',
      'Royalty-Free Music',
    ],
    cta: 'Choose Plan',
  },
  {
    name: 'Standard',
    price: '$1200',
    features: [
      'Up to 15-minute video',
      'Advanced Editing & Color Grading',
      'Basic Motion Graphics',
      '4 Rounds of Revisions',
      'Custom Thumbnail Graphic',
    ],
    cta: 'Choose Plan',
    popular: true,
  },
  {
    name: 'Premium',
    price: '$2500',
    features: [
      'Up to 30-minute video or multiple short videos',
      'Premium Editing & Cinematic Color Grading',
      'Advanced Motion Graphics & VFX',
      'Unlimited Revisions',
      'Full Social Media Kit',
    ],
    cta: 'Choose Plan',
  },
];

export default function Pricing() {
  return (
    <Layout title="Pricing | Zulqarnain Ali">
      <div className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-indigo-400 font-semibold tracking-wide uppercase">Pricing Plans</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
              Find the Right Plan for Your Project
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {pricingTiers.map((tier) => (
              <div key={tier.name} className={`bg-gray-800 rounded-lg shadow-lg p-8 flex flex-col ${tier.popular ? 'border-2 border-indigo-500' : ''}`}>
                {tier.popular && <span className="bg-indigo-500 text-white text-xs font-bold px-3 py-1 rounded-full self-start mb-4">POPULAR</span>}
                <h3 className="text-2xl font-bold text-white text-center">{tier.name}</h3>
                <p className="text-4xl font-bold text-center my-4">{tier.price}</p>
                <ul className="space-y-4 mb-8 flex-grow">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <FaCheckCircle className="text-green-500 mr-3" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
                  {tier.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
