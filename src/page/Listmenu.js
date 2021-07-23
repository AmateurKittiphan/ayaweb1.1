import React, { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";

class Listmenu extends Component {
  render() {
    const { firestore } = this.props;
    return (
      <div>
        {firestore ? (
          <div className="container" style={{ marginBottom: 100 }}>
            {firestore.map((lists, key) => {
              return (
                <a
                  href={lists.linkurl}
                  key={key}
                  className="d-flex align-items-center"
                  style={{
                    marginTop: 20,
                    marginRight: "auto",
                    marginLeft: "auto",
                    backgroundColor: "#cbe6c3",
                    borderRadius: 50,
                    textDecoration: "none",
                    maxWidth: 512,
                  }}
                >
                  <div className="flex-shrink-0">
                    <div
                      style={{
                        width: 100,
                        height: 100,
                        backgroundImage: `url(${lists.image})`,
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        borderRadius: 50,
                      }}
                    />
                  </div>
                  <div
                    style={{
                      margin: "auto",
                      width: "70%",
                      textAlign: "center",
                      color: "black",
                    }}
                  >
                    <h5>{lists.title}</h5>
                    <h4
                      className="text-nowrap"
                      style={{
                        margin: "auto",
                        width: "60%",
                        textOverflow: "ellipsis",
                        overflow: "hidden",
                        fontSize: 18,
                      }}
                    >
                      {lists.detail}
                    </h4>
                  </div>
                </a>
              );
            })}
          </div>
        ) : (
          <div style={{ textAlign: "center" }}>Lodding...</div>
        )}
      </div>
    );
  }
}

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
