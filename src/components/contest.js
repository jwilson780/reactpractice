import React from 'react';

class Contest extends React.Component{
  render(){
    return(
      <div className="Contest">
        <div className="contest-description">
          {this.props.decscription}
        </div>
        <div className="home-link link"
          onClick={this.props.contestListClick}>
          Contest List
        </div>

      </div>
    );
  }
}

Contest.propTypes = {
  decscription: React.PropTypes.string.isRequired,
  contestListClick: React.PropTypes.func.isRequired
};

export default Contest;
