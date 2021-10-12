import { profileActive } from "../redux/store/profile/actions.js";
import { compose } from "redux";
import { connect } from "react-redux";
import { profileSelector } from "../redux/store/profile/selectors.js";

const mapStateToProps = (state) => ({
  messages: profileSelector(state),
})

const mapDispatchToProps = {
    profileActive,
};

export const postsMapStateConnect = connect(mapStateToProps)
export const postsMapDispatchConnect = connect(null, mapDispatchToProps)
export const postsConnect = compose(postsMapStateConnect, postsMapDispatchConnect);