import { useContext, useState } from "react";
import ForumContext from "./ForumContext";

const ForumForm = () => {
  let [topic, setTopic] = useState("default Topic");
  let [user, setUser] = useState("Unknown User");
  const reducerValues = useContext(ForumContext);
  const addForum = () => {
    const obj = {
      topic: topic,
      user: user,
      date: new Date().toGMTString(),
    };
    reducerValues.dispatch({ type: "add", obj: obj });
  };
  const deleteLast = () => {
    reducerValues.dispatch({ type: "delAll" });
  };
  return (
    <div className="form">
      <h1>Add Forum</h1>
      <div>
        <b>Enter Forum Topic: </b>
      </div>
      <textarea
        placeholder="Enter Forum Topic"
        name="topic"
        onInput={(e) => {
          setTopic(e.target.value);
        }}
      ></textarea>
      <br />
      <b>Select User: </b>
      <select
        name="username"
        onChange={(e) => {
          setUser(e.target.value);
        }}
      >
        <option value="User1">User 1</option>
        <option value="User2">User 2</option>
        <option value="User3">User 3</option>
      </select>
      <br />
      <button onClick={addForum} className="prime_btn ">
        Add Forum
      </button>
      <br />
      <button onClick={deleteLast} className="del_btn">
        Delete forums that were created in last 5 minutes
      </button>
      <br />
    </div>
  );
};
export default ForumForm;
