import React from 'react';

// Section component for modular structure
const Section = ({ title, children }) => (
  <div style={{ marginBottom: '20px' }}>
    <h2 style={{ color: '#3A7D44' }}>{title}</h2>
    <p style={{ textAlign: 'justify' }}>{children}</p>
  </div>
);

const Groundnut = () => {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ color: '#2F5D62', textAlign: 'center' }}>The Journey of Groundnut: From Planting to Harvest</h1>

      <Section title="Introduction to Groundnut Cultivation">
        Groundnut, also known as peanut, is a valuable oilseed crop grown extensively in tropical and subtropical regions. It is a major source of edible oil, protein, and other nutrients. Groundnut cultivation requires careful planning, suitable soil, and climate conditions, as well as effective pest and disease management. In this guide, we explore the entire journey of groundnut from planting to post-harvest processing.
      </Section>

      <Section title="Step 1: Seed Selection and Preparation">
        High-quality seeds are essential for successful groundnut cultivation. Farmers select seeds that are healthy, disease-free, and have a high germination rate. Before planting, seeds are often treated with fungicides to prevent soil-borne diseases. This process ensures that only viable seeds with strong growth potential are used.
      </Section>

      <Section title="Step 2: Land Preparation">
        Groundnuts grow best in sandy or sandy-loam soils that are well-drained and rich in organic matter. Before planting, the land is plowed and harrowed to create a fine tilth, which is necessary for healthy root and pod development. Proper leveling helps in uniform seed distribution and efficient water management.
      </Section>

      <Section title="Step 3: Sowing and Planting">
        Groundnut seeds are sown in rows, typically with a spacing of 20-30 cm between plants and 40-50 cm between rows. Ideal planting depth is around 5 cm, and the seeds are often placed with the radicle end facing down to encourage strong root growth. Groundnuts can be sown directly in the field, and the optimal sowing time depends on the region’s climate and rainfall.
      </Section>

      <Section title="Step 4: Suitable Climate and Weather Conditions">
        Groundnuts require a warm, sunny climate with moderate rainfall. They grow best in temperatures between 25°C and 35°C. While groundnut is drought-tolerant to some extent, the crop requires about 500-600 mm of rainfall during its growing season. Excessive moisture can lead to fungal infections, so well-drained soil is crucial.
      </Section>

      <Section title="Step 5: Water Management">
        Watering is essential, especially during flowering and pod development. Groundnut requires consistent moisture during these stages but does not tolerate waterlogging. Irrigation is typically applied at critical growth stages, such as flowering and pod formation, and gradually reduced as the crop approaches maturity.
      </Section>

      <Section title="Step 6: Nutrient Management">
        Groundnuts are nitrogen-fixing plants, which means they can partially meet their nitrogen requirements through atmospheric nitrogen fixation. However, they still require other nutrients like phosphorus, potassium, calcium, and magnesium. Phosphorus aids root development, while calcium is critical for pod formation. A balanced application of fertilizers ensures optimal growth and yield.
      </Section>

      <Section title="Step 7: Disease and Pest Control">
        Groundnut crops are vulnerable to pests and diseases such as leaf spot, rust, root rot, and aphids. Integrated Pest Management (IPM) practices, such as crop rotation, resistant varieties, and biological control, help reduce the risk of infestation. Fungicides and insecticides may be applied if pest or disease levels exceed threshold levels.
      </Section>

      <Section title="Step 8: Weed Management">
        Weeds compete with groundnut plants for nutrients and water, especially during the initial growth stages. Weed control can be done manually or with selective herbicides. Mulching and crop rotation also help suppress weed growth, ensuring that the groundnut plants have full access to available resources.
      </Section>

      <Section title="Step 9: Growth Stages of Groundnut">
        Groundnut growth can be divided into four main stages: germination, vegetative growth, flowering, and pod development. After sowing, seeds germinate within 7-10 days. Flowering occurs about 30-40 days after planting, followed by pegging, where the fertilized flowers penetrate the soil to form pods. Each stage requires specific care and monitoring to ensure healthy development.
      </Section>

      <Section title="Step 10: Harvesting">
        Groundnut is typically ready for harvest 90-120 days after planting, depending on the variety and climate. Harvesting time is crucial, as delayed harvesting can lead to pod detachment and yield loss. When leaves start yellowing and pods develop a reddish-brown color, the plants are carefully uprooted, and the pods are separated.
      </Section>

      <Section title="Step 11: Post-Harvest Processing">
        After harvesting, groundnut pods are dried to reduce moisture content, which is essential for preventing fungal growth and spoilage. Once dried, the pods are either sold as whole groundnuts or shelled to produce kernels. Further processing includes oil extraction, roasting, and packaging for various commercial uses.
      </Section>

      <Section title="Step 12: Storage and Distribution">
        Proper storage is crucial for preserving the quality of groundnuts. They are stored in cool, dry, and well-ventilated conditions to prevent moisture buildup and fungal contamination. Groundnuts are then distributed to markets for direct consumption, oil extraction, or further processing into food products.
      </Section>

      <Section title="Conclusion">
        The journey of groundnut from planting to harvest is complex and requires careful planning and management. By optimizing soil conditions, climate, water, and disease control, farmers can achieve high yields and produce quality groundnuts. This essential crop not only provides nutrition and income for farmers but also supports the food and oil industries worldwide.
      </Section>
    </div>
  );
};

export default Groundnut;