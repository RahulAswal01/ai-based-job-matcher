import { useEffect, useState } from "react";
import axios from "axios";
const App = () => {
  //variables
  const [value, setValue] = useState(null);

  useEffect(() => {
    const getFastApiData = async () => {
      try {
        // console.log("here");
        const res = await axios.get("http://localhost:8000/");
        // console.log("here");
        setValue(res.data);
        console.log(res.data);
      } catch (err) {
        return err;
      }
    };
    getFastApiData();
  }, []);

  return (
    <div>
      <div className="text-red-500 text-2xl">this is the response</div>
      <div className="text-blue-500 text-3xl">{value}</div>
    </div>
  );
};

export default App;
