export const signIn = credentials => {
  //if creds email and password == authReducer ones
  // dispatch({ type: "LOGIN_SUCCESS" })
  // else dispatch({ type: "LOGIN_ERROR" })
  const user = credentials.auth.users.find(user => {
    return credentials.state.signInUsername === user.userName;
  });

  if (
    user &&
    (user.userName === credentials.state.signInUsername &&
      user.password === credentials.state.signInPassword)
  ) {
    return {
      type: "LOGIN_SUCCESS"
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
