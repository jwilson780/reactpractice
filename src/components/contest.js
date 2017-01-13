import React from 'react';

class Contest extends React.Component{
  render(){
    return(
      <div className="Contest">
       {this.props.decscription}
      </div>
    );
  }
}

Contest.propTypes = {
  decscription: React.PropTypes.string.isRequired
};

export default Contest;
