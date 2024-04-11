import ICountry from "../model/Country";

class HttpClient {
    async get(url:string) : Promise<ICountry[]> {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }
}

export default new HttpClient();