import React from "react";
import HeaderCartButton from "./HeaderCartButton";
import classes from "./Header.module.css";
import mealsImg from "../../assets/meals.jpg"

const Header = (props) => {
  return (
    <React.Fragment>
      <header  className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.openCart}/>
      </header>
      <div className={classes["main-image"]}>
          <img src={mealsImg}></img>
      </div>

    </React.Fragment>
  );
};

export default Header;
