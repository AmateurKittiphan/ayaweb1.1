import React, { Component } from "react";
import Deletebt from "./buttons/Deletebt";

class MenuLink extends Component {
  render() {
    const datas = this.props.datas;
    return (
      <div className="row" style={fromlink}>
        <div className="col-8 " style={{ padding: 0 }}>
          <a
            href={datas.linkurl}
            style={{ padding: 0, textDecoration: "none" }}
            className="d-flex align-items-center"
          >
            <div className="flex-shrink-0">
              <div
                style={{
                  width: 100,
                  height: 100,
                  backgroundImage: `url(${datas.image})`,
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  borderRadius: 50,
                }}
              />
            </div>
            <div style={text}>
              <h5>{datas.title}</h5>
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
                {datas.detail}
              </h4>
            </div>
          </a>
        </div>

        <div
          className="col-4 d-flex flex-row-reverse "
          style={{
            padding: 0,
            textAlign: "center",
          }}
        >
          <Deletebt datas={datas} />
        </div>
      </div>
    );
  }
}

const text = {
  margin: "auto auto",
  width: "70%",
  textAlign: "center",
  color: "black",
};

const fromlink = {
  marginTop: 20,
  marginRight: "auto",
  marginLeft: "auto",
  backgroundColor: "#cbe6c3",
  borderRadius: 50,
  maxWidth: 512,
};

export default MenuLink;
