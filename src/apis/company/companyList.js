import { API_URL } from "../apiurl";

   export const fetchAllCompanyList = async () => {
      try {
        const response = await fetch(`${API_URL}/graphql`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            query: `
           query GetClientList {
                getClientList {
                    id
                    company
                    city
                    zipCode
                    address
                    state
                    industry
                    weeklyHours
                    clientName
                    clientType
                    streetAddress
                }
            }
          `,
          }),
        });
  
        const data = await response.json();
  
        if (response.ok && data.data) {
          return data.data.getClientList; // Return the client list
        } else {
          throw new Error(data.errors?.[0]?.message || "Error fetching data");
        }
      } catch (error) {
        console.error("Fetch error:", error);
        throw new Error(error.message || "Network error");
      }
    };