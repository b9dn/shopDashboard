import { useLocation } from "react-router-dom";
export const Orders = () => {
  const location = useLocation();
  return <div style={{ fontSize: "70px" }}>{location.state}</div>;
};
