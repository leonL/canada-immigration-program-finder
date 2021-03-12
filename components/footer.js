import { Component } from "react";
import PropTypes from "prop-types";
import WordMark from "./word_mark";
import { Toolbar } from "@material-ui/core";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { globalTheme } from "../theme";

const root = css`
  background-color: ${globalTheme.colour.footerBackground};
  height: 100px;
`;

const govSymbol = css`
  position: absolute;
  right: 10px;
  top: 20px;
`;

const toolbar = css`
  padding: 0 !important;
  height: 100%;
`;

class Footer extends Component {
  render() {
    return (
      <div css={root} role="navigation">
        <Toolbar css={toolbar}>
          <div css={govSymbol}>
            <WordMark height="40px" width="168px" flag="#F00" text="#000" />
          </div>
        </Toolbar>
      </div>
    );
  }
}

Footer.propTypes = {
  t: PropTypes.func.isRequired
};

export default Footer;
