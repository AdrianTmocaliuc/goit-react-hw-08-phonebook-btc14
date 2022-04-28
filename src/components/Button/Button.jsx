import { Component } from "react";
import s from "./Button.module.scss";
import PropTypes from "prop-types";

export class Button extends Component {
  render() {
    const { title, id, onClick } = this.props;
    return (
      <>
        <button className={s.button} id={id} onClick={onClick}>
          {title}
        </button>
      </>
    );
  }
}

Button.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  onClick: PropTypes.func,
};
