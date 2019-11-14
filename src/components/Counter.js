import React from "react";
import ImageCard from "./Game Cards/ImageCard";
// import imageList from "./Game Cards/imageList";
import images from "./Game Cards/imageList";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.imageCardElement = React.createRef();
  }
  handleClick = () => {
    this.imageCardElement.current.changeImageState();
  };
  render() {
    return (
      <div className="container">
        {
          images.map(image => (

        <button 
          key={image.key}
          onClick={this.handleClick}
          className="p-2 col-lg-2 col-md-3 col-sm-6"
        >
          <ImageCard
            ref={this.imageCardElement}
            src={image.src}
            alt={image.alt}
          />
        </button>
          ))
        }
      </div>
    );
  }

  // constructor(props) {
  //   super(props);
  //   this.imageElement = React.createRef();
  // }
  // state = {
  //   count: 0
  // };

  // handleIncrement = () => {
  //   this.setState(
  //     { count: this.state.count + 1 }
  //   );
  //   // console.log(this.imageElement.current.changeImageState);
  //   this.imageElement.current.changeImageState();
  // };

  // render() {
  //   return (
  //     <div className="container">
  //       <p>Score: {this.state.count}</p>
  //       {
  //         images.map(image => {
  //           // console.log(image);
  //           return (

  //             <ImageCard
  //               ref={this.imageElement}
  //               key={image.key}
  //               src={image.src}
  //               alt={image.alt}
  //               increment={this.handleIncrement}
  //               // onClick={this.handleClick}
  //             />
  //           )
  //         })
  //       }

  //     </div>
  //   );
  // }
}

export default Counter;
