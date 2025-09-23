import Header from '@/components/layout/Header';
import '@/styles/globals.css';
import type { Metadata } from 'next';
import { Bricolage_Grotesque, DM_Sans } from 'next/font/google';

const dmSans = DM_Sans({
  display: 'swap',
  variable: '--font-dm-sans',
  subsets: ['latin'],
});

const bricolageGrotesque = Bricolage_Grotesque({
  display: 'swap',
  variable: '--font-bricolage-grotesque',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Weather Now',
  description: 'Stay updated with the latest weather information',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${dmSans.className} ${bricolageGrotesque.variable} bg-neutral-900 antialiased`}>
        <div className='px-4 pt-4 pb-12 max-w-(--container) mx-auto md:pt-4 md:px-6 lg:pt-12 xl:px-0'>
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
