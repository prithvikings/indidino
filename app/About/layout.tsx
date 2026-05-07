import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about our mission to build a future where work manages itself. Exhibit integrity, embrace empathy, and pursue perfection with Shram.ai.',
  openGraph: {
    title: 'About Shram.ai | Our Mission & Values',
    description: 'We are building a future where work manages itself. Meet the team and learn about our core values.',
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
