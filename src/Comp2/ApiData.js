import { useState } from "react";

const useApiData = (URL) => {
  const [name, setName] = useState([]);
  const api = URL;
  fetch(api)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("Sorry a error occured");
    })
    .then((data) => {
      setName(data);
    })
    .catch((error) => {
      console.log(error);
    });

  return [name];
};

export default useApiData;
