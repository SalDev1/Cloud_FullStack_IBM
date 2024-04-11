import React, { useState , useEffect} from "react";
import {Box, Button , Input , Text} from "@chakra-ui/react";
import {useSelector} from "react-redux";
import { incrementOrder , decrementOrder } from "../redux/orderSlice";
import {useDispatch} from "react-redux";

const Orders = () => {
    const [getOrders , setGetOrders] = useState([]);
    const orders = useSelector(state => state.orders.orders);
    const dispatch = useDispatch();

    useEffect(() => {
      setGetOrders(orders);
    },[orders]);

    const totalAmount = getOrders.reduce((sum,i) => 
        sum += i.quantity * i.price, 0)

    return (
        <>
          <Box>
            {getOrders.map((o) => (
              <Box style = {{
                display:"flex",
                justifyContent:'space-around',
                alignItems:'center',
                padding : "10px 0px",
              }}>
                <Box>
                  <Text as= "h1">{o.dish_name}</Text>
                  <Box style = {{
                     display : "flex",
                     alignItems:"center",
                     justifyContent:"flex-start",
                  }}>
                     <Text mr={5} color="#7d0b02" fontWeight={700}>${o.price}</Text>
                     <Input size="md" w="20%" value={`x ${o.quantity}`}/>
                  </Box>
                </Box>
               
                <Box>
                  <Button mr={3} style = {{
                    border:"1px solid #7d0b02",
                    color:"#7d0b02",
                    backgroundColor:"white",
                    fontWeight: 800,
                  }}  onClick={() => dispatch(decrementOrder(o.dish_name))}>-</Button>

                  <Button style = {{
                    backgroundColor:"#7d0b02",
                    color : "white"
                  }}
                    onClick={() => dispatch(incrementOrder(o.dish_name))}
                  >+</Button>
                </Box>

              </Box>
            ))}
          </Box>
          
          <Box style={{
            display : "flex",
            alignItems: "center",
            justifyContent:"space-around",
          }}>
            <Box as = "h1" textAlign="left" width="45%" fontSize="2xl" fontWeight={700}> Total Amount : </Box>
            <Box as = "p" width="50%" textAlign="right" fontSize="2xl" fontWeight={700}>$ {totalAmount}</Box>
          </Box>
        </>
    )
}

export default Orders;