import React from 'react';
import Article from './Article';

class Blog extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      isPublished: false,
      count: 0
    }
  }

  togglePublished = () => {
    this.setState({
      isPublished: !this.state.isPublished
    })
  }

  countUp = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    return(
      <>
        <Article 
          title={"React Sample"} 
          count ={ this.state.count}
          isPublished={this.state.isPublished}
          toggle={() => this.togglePublished()}
          countUp = {() => this.countUp()}
        />
      </>
    )
  }
}

export default Blog;