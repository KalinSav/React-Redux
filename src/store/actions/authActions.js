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
  console.log(user.userName);
  console.log(credentials.state.signInUsername);
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

export const signOut = () => {
  return {
    type: "LOGOUT_SUCCESS"
  };
};

export const todoAction = () => {
  return {
    type: "LOGIN_SUCCESS"
  };
};

export const signUp = credentials => {
  return (dispatch, getState) => {};
};
