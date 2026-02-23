import { Metadata } from 'next';
import Navbar from '@/components/site/layout/Navbar';
import Footer from '@/components/site/layout/Footer';

export const metadata: Metadata = {
  title: 'Beranjak Photo',
  description: 'Abadikan momen terbaikmu bersama Beranjak Photo',
};

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 overflow-hidden">
        {children}
      </main>
      <Footer />
    </div>
  );
}