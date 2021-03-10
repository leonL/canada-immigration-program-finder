import React from "react";
import { mount } from "enzyme";
import { GuidedExperienceSummary } from "../../components/guided_experience_summary";
const { axe, toHaveNoViolations } = require("jest-axe");
expect.extend(toHaveNoViolations);
import benefitsFixture from "../fixtures/benefits";
import translate from "../fixtures/translate";
import needsFixture from "../fixtures/needs";
import benefitEligibilityFixture from "../fixtures/benefitEligibility";
import questionsFixture from "../fixtures/questions";
import questionDisplayLogicFixture from "../fixtures/question_display_logic";
import multipleChoiceOptions from "../fixtures/multiple_choice_options";
import configureStore from "redux-mock-store";

describe("GuidedExperienceSummary", () => {
  let props, reduxState, mockStore;
  beforeEach(() => {
    props = {
      t: translate,
      url: { query: {}, route: "/summary" }
    };
    reduxState = {
      benefits: benefitsFixture,
      filteredBenefits: benefitsFixture,
      benefitEligibility: benefitEligibilityFixture,
      needs: needsFixture,
      selectedNeeds: {},
      serviceType: "s1",
      patronType: "veteran",
      option: "",
      questions: questionsFixture,
      questionDisplayLogic: questionDisplayLogicFixture,
      questionClearLogic: questionDisplayLogicFixture,
      multipleChoiceOptions: multipleChoiceOptions
    };
    props.reduxState = reduxState;
    mockStore = configureStore();
    props.store = mockStore(reduxState);
  });

  it("passes axe tests", async () => {
    let html = mount(<GuidedExperienceSummary {...props} />).html();
    expect(await axe(html)).toHaveNoViolations();
  });
});
