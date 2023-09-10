import { useEffect, useState } from "react";
import axios from 'axios';

function Axios() {
    const [data, setData] = useState(null)

    useEffect(() => {
        axios.get('https://dog.ceo/api/breeds/image/random')
            .then((response) => {

                setData(response.data);
            })
    }, [])
    console.log(data);
    return (
        <>
            <img width={500} src={data} />
        </>
    )
}

export default Axios;