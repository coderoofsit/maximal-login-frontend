import moment from "moment";

export const formattedDate = (timestamp) => {
    return timestamp ? moment.unix(timestamp).format("MMMM Do, h:mm:ss a") : "Invalid date";
  };