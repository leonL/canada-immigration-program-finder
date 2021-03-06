exports.tableNames = [
  "benefits",
  "benefitEligibility",
  "needs",
  "translations",
  "questions",
  "multipleChoiceOptions",
  "questionDisplayLogic",
  "questionClearLogic",
  "benefitExamples",
  "nextSteps"
];

exports.getPageName = questionName => {
  const pageNameDict = {
    patronType: "",
    visit_ResidentUS: "visit_ResidentUS",
    needs: "needs",
    summary: "summary",
    benefitsDirectory: "benefits-directory"
  };
  return pageNameDict[questionName];
};
