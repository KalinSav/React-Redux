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

export const signOut = () => {
  return {
    type: "LOGOUT_SUCCESS"
  };
};

export const signUp = credentials => {
  const newUsername = credentials.state.signUpUsername.toLowerCase();
  const checkUsernameMatch = credentials.auth.users.find(existingUser => {
    return newUsername === existingUser.userName;
  });
  if (checkUsernameMatch) {
    return {
      type: "SIGNUP_ERROR"
    };
  } else {
    return {
      type: "SIGNUP_SUCCESS",
      userDetails: credentials.state
    };
  }
};
