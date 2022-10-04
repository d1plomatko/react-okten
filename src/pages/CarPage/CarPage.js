import {CarForm, Cars} from "../../components";
import {useEffect, useState} from "react";
import {carService} from "../../services";
import {useSearchParams} from "react-router-dom";

const CarPage = () => {

    const [cars, setCars] = useState([]);
    const [prev, setPrev] = useState(null);
    const [next, setNext] = useState(null);

    const [carUpdate, setCarUpdate] = useState(null);

    const [query, setQuery] = useSearchParams({page: '1'});

    useEffect(() => {
        carService.getAll(query.get('page')).then(({data: res}) => {
            setCars(res.data)
            setPrev(res.prev)
            setNext(res.next)
        })

    }, [query])

    const prevPage = () => {
        setQuery(value => ({page: value.get('page') - 1}))
    }

    const nextPage = () => {
        setQuery(value => ({page: +value.get('page') + 1}))
    }

    return (
        <div>
            <CarForm setCars={setCars} carUpdate={carUpdate} setCarUpdate={setCarUpdate}/>
            <hr/>
            <Cars cars={cars} setCars={setCars} setCarUpdate={setCarUpdate}/>
            <button disabled={!prev} onClick={prevPage}>prevPage</button>
            <button disabled={!next} onClick={nextPage}>nextPage</button>
        </div>
    )

}

export {CarPage}