"use client";
import React from "react";
import "./TeamMember.css"; 

const teamMembers = [
  {
    name: "Premchandar Ilankumaran",
    designation: "Director - Cloud",
    photo: "/Prem PP.png", 
  },
  {
    name: "Arun Kumar Ganesan",
    designation: "Director - Technology",
    photo: "/Arunkumar G.png", 
  },
  {
    name: "Rekha Thiagarajan",
    designation: "Director - Data & Analytics",
    photo: "/Rekha T.png", 
  },
  {
    name: "Kamalutheen A",
    designation: "Director – Application",
    photo: "/Kamal.png", 
  },
  {
    name: "Joseph Crosvin",
    designation: "Director - Sales",
    photo: "/Joseph Crosvin.png",
  },
  {
    name: "Dr. Lakshminarayan K",
    designation: "Research & Development Head",
    photo: "/LN.png", 
  },
  {
    name: "Narayanan SB",
    designation: "Operational Lead",
    photo: "/Narayanan.png", 
  },
  {
    name: "Tejasree Tammina",
    designation: "Manager - Sales",
    photo: "/Tejasree.png", 
  },
  {
    name: "Gayathri Rajagopalan",
    designation: "HR Manager",
    photo: "/Gayathiri.png", 
  },
  {
    name: "Sanjay GS Krishna",
    designation: "Public Relations Officer (PRO)",
    photo: "/Sanjay GS.png", 
  },
  {
    name: "Pranesh PK",
    designation: "Business Development Executive",
    photo: "/Pranesh PK.png",
  },
  {
    name: "Kalaimaran DP",
    designation: "Business Development Executive",
    photo: "/Kalaimaran.png", 
  },
];

const TeamMembers = () => {
  return (
    <div className="team-members-container">
      <h2 className="team-members-heading">Our Team</h2>
      <div className="team-list">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <img
              className="team-member-photo"
              src={member.photo} 
              alt={`${member.name}'s photo`}
            />
            <h3 className="team-member-name">{member.name}</h3>
            <p className="team-member-designation">{member.designation}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamMembers;
