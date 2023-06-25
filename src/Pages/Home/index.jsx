import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllCocktails } from '../../redux/reducers/cocktailsReducer';
import s from "./index.module.css"

const Home = () => {
    const dispatch = useDispatch()
    const { isLoading, cocktailsArr } = useSelector(state => state?.cocktails)
    // console.log(cocktailsArr)

    useEffect(() => {
        dispatch(getAllCocktails())
    }, [])


    if (isLoading) {
        return <h1>Loading...</h1>
    }
    return (
        <div className={s.piu}>
            {
                cocktailsArr?.length > 0 ?
                    cocktailsArr?.map(drink => (
                        <div key={drink.idDrink} className={s.piu2}>
                            {
                                <h2>{drink.strDrink.length > 15 ? drink.strDrink.slice(0, 15) + "..." : drink.strDrink}</h2>
                            }
                            <Link to={"/cocktail-detail/" + drink.idDrink}>
                                <img width={250} src={drink.strDrinkThumb} alt="" />
                            </Link>
                        </div>
                    ))
                    :
                    <h1>Oops, Drinks not found!</h1>
            }
        </div>
    );
};

export default Home;