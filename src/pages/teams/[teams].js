import React, {useEffect, useState} from 'react';
import Layout from "../../../Components/Layout";
import {useRouter} from "next/router";
import {Typography} from "@mui/material";
import {getTeam, getTeams} from "../../../api";


function Teams() {


    const [data, setdata] = useState([]);

    const router = useRouter()

    useEffect( () => {
        const res  = getTeams().then((res) =>{
            console.log(res)
            setdata(res);
        })

    }, []);


    return(
            <Layout>
                <Typography variant="h4"> Teams: {router.query.teams}</Typography>
                {data.map((item)=>{
                    return (
                        <h2>
                            {item.title === router.query.teams ? item.count : ""}
                        </h2>
                    )
                })}
            </Layout>

        )
}

export default Teams;