import React from "react";
import { useHistory } from "react-router-dom";
import { authService } from "../fbase";

const Profile = (props) => {
  const onSignOutClick = () => {
    authService.signOut();
    history.push("/");
  };
  const history = useHistory();

  return (
    <>
      <button onClick={onSignOutClick}>로그아웃</button>
    </>
  );
};
export default Profile;
