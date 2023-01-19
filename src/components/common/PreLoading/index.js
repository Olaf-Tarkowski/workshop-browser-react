import React, { useEffect, useState } from "react";
import DarkLogo from "../../resources/images/FooxLogo.png";
import { InvitationContainer, Logo } from "./styled";

function PreLoading() {
  const [logoDisplayed, setLogoDisplayed] = useState(
    localStorage.getItem("logoDisplayed") || false
  );

  useEffect(() => {
    localStorage.setItem("logoDisplayed", logoDisplayed);
  }, [logoDisplayed]);

  useEffect(() => {
    if (!logoDisplayed) {
      setTimeout(() => {
        setLogoDisplayed(true);
      }, 1500);
    }
  }, [logoDisplayed]);

  return (
    <InvitationContainer logoDisplayed={logoDisplayed}>
      <Logo src={DarkLogo} alt={""} logoDisplayed={logoDisplayed} />
    </InvitationContainer>
  );
}

export default PreLoading;
