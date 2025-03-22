import React,{useState, useEffect} from "react";
// import { Link } from "react-router-dom";
import axios from "axios";

const Orders = () => {
  const [allOrders, setAllOrders] = useState([]);
  useEffect(() => {
    axios.get("https://zerodhabackend-yx8q.onrender.com/allOrders").then((response) => {
      setAllOrders(response.data);
    });
  }, []);

  // const allOrders = [
  //   {
  //     name: "RELIANCE",
  //     qty: 10,
  //     price: 2112.4,
  //     mode: "BUY",
  //   },
  //   {
  //     name: "HUL",
  //     qty: 20,
  //     price: 512.4,
  //     mode: "SELL",
  //   },
  // ];
  return (
    <div className="order-table">
    
        <table>
        <thead>
          <tr>
            
            <th>Name</th>
            <th>Qty</th>
            <th>Price</th>
            <th>Mode</th>
        
          </tr>
        </thead>
        <tbody>
          {allOrders.map((allOrders) => {
            return (
               <tr>
            <td>{allOrders.name}</td>
            <td>{allOrders.qty}</td>
            <td>{allOrders.price}</td>
            <td>{allOrders.mode}</td>
           
           
          </tr>)
            
          })}
         

        </tbody>
      </table>
      </div>
    
  );
};

export default Orders;
