import useInput from "../hooks/use-input";

const BasicForm = (props) => {
  const {
    value: enteredFirstName,
    isValid: isFirstNameValid,
    hasError: hasFirstNameError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstName,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredLastName,
    isValid: isLastNameValid,
    hasError: hasLastNameHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastName,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: isEmailValid,
    hasError: hasEmailHasError,
    valueChangeHandler: EmailChangeHandler,
    inputBlurHandler: EmailBlurHandler,
    reset: resetEmail,
  } = useInput((value) => value.trim().indexOf("@") > -1);

  let formIsValid = false;
  formIsValid = isFirstNameValid && isLastNameValid && isEmailValid
  const submitHandler = (event) => {
    event.preventDefault();


    resetEmail();
    resetFirstName();
    resetLastName();
    

  }

  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <div
          className={
            !hasFirstNameError ? "form-control" : "form-control invalid"
          }
        >
          <label htmlFor="name">First Name</label>
          <input
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
            type="text"
            id="name"
            value={enteredFirstName}
          />
          {hasFirstNameError && (
            <p className="error-text">First Name is empty.</p>
          )}
        </div>
        <div
          className={
            !hasLastNameHasError ? "form-control" : "form-control invalid"
          }
        >
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
            value={enteredLastName}
          />
        </div>
        {hasLastNameHasError && (
          <p className="error-text">Last Name is empty.</p>
        )}
      </div>
      <div
        className={!hasEmailHasError ? "form-control" : "form-control invalid"}
      >
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="email"
          id="name"
          onChange={EmailChangeHandler}
          onBlur={EmailBlurHandler}
          value={enteredEmail}
        />
        {hasEmailHasError && <p className="error-text">Please enter valid email.</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
