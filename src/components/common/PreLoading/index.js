import React, { useEffect, useState } from "react";
import DarkLogo from "../../resources/images/FooxLogo.png";
import { InvitationContainer, Logo } from "./styled";

function PreLoading() {
  const [animation, setAnimation] = useState(
    localStorage.getItem("animation") || false
  );
  const [logoDisplayed, setLogoDisplayed] = useState(
    localStorage.getItem("logoDisplayed") || false
  );

  useEffect(() => {
    localStorage.setItem("animation", animation);
    localStorage.setItem("logoDisplayed", logoDisplayed);
  }, [animation, logoDisplayed]);

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
