import React, { useEffect, useState } from "react";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem";
import Card from "../UI/Card/Card";
import useHttp from "../../hooks/use-http";

const AvailableMeals = (pros) => {
  const [meals, setMeals] = useState([]);
  const { isLoading, error, sendRequest: fetchTasks } = useHttp();

  const getMeals = (res) => {
    let dummyMeals = [];
    for (let meal in res) {
      const data = {
        id: meal,
        name: res[meal]["name"],
        description: res[meal]["description"],
        price: res[meal]["price"],
      };
      dummyMeals.push(data);
    }

    setMeals(dummyMeals);
  };

  useEffect(() => {
    fetchTasks(
      {
        url: "https://react-master-prj-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json",
      },
      getMeals
    );
  }, [fetchTasks]);

  return (
    <section className={classes.meals}>
      <Card>
        <ul>
          {isLoading && !error && <p>Loading....</p>}
          {error && <p>Error!!</p>}
          {!isLoading &&
            !error &&
            meals.map((meal) => {
              return (
                <MealItem
                  key={meal.id}
                  id={meal.id}
                  title={meal.name}
                  description={meal.description}
                  price={meal.price}
                ></MealItem>
              );
            })}
        </ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
