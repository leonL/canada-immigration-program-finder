import { Component } from "react";
import PropTypes from "prop-types";
import { Grid } from "@material-ui/core";
import { connect } from "react-redux";
import { getPrintUrl, getHomeUrl } from "../selectors/urls";
import { withTheme } from "@material-ui/core/styles";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Container from "../components/container";
import { globalTheme } from "../theme";
import { areCookiesDisabled } from "../utils/common";
import BenefitsPane from "./benefits_pane";
import BreadCrumbs from "../components/breadcrumbs";
import Cookies from "universal-cookie";
import Paper from "./paper";
import AlphaBanner from "./alpha_banner";
import SelectionsEditor from "./selections_editor";
import Header from "./typography/header";

const innerDiv = css`
  margin-bottom: 130px;
`;
const topMatter = css`
  background-color: ${globalTheme.colour.white};
  width: 100%;
`;

export class BB extends Component {
  state = {
    showDisabledCookieBanner: false
  };

  constructor(props) {
    super(props);
    this.cookies = new Cookies();
  }

  componentDidMount() {
    this.props.setCookiesDisabled(areCookiesDisabled());
    this.setState({
      showDisabledCookieBanner: areCookiesDisabled()
    });
    // Update cookies if favourite benefits have been pruned on the server
    let favouritesFromCookies = this.cookies.get("favouriteBenefits"),
      favouriteBenefits = this.props.favouriteBenefits;

    if (favouritesFromCookies && favouritesFromCookies.length > 0) {
      const invalidBenefits = favouritesFromCookies.filter(
        b => favouriteBenefits.indexOf(b) === -1
      );
      if (invalidBenefits.length > 0) {
        this.cookies.set("favouriteBenefits", favouriteBenefits, { path: "/" });
        this.props.saveFavourites(favouriteBenefits);
      }
    }
  }

  componentDidUpdate() {
    if (this.state.showDisabledCookieBanner && !this.props.cookiesDisabled) {
      this.setState({
        showDisabledCookieBanner: false
      });
    }
  }

  render() {
    const { t, url, store, homeUrl, printUrl } = this.props; // eslint-disable-line no-unused-vars
    return (
      <Container>
        <div className={topMatter}>
          <BreadCrumbs
            t={t}
            breadcrumbs={[]}
            homeUrl={homeUrl}
            pageTitle={t("ge.Find benefits and services")}
          />
        </div>
        <Paper id={this.props.id} padding="md" styles={innerDiv}>
          <AlphaBanner t={t} url={url} />
          <Grid item xs={12}>
            <Header headingLevel="h1" size="bb">
              {t("ge.Find benefits and services")}
            </Header>
          </Grid>
          <Grid container spacing={32}>
            <Grid item md={4} xs={12}>
              <SelectionsEditor t={t} store={store} url={url} />
            </Grid>
            <Grid id="mainContent" item md={8} xs={12}>
              <BenefitsPane id="BenefitsPane" t={t} store={store} url={url} />
            </Grid>
          </Grid>
        </Paper>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setCookiesDisabled: areDisabled => {
      dispatch({ type: "SET_COOKIES_DISABLED", data: areDisabled });
    },
    saveFavourites: favouriteBenefits => {
      dispatch({
        type: "LOAD_DATA",
        data: { favouriteBenefits: favouriteBenefits }
      });
    }
  };
};

const mapStateToProps = (reduxState, props) => {
  return {
    cookiesDisabled: reduxState.cookiesDisabled,
    benefits: reduxState.benefits,
    favouriteBenefits: reduxState.favouriteBenefits,
    homeUrl: getHomeUrl(reduxState, props),
    printUrl: getPrintUrl(reduxState, props, {})
  };
};

BB.propTypes = {
  url: PropTypes.object.isRequired,
  cookiesDisabled: PropTypes.bool.isRequired,
  setCookiesDisabled: PropTypes.func.isRequired,
  saveFavourites: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  homeUrl: PropTypes.string,
  printUrl: PropTypes.string.isRequired,
  t: PropTypes.func.isRequired,
  favouriteBenefits: PropTypes.array.isRequired,
  store: PropTypes.object
};

export default withTheme()(connect(mapStateToProps, mapDispatchToProps)(BB));
