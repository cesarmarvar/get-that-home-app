import { useEffect, useState } from "react";
import { getSavedProperties } from "../services/saved-properties-service";

function SavedProperties() {
  const [properties, setProperties] = useState([]);
  useEffect(() => {
      getSavedProperties()
        .then(repsonse => Response.json())
        .then((data) => setProperties(data))
        .then(console.log)
        .catch(console.log);
  })
}