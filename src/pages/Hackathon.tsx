import DemographicCard from "../components/userprofileUI/DemographicCard";
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import PageMeta from "../components/common/PageMeta";

const hackathons = [
  {
    name: "CodeSprint 2024",
    date: "March 15, 2024",
    location: "Online",
    participants: "1200+",
    infoUrl: "https://codesprint.com",
    myProject: "AI-powered Bug Tracker",
    projectGitHub: "https://github.com/myproject/codesprint",
  },
  {
    name: "InnovateX Hackathon",
    date: "April 10, 2024",
    location: "San Francisco, USA",
    participants: "800+",
    infoUrl: "https://innovatex.com",
    myProject: "Blockchain-based Voting System",
    projectGitHub: "https://github.com/myproject/innovatex",
  },
  {
    name: "AI Challenge 2024",
    date: "May 5, 2024",
    location: "London, UK",
    participants: "600+",
    infoUrl: "https://aichallenge.com",
    myProject: "Neural Network Optimizer",
    projectGitHub: "https://github.com/myproject/aichallenge",
  },
];

function HackathonList() {
  return (
    <>
      <PageMeta
        title="React.js aihello Dashboard | Ganesh Aihello"
        description="React.js aihello Dashboard | Ganesh Aihello"
      />
      <div className="mt-6 p-5 bg-white dark:bg-gray-900 rounded-xl shadow-md">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
          Upcoming Hackathons
        </h2>
        <ul className="space-y-4">
          {hackathons.map((hackathon, index) => (
            <li
              key={index}
              className="flex flex-col p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              <div>
                <p className="text-lg font-medium text-gray-800 dark:text-white">
                  {hackathon.name}
                </p>
                <p className="text-gray-500 text-sm dark:text-gray-400">
                  {hackathon.date} • {hackathon.location}
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  {hackathon.participants} Participants
                </p>
                <a
                  href={hackathon.infoUrl}
                  className="text-blue-500 dark:text-blue-400 hover:underline"
                >
                  Info
                </a>{" "}
                |
                <span className="text-gray-700 dark:text-gray-300">
                  {" "}
                  {hackathon.myProject}
                </span>{" "}
                |
                <a
                  href={hackathon.projectGitHub}
                  className="text-blue-500 dark:text-blue-400 hover:underline"
                >
                  {" "}
                  GitHub
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

function HackathonStatisticsChart() {
  const options: ApexOptions = {
    chart: { type: "line", toolbar: { show: false } },
    stroke: { curve: "straight",
        width: 2,
     },
    colors: ["#465FFF", "#9CB9FF"],
    xaxis: { categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"] },
    yaxis: { title: { text: "Global Rank" } },
  };

  const series = [{ name: "Rank", data: [1100, 1200, 2800, 2500, 3300, 3100] }];

  return (
    <div className="p-6 mt-8 bg-white dark:bg-gray-900 rounded-xl shadow-md">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
        Hackathon Global Rank Progress
      </h3>
      <Chart options={options} series={series} type="line" height={300} />
    </div>
  );
}

export default function Hackathon() {
  return (
    <div className="p-6">
      <DemographicCard />
      <HackathonList />
      <HackathonStatisticsChart />
    </div>
  );
}
