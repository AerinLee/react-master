import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangedHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetName,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangedHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput((value) =>
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)
  );

  let formIsValid = enteredNameIsValid && enteredEmailIsValid;

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    resetName();
    resetEmail();
  };

  const nameInputClasses = !nameInputHasError
    ? "form-control"
    : "form-control invalid";

  const mailInputClasses = !emailInputHasError
    ? "form-control"
    : "form-control invalid";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangedHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
        />
        {nameInputHasError && (
          <p className="error-text"> Name must not be empty.</p>
        )}
      </div>

      <div className={mailInputClasses}>
        <label htmlFor="name">Your E-mail</label>
        <input
          type="email"
          id="email"
          onChange={emailChangedHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {emailInputHasError && (
          <p className="error-text"> Please enter a valid email.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default SimpleInput;
