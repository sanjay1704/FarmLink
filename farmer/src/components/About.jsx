import React from 'react';
import Footer from './Footer';

const Section = ({ title, children }) => (
  <div style={{ marginBottom: '20px' }}>
    <h2 style={{ color: '#3A7D44' }}>{title}</h2>
    <p style={{ textAlign: 'justify' }}>{children}</p>
  </div>
);

const AppDescription = () => {
  return (
    <div 
      style={{
        backgroundImage: 'url(https://img.freepik.com/free-photo/green-leaves_53876-108331.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '40px',
        fontFamily: 'Arial, sans-serif',
        color: '#333',
      }}
    >
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', borderRadius: '8px' }}>
        <h1 style={{ color: '#2F5D62', textAlign: 'center' }}>Empowering Farmers, Enriching Markets</h1>
        <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#4A4A4A' }}>
          This web application, designed to bridge the gap between farmers and the market, empowers farmers by
          connecting them directly to consumers, retailers, and wholesalers. In traditional supply chains, agricultural
          goods often pass through several intermediaries, each adding a markup that diminishes farmers’ earnings and
          increases prices for consumers. By connecting farmers directly with buyers, this platform aims to create a more
          efficient, transparent, and fair agricultural ecosystem.
        </p>

        <Section title="Platform Aim and Vision">
          The platform’s aim is to provide farmers with a powerful tool that enhances their market reach, strengthens
          their bargaining power, and improves their income stability. It seeks to simplify the process of selling farm
          produce, enabling farmers to list and manage their products with ease, set prices that reflect their costs and
          labor, and connect with buyers in real-time. By eliminating middlemen, this platform intends to foster a more
          equitable supply chain that prioritizes the welfare of farmers and consumers alike.
        </Section>

        <Section title="Core Benefits">
          <ul>
            <li><strong>Increased Income for Farmers:</strong> By connecting directly with buyers, farmers can avoid intermediary fees and have greater control over their pricing.</li>
            <li><strong>Market Transparency and Fair Pricing:</strong> Transparent pricing benefits both farmers and buyers.</li>
            <li><strong>Wide Market Reach:</strong> The platform allows farmers in rural areas to reach a larger audience, connecting with a diverse range of buyers.</li>
            <li><strong>Consumer Access to Fresh Produce:</strong> For consumers, buying directly from farmers means fresher produce at potentially lower prices.</li>
            <li><strong>Sustainability and Local Economy Support:</strong> Encourages local sourcing, reducing environmental impact and supporting sustainable agriculture.</li>
          </ul>
        </Section>

        <Section title="Achievements and Milestones">
          Since its inception, the platform has facilitated countless transactions, connecting thousands of farmers with a
          diverse base of buyers. Success stories from farmers who have seen substantial income increases and buyers who
          appreciate direct access to fresh produce underscore the platform’s impact on local communities and economies.
        </Section>

        <Section title="Future Vision">
          Looking ahead, the platform plans to incorporate advanced data analytics to provide insights to farmers,
          helping them understand demand trends, optimize their product offerings, and make informed decisions. Expanding
          to include resources like crop management tips, weather forecasts, and sustainable farming advice can empower
          farmers even further.
        </Section>

        <Section title="Conclusion">
          This platform is more than just a marketplace; it’s a transformative tool that uplifts farmers, supports local
          economies, and promotes sustainability. By aligning technology with agricultural needs, it is setting a new
          standard for transparency, fairness, and accessibility in the agricultural market.
        </Section>
      </div>
    </div>
  );
};

export default AppDescription;
