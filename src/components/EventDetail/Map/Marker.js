import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 30px;
  height: 30px;
  background-color: #dd5c00;
  border: 10px solid #dd5c00;
  -webkit-clip-path: polygon(
    14% 19%,
    14% 8%,
    35% 0%,
    65% 0%,
    81% 7%,
    82% 21%,
    73% 48%,
    59% 84%,
    49% 100%,
    40% 84%,
    24% 41%
  );
  clip-path: polygon(
    14% 19%,
    14% 8%,
    35% 0%,
    65% 0%,
    81% 7%,
    82% 21%,
    73% 48%,
    59% 84%,
    49% 100%,
    40% 84%,
    24% 41%
  );
  user-select: none;
  transform: translate(-50%, -50%);
  cursor: ${props => (props.onClick ? "pointer" : "default")};
  &:hover {
    z-index: 1;
  }
`;

const Marker = props => (
  <Wrapper
    alt={props.text}
    {...(props.onClick ? { onClick: props.onClick } : {})}
  />
);

Marker.defaultProps = {
  onClick: null
};

Marker.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string.isRequired
};

export default Marker;
