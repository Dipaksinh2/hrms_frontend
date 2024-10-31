import React, { useEffect, useState } from "react";

export default function Index() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:9001/hrms/getAllEmployeeData")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      {data ? (
        <div>
          <h1>Data from API:</h1>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      ) : (
        <div>No Data Found</div>
      )}
    </div>
  );
}
