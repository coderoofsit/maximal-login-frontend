// import { ref, remove } from "firebase/database";
// import { database, functions } from "../../config/config";
// import { httpsCallable } from "firebase/functions";
// import { API_URL } from "../../apis/apiurl";
// import { toast } from "react-toastify";
// import axios from "axios";

// export const handleDelete = async (userId) => {
//   const isConfirmed = window.confirm(
//     "Are you sure you want to delete this user and their associated reports?"
//   );

//   if (!isConfirmed) {
//     return Promise.resolve(null); // Return a resolved promise with null if not confirmed
//   }

//   const data = {
//     query: `
//       mutation DeleteUser($userId: ID!) { 
//         deleteUser(userId: $userId) { 
//           success 
//           message 
//         } 
//       }
//     `,
//     variables: { userId },
//   };

//   const config = {
//     method: "post",
//     maxBodyLength: Infinity,
//     url: `${API_URL}/graphql`,
//     headers: {
//       "Content-Type": "application/json",
//     },
//     data: JSON.stringify(data),
//   };

//   try {
//     const response = await axios.request(config);
//     return response.data.data.deleteUser;
//   } catch (error) {
//     console.error("Error deleting user:", error);
//     throw error; // Re-throw the error to be caught by the calling function
//   }
// };