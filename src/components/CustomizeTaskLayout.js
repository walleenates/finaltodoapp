import React from "react";

const CustomizeTaskLayout = ({ selectedDetails, onSelectDetails }) => {
  const handleCheckboxChange = (detail) => {
    const updatedDetails = [...selectedDetails];

    if (updatedDetails.includes(detail)) {
      updatedDetails.splice(updatedDetails.indexOf(detail), 1);
    } else {
      updatedDetails.push(detail);
    }

    onSelectDetails(updatedDetails);
  };

  return (
    <div>
      <h3>Customize Task Layout</h3>
      <label>
        <input
          type="checkbox"
          checked={selectedDetails.includes("title")}
          onChange={() => handleCheckboxChange("title")}
        />
        Title
      </label>
      <label>
        <input
          type="checkbox"
          checked={selectedDetails.includes("selectedDateTime")}
          onChange={() => handleCheckboxChange("selectedDateTime")}
        />
        Date and Time
      </label>
      <label>
        <input
          type="checkbox"
          checked={selectedDetails.includes("priority")}
          onChange={() => handleCheckboxChange("priority")}
        />
        Priority
      </label>
      <label>
        <input
          type="checkbox"
          checked={selectedDetails.includes("startTime")}
          onChange={() => handleCheckboxChange("startTime")}
        />
        Start Time
      </label>
      <label>
        <input
          type="checkbox"
          checked={selectedDetails.includes("endTime")}
          onChange={() => handleCheckboxChange("endTime")}
        />
        End Time
      </label>
    </div>
  );
};

export default CustomizeTaskLayout;
