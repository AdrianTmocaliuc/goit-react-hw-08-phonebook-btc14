import { Component } from "react";
import s from "./Button.module.scss";
import PropTypes from "prop-types";
import { useSelector, connect } from "react-redux";

class Button extends Component {
  // const loader = useSelector((state)=>state.items)

  render() {
    // console.log(this.props.loading);
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

const mapStateToProps = (state) => {
  return { loading: state.items.removeLoader };
};

export default connect(mapStateToProps)(Button);
