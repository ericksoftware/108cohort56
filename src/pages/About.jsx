import React, { useState } from "react";
import "./About.css";

function About() {
    const [showemail, setshowemail] = useState(false);

    function displayEmail() {
        setshowemail(true);
    }
    
  return (
    <div className="about">
        <img className="picture" src="/images/a.jpg" alt="" />
        <h2>Erick Rodriguez</h2>
        { showemail ? <h5>Erick.Rodriguez@sdgku.edu</h5> : null }

        <button className="btn btn-dark" onClick={displayEmail}>Show email</button>
    </div>
  );
}

export default About;