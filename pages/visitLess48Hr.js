import React from "react";
import GuidedExperiencePage from "../components/guided_experience_page";

let visitLess48Hr = props => {
  return <GuidedExperiencePage section="visitLess48Hr" {...props} />;
};

export default visitLess48Hr;
