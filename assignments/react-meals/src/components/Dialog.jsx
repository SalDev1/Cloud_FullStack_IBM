import React from "react";
import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    AlertDialogCloseButton,
    Button,
  } from '@chakra-ui/react'
import Orders from "./Orders";


const Dialog = ({isOpen , onOpen , onClose}) => {
   const cancelRef = React.useRef()

    return (
        <>
           <AlertDialog
                isOpen={isOpen}
                leastDestructiveRef={cancelRef}
                onClose={onClose}
            >
                <AlertDialogOverlay>
                <AlertDialogContent>
                    <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                      Your Orders
                    </AlertDialogHeader>

                    <AlertDialogBody>
                      <Orders />
                    </AlertDialogBody>

                    <AlertDialogFooter>
                    
                    <Button colorScheme='red' onClick={onClose} style={{
                        marginLeft:"10px",
                        color:"#570701",
                        borderRadius : "20px",
                        padding : "0px 30px",
                        backgroundColor:"white",
                        border : "1px solid #570701"
                    }}>
                        Close
                    </Button>
                    <Button ref={cancelRef} onClick={onClose} style={{
                        marginLeft:"10px",
                        color:"white",
                        borderRadius : "20px",
                        padding : "0px 30px",
                        backgroundColor:"#570701"
                    }}>
                        Order
                    </Button>
                    </AlertDialogFooter>
                </AlertDialogContent>
                </AlertDialogOverlay>
            </AlertDialog>
        </>
    )
}

export default Dialog;