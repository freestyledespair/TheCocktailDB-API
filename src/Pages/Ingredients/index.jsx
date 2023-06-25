import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getIngredient } from '../../redux/reducers/cocktailsReducer';

const Ingredients = () => {
    const { name } = useParams()
    const dispatch = useDispatch()
    const { ingredient } = useSelector(state => state?.cocktails)
    console.log(ingredient)

    useEffect(() => {
        dispatch(getIngredient(name))
    }, [name])

    return (
        <div>
            <h2 style={{ color: "blue" }}>{ingredient.strIngredient}</h2>
            {
                ingredient.strDescription ? <h5>{ingredient.strDescription}</h5> : "Otsutstvuet opisanie"

            }
            <h4 style={{ color: "red" }}>Type: {ingredient.strType}</h4>
            <h4 style={{ color: "orange" }}>Alco: {ingredient.strAlcohol}</h4>
        </div>
    );
};

export default Ingredients;