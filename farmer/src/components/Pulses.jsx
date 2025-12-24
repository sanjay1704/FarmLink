import React from "react";

// Section component for organized structure
const Section = ({ title, children }) => (
  <div style={{ marginBottom: "20px" }}>
    <h2 style={{ color: "green" }}>{title}</h2>
    <p style={{ textAlign: "justify", color: "green" }}>{children}</p>
  </div>
);

const Pulses = () => {
  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "0 auto",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1 style={{ color: "green", textAlign: "center" }}>
        The Journey of Pulses: From Planting to Harvest
      </h1>

      <Section title="Introduction to Pulses Cultivation">
        Pulses are a vital group of legumes that provide high-quality protein,
        essential amino acids, and minerals. They are not only valuable for
        human nutrition but also play a significant role in sustainable
        agriculture, enriching the soil through nitrogen fixation. Common pulses
        include chickpeas, lentils, beans, and peas. This guide explores the
        entire journey of pulse cultivation, from seed selection to post-harvest
        handling.
      </Section>

      <Section title="Step 1: Seed Selection and Preparation">
        Selecting high-quality, disease-free seeds is essential for successful
        pulse cultivation. Farmers often choose seeds with high germination
        rates and good resilience against pests and diseases. Before sowing,
        seeds are treated with fungicides or bioinoculants to prevent early
        soil-borne diseases and promote healthy growth.
      </Section>

      <Section title="Step 2: Land Preparation">
        Pulses grow best in well-drained, loamy soil with a pH between 6.0 and
        7.0. The land is typically plowed and harrowed to create a fine seedbed,
        which encourages strong root development. Farmers also ensure that the
        soil is free of weeds and residual crops to reduce competition for
        nutrients.
      </Section>

      <Section title="Step 3: Sowing and Planting">
        Pulse seeds are sown directly into the field using various methods,
        including broadcasting or drilling, with appropriate spacing to allow
        air circulation and prevent disease spread. Sowing depth is typically
        between 3-5 cm, ensuring that seeds are not exposed to excess moisture
        or compacted soil, which could hinder germination.
      </Section>

      <Section title="Step 4: Suitable Climate and Weather Conditions">
        Pulses thrive in a variety of climates, but most varieties prefer a cool
        and moderately dry growing season. Optimal temperature ranges between
        15°C to 28°C. Pulses require minimal rainfall, typically between 300-600
        mm, making them suitable for arid and semi-arid regions. Excess moisture
        can lead to fungal infections, so well-drained soil is crucial.
      </Section>

      <Section title="Step 5: Water Management">
        Pulses are generally low-water crops and are often grown in rainfed
        conditions. However, supplementary irrigation is sometimes necessary,
        especially during dry spells. Pulses need more water during the
        flowering and pod-filling stages, but over-irrigation can lead to root
        rot and other diseases, so water management is critical.
      </Section>

      <Section title="Step 6: Nutrient Management">
        Pulses are nitrogen-fixing plants, meaning they can improve soil
        fertility by fixing atmospheric nitrogen through symbiotic bacteria in
        their root nodules. However, they still require other nutrients like
        phosphorus and potassium for optimal growth. Balanced fertilization with
        organic or inorganic nutrients enhances growth, pod formation, and
        yield.
      </Section>

      <Section title="Step 7: Weed Management">
        Weeds can severely affect pulse yields by competing for nutrients,
        water, and sunlight. Early-stage weed control is essential, usually done
        through manual weeding, mulching, or selective herbicides. Crop rotation
        and intercropping with cereals can also help suppress weed growth,
        contributing to a healthier crop.
      </Section>

      <Section title="Step 8: Disease and Pest Control">
        Pulses are susceptible to several pests and diseases, including aphids,
        pod borers, wilt, and powdery mildew. Integrated Pest Management (IPM)
        practices such as crop rotation, resistant varieties, and biological
        control methods reduce pest populations. If necessary, fungicides or
        insecticides are used, but only within safe limits to avoid residue in
        the final produce.
      </Section>

      <Section title="Step 9: Growth Stages of Pulses">
        Pulses go through distinct growth stages: germination, vegetative
        growth, flowering, pod formation, and maturation. Germination occurs
        within a week of planting, followed by vegetative growth where roots and
        leaves develop. Flowering usually begins 30-40 days after sowing,
        leading to pod formation. Each stage requires specific care, especially
        during flowering and pod development, when pests and diseases are most
        likely to impact yield.
      </Section>

      <Section title="Step 10: Harvesting">
        Pulses are ready for harvest when the pods turn yellow or brown,
        typically after 90-120 days, depending on the variety. Harvesting too
        early results in immature seeds, while delayed harvesting can lead to
        pod shattering and yield loss. Harvesting is often done manually or
        using a combine harvester, depending on the scale of the farm.
      </Section>

      <Section title="Step 11: Post-Harvest Processing">
        After harvesting, pulse crops are dried to reduce moisture content, as
        this helps prevent fungal growth and spoilage. Threshing follows, where
        seeds are separated from pods. Pulses are then cleaned, sorted, and
        graded based on size and quality. These steps ensure that the final
        product meets market standards and is safe for consumption.
      </Section>

      <Section title="Step 12: Storage and Distribution">
        Proper storage is essential to maintain the quality of pulses. They are
        stored in cool, dry, and well-ventilated areas to avoid moisture buildup
        and insect infestation. In storage, fumigation is sometimes applied to
        control pests. Pulses are then distributed to markets for direct
        consumption or further processing into flour, split peas, or packaged
        pulses.
      </Section>

      <Section title="Conclusion">
        The cultivation journey of pulses is both fascinating and essential,
        contributing to sustainable agriculture and food security. With careful
        planning, climate management, pest control, and nutrient management,
        farmers can produce high yields and quality pulses. As a valuable source
        of plant-based protein, pulses play a crucial role in global diets and
        agricultural systems, enriching both soil and nutrition.
      </Section>
    </div>
  );
};

export default Pulses;
