import React, { useEffect, useState } from "react";
import DarkLogo from "../../resources/images/FooxLogo.png";
import { InvitationContainer, Logo } from "./styled";

function PreLoading() {
  const [animation, setAnimation] = useState(false);
  console.log(animation)
  const [logoDisplayed, setLogoDisplayed] = useState(
    localStorage.getItem("logoDisplayed") || false
  );
console.log(logoDisplayed)
  useEffect(() => {
    localStorage.setItem("logoDisplayed", logoDisplayed);
  }, [logoDisplayed]);

  useEffect(() => {
    if (!logoDisplayed) {
      setTimeout(() => {
        setLogoDisplayed(true);
      }, 3000);
      setTimeout(() => {
        setAnimation(true);
      }, 1000);
    }
  }, [logoDisplayed]);

  if (!logoDisplayed) {
    return (
      <InvitationContainer logoDisplayed={animation}>
        <Logo src={DarkLogo} alt={""} logoDisplayed={animation} />
      </InvitationContainer>
    );
  } else {
    return null;
  }
}

export default PreLoading;
