import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getAllCocktails, getCocktailsByName, getFiltered } from '../../redux/reducers/cocktailsReducer';
import s from "./index.module.css"

const Header = () => {
    const [name, setName] = useState("")
    const dispatch = useDispatch()
    const search = (e) => {
        e.preventDefault()
        dispatch(getCocktailsByName(name))
    }

    const filter = (e) => {
        e.target.value == "All"
            ?
            dispatch(getAllCocktails)
            :
            dispatch(getFiltered(e.target.value))
    }

    return (
        <header>
            <Link to={"/"} style={{ color: "red" }}>Home</Link>
            <form onSubmit={search} className={s.form}>
                <input className={s.input} value={name} onChange={(e) => setName(e.target.value)} type="search" />
                <button className={s.button}>Search</button>
            </form>
            <select onChange={filter} className={s.select}>
                <option value="All">All</option>
                <option value="Alcoholic">Alcoholic</option>
                <option value="Non_Alcoholic">Non_Alcoholic</option>
            </select>
        </header>
    );
};

export default Header;