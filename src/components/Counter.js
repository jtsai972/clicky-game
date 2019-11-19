import React from "react";
import ImageCard from "./Game Cards/ImageCard";
import imageList from "./Game Cards/imageList";
// import images from "./Game Cards/shuffleImages";
import shuffleImages from "./Game Cards/shuffleImages";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.imageCardElement = React.createRef();
  }

  state = { score: 0 }

  handleClick = () => {
    if(this.imageCardElement.current.props.isClicked){
      this.setState({ score: 0 });
    } else {
      this.setState({score: this.state.score +1 });

      let id = this.imageCardElement.current.props.id;

      var result = imageList.filter(obj => {
        return obj.key === id;
      });
      console.log(result)
    }
  };

  render() {
    return (
      <main>
        <div className="scoreboard bg-secondary">
          <div className="container py-3">
            <div className="row"><h2>Score: {this.state.score}</h2></div>
          </div>
        </div>

        <div className="container py-3">
          <div className="row">
            {
              shuffleImages(imageList).map(image => (
                <button
                  className="col-lg-2 col-md-3 col-sm-6 p-2 border-0 bg-transparent"
                  key={image.key}
                  onClick={this.handleClick}
                >
                  <ImageCard
                    ref={this.imageCardElement}
                    src={image.src}
                    alt={image.alt}
                    id={image.key}
                    isClicked={image.isClicked}
                  />
                </button>
              ))
            }
          </div>
        </div>
      </main>
    );
  }
}

export default Counter;
