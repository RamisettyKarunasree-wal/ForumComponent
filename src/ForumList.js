import ForumContext from "./ForumContext";
import { useContext } from "react";
import user from "./user.png";
import ForumTopic from "./ForumTopic";
const ForumList = () => {
  let reducerValues = useContext(ForumContext);
  const delForum = (ind) => {
    if (window.confirm("Do You want to Delete?") == true) {
      reducerValues.dispatch({ type: "delItem", index: ind });
    }
  };
  return (
    <div className="list">
        <h1>Forum List</h1>
      {reducerValues.state.map((val, ind) => {
        return (
          <div className="item">
            <img src={user} className="logo" />
            <div className="details">
              <div className="user">{val.user}</div>
              <div className="date">posted on : {val.date}</div>
            </div>
            <button className="del"
              onClick={() => {
                delForum(ind);
              }}
            >
              Delete
            </button>
            <ForumTopic topic={val.topic} />
          </div>
        );
      })}
    </div>
  );
};
export default ForumList;
