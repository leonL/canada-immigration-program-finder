import { Component } from "react";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import PropTypes from "prop-types";
import LanguageButton from "./language_button";
import CanadaCaSearch from "./canada_ca_search";
import { globalTheme } from "../theme";
import SkipToMainContent from "./skip_to_main_content";
import Container from "./container";
import FIP from "./fip";

export const breakpoints = {
  xs: 481,
  sm: 578,
  md: 764,
  base: 764,
  lg: 992
};

const mediaQuery = Object.keys(breakpoints).reduce((accumulator, label) => {
  let prefix = "max-width:";
  let suffix = typeof breakpoints[label] === "string" ? "" : "px";
  accumulator[label] = cls =>
    css`
      @media screen and (${prefix + breakpoints[label] + suffix}) {
        ${cls};
      }
    `;
  return accumulator;
}, {});

const white_bg = css`
  background-color: #fff;
  padding-bottom: 15px;
  border-bottom: 3px solid #38414d;
`;

const container = css`
  margin: 0px;
  padding-top: 10px;
  width: auto;
  justify-content: space-between;
  background-color: ${globalTheme.colour.greyishBrownTwo};
  display: -webkit-flex;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -moz-box;
  display: flex;
  .svg-container {
    /* same as the width value in our svg */
    width: 400px;
    height: 30px;
  }
  .svg-logo {
    width: 400px;
    fill: white;
  }
  ${mediaQuery.xs(css`
    .svg-container {
      width: 220px;
      height: 30px;
      svg {
        width: 220px;
        height: 30px;
        fill: white;
      }
    }
  `)};
`;

const languageSelection = css`
  text-align: right;
  padding-top: 10px;
`;

class FederalBanner extends Component {
  render() {
    const { t, skipLink, url, i18n } = this.props;
    return (
      <div css={white_bg}>
        <Container>
          <SkipToMainContent skipLink={skipLink} t={t} />
          <div css={languageSelection}>
            <LanguageButton i18n={i18n} t={t} url={url} />
          </div>
          <div css={container}>
            <div className="svg-container">
              <FIP t={t} />
            </div>
            <CanadaCaSearch />
          </div>
        </Container>
      </div>
    );
  }
}

FederalBanner.propTypes = {
  url: PropTypes.object.isRequired,
  t: PropTypes.func.isRequired,
  i18n: PropTypes.object,
  skipLink: PropTypes.string.isRequired
};

export default FederalBanner;
