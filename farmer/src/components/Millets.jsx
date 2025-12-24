import React from 'react';

// Section component for organizing content
const Section = ({ title, children }) => (
  <div style={{ marginBottom: '20px' }}>
    <h2 style={{ color: '#3A7D44' }}>{title}</h2>
    <p style={{ textAlign: 'justify' }}>{children}</p>
  </div>
);

const Millets = () => {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ color: '#2F5D62', textAlign: 'center' }}>The Journey of Millets: From Planting to Harvest</h1>

      <Section title="Introduction to Millets Cultivation">
        Millets are small-seeded grains that are highly nutritious and drought-resistant, making them ideal for cultivation in arid and semi-arid regions. Common types include pearl millet, finger millet, sorghum, and foxtail millet. These grains are rich in fiber, vitamins, and minerals, providing essential nutrients and supporting food security in dry areas. Here, we explore the entire journey of millet cultivation from soil preparation to post-harvest processing.
      </Section>

      <Section title="Step 1: Variety Selection and Seed Preparation">
        Selecting the right millet variety is crucial for optimal growth. Different millet types have varying characteristics and thrive under specific conditions. Farmers select high-yield, disease-resistant varieties suited to local soil and climate. Seeds are typically treated with bio-fertilizers or fungicides to prevent soil-borne diseases and promote healthy germination.
      </Section>

      <Section title="Step 2: Land Preparation">
        Millets grow best in well-drained, sandy loam or loamy soil with a pH between 5.5 and 7.0. Preparing the land involves plowing and harrowing to create a fine seedbed that enhances root development and moisture retention. Organic manure or compost may be added to enrich the soil with essential nutrients, improving yield.
      </Section>

      <Section title="Step 3: Sowing and Planting">
        Millets are typically direct-seeded in rows or broadcasted over the field, with spacing depending on the specific variety. Sowing depth should be 2-3 cm to ensure quick germination. The optimal planting season varies but is usually at the onset of the monsoon season, ensuring sufficient water supply. Early planting helps avoid pest infestations and allows plants to establish before the dry season.
      </Section>

      <Section title="Step 4: Suitable Climate and Weather Conditions">
        Millets are hardy crops that thrive in warm, dry climates. They perform best in temperatures between 25°C and 35°C and require low rainfall, generally between 200-600 mm annually. Their drought tolerance makes them ideal for areas with erratic rainfall. However, waterlogging can harm millet crops, so well-drained soil is essential.
      </Section>

      <Section title="Step 5: Water Management">
        Millets are low-water crops that can often survive on residual moisture after initial rainfall. Irrigation is usually minimal, as over-watering can cause diseases and reduce yields. If supplementary irrigation is required, it’s provided sparingly, especially during the flowering and grain-filling stages, to maximize yield without compromising root health.
      </Section>

      <Section title="Step 6: Nutrient Management">
        Millets are not highly nutrient-demanding but benefit from balanced fertilization. Organic matter, nitrogen, and phosphorus are essential nutrients that support growth and yield. Adding compost or manure to the soil improves soil structure and nutrient availability. Chemical fertilizers may be used but are generally applied in minimal quantities, as excessive nutrients can impact crop resilience and quality.
      </Section>

      <Section title="Step 7: Weed Management">
        Weeds compete with millet plants for nutrients, light, and water, especially in early growth stages. Early weeding is critical to prevent competition. Methods such as manual weeding, hoeing, or selective herbicide application are commonly used. Mulching or intercropping with other plants also reduces weed pressure and maintains soil moisture.
      </Section>

      <Section title="Step 8: Disease and Pest Control">
        Although relatively resilient, millets are susceptible to diseases like downy mildew, blast, smut, and rust. Integrated Pest Management (IPM) techniques are commonly used, including resistant varieties, crop rotation, and biological control. For pest control, organic pesticides or targeted chemical treatments may be applied if infestations are severe, though early monitoring often prevents outbreaks.
      </Section>

      <Section title="Step 9: Growth Stages of Millets">
        Millet crops undergo key growth stages: germination, tillering, flowering, and grain-filling. During germination, seeds sprout within a week of planting, followed by tillering, where shoots develop. Flowering occurs around 30-40 days after sowing, leading to grain formation. Each stage requires attention to ensure healthy growth, especially during flowering and grain-filling when the plants are most vulnerable to water stress and nutrient shortages.
      </Section>

      <Section title="Step 10: Harvesting">
        Millets are typically ready for harvest within 90-120 days, depending on the variety. The crop is mature when grains are hard and dry, and leaves turn yellow. Harvesting is done either manually or with mechanical harvesters, depending on the field size. Early harvesting can result in immature grains, while delayed harvesting risks grain shattering and yield loss.
      </Section>

      <Section title="Step 11: Post-Harvest Processing">
        After harvesting, millet grains are dried to reduce moisture, preventing fungal growth and spoilage. The grains are then threshed to separate them from stalks. Cleaning and grading follow, ensuring that the millets are sorted by size and quality. These processes enhance the storage life and market value of millets.
      </Section>

      <Section title="Step 12: Storage and Distribution">
        Proper storage is crucial to maintain millet quality. The grains are stored in well-ventilated, dry environments to avoid mold and pest infestations. Traditional storage methods like airtight containers or silos help preserve the grains. Distribution follows, with millets reaching markets for direct consumption, flour production, or as ingredients in processed foods.
      </Section>

      <Section title="Conclusion">
        Millet cultivation is a robust and sustainable farming practice, especially valuable in regions with low rainfall. From land preparation to post-harvest storage, each step contributes to producing high-quality grains that support food security and soil health. As climate-resilient crops, millets play a vital role in sustainable agriculture, promoting nutrition and biodiversity while meeting global food demands.
      </Section>
    </div>
  );
};

export default Millets;