const initialState = {
  isLogged: false,
  authError: null,
  users: [
    {
      id: 1,
      firstName: "James",
      lastName: "Raynor",
      userName: "JimmyR",
      password: "pepper"
    },
    {
      id: 2,
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
        isLogged: true
      };
    case "LOGOUT_SUCCESS":
      console.log("logout success");
      return {
        ...state,
        isLogged: false
      };
    default:
      return state;
  }
};

export default authReducer;
