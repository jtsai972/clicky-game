import React from "react";
import ImageCard from "./Game Cards/ImageCard";
// import imageList from "./Game Cards/imageList";
import images from "./Game Cards/imageList";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.imageCardElement = React.createRef();
  }

  state = { score: 0 }

  handleClick = () => {
    this.imageCardElement.current.changeImageState();
  };

  render() {
    return (
      <main>
        <div class="scoreboard bg-secondary">
          <div class="container py-3">
            <div class="row"><h2>Score: {this.state.score}</h2></div>
          </div>
        </div>

        <div className="container py-3">
          <div class="row">
            {
              images.map(image => (
                <ImageCard
                  key={image.key}
                  ref={this.imageCardElement}
                  src={image.src}
                  alt={image.alt}
                  clickEvent={this.handleClick}
                />
              ))
            }
          </div>
        </div>
      </main>
    );
  }
}

export default Counter;
