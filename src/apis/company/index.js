import axios from "axios";
import { API_URL } from "../apiurl";

export const allCompanyCount = async () => {
  try {
    const data = JSON.stringify({
      query: `
        query GetAllCompanyCount {
            getAllCompanyCount {
                success
                data
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
    return response?.data?.data?.getAllCompanyCount; // Access the correct nested data
  } catch (error) {
    console.error("Error fetching user counts:", error);
    throw error; // Re-throw or handle as needed
  }
};
