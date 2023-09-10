import { useEffect, useState } from "react";

function UseFetching() {
    const [data, setData] = useState(null)

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then((response) => response.json())
            .then((apiData) => {
                setData(apiData.message);
            });
    }, []);
    // console.log(setData);
    // console.log(data);

    return (
        <>
        <img width={500} src={data} />

        </>
    )
}

export default UseFetching;