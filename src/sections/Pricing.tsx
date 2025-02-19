'use client';
import CheckIcon from '@/assets/check.svg';
import { motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';

const pricingTiers = [
  {
    title: 'Free',
    monthlyPrice: 0,
    buttonText: 'Get started for free',
    popular: false,
    inverse: false,
    features: [
      'Up to 5 project members',
      'Unlimited tasks and projects',
      '2GB storage',
      'Integrations',
      'Basic support',
    ],
  },
  {
    title: 'Pro',
    monthlyPrice: 9,
    buttonText: 'Sign up now',
    popular: true,
    inverse: true,
    features: [
      'Up to 50 project members',
      'Unlimited tasks and projects',
      '50GB storage',
      'Integrations',
      'Priority support',
      'Advanced support',
      'Export support',
    ],
  },
  {
    title: 'Business',
    monthlyPrice: 19,
    buttonText: 'Sign up now',
    popular: false,
    inverse: false,
    features: [
      'Up to 5 project members',
      'Unlimited tasks and projects',
      '200GB storage',
      'Integrations',
      'Dedicated account manager',
      'Custom fields',
      'Advanced analytics',
      'Export capabilities',
      'API access',
      'Advanced security features',
    ],
  },
];

export const Pricing = () => {
  return (
    <section id="features" className="bg-white py-24">
      <div className="container">
        <div className="section-heading">
          <h2 className="section-title">Pricing</h2>
          <p className="section-description mt-5">
            Free forever. Upgrade for unlimited tasks, better security, and
            exclusive features.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-6  items-center lg:items-end lg:justify-center mt-10">
          {pricingTiers.map(
            ({
              title,
              monthlyPrice,
              buttonText,
              popular,
              inverse,
              features,
            }) => (
              <div
                key={title}
                className={twMerge(
                  'card',
                  inverse && 'border-black bg-black text-white'
                )}
              >
                <div className="flex justify-between">
                  <h3
                    className={twMerge(
                      'text-lg font-bold text-black/50',
                      inverse && 'text-white/60'
                    )}
                  >
                    {title}
                  </h3>
                  {popular && (
                    <div className="inline-flex text-sm px-4 py-1.5 rounded-xl border border-[#F1F1F1] border-white/20">
                      <motion.span
                        className="bg-[linear-gradient(to_right,#DD7DDF,#DD7DDF,#E1CD96,#BBCB92,#71C2EF,#3BFFFF)] [background-size:200%] text-transparent bg-clip-text font-medium"
                        animate={{
                          backgroundPositionX: '100%',
                        }}
                        transition={{
                          repeat: Infinity,
                          ease: 'linear',
                          repeatType: 'loop',
                          duration: 1,
                        }}
                      >
                        Popular
                      </motion.span>
                    </div>
                  )}
                </div>
                <div className="flex items-baseline gap-1 mt-[30px]">
                  <span className="text-4xl font-bold tracking-tighter leading-none">
                    {monthlyPrice}
                  </span>
                  <span
                    className={twMerge(
                      'tracking-tight font-bold text-black/50',
                      inverse && 'text-white/40'
                    )}
                  >
                    /month
                  </span>
                </div>
                <a
                  href="https://www.upwork.com/freelancers/~016ee239ce423c4bb7?mp_source=share"
                  target="_blank"
                  className={twMerge(
                    'btn btn-primary w-full mt-[30px] justify-center',
                    inverse && 'bg-white text-black'
                  )}
                >
                  {buttonText}
                </a>
                <ul className="flex flex-col gap-5 mt-8">
                  {features.map((feature) => (
                    <li
                      key={feature}
                      className="text-sm flex items-center gap-4"
                    >
                      <CheckIcon className="h-6 w-6" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};
