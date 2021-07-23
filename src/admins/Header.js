import React, { Component } from "react";

export class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageProfile:
        "https://scontent.fbkk22-2.fna.fbcdn.net/v/t1.6435-9/128912808_2785553355106647_4528299021663621621_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeEhZ0MsLBC39EYz7SFtcjXKBIkaEEkpBRAEiRoQSSkFEDxpN3k54KgU-9rfPE2cSbQqjE0Zc76YteO8EcTkIBeg&_nc_ohc=ZXkYwBmAipIAX8OzpdU&_nc_oc=AQk4C04sz105R7xOU-lORn4KDFeOtIA_EFs778fg6unM5OAsVmyhk2Sx1HCNRgqUliU&_nc_ht=scontent.fbkk22-2.fna&oh=77ac0a3a6a00e4b65d5db065329f920c&oe=6120C823",
      name: "Aya Body",
    };
  }

  render() {
    return (
      <div className="">
        <div
          className="header"
          style={{
            paddingTop: 80,
            paddingBottom: 20,
            textAlign: "center",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            fontSize: 30,
            color: "white",
          }}
        >
          <div
            style={{
              margin: "auto auto",
              width: 200,
              height: 200,
              backgroundImage: `url(${this.state.imageProfile})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              borderRadius: "100%",
              marginBottom: 25,
              border: "4mm ridge #eb6382",
            }}
          />

          <h1>{this.state.name}</h1>
        </div>
      </div>
    );
  }
}

export default Header;
