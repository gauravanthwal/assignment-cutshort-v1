import "./UserOnboarding.css";
import React, { useState } from "react";
import MultiStepForm from "../../components/userOnboarding/multiForm/MultiStepForm";
import Stepper from "../../components/userOnboarding/stepper/Stepper";
import { steps } from "../../utils/constants/constants";
import logoIcon from "../../assets/images/logo.png";

const UserOnboarding = () => {
  const [current, setCurrent] = useState(1);
  return (
    <div className="onboarding-container">
      {/* Logo */}
      <div className="logo-container">
        <img src={logoIcon} alt="logo from dribble design" />
        <span>Eden</span>
      </div>
      {/* Stepper */}
      <Stepper steps={steps} current={current} />

      {/* Form */}
      <MultiStepForm steps={steps} current={current} setCurrent={setCurrent}/>
    </div>
  );
};

export default UserOnboarding;
