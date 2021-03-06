import PropTypes from "prop-types";
import React from "react";
import includeDataProps from "../includeDataProps";
import EmailPropTypes from "../PropTypes";

export default function Item(props) {
  return (
    <tr>
      <td
        {...includeDataProps(props)}
        className={props.className}
        align={props.align}
        valign={props.valign}
        bgcolor={props.bgcolor}
        style={props.style}
      >
        {props.children}
      </td>
    </tr>
  )
}

Item.propTypes = {
  className: PropTypes.string,
  bgcolor: PropTypes.string,
  align: PropTypes.oneOf(['left', 'center', 'right']),
  valign: PropTypes.oneOf(['top', 'middle', 'bottom']),
  style: EmailPropTypes.style,
  children: PropTypes.node,
}

Item.defaultProps = {
  className: undefined,
  bgcolor: undefined,
  align: undefined,
  valign: undefined,
  style: undefined,
  children: undefined,
}
