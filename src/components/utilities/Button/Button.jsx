import { Component } from "react";
import s from "./Button.module.scss";
import PropTypes from "prop-types";

import { TailSpin } from "react-loader-spinner";

import { connect } from "react-redux";

class Button extends Component {
  render() {
    const { title, id, onClick, selected, type = "button" } = this.props;
    const checkedButton =
      this?.props?.loading && selected === id && title === "Delete";
    return (
      <>
        <button
          disabled={checkedButton ? true : false}
          className={s.button}
          id={id}
          onClick={onClick}
          type={type}
        >
          {checkedButton ? (
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
  id: PropTypes.string,
  selected: PropTypes.string,
};

const mapStateToProps = (state) => {
  return { loading: state.items.removeLoader };
};

export default connect(mapStateToProps)(Button);
