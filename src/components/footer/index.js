import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <div className="footer">
      &copy; {new Date().getFullYear()}. <span>Md Amir Alam</span>. All Rights
      Reserved.
    </div>
  );
};

export default Footer;
