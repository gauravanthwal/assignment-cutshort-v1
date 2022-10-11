import React, { useState } from "react";
import "./MultiStepForm.css";
import { CheckIcon } from "../../../assets/icons/icons";
import { FaUsers, FaUser } from "react-icons/fa";
import {useNavigate} from 'react-router-dom';

const MultiStepForm = ({ steps, current, setCurrent }) => {
  const navigate = useNavigate();
  const [formInput, setFormInput] = useState({
    fullName: "",
    displayName: "",
    workspaceName: "",
    workspaceUrl: "",
  });

  const [selectedType, setSelectedType] = useState(null);

  const handleStepThree = () => {
    if (!selectedType) {
      alert("Please select an option");
    } else {
      setCurrent(current + 1);
    }
  };

  const handleOnChange = ({ target: { name, value } }) => {
    setFormInput({ ...formInput, [name]: value });
  };
  const handleOnClick = (e) => {
    e.preventDefault();
    setCurrent(current + 1);
  };

  const stepCompleted = () =>{
    navigate('/welcome');
  }
  switch (current) {
    case 1:
      const title = steps[current - 1].title;
      const label = steps[current - 1].label;
      return (
        <div className="multi-form-container">
          <h1 className="title">{title}</h1>
          <h2 className="label">{label}</h2>

          <form className="form" onSubmit={handleOnClick}>
            <div className="input-container">
              <label htmlFor="fullName">Full Name</label>
              <div className="input">
                <input
                  type="text"
                  name="fullName"
                  id="fullName"
                  placeholder="Steve Jobs"
                  value={formInput.fullName}
                  onChange={handleOnChange}
                  required
                />
              </div>
            </div>
            <div className="input-container">
              <label htmlFor="displayName">Display Name</label>
              <div className="input">
                <input
                  type="text"
                  name="displayName"
                  id="displayName"
                  placeholder="Steve"
                  value={formInput.displayName}
                  onChange={handleOnChange}
                  required
                />
              </div>
            </div>
            <div className="button-container">
              <button className="btn">{"Create Workspace"}</button>
            </div>
          </form>
        </div>
      );
    case 2:
      return (
        <div className="multi-form-container">
          <h1 className="title">{steps[current - 1].title}</h1>
          <h2 className="label">{steps[current - 1].label}</h2>

          <form className="form" onSubmit={handleOnClick}>
            <div className="input-container">
              <label htmlFor="workspaceName">Workspace Name</label>
              <div className="input">
                <input
                  type="text"
                  name="workspaceName"
                  id="workspaceName"
                  placeholder="Eden"
                  value={formInput.workspaceName}
                  onChange={handleOnChange}
                  required
                />
              </div>
            </div>
            <div className="input-container">
              <label htmlFor="name">
                Workspace URL <span>(optional)</span>
              </label>
              <div className="input">
                <input
                  type="text"
                  name="workspaceUrl"
                  id="workspaceUrl"
                  placeholder="steve"
                  value={formInput.workspaceUrl}
                  onChange={handleOnChange}
                />
              </div>
            </div>
            <div className="button-container">
              <button className="btn">{"Create Workspace"}</button>
            </div>
          </form>
        </div>
      );
    case 3:
      return (
        <div className="multi-form-container" onSubmit={handleOnClick}>
          <h1 className="title">{steps[current - 1].title}</h1>
          <h2 className="label">{steps[current - 1].label}</h2>

          <div className="form">
            <div className="flex">
              <div
                className={`radio-div ${selectedType === "for-me" && "active"}`}
                onClick={() => setSelectedType("for-me")}
              >
                <div className="icon-container">
                  <FaUser
                    className={`user-icons ${
                      selectedType === "for-me" && "active"
                    }`}
                  />
                </div>
                <div className="content">
                  <h4>For myself</h4>
                  <p>Write better. think more clearly. Staty organized.</p>
                </div>
              </div>
              <div
                className={`radio-div ${
                  selectedType === "for-team" && "active"
                }`}
                onClick={() => setSelectedType("for-team")}
              >
                <div className="icon-container">
                  <FaUsers
                    className={`user-icons ${
                      selectedType === "for-team" && "active"
                    }`}
                  />
                </div>
                <div className="content">
                  <h4>With my team</h4>
                  <p>Wikis, docs, tasks & projects, all in one place.</p>
                </div>
              </div>
            </div>
            <div className="button-container">
              <button className="btn" onClick={handleStepThree}>
                Create Workspace
              </button>
            </div>
          </div>
        </div>
      );
    case 4:
      return (
        <div className="multi-form-container">
          <div className="center-icon">{CheckIcon}</div>
          <h1 className="title mt-1">{steps[current - 1].title}</h1>
          <h2 className="label">{steps[current - 1].label}</h2>
          <div className="form">
            <div className="button-container">
              <button className="btn" onClick={stepCompleted}>
                Launch Eden
              </button>
            </div>
          </div>
        </div>
      );

    default:
      break;
  }
};

export default MultiStepForm;
