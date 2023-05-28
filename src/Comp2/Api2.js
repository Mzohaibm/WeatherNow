import useApiData from "./ApiData";

import React from "react";
const Api2 = () => {
  const api =
    "https://hub.dummyapis.com/products?noofRecords=2&idStarts=1&currency=usd";
  const [data] = useApiData(api);
  console.log(data);

  return (
    <div>
      {data.map((e, i) => (
        <div key={i}>
          <h1>{e.id}</h1>
          <h2>{e.description}</h2>
        </div>
      ))}
    </div>
  );
};

export default Api2;
