import React from "react";

class ImageCard extends React.Component {
  // console.log(props);

  changeImageState = () => {

  }

  render(props) {
    return (

      <button
        onClick={this.props.clickEvent}
        className="p-2 col-lg-2 col-md-3 col-sm-6"
      >
        <img
        src={this.props.src}
        alt={this.props.alt}
        className="img-fluid"
      />
      </button>
      
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
