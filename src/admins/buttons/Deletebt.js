import React from "react";
import firebase from "../../config/fbconfig";
import { storage } from "../../config/fbconfig";

const Deletebt = ({ datas }) => {
  function deletedata() {
    let pictureRef = storage.refFromURL(datas.image);
    pictureRef.delete();
    console.log("datatata", datas.id);
    firebase
      .firestore()
      .collection("menulink")
      .doc(datas.id)
      .delete()
      .then(() => {
        console.log("Delete OK");
      })
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <button
        onClick={deletedata}
        style={{ height: 100, width: 100 }}
        type="button"
        className="btn btn-danger btn-lg rounded-circle"
      >
        Delete
      </button>
    </div>
  );
};

export default Deletebt;
