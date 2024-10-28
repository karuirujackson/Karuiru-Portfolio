import React from 'react';
import { CiFaceMeh } from "react-icons/ci";

function About() {
  return (
    <div className="relative top-40 pt-5">
      <div className="flex items-center justify-center">
        <div className="text-white">
          <CiFaceMeh />
        </div>
        <h2 className="text-yellow-300">About Me</h2>
      </div>
    </div>
  )
}

export default About;