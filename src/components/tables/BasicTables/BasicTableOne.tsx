import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../../ui/table";

import Badge from "../../ui/badge/Badge";

interface Project {
  id: number;
  projectName: string;
  techStack: string;
  team: {
    images: string[];
  };
  status: string;
  budget: string;
}

// Define the table data using the interface
const tableData: Project[] = [
  {
    id: 1,
    projectName: "Agency Website",
    techStack: "React, Tailwind CSS",
    team: {
      images: [
        "/images/user/user-01.jpg",
        "/images/user/user-01.jpg",
        "/images/user/user-01.jpg",
      ],
    },
    budget: "$ 3.9K",
    status: "Active",
  },
  {
    id: 2,
    projectName: "Technology",
    techStack: "Vue.js, Node.js",
    team: {
      images: ["/images/user/user-01.jpg", "/images/user/user-01.jpg"],
    },
    budget: "$ 24.9K",
    status: "Pending",
  },
  {
    id: 3,
    projectName: "Blog Writing",
    techStack: "Next.js, Markdown",
    team: {
      images: ["/images/user/user-01.jpg"],
    },
    budget: "$ 12.7K",
    status: "Active",
  },
  {
    id: 4,
    projectName: "Social Media",
    techStack: "Angular, Firebase",
    team: {
      images: [
        "/images/user/user-01.jpg",
        "/images/user/user-01.jpg",
        "/images/user/user-01.jpg",
      ],
    },
    budget: "$ 2.8K",
    status: "Cancel",
  },
  {
    id: 5,
    projectName: "Website",
    techStack: "Django, Bootstrap",
    team: {
      images: [
        "/images/user/user-01.jpg",
        "/images/user/user-01.jpg",
        "/images/user/user-01.jpg",
      ],
    },
    budget: "$ 4.5K",
    status: "Active",
  },
];

export default function ProjectTable() {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
      <div className="max-w-full overflow-x-auto">
        <div className="min-w-[1102px]">
          <Table>
            {/* Table Header */}
            <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
              <TableRow>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Project Name
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Tech-Stack 
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Team
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Status
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Project Budget
                </TableCell>
              </TableRow>
            </TableHeader>

            {/* Table Body */}
            <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
              {tableData.map((project) => (
                <TableRow key={project.id}>
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    {project.projectName}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    {project.techStack}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    <div className="flex -space-x-2">
                      {project.team.images.map((teamImage, index) => (
                        <div
                          key={index}
                          className="w-6 h-6 overflow-hidden border-2 border-white rounded-full dark:border-gray-900"
                        >
                          <img
                            width={24}
                            height={24}
                            src={teamImage}
                            alt={`Team member ${index + 1}`}
                            className="w-full size-6"
                          />
                        </div>
                      ))}
                    </div>
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    <Badge
                      size="sm"
                      color={
                        project.status === "Active"
                          ? "success"
                          : project.status === "Pending"
                          ? "warning"
                          : "error"
                      }
                    >
                      {project.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                    {project.budget}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
