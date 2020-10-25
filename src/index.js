import A from "./components/A";
import Box from "./components/Box";
import Email from "./components/Email";
import Image from "./components/Image";
import Item from "./components/Item";
import Span from "./components/Span";
import PropTypes, { configStyleValidator, styleValidator } from "./PropTypes";
import renderEmail from "./renderEmail";

const DEV =
  typeof process !== "undefined" &&
  process.env &&
  process.env.NODE_ENV !== "production";

configStyleValidator({
  warn: DEV,
});

export {
  PropTypes,
  Box,
  Email,
  Image,
  Item,
  Span,
  A,
  configStyleValidator,
  renderEmail,
};

export default {
  PropTypes,
  configStyleValidator,
  renderEmail,
  styleValidator,
};
