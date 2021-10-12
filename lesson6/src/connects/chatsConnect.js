import { chatsMessageList, chatsAdd, chatsRemove } from "../redux/store/chats/actions.js";
import { compose } from "redux";
import { connect } from "react-redux";
import { chatsSelector } from "../redux/store/chats/selectors.js";

const mapStateToProps = (state) => ({
  messages: chatsSelector(state),
})

const mapDispatchToProps = {
    chatsMessageList,
    chatsAdd,
    chatsRemove,
};

export const postsMapStateConnect = connect(mapStateToProps)
export const postsMapDispatchConnect = connect(null, mapDispatchToProps)
export const postsConnect = compose(postsMapStateConnect, postsMapDispatchConnect);