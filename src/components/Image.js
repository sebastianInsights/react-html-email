import PropTypes from "prop-types";
import React from "react";
import includeDataProps from "../includeDataProps";
import EmailPropTypes from "../PropTypes";

export default function Image(props) {
  return (
    <img
      {...includeDataProps(props)}
      alt={props.alt}
      src={props.src}
      width={props.width}
      height={props.height}
      style={{
        display: 'block',
        outline: 'none',
        border: 'none',
        textDecoration: 'none',
        ...props.style,
      }}
    />
  )
}

Image.propTypes = {
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  style: EmailPropTypes.style,
}

Image.defaultProps = {
  style: undefined,
}
