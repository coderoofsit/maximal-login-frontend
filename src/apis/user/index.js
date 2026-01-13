import axios from "axios";
import { API_URL } from "../apiurl";

export const fetchUsers = async () => {
  const response = await axios.post(
    `${API_URL}/graphql`,
    {
      query: `
      query GetAllUsers {
        getAllUsers {
          id
          firstName
          lastName
          email
          phone
          role
          company
          city
          state
          zipCode
          status
          streetAddress
          address
        }
      }
    `,
    },
    {
      headers: { "Content-Type": "application/json" },
    }
  );

  return response?.data?.data?.getAllUsers;
};

export const allUserCount = async () => {
  try {
    const data = JSON.stringify({
      query: `
        query GetUserCounts {
          getUserCounts {
            clientUsers
            managementUsers
            securityUsers
            totalUsers
            adminUsers
          }
        }
      `,
      variables: {},
    });

    const config = {
      method: "post",
      maxBodyLength: Infinity,
      url: `${API_URL}/graphql`, // Ensure API_URL is defined
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    const response = await axios.request(config);

    return response?.data?.data?.getUserCounts; // Access the correct nested data
  } catch (error) {
    console.error("Error fetching user counts:", error);
    throw error; // Re-throw or handle as needed
  }
};
