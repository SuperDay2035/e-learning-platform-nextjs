import React, {useEffect, useState} from 'react';
import Teamstyle from "./Teamstyle";
import {Button} from "@mui/material";
import {useRouter} from "next/router";
import {getTeam, getTeams} from "../../api";

function Teams() {


    // UseEffectda Ishlatilishi!

    const [data, setdata] = useState([])

    useEffect( () => {
        const res  = getTeams().then((res) =>{
            console.log(res)
            setdata(res);
        })

    }, []);

    console.log(data)




    const router = useRouter();

    return (


        <Teamstyle>

            <div className="teams">
                <h2></h2>
                <div className="card">

                    {data.map((item, index) => (

                        <Button onClick={() => router.push("teams" + item.path)} className="button-1">{item.title}</Button>
                    ))}


                </div>


            </div>

        </Teamstyle>


    );
}

export default Teams;

// Get StaticProps

// export async function getStaticProps(context) {
//     const res = await getTeams();
//     console.log(res);
//     return {
//         props: { data: res }
//     };
// }

