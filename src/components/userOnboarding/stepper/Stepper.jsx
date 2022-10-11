import React from "react";
import "./Stepper.css";

const Stepper = ({ steps, current }) => {
  return (
    <div className="flex">
      {steps.map((step, index) => (
        <div className="stepper-container" key={step.step}>
          <span className={`${step.step <= current && "active"}`}>
            {step.step}
          </span>
          {index !== steps.length - 1 && (
            <div
              className={`line ${step.step <= current - 1 && "active"}`}
            ></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Stepper;
