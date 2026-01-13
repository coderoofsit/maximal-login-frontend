import React from "react";
import { useLocation } from "react-router-dom";

const ReportTempId = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  return params.get("reportTempId") || ""; // Adjust based on how you get the reportTempId
};

export default ReportTempId;
