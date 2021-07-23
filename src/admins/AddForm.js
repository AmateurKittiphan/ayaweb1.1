import React, { Component } from "react";
import firebase from "../config/fbconfig";
import { storage } from "../config/fbconfig";

class AddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageFile: null,
      imageImport: "",
      title: "",
      detail: "",
      linkurl: "",
    };
  }

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    const uploadTask = storage
      .ref(`images/${this.state.title}`)
      .put(this.state.imageFile);
    uploadTask.on(
      "state_changed",
      (snapshot) => {},
      (error) => {
        console.log("Error", error);
      },
      () => {
        storage
          .ref("images")
          .child(this.state.title)
          .getDownloadURL()
          .then((url) => {
            firebase.firestore().collection("menulink").add({
              title: this.state.title,
              detail: this.state.detail,
              linkurl: this.state.linkurl,
              image: url,
            });
          });
      }
    );
  };

  fileSeleced = (e) => {
    this.setState({
      imageFile: e.target.files[0],
    });

    this.setState({
      imageImport: URL.createObjectURL(e.target.files[0]),
    });
  };

  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  render() {
    return (
      <div className="container">
        <div className="modal-dialog">
          <div className="modal-content" style={{ backgroundColor: "#cbe6c3" }}>
            <div className="modal-body">
              <form>
                <div className="mb-4">
                  <h2 className="text-center">Add</h2>
                </div>
                <img
                  style={{
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                    width: "40%",
                  }}
                  alt=""
                  src={this.state.imageImport}
                  width="150"
                />
                <div
                  className="mb-3"
                  style={{
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                    width: "80%",
                  }}
                >
                  <label htmlFor="exampleInputAddImage" className="form-label">
                    Add Image
                  </label>
                  <input
                    type="file"
                    className="form-control mb-3"
                    id="file"
                    aria-describedby="addimageHelp"
                    onChange={this.fileSeleced}
                  />
                  <label htmlFor="exampleInputTitle" className="form-label">
                    Title
                  </label>
                  <input
                    type="title"
                    className="form-control mb-3"
                    id="title"
                    aria-describedby="titleHelp"
                    onChange={this.handleChange}
                  />
                  <label htmlFor="exampleInputDetail" className="form-label">
                    Detail
                  </label>
                  <input
                    type="detail"
                    className="form-control mb-3"
                    id="detail"
                    aria-describedby="detailHelp"
                    onChange={this.handleChange}
                  />
                  <label htmlFor="exampleInputDetail" className="form-label">
                    Link URL
                  </label>
                  <input
                    type="linkurl"
                    className="form-control mb-3"
                    id="linkurl"
                    aria-describedby="linkurlHelp"
                    onChange={this.handleChange}
                  />
                </div>
                <div className="text-center">
                  <button className="btn btn-success" onClick={this.onSubmit}>
                    Ok
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddForm;
