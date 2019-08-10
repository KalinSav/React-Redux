export const signIn = credentials => {
  //if creds email and password === authReducer ones
  // dispatch({ type: "LOGIN_SUCCESS" })
  // else dispatch({ type: "LOGIN_ERROR" })
  const user = credentials.auth.users.find(user => {
    return (
      credentials.state.signInUsername.toLowerCase() ===
      user.userName.toLowerCase()
    );
  });
  if (
    user &&
    (user.userName.toLowerCase() ===
      credentials.state.signInUsername.toLowerCase() &&
      user.password === credentials.state.signInPassword)
  ) {
    return {
      type: "LOGIN_SUCCESS",
      username: user.userName
    };
  } else {
    return {
      type: "LOGIN_ERROR"
    };
  }
};

export const signOut = credentials => {
  const newFirstName = credentials.state.firstName
    ? credentials.state.firstName
    : null;
  const newLastName = credentials.state.lastName
    ? credentials.state.lastName
    : null;
  const newUsername = credentials.state.signUpUsername
    ? credentials.state.signUpUsername.toLowerCase()
    : null;
  const newPassword = credentials.state.signUpPassword
    ? credentials.state.signUpPassword
    : null;

  if (newFirstName && newLastName && newUsername && newPassword) {
    return true;
  }
  if (newFirstName.length > 2 && newLastName.length > 2 && newUsername) {
    return {
      type: "SIGNUP_SUCCESS"
    };
  } else {
    return {
      type: "SIGNUP_ERROR"
    };
  }
};

export const todoAction = () => {
  return {
    type: "LOGIN_SUCCESS"
  };
};

export const signUp = credentials => {
  return (dispatch, getState) => {};
};
