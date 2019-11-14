import React from "react";

class ImageCard extends React.Component {
  // console.log(props);
  state = {
    isClicked: false
  };

  changeImageState = () => {
    if (this.state.isClicked === false) {
      this.state.setState(
        { isClicked: true }, () => console.log("this is clicked: " + this.state.isClicked)
      );
    } else {

    }

  }

  render(props) {
    return (
      <img
        src={this.props.src}
        alt={this.props.alt}
        className="img-fluid"
        data-clicked={this.state.isClicked}
      />
    );
  }
}

export default ImageCard;



// function ImageCard(props) {
//   // console.log(props);
//   return (
//     <img
//       src={props.src}
//       alt={props.alt}
//       className="p-2 col-lg-2 col-md-3 col-sm-6"
//       onClick={props.increment}
//       data-clicked={props.isClicked}
//     />
//   );
// }
