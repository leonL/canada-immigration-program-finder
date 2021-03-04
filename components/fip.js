import React, { Component } from "react";
import PropTypes from "prop-types";
import GOCSymbol from "./icons/GOCSymbol";

class FIP extends Component {
  constructor(props) {
    super(props);

    this.state = { t: props.t };
  }

  render() {
    const { t } = this.props;
    const fipRed = "#FF0000";
    const lang = t("current-language-code");

    return <GOCSymbol lang={lang} fillColor={fipRed} />;
  }
}

FIP.propTypes = {
  t: PropTypes.func.isRequired
};

export default FIP;
