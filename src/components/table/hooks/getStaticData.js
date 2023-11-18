import { useState, useEffect } from "react";
import axios from "axios";

function useGetStaticData() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const getStaticData = async () => {
    try {
      setData(null);
      setLoading(true);

      const res = await axios({
        method: "get",
        url: "https://assets.alippo.com/catalog/static/data.json",
      });

      setData(res?.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getStaticData();
  }, []);
  return {
    fetch: getStaticData,
    data,
    loading,
  };
}

export default useGetStaticData;
