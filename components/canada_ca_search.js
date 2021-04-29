import { Component } from "react";
/** @jsx jsx */
import { jsx } from "@emotion/core";

class CanadaCaSearch extends Component {
  render() {
    return (
      <form
        action="https://recherche-search.gc.ca/rGs/s_r?#wb-land"
        method="get"
        role="search"
        className="form-inline"
      >
        <div className="form-group">
          <input
            id="wb-srch-q"
            list="wb-srch-q-ac"
            className="wb-srch-q form-control"
            name="q"
            type="search"
            size="27"
            maxLength="150"
            placeholder="Search Canada.ca"
          />
          <input name="st" value="s" type="hidden" />
          <input name="num" value="10" type="hidden" />
          <input name="langs" value="eng" type="hidden" />
          <input name="st1rt" value="0" type="hidden" />
          <input name="s5bm3ts21rch" value="x" type="hidden" />
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

export default CanadaCaSearch;
