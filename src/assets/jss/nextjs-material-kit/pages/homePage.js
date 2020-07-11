import {container, mainElement} from "src/assets/jss/nextjs-material-kit.js";
import imagesStyle from "src/assets/jss/nextjs-material-kit/imagesStyles.js";

const homePageStyle = {
  subtitle: {
    fontSize: "1.313rem",
    maxWidth: "500px",
    margin: "10px auto 0"
  },
  container: {
    ...container,
    paddingTop: "1rem"

  },
  imagesStyle,
  mainElement,
};
export default homePageStyle;
