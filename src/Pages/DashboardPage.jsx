import React, { useEffect, useState } from "react";
import Tabs from "../Components/Dashboard/Tabs/Tabs";
import Header from "./../Components/Header/Header";
import axios from "axios";

const DashboardPage = () => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")

      .then((response) => {
        console.log(response);
        setCoins(response.data)
      })

      .catch((error) => {
        console.log(error);
      });
  });
  return (
    <div>
      <Header />
      <Tabs coins={coins} />
    </div>
  );
};

export default DashboardPage;
