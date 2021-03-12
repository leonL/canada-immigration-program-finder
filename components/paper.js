import { Component } from "react";
import PropTypes from "prop-types";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { globalTheme } from "../theme";

class Paper extends Component {
  padding = { sm: "24px", md: globalTheme.cardPadding, lg: "63px", xl: "96px" };
  paddingMobile = {
    sm: "15px",
    md: "19px",
    lg: globalTheme.cardPadding,
    xl: "45px"
  };
  style = css`
    background-color: white;
    box-sizing: border-box;
    width: 100%;
  `;
  render() {
    return (
      <div
        css={this.props.styles ? [this.style, this.props.styles] : [this.style]}
      >
        {this.props.children}
      </div>
    );
  }
}

Paper.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  padding: PropTypes.string,
  styles: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array
  ])
};

export default Paper;
