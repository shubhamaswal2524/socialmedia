import React from "react";
import FacebookLogin from "react-facebook-login";

const App = () => {
  const responseFacebook = (response) => {
    console.log("login result", response);
  };
  const componentClicked = (data) => {
    console.warn(data);
  };
  return (
    <div>
      <h1>Login with Facebook</h1>
      <FacebookLogin
        appId="528654824923266"
        autoLoad={true}
        fields="name,email,picture"
        onClick={componentClicked}
        callback={responseFacebook}
      />
    </div>
  );
};

export default App;
