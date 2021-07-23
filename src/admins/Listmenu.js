import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import MenuLink from "./MenuLink";
import Addmenu from "./Addmenu";

const Listmenu = (props) => {
  const { firestore } = props;
  return (
    <div style={{ marginBottom: 100 }}>
      {firestore ? (
        <div className="container">
          {firestore.map((lists, key) => {
            return (
              <div key={key}>
                <MenuLink datas={lists} />
              </div>
            );
          })}
        </div>
      ) : (
        <div style={{ textAlign: "center" }}>Lodding...</div>
      )}
      <Addmenu />
    </div>
  );
};

const mapStateToprops = (state) => {
  const data = state.firestore.ordered.menulink;
  return {
    firestore: data,
  };
};

export default compose(
  firestoreConnect(() => ["menulink"]),
  connect(mapStateToprops)
)(Listmenu);
