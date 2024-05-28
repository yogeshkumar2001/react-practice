import React, { useEffect, useState } from 'react'
// {
//     "id": 1,
//         "email": "george.bluth@reqres.in",
//             "first_name": "George",
//                 "last_name": "Bluth",
//                     "avatar": "https://reqres.in/img/faces/1-image.jpg"
// },
function DisplayData() {
    const [responseData, setReponseData] = useState([])
    console.log(useState([]))
    useEffect(() => {
        async function fetchData() {
            let url = "https://reqres.in/api/users"
            let response = await fetch(url, {
                mathod: "get"
            });
            let data = await response.json();
            setReponseData(data.data)
        }
        fetchData();
    }, [])
    return (
        <>
            {responseData.length == 0 ? <h1>Loading</h1> : <>
                {responseData.map((v) => {
                    return <ul>
                        <li>{v.id}</li>
                        <li>{v.email}</li>
                        <li>{v.first_name}</li>
                        <li>{v.last_name}</li>
                        <img src={v.avatar} width={100} height={100}></img>
                        </ul>
                })}
            </>}
        </>
    )
}

export default DisplayData