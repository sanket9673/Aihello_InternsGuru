import { useState } from "react";
import Chart from "react-apexcharts";
import { motion } from "framer-motion";
import ComponentCard from "../components/common/ComponentCard";
import Button from "../components/ui/button/Button";
import { ApexOptions } from "apexcharts";

const Skills = () => {
  const [skills, setSkills] = useState([
    { name: "JavaScript", level: 70 },
    { name: "React", level: 80 },
    { name: "Tailwind CSS", level: 75 },
  ]);
  const [newSkill, setNewSkill] = useState("");
  const [newLevel, setNewLevel] = useState(50);

  const addSkill = () => {
    if (newSkill.trim() !== "") {
      setSkills([...skills, { name: newSkill, level: newLevel }]);
      setNewSkill("");
      setNewLevel(50);
    }
  };

  const chartOptions: ApexOptions = {
    chart: {
      type: "bar",
    },
    xaxis: {
      categories: skills.map((skill) => skill.name),
    },
  };

  return (
    <div className="p-8 max-w-10xl mx-auto bg-white shadow-lg rounded-lg">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">My Skills</h2>
      
      {/* Add Skill Section */}
      <div className="flex items-center gap-4 bg-gray-100 p-4 rounded-lg shadow-md mb-6">
        <input
          type="text"
          placeholder="Skill Name"
          value={newSkill}
          onChange={(e) => setNewSkill(e.target.value)}
          className="border p-2 rounded w-full shadow-sm"
        />
        <input
          type="number"
          min="1"
          max="100"
          value={newLevel}
          onChange={(e) => setNewLevel(Number(e.target.value))}
          className="border p-2 rounded w-20 shadow-sm"
        />
        <Button onClick={addSkill} className="bg-blue-500 text-white px-6 py-2 rounded shadow-md hover:bg-blue-600">
          Add
        </Button>
      </div>
      
      {/* Skills Grid */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid grid-cols-2 gap-6"
      >
        {skills.map((skill, index) => (
          <ComponentCard key={index} title={skill.name} className="p-6 shadow-lg bg-gray-50 rounded-lg">
            <div className="w-full bg-gray-200 rounded-full h-4 mt-2">
              <motion.div
                className="h-4 bg-blue-500 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{ duration: 1 }}
              ></motion.div>
            </div>
          </ComponentCard>
        ))}
      </motion.div>

      {/* Skill Chart */}
      <div className="mt-8 bg-gray-100 p-6 rounded-lg shadow-md">
        <Chart options={chartOptions} series={[{ name: "Skill Level", data: skills.map((skill) => skill.level) }]} type="bar" height={250} />
      </div>
    </div>
  );
};

export default Skills;
