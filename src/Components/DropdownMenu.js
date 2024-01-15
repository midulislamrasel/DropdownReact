import React from "react";
import { useState } from "react";
import styles from "./style.module.css";

function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="dropdown">
        <button onClick={toggleDropdown}>Toggle Dropdown</button>
        {isOpen && (
          <div className="dropdown-content hello">
            {/* Dropdown content goes here */}
            <a href="https://translate.google.com/">
              {" "}
              <p className={styles.hello}>Item 1</p>
            </a>
            <p>Item 2</p>
            <p>Item 3</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default DropdownMenu;
