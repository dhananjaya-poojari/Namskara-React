import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  return (
    <>
      <h1>Opps</h1>
      <h3>
        {err.status}+ ": "+{err.statusText}
      </h3>
    </>
  );
};
export default Error;
