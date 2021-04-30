/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Component } from "react";
import withI18N from "../lib/i18nHOC";
import PropTypes from "prop-types";
import IconButton from "@material-ui/core/IconButton";
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
        <input
          name="q"
          type="search"
          size="27"
          maxLength="150"
          placeholder={t("banner.canada-ca-search-placeholder")}
        />
        <IconButton type="submit" aria-label="search">
          <SearchIcon />
        </IconButton>
      </form>
    );
  }
}

CanadaCaSearch.propTypes = {
  t: PropTypes.func.isRequired
};

export default withI18N(CanadaCaSearch);
