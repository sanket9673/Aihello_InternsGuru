import React from "react";
import ComponentCard from "../components/common/ComponentCard";
import ScrollVelocity from "../components/infinitescroll/ScrollVelocity";

const CoverPage: React.FC = () => {
  const velocity = 100; // Define velocity
  return (
    <ComponentCard title="New features">
      <ScrollVelocity
        texts={["Coming Soon", "Only With Aihello "]}
        velocity={velocity}
        className="custom-scroll-text m-20 dark:text-white"
      />
    </ComponentCard>
  );
};

export default CoverPage;
