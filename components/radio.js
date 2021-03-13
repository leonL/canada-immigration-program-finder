import PropTypes from "prop-types";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { globalTheme } from "../theme";

const rootStyle = css({
  display: "block",
  position: "relative",
  padding: "0 0 0 28px",
  marginBottom: "2px"
});

const inputStyle = css({
  position: "absolute",
  cursor: "pointer",
  left: 0,
  top: 0,
  width: "44px",
  height: "44px",
  zIndex: 1,
  margin: 0,
  zoom: 1,
  opacity: 0,
  ":checked + label::after": {
    opacity: 1
  },
  ":focus + label::before": {
    boxShadow: `0 0 0 3px ${globalTheme.colour.focusColour};`
  }
});

const labelStyle = css({
  fontFamily: globalTheme.fontFamilySansSerif,
  color: globalTheme.colour.fontColour,
  fontWeight: 400,
  textTransform: "none",
  fontSize: "19px",
  lineHeight: "1.25",
  cursor: "pointer",
  padding: "8px 25px 5px",
  display: "inline-block",
  ":before": {
    content: "''",
    boxSizing: "border-box",
    position: "absolute",
    top: 0,
    left: 0,
    width: "40px",
    height: "40px",
    border: "2px solid black",
    borderRadius: "50%",
    background: "transparent"
  },
  ":after": {
    content: "''",
    position: "absolute",
    top: "10px",
    left: "10px",
    width: 0,
    height: 0,
    border: "10px solid",
    borderRadius: "50%",
    opacity: 0
  }
});

const mobileLabelStyle = css`
  @media only screen and (max-width: ${globalTheme.max.xs}) {
    font-size: 16px;
  }
`;

const sidebarLabelStyle = css({
  fontSize: "14px !important",
  padding: "6px 10px 15px 8px !important",
  ":before": {
    width: "30px !important",
    height: "30px !important"
  },
  ":after": {
    top: "5px !important",
    left: "5px !important"
  }
});

const Radio = ({ children, styles, value, sidebar, ...input }) => (
  <div css={[rootStyle, styles]}>
    <input
      type="radio"
      css={inputStyle}
      value={value}
      id={value + "-0"}
      {...input}
    />
    <label
      css={[mobileLabelStyle, labelStyle, sidebar ? sidebarLabelStyle : null]}
      htmlFor={value + "-0"}
    >
      {children}
    </label>
  </div>
);

Radio.defaultProps = {
  styles: undefined
};

Radio.propTypes = {
  styles: PropTypes.object,
  value: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  sidebar: PropTypes.bool
};

export default Radio;
