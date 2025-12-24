import React from 'react';

// Section component for modular structure
const Section = ({ title, children }) => (
  <div style={{ marginBottom: '20px' }}>
    <h2 style={{ color: '#3A7D44' }}>{title}</h2>
    <p style={{ textAlign: 'justify' }}>{children}</p>
  </div>
);


const Rice = () => {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ color: '#2F5D62', textAlign: 'center' }}>The Journey of Rice: From Planting to Harvest</h1>

      <Section title="Introduction to Rice Cultivation">
        Rice is one of the most essential food crops globally, sustaining billions of people. Cultivated in a variety of climates, rice production involves multiple stages from seed selection to harvesting, each requiring specific environmental conditions and meticulous care. In this guide, we will explore the journey of rice from planting to post-harvest processing.
      </Section>

      <Section title="Step 1: Seed Selection and Preparation">
        The journey begins with selecting high-quality seeds that are resistant to common diseases and adapted to local climate conditions. Farmers often soak the seeds in water before sowing to ensure that only viable seeds are used. Afterward, the seeds are dried and prepared for planting.
      </Section>

      <Section title="Step 2: Land Preparation">
        Land preparation is crucial for rice cultivation, as rice is a water-intensive crop that thrives in flooded conditions. The field is plowed and leveled to retain water, and fertilizers such as urea and phosphorous may be added to improve soil fertility. Flooding the field helps suppress weeds, creating an ideal environment for rice seedlings.
      </Section>

      <Section title="Step 3: Sowing and Planting">
        Rice can be sown directly or transplanted as seedlings. In the direct seeding method, seeds are scattered in the prepared field, while in transplanting, seedlings are first grown in a nursery and then moved to the main field. Transplanting is more labor-intensive but leads to better yields and helps control weeds.
      </Section>

      <Section title="Step 4: Optimal Weather Conditions">
        Rice requires warm, humid conditions with plenty of water. Ideal temperatures range from 20°C to 37°C, with a minimum of 100-150 cm of rainfall during the growing season. Rice is typically grown in tropical and subtropical regions, where monsoon rains naturally provide ample water.
      </Section>

      <Section title="Step 5: Water Management">
        Water is essential for rice growth, as it aids in nutrient absorption and weed control. Flooded fields reduce weed growth by creating anaerobic conditions that only rice plants can tolerate. Efficient water management involves maintaining a steady water level until flowering, after which gradual draining can improve grain quality.
      </Section>

      <Section title="Step 6: Nutrient Management">
        Proper fertilization is key to achieving high yields. Nitrogen, phosphorus, and potassium are the primary nutrients required, applied at various stages of growth. Too much nitrogen, however, can make plants prone to diseases. Farmers must balance fertilization to ensure healthy, robust plants without encouraging pest infestations.
      </Section>

      <Section title="Step 7: Disease and Pest Control">
        Rice is vulnerable to several pests and diseases, including bacterial blight, brown planthopper, and rice blast. Integrated Pest Management (IPM) is an approach that combines biological, cultural, and chemical methods to control pests. Crop rotation, proper spacing, and resistant varieties are cultural practices that help reduce disease incidence.
      </Section>

      <Section title="Step 8: Weed Management">
        Weeds compete with rice plants for nutrients, sunlight, and space. Weed management is essential during the early growth stages and can be done manually or with herbicides. Flooding also acts as a natural weed control method, as it prevents many types of weeds from taking root.
      </Section>

      <Section title="Step 9: Growth Stages of Rice">
        The growth of rice can be divided into three main stages: vegetative, reproductive, and ripening. The vegetative stage involves tillering and leaf development, the reproductive stage includes panicle initiation and flowering, and the ripening stage is when grains mature. Each stage requires careful monitoring for water, nutrients, and pest control.
      </Section>

      <Section title="Step 10: Harvesting">
        Harvesting begins when the grains have matured, typically when they are hard and golden in color. Harvesting too early can result in poor grain quality, while late harvesting increases the risk of grain shattering. Harvesting can be done manually or with mechanized equipment, depending on the farm’s resources.
      </Section>

      <Section title="Step 11: Post-Harvest Processing">
        After harvesting, rice undergoes post-harvest processing, which includes drying, threshing, and milling. Drying is essential to reduce moisture content, preventing spoilage during storage. Threshing separates the grain from the stalk, and milling removes the husk to produce polished rice. These steps are vital for preparing rice for storage and consumption.
      </Section>

      <Section title="Step 12: Storage and Distribution">
        Proper storage is crucial to preserve rice quality. Grains are stored in dry, airtight containers to prevent moisture absorption and pest infestation. Rice is then distributed to markets, where it reaches consumers in the form of raw, milled, or processed rice products.
      </Section>

      <Section title="Conclusion">
        The journey of rice from seed to table is complex and labor-intensive, involving numerous stages that each play a critical role in producing high-quality grain. Through careful management of water, nutrients, and pest control, farmers are able to bring this staple crop to markets worldwide, supporting both their livelihoods and global food security.
      </Section>
    </div>
  );
};

export default Rice;