import React from "react";
import classes from "./AvailableMeals.module.css";
import { DUMMY_MEALS } from "../../store/dummy-meals";
import MealItem from "./MealItem";
import MealItemForm from "./MealItemForm";
import Card from "../UI/Card/Card";

const AvailableMeals = (pros) => {
  return (
    <section className={classes.meals}>
      <Card>
        <ul>
          {DUMMY_MEALS.map((meal) => {
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
