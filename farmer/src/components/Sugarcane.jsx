import React from 'react';

// Section component for structured organization
const Section = ({ title, children }) => (
  <div style={{ marginBottom: '20px' }}>
    <h2 style={{ color: '#3A7D44' }}>{title}</h2>
    <p style={{ textAlign: 'justify' }}>{children}</p>
  </div>
);

const Sugarcane = () => {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ color: '#2F5D62', textAlign: 'center' }}>The Journey of Sugarcane: From Planting to Harvest</h1>

      <Section title="Introduction to Sugarcane Cultivation">
        Sugarcane is a tropical, perennial grass primarily grown for sugar production. It is one of the world’s leading cash crops and supports sugar and ethanol industries globally. Cultivating sugarcane requires specific climatic conditions, careful soil preparation, and effective pest and disease management. In this guide, we will follow the journey of sugarcane from planting to harvest.
      </Section>

      <Section title="Step 1: Variety Selection and Seed Preparation">
        Choosing the right variety of sugarcane is crucial, as different varieties have varying yields, sugar content, and disease resistance. Farmers select high-yielding, disease-resistant varieties suited to local climate conditions. Sugarcane is planted using cuttings known as 'setts,' each containing a few buds that sprout into new plants.
      </Section>

      <Section title="Step 2: Land Preparation">
        Sugarcane grows best in deep, well-drained loamy soil rich in organic matter. Farmers plow and level the field to create fine soil tilth, which helps roots establish easily and allows for efficient irrigation. Fertilizers are often added to improve soil fertility, especially nitrogen, phosphorus, and potassium.
      </Section>

      <Section title="Step 3: Planting and Sowing">
        Sugarcane is typically planted in furrows or trenches to ensure each cutting is well-covered with soil. Setts are placed horizontally in furrows, about 3-5 cm deep, with spacing of around 75-150 cm between rows. Proper spacing is essential to ensure each plant has enough room to grow and access nutrients.
      </Section>

      <Section title="Step 4: Suitable Climate and Weather Conditions">
        Sugarcane requires a warm, humid climate with temperatures between 20°C and 38°C. It thrives in regions with 1200-1500 mm of annual rainfall, though supplementary irrigation is essential in areas with less rainfall. Frost and extremely cold temperatures are detrimental to sugarcane growth, as the crop is sensitive to low temperatures.
      </Section>

      <Section title="Step 5: Water Management">
        Water management is crucial throughout sugarcane’s growing cycle, especially during the tillering and elongation stages. Sugarcane needs around 1500-2500 mm of water during its growth cycle. Drip or furrow irrigation is commonly used to maintain consistent soil moisture. As the crop nears maturity, irrigation is reduced to improve sugar content in the cane.
      </Section>

      <Section title="Step 6: Nutrient Management">
        Proper fertilization is vital to achieve high yields. Sugarcane requires significant amounts of nitrogen, phosphorus, and potassium. Nitrogen is essential for growth, phosphorus helps with root development, and potassium improves stalk strength and sugar content. Additionally, micronutrients like zinc and iron support healthy growth. Balanced fertilization ensures that plants remain healthy and productive.
      </Section>

      <Section title="Step 7: Weed Management">
        Weeds compete with sugarcane for nutrients and water, particularly in the early stages. Manual weeding, herbicides, and intercropping are common methods used to manage weeds. Mulching is also an effective method that not only suppresses weeds but also helps retain soil moisture.
      </Section>

      <Section title="Step 8: Disease and Pest Control">
        Sugarcane is susceptible to pests and diseases such as red rot, smut, wilt, and root borer. Integrated Pest Management (IPM) strategies are employed to minimize infestations. Biological control, resistant varieties, and careful monitoring help manage pests, while fungicides and pesticides are used if infestations reach threshold levels. Crop rotation also helps reduce disease incidence.
      </Section>

      <Section title="Step 9: Growth Stages of Sugarcane">
        Sugarcane growth occurs in four main stages: germination, tillering, elongation, and maturation. Germination takes place in the first few weeks after planting, followed by tillering, where multiple stalks emerge from each sett. During the elongation stage, stems grow in length and thickness. The final maturation stage is when sugar content peaks, marking the crop’s readiness for harvest.
      </Section>

      <Section title="Step 10: Harvesting">
        Sugarcane is typically ready for harvest 10-16 months after planting, depending on variety and climate. Harvesting too early reduces sugar yield, while delayed harvesting can cause sucrose loss. Mature canes are usually harvested manually or mechanically by cutting close to the ground, as the lower portion contains the highest concentration of sugar.
      </Section>

      <Section title="Step 11: Post-Harvest Processing">
        Once harvested, sugarcane must be processed quickly to prevent sucrose degradation. The harvested cane is transported to mills, where it undergoes crushing to extract the juice. The juice is then clarified, concentrated, and crystallized to produce raw sugar. The byproducts, such as bagasse and molasses, are used for energy generation and ethanol production, respectively.
      </Section>

      <Section title="Step 12: Storage and Distribution">
        After processing, sugar is refined, packaged, and stored in dry, cool environments to maintain quality. The refined sugar is then distributed to markets for use in food products, beverages, and industrial applications. The byproducts of sugarcane are also valuable, with bagasse used in paper manufacturing and molasses in alcohol production.
      </Section>

      <Section title="Conclusion">
        Sugarcane cultivation is a lengthy process requiring careful planning, management, and post-harvest processing. Each stage, from selecting quality setts to managing nutrients and pests, contributes to the overall yield and quality of sugarcane. As a versatile crop, sugarcane not only supports the sugar industry but also provides valuable byproducts, contributing to renewable energy and sustainable agriculture.
      </Section>
    </div>
  );
};

export default Sugarcane;