import {defaultFont} from "src/assets/jss/nextjs-material-kit.js";
import theme from "../../../theme";
import tooltip from "src/assets/jss/nextjs-material-kit/tooltipsStyle.js";

const headerLinksStyle = {
  list: {
    ...defaultFont,
    fontSize: "0.7em",
    margin: 0,
    paddingLeft: "0",
    listStyle: "none",
    paddingTop: "0",
    paddingBottom: "0",
    color: "inherit",
  },
  listItem: {
    float: "left",
    color: "inherit",
    position: "relative",
    display: "block",
    width: "auto",
    margin: "0",
    padding: "0",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      "&:after": {
        width: "calc(100% - 2rem)",
        content: '""',
        display: "block",
        height: "0.063em",
        marginLeft: "0.938em",
        backgroundColor: "#e5e5e5"
      }
    }
  },
  listItemText: {
    padding: "0 !important"
  },
  navLink: {
    color: "secondary",
    position: "relative",
    padding: "0.9375rem",
    fontWeight: "bold",
    fontSize: "1.2rem",
    textTransform: "uppercase",
    borderRadius: "0.188em",
    lineHeight: "1.25rem",
    textDecoration: "none",
    margin: "0em",
    display: "inline-flex",
    "&:hover,&:focus": {
      color: theme.palette.primary.contrastText,
      background: theme.palette.primary.main
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "0.5rem",
    },
    [theme.breakpoints.down("sm")]: {
      width: "calc(100% - 1.875em)",
      marginLeft: "1rem",
      marginBottom: "0.5em",
      marginTop: "0.5em",
      textAlign: "left",
      "& > span:first-child": {
        justifyContent: "flex-start"
      },

    }
  },
  notificationNavLink: {
    [theme.breakpoints.down("md")]: {
      top: "0",
      margin: "0.4rem 1rem"
    },
    color: "#FFF",
    padding: "0.9375rem",
    fontWeight: "400",
    fontSize: "0.75rem",
    textTransform: "uppercase",
    lineHeight: "1.25rem",
    textDecoration: "none",
    margin: "0rem",
    display: "inline-flex",
    top: "0.25em"
  },
  registerNavLink: {
    [theme.breakpoints.down("md")]: {
      top: "0",
      margin: "0.4rem 1rem"
    },
    top: "0.188rem",
    position: "relative",
    fontWeight: "400",
    fontSize: "0.75rem",
    textTransform: "uppercase",
    lineHeight: "1.25rem",
    textDecoration: "none",
    margin: "0rem",
    display: "inline-flex"
  },
  navLinkActive: {
    color: "inherit",
    backgroundColor: "rgba(255, 255, 255, 0.1)"
  },
  icons: {
    width: "1.25em",
    height: "1.25em",
    marginRight: "0.188em"
  },
  socialIcons: {
    position: "relative",
    fontSize: "1.25em !important",
    marginRight: "0.25em"
  },
  dropdownLink: {
    "&,&:hover,&:focus": {
      color: "inherit",
      textDecoration: "none",
      display: "block",
      padding: "0.625em 1.25em"
    }
  },
  ...tooltip,
  marginRight5: {
    marginRight: "0.313em"
  }
};

export default headerLinksStyle;
