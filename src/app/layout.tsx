import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import './globals.css';
import clsx from 'clsx';

const dmSans = DM_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'TRACKLY | SaaS',
  description:
    'Celebrate the joy of accomplishment with an app designed to track your progress, motivate your efforts, and celebrate your successes.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="relative">
      <body className={clsx(dmSans.className, 'antialiased bg-[#EAEEFE]')}>
        {children}
      </body>
    </html>
  );
}
