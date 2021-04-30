/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Component } from "react";
import withI18N from "../lib/i18nHOC";
import PropTypes from "prop-types";
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
        <div>
          <input
            id="wb-srch-q"
            list="wb-srch-q-ac"
            className="wb-srch-q form-control"
            name="q"
            type="search"
            size="27"
            maxLength="150"
            placeholder={t("banner.canada-ca-search-placeholder")}
          />
          {Object.keys(canadaCaSearchParams).map((key, i) => (
            <input
              key={i}
              name={key}
              value={canadaCaSearchParams[key]}
              type="hidden"
            />
          ))}
          <datalist id="wb-srch-q-ac"></datalist>
        </div>
        <div className="form-group submit">
          <button
            type="submit"
            id="wb-srch-sub"
            className="btn btn-primary btn-small"
            name="wb-srch-sub"
          >
            <span className="glyphicon-search glyphicon"></span>
            <span className="wb-inv">Search</span>
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
