import { useEffect, useState } from "react";
import Table from "./comoponents/table";
// const tempData = [
//   {
//     project: {
//       id: 1,
//       name: "New Website",
//       image:
//         "https://assets.amberstudent.com/inventories/1208941/fca4f2c9.jpeg",
//     },
//     progress: 75,
//     options: {
//       role: "value1",
//       badge: ["quick_learner", "top_performer"],
//     },
//   },
// ];
const BASE_URL = "https://cartedo-user-app-70914f3279fb.herokuapp.com";
export default function Home() {
  const [data, setData] = useState([]);

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

  useEffect(() => {
    fetch(`${BASE_URL}/users/1/projects`)
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  return (
    <main>
      <Table data={data} headers={headers} />
    </main>
  );
}
