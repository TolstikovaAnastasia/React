import { messageAdd, messageChange, messageRemove } from "../redux/store/message/actions.js";
import { compose } from "redux";
import { connect } from "react-redux";
import { messageSelector, messageIdSelector, messageAuthorSelector, messageTextSelector } from "../redux/store/message/selectors.js";

const mapStateToProps = (state) => ({
  messages: messageSelector(state),
  messageId: messageIdSelector(state),
  messageAuthor: messageAuthorSelector(state),
  messageText: messageTextSelector(state),
})

const mapDispatchToProps = {
  messageAdd,
  messageChange,
  messageRemove,
};

export const postsMapStateConnect = connect(mapStateToProps)
export const postsMapDispatchConnect = connect(null, mapDispatchToProps)
export const postsConnect = compose(postsMapStateConnect, postsMapDispatchConnect);