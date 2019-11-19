import React from "react";

class ImageCard extends React.Component {
  render(props) {
    // console.log(props);
    return (
        <img
        src={this.props.src}
        alt={this.props.alt}
        data-id={this.props.id}
        data-isclicked={this.props.isClicked}
        className="img-fluid"
      />
      
    );
  }
}

export default ImageCard;