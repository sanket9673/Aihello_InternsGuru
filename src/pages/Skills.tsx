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
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [editSkillName, setEditSkillName] = useState("");
  const [editSkillLevel, setEditSkillLevel] = useState(50);

  const addSkill = () => {
    if (newSkill.trim() !== "") {
      setSkills([...skills, { name: newSkill, level: newLevel }]);
      setNewSkill("");
      setNewLevel(50);
    }
  };

  const deleteSkill = (index: number) => {
    const updatedSkills = skills.filter((_, i) => i !== index);
    setSkills(updatedSkills);
  };

  const startEditing = (index: number) => {
    setEditingIndex(index);
    setEditSkillName(skills[index].name);
    setEditSkillLevel(skills[index].level);
  };

  const saveEditedSkill = () => {
    if (editingIndex !== null) {
      const updatedSkills = [...skills];
      updatedSkills[editingIndex] = { name: editSkillName, level: editSkillLevel };
      setSkills(updatedSkills);
      setEditingIndex(null);
    }
  };

  // Ensure chart updates dynamically
  const chartOptions: ApexOptions = {
    chart: {
      type: "bar",
    },
    xaxis: {
      categories: skills.map((skill) => skill.name),
    },
  };

  const chartSeries = [
    {
      name: "Skill Level",
      data: skills.map((skill) => skill.level),
    },
  ];

  return (
    <div className="p-8 max-w-10xl mx-auto bg-white dark:bg-gray-900 shadow-lg rounded-lg">
      <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-6">My Skills</h2>

      <div className="flex items-center gap-4 bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-md mb-6">
        <input
          type="text"
          placeholder="Skill Name"
          value={newSkill}
          onChange={(e) => setNewSkill(e.target.value)}
          className="border p-2 rounded w-full shadow-sm dark:bg-gray-700 dark:text-white"
        />
        <input
          type="number"
          min="1"
          max="100"
          value={newLevel}
          onChange={(e) => setNewLevel(Number(e.target.value))}
          className="border p-2 rounded w-20 shadow-sm dark:bg-gray-700 dark:text-white"
        />
        <Button onClick={addSkill} className="bg-blue-500 text-white px-6 py-2 rounded shadow-md hover:bg-blue-600">
          Add
        </Button>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid grid-cols-2 gap-6"
      >
        {skills.map((skill, index) => (
          <ComponentCard key={index} title={skill.name} className="p-6 shadow-lg bg-gray-50 dark:bg-gray-800 rounded-lg">
            {editingIndex === index ? (
              <div className="space-y-4">
                <input
                  type="text"
                  value={editSkillName}
                  onChange={(e) => setEditSkillName(e.target.value)}
                  className="border p-2 rounded w-full shadow-sm dark:bg-gray-700 dark:text-white"
                />
                <input
                  type="number"
                  min="1"
                  max="100"
                  value={editSkillLevel}
                  onChange={(e) => setEditSkillLevel(Number(e.target.value))}
                  className="border p-2 rounded w-full shadow-sm dark:bg-gray-700 dark:text-white"
                />
                <Button onClick={saveEditedSkill} className="bg-green-500 text-white px-4 py-2 rounded shadow-md hover:bg-green-600">
                  Save
                </Button>
              </div>
            ) : (
              <div className="flex items-center justify-between">
                <p className="text-gray-700 dark:text-gray-300 font-semibold">Level: {skill.level}%</p>
                <div className="flex gap-2">
                  <Button onClick={() => startEditing(index)} className="bg-yellow-500 text-white px-4 py-2 rounded shadow-md hover:bg-yellow-600">
                    Edit
                  </Button>
                  <Button onClick={() => deleteSkill(index)} className="bg-red-500 text-white px-4 py-2 rounded shadow-md hover:bg-red-600">
                    Delete
                  </Button>
                </div>
              </div>
            )}
          </ComponentCard>
        ))}
      </motion.div>

       {/* Chart Section */}
       <div className="mt-6 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-4">Skill Chart</h3>
        <Chart options={chartOptions} series={chartSeries} type="bar" height={350} />
      </div>

    </div>
  );
};

export default Skills;
