import { useReducer } from "react";
import ForumContext from "./ForumContext";
import ForumForm from "./ForumForm";
import ForumList from "./ForumList";
import ForumReducer from "./ForumReducer";

const Forum = () => {
  let initialValue = [];
  if (localStorage.getItem("forum")) {
    initialValue = JSON.parse(localStorage.getItem("forum"));
  }
  let [state, dispatch] = useReducer(ForumReducer, initialValue);
  let reducerValues = { state, dispatch };
  return (
    <div>
        <h1>Forum Component</h1>
      <ForumContext.Provider value={reducerValues}>
        <ForumForm />
        <ForumList />
      </ForumContext.Provider>
    </div>
  );
};
export default Forum;
