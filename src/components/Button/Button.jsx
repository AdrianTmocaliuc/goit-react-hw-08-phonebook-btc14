import { Component } from "react";
import s from "./Button.module.scss";
import PropTypes from "prop-types";

import { TailSpin } from "react-loader-spinner";

import { connect } from "react-redux";

class Button extends Component {
  render() {
    const { title, id, onClick, selected } = this.props;
    return (
      <>
        <button className={s.button} id={id} onClick={onClick}>
          {this?.props?.loading && selected === id ? (
            <TailSpin height="15" width="15" color="red" ariaLabel="loading" />
          ) : (
            title
          )}
        </button>
      </>
    );
  }
}

Button.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  onClick: PropTypes.func,
};

const mapStateToProps = (state) => {
  return { loading: state.items.removeLoader };
};

export default connect(mapStateToProps)(Button);
