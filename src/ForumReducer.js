const ForumReducer = (state, action) => {
  if (action.type == "add") {
    let newForums = [...state, action.obj];
    localStorage.setItem("forum", JSON.stringify(newForums));
    return newForums;
  }
  if (action.type == "delAll") {
    let newForums = state.filter((val, ind) => {
      if (new Date().getFullYear() - new Date(val.date).getFullYear() >= 1) {
        return true;
      } else if (new Date().getMonth() - new Date(val.date).getMonth() >= 1) {
        return true;
      } else if (new Date().getDay() - new Date(val.date).getDay() >= 1) {
        return true;
      } else if (new Date().getHours() - new Date(val.date).getHours() >= 1) {
        return true;
      } else if (
        new Date().getMinutes() - new Date(val.date).getMinutes() >
        5
      ) {
        return true;
      } else {
        return false;
      }
    });
    localStorage.setItem("forum", JSON.stringify(newForums));
    return newForums;
  }
  if (action.type == "delItem") {
    let newForums = state.filter((val, ind) => {
      if (action.index == ind) {
        return false;
      } else {
        return true;
      }
    });
    localStorage.setItem("forum", JSON.stringify(newForums));
    return newForums;
  }
};
export default ForumReducer;
