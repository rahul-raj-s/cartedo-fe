import { useState } from "react";
import Table from "./comoponents/table";
const tempData = [
  {
    project: {
      id: 1,
      name: "New Website",
      image:
        "https://assets.amberstudent.com/inventories/1208941/fca4f2c9.jpeg",
    },
    progress: 75,
    options: {
      role: "value1",
      badge: ["quick_learner", "top_performer"],
    },
  },
];
export default function Home() {
  const [data, setData] = useState(tempData);

  const headers = [
    {
      label: "Name",
      getVal: ({ project }) => project.name,
    },
    {
      label: "progess",
      key: "progress",
    },
    {
      label: "Role",
      getVal: ({ options }) => options.role,
    },
    {
      label: "Badge",
      getVal: ({ options }) => <div>{options.badge?.join(",")}</div>,
    },
  ];
  return (
    <main>
      <Table data={data} headers={headers} />
    </main>
  );
}
