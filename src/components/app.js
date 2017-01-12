
import React from 'react';
import Header from './header';
import ContestPreview from './contestpreview';

//use functional syntax if stateless
//class snytax if dynamic
class App extends React.Component{
  state = {
    pageHeader: 'Naming Contests'
  };
  //use react lifecyle methods to do stuff
  componentDidMount(){
    //usually an ajax fetch
    //fire timers
    //fire listeners
  }
  componentWillUnmount(){
    //clean mounted stuff
  }
  render(){
    return(
      <div className="App">
        <Header message={this.state.pageHeader}/>
        <div>
          {this.props.contests.map(contest =>
            <ContestPreview {...contest}/>
          )}
        </div>
      </div>
    );
  }
}

export default App;
