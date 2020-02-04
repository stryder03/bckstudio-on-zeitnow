import { title, secondaryColor, primaryFontColor, brandFont, playBrand, mainElement} from "assets/jss/nextjs-material-kit.js";


const clpStyle = {
  main_content: {
    position: "relative",
    zIndex: "2"
  },
  mainContentRaised: {
    margin: "auto",
    borderRadius: "6px",
    boxShadow:
        "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
    "@media (max-width: 830px)": {
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  play_brand: {
    ...playBrand
  },
  clp_exclaim: {
    ...playBrand,
  fontSize: "0.85em"

  },
  section: {
    width: "100%",
    padding: "70px 0",
    textAlign: "center",
    backgroundColor: secondaryColor
  },
  title: {
    ...title,
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  },
  description: {
    color: primaryFontColor
  },
  mainElement,
  ,
  brandFont
};

export default clpStyle;
