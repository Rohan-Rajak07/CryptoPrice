import  { useEffect, useState } from "react";
import Tabs from "../Components/Dashboard/Tabs/Tabs";
import Header from "./../Components/Header/Header";
import axios from "axios";
import Search from './../Components/Search/Search';
import Loader from './../Components/Loader/Loader';

const DashboardPage = () => {
  const [coins, setCoins] = useState([]);
  const[search,setsearch]=useState("")
  const[isLoading,setIsLoading]=useState(true)

  const onSearchChange=(e)=>{
    console.log(e.target.value);
    setsearch(e.target.value)
  }

  let filterCoin=coins.filter((item)=>item.name.toLowerCase().includes(search.toLowerCase())
  || item.symbol.toLowerCase().includes(search.toLowerCase()));

  useEffect(() => {
    axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")

      .then((response) => {
        // console.log(response);
        setCoins(response.data)
        setIsLoading(false);
      })

      .catch((error) => {
        console.log(error);
        setIsLoading(false);

      });
  });
  return (
    <>
    <Header />
    {isLoading ? <Loader/> : <div>
    <Search search={search} onSearchChange={onSearchChange}/>
    <Tabs coins={filterCoin} />
  </div>}
  </>
    
  );
};

export default DashboardPage;
