import React, { useState, useEffect } from "react";
import { EditSwitch } from "./Switch";
import '../index.css';

const SwitchGroup = ({ switchCount, isChecked }) => {
  const [switchStates, setSwitchStates] = useState(new Array(switchCount).fill(isChecked));

  useEffect(() => {
    // Update switch states when the isChecked prop changes
    setSwitchStates(new Array(switchCount).fill(isChecked));
  }, [isChecked, switchCount]);

  const handleChange = (index) => {
    setSwitchStates((prev) => {
      const updatedSwitchStates = [...prev];
      updatedSwitchStates[index] = !updatedSwitchStates[index];
      return updatedSwitchStates;
    });
  };

  return switchStates.map((isChecked, index) => (
    <EditSwitch key={index} checked={isChecked} onChange={() => handleChange(index)} />
  ));
};

export default SwitchGroup;
