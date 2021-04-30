/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { Component } from "react";
import withI18N from "../lib/i18nHOC";
import PropTypes from "prop-types";
import SearchIcon from "./icons/Search";
class CanadaCaSearch extends Component {
  render() {
    const { t } = this.props;

    const canadaCaSearchURL = "https://recherche-search.gc.ca/rGs/s_r#wb-land",
      canadaCaSearchParams = {
        st: "s",
        num: "10",
        langs: t("current-language-code"),
        st1rt: "0",
        s5bm3ts21rch: "x"
      };

    return (
      <form
        action={canadaCaSearchURL}
        method="get"
        role="search"
        aria-label="all canada.ca"
      >
        {Object.keys(canadaCaSearchParams).map((key, i) => (
          <input
            key={i}
            name={key}
            value={canadaCaSearchParams[key]}
            type="hidden"
          />
        ))}
        <div>
          <input
            name="q"
            type="search"
            size="27"
            maxLength="150"
            css={searchInputCss}
            placeholder={t("banner.canada-ca-search-placeholder")}
          />
          <button type="submit" aria-label="search" css={searchButtonCss}>
            <SearchIcon css={serachIconCss} />
          </button>
        </div>
      </form>
    );
  }
}

CanadaCaSearch.propTypes = {
  t: PropTypes.func.isRequired
};

export default withI18N(CanadaCaSearch);

const searchInputCss = css`
  padding: 6px 12px;
  min-height: 37px;
  font-size: 16px;
  line-height: 23px;
  color: #5c5c5c;
  border: 1px solid #e0e0e0;
  font-family: "Noto Sans", sans-serif;
  vertical-align: top;
  outline: none;
`;

const searchButtonCss = css`
  color: white;
  background-color: #26374a;
  min-height: 36px;
  min-width: auto;
  display: inline-block;
  border: none;
  padding: 3px 8px;
  :hover {
    cursor: pointer;
  }
`;

const serachIconCss = css`
  margin-top: 4px;
`;
