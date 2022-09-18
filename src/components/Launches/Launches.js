import {useEffect, useState} from "react";

import {getLaunches} from "../../services/spacex.axios.services";
import Launch from "../Launch/Launch";

export default function Launches(){

    let [launches, setLaunches] = useState([])

    useEffect(() => {
        getLaunches().then(value => setLaunches(value.data.filter(launch => launch.launch_year !== '2020' )))
    }, [])

    return(
        <div className={'launches'}>
            {launches.map((launch, index) => (<Launch launch = {launch} key = {index} />))}
        </div>
    )

}