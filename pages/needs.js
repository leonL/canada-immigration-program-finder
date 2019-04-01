import React from "react";
import GuidedExperiencePage from "../components/guided_experience_page";
import airtableConstants from "../utils/hardcoded_strings";

let Needs = props => {
  return (
    <GuidedExperiencePage
      section={airtableConstants.question.needs}
      {...props}
    />
  );
};

export default Needs;
