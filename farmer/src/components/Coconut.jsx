import React from 'react';

const Section = ({ title, children }) => (
  <div style={{ marginBottom: '20px' }}>
    <h2 style={{ color: '#3A7D44' }}>{title}</h2>
    <p style={{ textAlign: 'justify' }}>{children}</p>
  </div>
);

const Coconut = () => {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ color: '#2F5D62', textAlign: 'center' }}>The Journey of Coconut: From Planting to Harvest</h1>

      <Section title="Introduction to Coconut Cultivation">
        Coconut (Cocos nucifera) is a versatile crop, providing food, oil, fiber, and a range of other products. It is primarily grown in tropical and subtropical regions where it thrives in coastal and humid environments. Known as the "Tree of Life," the coconut palm has a unique lifecycle, with each part of the tree providing valuable resources. This guide covers the journey of coconut cultivation, from planting to post-harvest processing.
      </Section>

      <Section title="Step 1: Seed Selection and Preparation">
        Selecting high-quality seedlings from disease-free and high-yielding mother palms is essential for successful coconut cultivation. Seed nuts are usually collected from mature palms (20-30 years old) with good yield records. These nuts are germinated in a nursery for about 9-12 months until they produce strong shoots, ready for field planting.
      </Section>

      <Section title="Step 2: Land Preparation">
        Coconuts prefer well-drained sandy loam or alluvial soil with a pH between 5.5 and 7.5. Land preparation begins with plowing and leveling to improve soil aeration and drainage. Pits, typically 1m x 1m x 1m in size, are dug and filled with organic manure and soil to create a fertile base for the young coconut seedlings.
      </Section>

      <Section title="Step 3: Planting">
        Coconut seedlings are planted during the rainy season to ensure adequate moisture for initial establishment. The recommended spacing is about 8-10 meters between trees to allow sufficient sunlight and airflow. Young palms are carefully planted at the center of the pits, ensuring they are upright and stable.
      </Section>

      <Section title="Step 4: Suitable Climate and Weather Conditions">
        Coconut trees require a warm, humid climate and thrive best in coastal regions. The ideal temperature for coconut cultivation ranges between 27°C to 32°C, with an annual rainfall requirement of 1500-2500 mm. Coconuts are sensitive to frost, so they are grown primarily in frost-free regions. Sunlight is also essential, as coconuts grow poorly in shaded areas.
      </Section>

      <Section title="Step 5: Water Management">
        Coconut trees need regular watering, especially in dry periods. Young plants require frequent watering to establish strong roots, whereas mature palms can tolerate moderate drought. Mulching around the base of the tree helps conserve soil moisture. In regions with low rainfall, supplemental irrigation may be necessary to maintain yield.
      </Section>

      <Section title="Step 6: Nutrient Management">
        Coconuts require nutrients like nitrogen, phosphorus, potassium, calcium, and magnesium for healthy growth. Organic manure, such as cow dung or compost, is added during planting. Fertilizers are applied in split doses annually, usually around the tree’s drip line, to promote strong growth and fruit production. Boron and zinc are often added to prevent deficiencies that could affect yield.
      </Section>

      <Section title="Step 7: Weed Management">
        Weed control is crucial, particularly during the early stages of growth. Mulching, manual weeding, or herbicide application around the base of the tree helps prevent competition for nutrients and water. Regular weeding not only improves yield but also reduces habitat for pests and diseases.
      </Section>

      <Section title="Step 8: Disease and Pest Control">
        Common diseases affecting coconut trees include bud rot, leaf blight, and root wilt, while common pests are rhinoceros beetles, red palm weevils, and eriophyid mites. Integrated Pest Management (IPM) strategies, including biological control, resistant varieties, and targeted chemical treatments, are commonly used to manage these threats. Proper sanitation, removing dead fronds, and regular inspection reduce the risk of pest and disease outbreaks.
      </Section>

      <Section title="Step 9: Growth Stages of Coconut Palms">
        Coconut trees have a unique growth cycle, reaching maturity around 6-10 years after planting. They begin producing coconuts between 5-7 years and can continue yielding for up to 80 years. Flowering occurs in clusters, and each inflorescence contains both male and female flowers, ensuring self-pollination. The coconuts take 12 months to mature after pollination.
      </Section>

      <Section title="Step 10: Harvesting">
        Coconuts are typically harvested every 45-60 days once the tree reaches maturity. Harvesting frequency depends on the intended use of the coconuts (mature for oil, tender for water, etc.). The fruits are harvested by climbing the tree and cutting down clusters or using a pole with a hook. Harvesting at the right time is essential to ensure high-quality nuts.
      </Section>

      <Section title="Step 11: Post-Harvest Processing">
        After harvesting, coconuts are processed based on their intended use. For oil production, mature coconuts are husked, and the kernel is dried (copra) before oil extraction. For fresh consumption, coconuts are dehusked and graded. Processing also includes drying the husk for coir production and using coconut water and milk for various food products.
      </Section>

      <Section title="Step 12: Storage and Distribution">
        Proper storage is essential to maintain coconut quality. Mature coconuts can be stored for several months if kept in a cool, dry place. Products like copra and coir require special storage to prevent mold. Once processed, coconuts and coconut products are distributed to markets locally and internationally, where they serve as valuable ingredients in food, cosmetics, and industrial products.
      </Section>

      <Section title="Conclusion">
        Coconut cultivation is a sustainable agricultural practice with a high yield of valuable products. From planting to post-harvest processing, each stage of the coconut tree’s lifecycle requires careful attention. Coconuts play a significant role in food security and livelihoods in tropical regions, and their diverse uses make them an economically important crop worldwide.
      </Section>
    </div>
  );
};

export default Coconut;