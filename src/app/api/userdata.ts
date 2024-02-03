import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const apiEndpoint = "https://tasks.vitasoftsolutions.com/userdata";
    const response = await fetch(apiEndpoint);

    if (!response.ok) {
      throw new Error(`Failed to fetch data. Status: ${response.status}`);
    }

    const data = await response.json();

    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

[
  {
    name: "Hasna Akter",
    profile_picture:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
    phone_number: "5964594",
    description: "Some description is here",
    birthdate: "2024-02-03",
    joining_date: "2024-02-03",
    active_status: false,
  },

  {
    name: "Taufiqul Islam",
    profile_picture:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
    phone_number: "+8801634139003",
    description: "Some more description is here",
    birthdate: "1997-05-10",
    joining_date: "2024-02-03",
    active_status: true,
  },
  {
    name: "John Doe",
    profile_picture:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    phone_number: "01787654327",
    description: "hello john",
    birthdate: "2024-02-15",
    joining_date: "2024-02-03",
    active_status: true,
  },
];
