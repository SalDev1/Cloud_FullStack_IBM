import { useEffect, useState } from "react";
import httpClient from "../apiClient/httpClient";
import ICountry from "../model/Country";

const Home = () => {  
    const [fetchCountries,setFetchCountries] = useState<ICountry[]>([]);
    const [selectCountry , setSelectCountry] = useState('');
    const [Cstates, setCStates] = useState([]);
    
    const length = Cstates?.length

    const getCountries = async () => {
        const response = await httpClient.get('http://localhost:4200/countries');
        setFetchCountries(response)
    }

    useEffect(() => {
        getCountries();
        setCStates(fetchCountries.filter((c) => c.country === selectCountry)[0]?.states);
    },[selectCountry,Cstates])

    // console.log(fetchCountries[0].country)
    return(
        <div>
            <select className = "countries" onChange={(e) => setSelectCountry(e.target.value)}>
             {fetchCountries.map((c) => (
                <option className="countries_name">{c?.country}</option>
             ))}
            </select>

            <select name = "states">
                {
                    length > 0 ? (
                        <>
                          {Cstates?.map((c) => (
                            <option className="s_name">{c}</option>
                          ))}
                        </>
                    ) : (
                        <>
                         <option className="s_name">None</option>
                        </>
                    )
                }
            </select>
        </div>
    )
}

export default Home;