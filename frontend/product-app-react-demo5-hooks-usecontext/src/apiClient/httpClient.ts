import IProduct from "../model/product";

class HttpClient{
    // Promise<IProduct[]> --> Returning Promise of Type IProduct.
    async get(url:string): Promise<IProduct[]> {
        const response = await fetch(url)
        const data = await response.json();
        return <IProduct[]>data;
    }
    // Getting a product using the id number , it will return you a single product.
    async getById(url : string, id:string) : Promise<IProduct> {
        const a = parseInt(id);
        const response = await fetch(`${url}/${id}`)
        const data = await response.json();
        return <IProduct>data;
    }

    // Helps you with the real modifications.
    async put(url : string , data:any) : Promise<IProduct> {
        const response = await fetch(`${url}/${data.productid}`,{
            method:'PUT',
            headers:{
                "Content-Type":"application/json",
            },
            body: JSON.stringify(data)
        })
        return await response.json();
    }
}
export default new HttpClient();