import React from "react";
import {Box , Image , Text, Button ,Input} from "@chakra-ui/react";
import FastFoodImage from "../image_1.jpg";
import foodDishes from "../model/dishes_data";
import { IoMdAdd } from "react-icons/io";

const MainSection = (props) => {
    return (
        <>
          <Box w="100%" display="flex" 
          align-items="center" 
          justify-content="center" h="450px" 
          bgColor="white">
            <Box style={{
              padding:"16px",
              color:"black",
              display:"flex" ,
              flexDirection:"column",
              alignItems:"start",
              justifyContent:"center"
            }}>

              <Text fontSize="4xl" pb="1em" fontWeight="700" color="#7d0b02">Delicious Food, Delivered to You</Text>
              <Text mb={2} color="#8c8c8c">
                Choose your favorite meal from our broad selection of
                available meals and enjoy a delicious lunch or dinner at home.
              </Text>
              <Text color="#8c8c8c">
                All our meals are cooked with high-quality ingredients, just in-time and 
                of course by experienced chefs.
              </Text>
            </Box>

            <Image src = {FastFoodImage} style={{
              width:'68%',
              objectFit:'cover',
              height:'inherit',
            }}></Image>
          </Box>

          {/* Dishes Section */}
          <Box style = {{
            display:"flex",
            alignItems:'center',
            justifyContent:'center',
            borderRadius : "20px",
            flexDirection:"column",
            margin : "20px 0px 20px 0px",
          }}>
          {foodDishes.map((food) => (
            <Box style = {{
              display:"flex",
              justifyContent:"space-around",
              alignItems:"center",
              backgroundColor:"white",
              color : "#570701",
              width:"70%",
              padding : "8px",
              border : "1px solid #7d0b02"
            }}>
              <Box>
                <Text fontWeight="700">{food.dish_name}</Text>
                <Text as = "i">{food.description}</Text>
                <Text color="#7d0b02" fontSize="20px" fontWeight="600">${food.price}</Text>
              </Box>

              <Box style = {{
                display:"flex",
                alignItems : "end",
                flexDirection:"column",
                justifyContent:"center"
              }}>
                <Box style = {{display:"flex",alignItems:'center', justifyContent:"end", paddingBottom:'10px'}}>
                  Quantity : <Input type="number" ml={3} width="12%" p={2} placeholder="0"/>
                </Box>
                <Button style = {{
                  borderRadius : "20px",
                  padding : "0px 20px",
                  color : "white",
                  backgroundColor : "#570701"
                }}> <IoMdAdd style = {{background:"none" , color:"white"}}/>Add</Button>
              </Box>
            </Box>
          ))}
          </Box>
        </>
    )
}

export default MainSection