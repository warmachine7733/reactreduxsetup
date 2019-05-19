import React from "react";
import { connect } from "react-redux";

const Sample = props => {
  const { text } = props;
  return <div>{text}</div>;
};
const mapStateToProps = state => {
  return {
    text: state.sample.text
  };
};

export default connect(mapStateToProps)(Sample);
