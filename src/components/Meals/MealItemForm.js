import React, {useRef, useState} from "react";
import classes from "./MealItemForm.module.css";
import Input from "../UI/Input/Input";

const MealItemForm = (props) => {

  const [isValidForm, setIsValidForm] = useState(true);

  const amountInputRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value; //언제나 문자열임.
    const enteredAmountNum = +enteredAmount;
    if(enteredAmount.trim().length === 0 || enteredAmountNum < 1 ){
      setIsValidForm(false)
      return ;
    }

    props.onAddToCart(enteredAmountNum);

  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref = {amountInputRef}
        label="Amount"
        input={{
          type: "number",
          id: props.id,
          min: "1",
          max: "10",
          step: "1",
          defaultValue: "1",
        }}
      ></Input>

      <button>+ Add</button>
      {!isValidForm && <p>Please enter a valid amount.</p>}
    </form>
  );
};

export default MealItemForm;
