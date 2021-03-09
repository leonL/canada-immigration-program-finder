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
    visitResidentUS: "visitResidentUS",
    visitWantWork: "visitWantWork",
    visitLess48Hr: "visitLess48Hr",
    needs: "needs",
    summary: "summary",
    benefitsDirectory: "benefits-directory"
  };
  return pageNameDict[questionName];
};
