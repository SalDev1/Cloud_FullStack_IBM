import { FC, useCallback, useEffect, useState } from "react";
import {FieldError, useFieldArray, useForm} from "react-hook-form";
import { NewProductData, ProductData } from "./types";
import { ValidationError } from "./ValidationError";
import { useParams } from "react-router-dom";
import IProduct from "../model/product";
import httpClient from "../apiClient/httpClient";

type Props = {
    onSave: (newProduct : NewProductData) => void
}

export const ProductEdit : FC<any> = ({onSave}:Props) => {
    // Fetching the product details by id.
    const [product , setProduct] = useState<IProduct>({} as IProduct);
    const {id} = useParams<string>();
    // console.log(id);

    const getProductById = useCallback(async() => {
        const response = await httpClient.getById('http://localhost:9999/api/products',Number(id))
        setProduct(response)
    },[])
    useEffect(() => {
        getProductById();
    },[])
    // formState --> handling validations.
    // register --> It is an object + binds the value of the form objects and display it to the user.
    const {register, setValue, handleSubmit,formState:{errors,isSubmitting,isSubmitSuccessful}} = useForm<NewProductData>()
    // const { update } = useFieldArray({name : 'array'});

    // Setting the values to the input tags.

    /*
      Dynamically setting the values to the input field.

      setValue --> This function allows you to dynamically set the value 
      of a registered field and have the options to validate and update 
      the form state. At the same time, it tries to avoid unnecessary rerender.
    */
    setValue('productName',product.productName)
    setValue('price',product.price)
    setValue('starRating',product.starRating)
    setValue('productId',product.productId)
    setValue('productAvailable',product.productAvailable)
    setValue('imageUrl',product.imageUrl)
    setValue('productCode',product.productCode)

    const fieldStyle = 'flex flex-col mb-2'
    function getEditorStyle(fieldError: FieldError | undefined) {
        return fieldError ? 'border-red-500' : ''
    }

    return (
        <form noValidate className="border-b py-5" onSubmit={handleSubmit(onSave)}>
            <div className={fieldStyle}>
                <label htmlFor="productName">ProductName</label>

                {/* 
                   Spreading the products + validation is done through using register
                   Binds the value of textBox + add Validation as well.
                */}
                <input id="productName" {...register('productName', {
                    required:'You must enter a productName'
                })} className={getEditorStyle(errors.productName)} />

                <ValidationError fieldError={errors.productName}/>
            </div>

            <div className={fieldStyle}>
                <label htmlFor="price">ProductPrice</label>
                <input id="price" {...register('price', {
                    required:'You must enter a price'
                })} className={getEditorStyle(errors.price)} />

                <ValidationError fieldError={errors.price}/>
            </div>

            <div className={fieldStyle}>
                <label htmlFor="starRating">Rating</label>
                <input id="starRating" {...register('starRating', {
                    required:'You must enter a rating'
                })} className={getEditorStyle(errors.starRating)} />

                <ValidationError fieldError={errors.starRating}/>
            </div>

            <div className={fieldStyle}>
                <button 
                    type="submit" 
                    disabled={isSubmitting} 
                    className="mt-2 h-10 px-6 font-semibold bg-black text-white"
                    >
                    Update
                </button>
            </div>
        </form>
    );
}
