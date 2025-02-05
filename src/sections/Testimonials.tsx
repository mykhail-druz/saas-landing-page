'use client';
import avatar1 from '@/assets/avatar-1.png';
import avatar2 from '@/assets/avatar-2.png';
import avatar3 from '@/assets/avatar-3.png';
import avatar4 from '@/assets/avatar-4.png';
import avatar5 from '@/assets/avatar-5.png';
import avatar6 from '@/assets/avatar-6.png';
import avatar7 from '@/assets/avatar-7.png';
import avatar8 from '@/assets/avatar-8.png';
import avatar9 from '@/assets/avatar-9.png';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';
import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    text: 'This tool revolutionized my design process, unlocking a new level of creativity.',
    imageSrc: avatar2.src,
    name: 'Alexander Johnson',
    username: '@alexj_design',
  },
  {
    text: "Since integrating this platform into our workflow, our team's productivity has soared.",
    imageSrc: avatar1.src,
    name: 'Emily Davis',
    username: '@emily_pro',
  },
  {
    text: 'The intuitive interface and powerful features have transformed how I manage projects.',
    imageSrc: avatar3.src,
    name: 'Michael Thompson',
    username: '@mike.thompson',
  },
  {
    text: 'I appreciate how seamlessly this app fits into our daily operations, making work more efficient.',
    imageSrc: avatar4.src,
    name: 'Casey Jordan',
    username: '@caseyj',
  },
  {
    text: 'This platform has streamlined our communication and boosted our overall performance.',
    imageSrc: avatar5.src,
    name: 'David Martinez',
    username: '@david_martinez',
  },
  {
    text: 'The robust functionality and ease of use have made it an indispensable tool for our team.',
    imageSrc: avatar6.src,
    name: 'Olivia Brown',
    username: '@olivia_brown',
  },
  {
    text: 'With its extensive customization options, this tool perfectly adapts to our unique business needs.',
    imageSrc: avatar7.src,
    name: 'Christopher Lee',
    username: '@chrislee_creative',
  },
  {
    text: 'Its efficiency and user-friendly design have greatly enhanced our project management process.',
    imageSrc: avatar8.src,
    name: 'Laura Miller',
    username: '@laura.miller',
  },
  {
    text: 'I highly recommend this app for teams looking to innovate and elevate their workflow.',
    imageSrc: avatar9.src,
    name: 'James Anderson',
    username: '@james_anderson',
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const TestimonialsColumn = (props: {
  className?: string;
  testimonials: typeof testimonials;
  duration?: number;
}) => (
  <div className={props.className}>
    <motion.div
      animate={{
        translateY: '-50%',
      }}
      transition={{
        repeat: Infinity,
        ease: 'linear',
        repeatType: 'loop',
        duration: props.duration || 10,
      }}
      className={twMerge('flex flex-col gap-6 pb-6')}
    >
      {[...new Array(2)].fill(0).map((_, index) => (
        <React.Fragment key={index}>
          {props.testimonials.map(({ text, imageSrc, name, username }) => (
            <div key={username} className="card">
              <div>{text}</div>
              <div className="flex items-center gap-2 mt-5">
                <Image
                  src={imageSrc}
                  alt={name}
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-full"
                />
                <div className="flex flex-col">
                  <div className="font-medium tracking-tight leading-5">
                    {name}
                  </div>
                  <div className="leading-5 tracking-tight">{username}</div>
                </div>
              </div>
            </div>
          ))}
        </React.Fragment>
      ))}
    </motion.div>
  </div>
);

export const Testimonials = () => {
  return (
    <section id="customers" className="bg-white">
      <div className="container">
        <div className="section-header">
          <div className="flex justify-center">
            <div className="tag">Testimonials</div>
          </div>
          <h2 className="section-title mt-5">Whats our users say</h2>
          <p className="section-description mt-5">
            From intuitive design to powerful features, ou app has become an
            essential tool for users around the world.
          </p>
        </div>
        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[738px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:block"
            duration={19}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={17}
          />
        </div>
      </div>
    </section>
  );
};
