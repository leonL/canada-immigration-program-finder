import { Component } from "react";
import PropTypes from "prop-types";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const containerStyle = css`
  padding-right: 20px;
  padding-left: 20px;
  margin-right: auto;
  margin-left: auto;
`;

class Container extends Component {
  render() {
    let css = containerStyle;
    if (this.props.className) css = [containerStyle, this.props.className];
    return (
      <div css={css} id={this.props.id ? this.props.id : ""}>
        <div>{this.props.children}</div>
      </div>
    );
  }
}

Container.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  id: PropTypes.string,
  mobileFullWidth: PropTypes.bool,
  className: PropTypes.object
};

export default Container;
