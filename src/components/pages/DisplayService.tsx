import { useParams } from "react-router-dom";

const DisplayService = () => {
  const { serviceId } = useParams();

  return <div>DisplayService {serviceId} </div>;
};

export default DisplayService;
