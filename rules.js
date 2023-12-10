import React from 'react';
import '../css/rules.css';

const Rules = () => {
  const generateRules = () => {
    const ruleContents = [
      "Rule 1: 1 = 9",
      "Rule 2: 2 = 7",
      "Rule 3: 3 = 2",
      "Rule 4: 4 = 6",
      "Rule 5: 5 = 1",
      "Rule 6: 6 = 8",
      "Rule 7: 7 = 3",
      "Rule 8: 8 = 4",
      "Rule 9: 9 = 5",
      "Rule 10: 0 = 0",
    "For  Arithimatic operations rules not available "

     
    ];

    return ruleContents.map((content, index) => (
      <li key={index + 1} className="rule-item">
        <span className="rule-number">{index + 1}.</span>
        <span className="rule-text">{content}</span>
      </li>
    ));
  };

  return (
    <div className="rules-container">
      <h2>Rules List</h2>
      <ul className="rules-list">{generateRules()}</ul>
    </div>
  );
};

export default Rules;
