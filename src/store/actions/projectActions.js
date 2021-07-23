export const createProject = (project) => {
  return (dispatch, getState, { getFirebase }) => {
    const firestore = getFirebase().firestore();
    firestore
      .collection("Project")
      .add({
        ...project,
        id: new Date(),
      })
      .then(() => {
        dispatch({ type: "ADD_PROJECT", project });
      })
      .catch((err) => {
        dispatch({ type: "ADD_PROJECT_ERROR", err });
      });
  };
};
