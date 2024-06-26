import React, { useEffect, useState } from 'react';
import { Box , Text , Button } from '@chakra-ui/react';
import { FaShoppingCart } from "react-icons/fa";
import {useSelector} from 'react-redux';

const NavBar = (props) => {
    const [getOrders , setGetOrders] = useState([])
    const orders = useSelector(state => state.orders.orders);
    
    const length = getOrders.reduce((sum,i) => sum += i.quantity,0)

    useEffect(() => {
        setGetOrders(orders);
    } , [orders])

    return (
        <Box w="100%" bg="#7d0b02" h="60px" display="flex" justifyContent="space-around" alignItems="center" position="fixed">
            <Box as ="b" bg="#7d0b02" display="inline-block" textAlign="center" fontSize="2xl">
                React Meals
            </Box>
            <Button 
              bgColor="#570701" 
              color="white" 
              padding="0px 65px" 
              textAlign="center" 
              _hover={{backgroundColor: '#380400'}}
              onClick={props.onOpen}
              >
              
              <FaShoppingCart style = {{background : 'none', margin: '5px'}}/> {' '} Your Cart ({length})
            </Button>
        </Box>
    )
}

export default NavBar;