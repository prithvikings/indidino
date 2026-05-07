import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'Choose the perfect plan for your personal or team memory layer. No hidden costs, no per-message fees ever. Start free with 1k tracks.',
  openGraph: {
    title: 'Pricing Plans | Shram.ai',
    description: 'Transparent pricing for freelancers, agencies, and teams. Find the flow with Shram.ai.',
  },
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}