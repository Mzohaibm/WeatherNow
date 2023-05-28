import React, { useEffect, useState } from "react";
import { BallTriangle } from "react-loader-spinner";
const Api3 = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const api = `https://hub.dummyapis.com/products?noofRecords=5&idStarts=1&currency=usd`;
  useEffect(() => {
    setLoading(true);
    async function fetchData() {
      try {
        const response = await fetch(api);
        if (response.ok) {
          const jsonData = await response.json();
          setData(jsonData);
          setLoading(false);
        } else {
          throw new Error("Failed to fetch data");
        }
      } catch (error) {
        console.log(error + " you need to resolve this error");
      } finally {
        console.log("finally you see the result is that");
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <BallTriangle />
      ) : (
        data.map((e, i) => (
          <div key={i}>
            <h2>{e.id}</h2>
            <h2>{e.name}</h2>
            <h2>{e.price}</h2>
          </div>
        ))
      )}
    </div>
  );
};

export default Api3;
