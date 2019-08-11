const initialState = {
  isLogged: false,
  loggedInAs: "",
  authError: null,
  signUpSuccess: null,
  users: [
    {
      id: 0,
      firstName: "James",
      lastName: "Raynor",
      userName: "jimmy99",
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
        firstName: action.userDetails.firstName,
        lastName: action.userDetails.lastName,
        userName: action.userDetails.signUpUsername.toLowerCase(),
        password: action.userDetails.signUpPassword
      });
      return {
        ...state,
        users: newUsers,
        signUpSuccess: "Sign up successful! You can now login."
      };
    case "SIGNUP_ERROR":
      console.log("SIGNUP ERROR");
      const errorMsg = document.createElement("span");
      const textnode = document.createTextNode("Username already exists");
      errorMsg.appendChild(textnode);
      errorMsg.className = "signUpErrMsg";
      document
        .getElementById("signUpUsername")
        .parentNode.appendChild(errorMsg);

      return {
        ...state,
        signUpSuccess: null
      };
    default:
      return state;
  }
};

export default authReducer;
