import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  //TODO: Manage with better UI

  const error = useRouteError();

  return (
    <div>
      <h1>404</h1>
      <p>Page not found</p>
      <p>{error?.toString()} </p>
    </div>
  );
};

export default ErrorPage;
