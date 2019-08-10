const initialState = {
  isLogged: false,
  loggedInAs: "",
  authError: null,
  users: [
    {
      id: 0,
      firstName: "James",
      lastName: "Raynor",
      userName: "jimmy",
      password: "pepper"
    },
    {
      id: 1,
      firstName: "Sarah",
      lastName: "Kerrigan",
      userName: "kerrigan",
      password: "queen"
    }
  ]
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_ERROR":
      console.log("login error");
      return {
        ...state,
        authError: "Login failed"
      };
    case "LOGIN_SUCCESS":
      console.log("login success");
      return {
        ...state,
        authError: null,
        isLogged: true,
        loggedInAs: action.username
      };
    case "LOGOUT_SUCCESS":
      console.log("logout success");
      return {
        ...state,
        isLogged: false,
        loggedInAs: ""
      };
    case "SIGNUP_SUCCESS":
      console.log("SIGNUP success");
      const newUsers = state.users.map(user => user);
      const newId = state.users.length
        ? state.users[state.users.length - 1].id + 1
        : 0;
      newUsers.push({
        id: newId,
        firstName: action.firstName,
        lastName: action.lastName,
        userName: action.signUpUsername.toLowerCase(),
        password: action.signUpPassword
      });
      return {
        ...state,
        users: newUsers,
        authError: null
      };
    case "SIGNUP_ERROR":
      console.log("SIGNUP ERROR");
      return {
        ...state,
        authError: "Signup failed"
      };
    default:
      return state;
  }
};

export default authReducer;
