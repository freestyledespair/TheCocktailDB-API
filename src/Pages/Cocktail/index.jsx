import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getDetailed } from '../../redux/reducers/cocktailsReducer';
import s from "./index.module.css"

const Cocktail = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const { cocktail } = useSelector(state => state.cocktails)
    // console.log(cocktail)

    useEffect(() => {
        dispatch(getDetailed(id))
    }, [id])

    return (
        <div className={s.piu}>
            <h1 style={{ color: "purple", textAlign: "center" }}>     Name: {cocktail.strDrink}        </h1>
            <h2 style={{ color: "brown", textAlign: "center" }}>      Alco: {cocktail.strAlcoholic}    </h2>
            <img width={300} src={cocktail.strDrinkThumb} alt={cocktail.strDrinkThumb} />

            <h2 style={{ color: "yellowgreen", textAlign: "center" }}>Ingredients:</h2>
            <Link to={"/ingredient-detail/" + cocktail.strIngredient1}>
                <h2>{cocktail.strIngredient1}</h2>
            </Link>
            <Link to={"/ingredient-detail/" + cocktail.strIngredient2}>
                <h2>{cocktail.strIngredient2}</h2>
            </Link>
            <Link to={"/ingredient-detail/" + cocktail.strIngredient3}>
                <h2>{cocktail.strIngredient3}</h2>
            </Link>
            <Link to={"/ingredient-detail/" + cocktail.strIngredient4}>
                <h2>{cocktail.strIngredient4}</h2>
            </Link>



        </div >

    );
};

export default Cocktail;