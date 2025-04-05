"use client";
import React from "react";
import "./MajorEnterprise.css"; 

const CompanyList = () => {
  return (
    <div className="company-list-container">
      <div className="header">
        <h2 className="heading">Beau Roi Enterprise Group</h2>
      </div>
      <div className="image-container">
        <img
          src="/companies.png" 
          alt="Major Enterprise"
          className="enterprise-image"
        />
      </div>
    </div>
  );
};

export default CompanyList;
