import React, { Component } from "react";
import PropTypes from "prop-types";
import Bookmark from "@material-ui/icons/Bookmark";
import BookmarkBorder from "@material-ui/icons/BookmarkBorder";
import { connect } from "react-redux";
import Cookies from "universal-cookie";
import { cx, css } from "react-emotion";
import { globalTheme } from "../theme";
import HeaderButton from "./header_button";
import { areCookiesDisabled } from "../utils/common";

const bookmarkButton = css`
  margin-left: -5px !important;
  padding-left: 0px !important;
  padding-right: 0px !important;
  padding-top: 0.526315em;
  padding-bottom: 0.526315em;
`;
const hideSmall = css`
  @media only screen and (max-width: ${globalTheme.max.sm}) {
    display: none !important;
  }
`;
const hideBig = css`
  @media only screen and (min-width: ${globalTheme.min.sm}) {
    display: none !important;
  }
  @media only screen and (max-width: ${globalTheme.max.mobile}) {
    display: none !important;
  }
`;
const bookmarkIcon = css`
  @media only screen and (max-width: ${globalTheme.max.mobile}) {
    font-size: 45px !important;
  }
`;
const tooltiptext = css`
  font-size: 14px;
  font-weight: normal;
  text-align: left;
  visibility: hidden;
  width: 160px;
  background-color: ${globalTheme.colour.paleGrey};
  color: ${globalTheme.colour.greyishBrown};
  padding: 10px;
  border-radius: 6px;
  position: absolute;
  z-index: 1;
  bottom: 140%;
  left: 50%;
  margin-left: -80px;
`;
const tooltip = css`
  position: relative;
  display: inline-block;
  :hover {
    .${tooltiptext} {
      visibility: visible;
    }
   .${tooltiptext}::after {
      content: " ";
      position: absolute;
      top: 100%; /* At the bottom of the tooltip */
      left: 50%;
      margin-left: -7px;
      border-width: 7px;
      border-style: solid;
      border-color: ${
        globalTheme.colour.paleGrey
      } transparent transparent transparent;
  }
`;

export class FavouriteButton extends Component {
  constructor() {
    super();
    this.cookies = new Cookies();
  }

  toggleFavourite = id => {
    let favouriteBenefits = this.cookies.get("favouriteBenefits")
      ? this.cookies.get("favouriteBenefits")
      : [];
    if (favouriteBenefits.indexOf(id) > -1) {
      favouriteBenefits.splice(favouriteBenefits.indexOf(id), 1);
    } else {
      favouriteBenefits.push(id);
    }
    this.cookies.set("favouriteBenefits", favouriteBenefits, { path: "/" });
    this.props.saveFavourites(favouriteBenefits);
    this.props.toggleOpenState();
  };

  render() {
    const { t } = this.props;
    const isBookmarked =
      this.props.favouriteBenefits.indexOf(this.props.benefit.id) > -1;
    return (
      <HeaderButton
        disabled={this.props.cookiesDisabled}
        id={"favourite-" + this.props.benefit.id}
        className={cx(bookmarkButton, tooltip)}
        aria-label={t("B3.favouritesButtonText")}
        onClick={() => this.toggleFavourite(this.props.benefit.id)}
        onMouseOver={() => {
          this.props.setCookiesDisabled(areCookiesDisabled());
        }}
        size="small"
      >
        {isBookmarked ? (
          <Bookmark className={cx("bookmarked", bookmarkIcon)} />
        ) : (
          <BookmarkBorder className={cx("notBookmarked", bookmarkIcon)} />
        )}
        <span className={hideSmall}>
          {this.props.t(
            isBookmarked
              ? "B3.favouritesButtonTextRemove"
              : "B3.favouritesButtonBText"
          )}
        </span>
        <span className={hideBig}>
          {this.props.t(
            isBookmarked
              ? "B3.favouritesButtonTextRemove"
              : "B3.favouritesButtonBTextMobile"
          )}
        </span>
        {this.props.cookiesDisabled ? (
          <span className={tooltiptext}>
            {t("favourites.disabled_cookies_tooltip")}
          </span>
        ) : null}
      </HeaderButton>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    saveFavourites: favouriteBenefits => {
      dispatch({
        type: "LOAD_DATA",
        data: { favouriteBenefits: favouriteBenefits }
      });
    },
    setCookiesDisabled: areDisabled => {
      dispatch({ type: "SET_COOKIES_DISABLED", data: areDisabled });
    }
  };
};

const mapStateToProps = reduxState => {
  return {
    favouriteBenefits: reduxState.favouriteBenefits,
    cookiesDisabled: reduxState.cookiesDisabled
  };
};

FavouriteButton.propTypes = {
  favouriteBenefits: PropTypes.array.isRequired,
  cookiesDisabled: PropTypes.bool.isRequired,
  setCookiesDisabled: PropTypes.func.isRequired,
  saveFavourites: PropTypes.func.isRequired,
  benefit: PropTypes.object.isRequired,
  toggleOpenState: PropTypes.func.isRequired,
  store: PropTypes.object,
  t: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FavouriteButton);
