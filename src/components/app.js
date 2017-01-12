
import React from 'react';
import Header from './header';
import ContestPreview from './contestpreview';


//use functional syntax if stateless
//class snytax if dynamic
class App extends React.Component{
  state = {
    pageHeader: 'Naming Contests Example',
    contests: this.props.initialContests
  };
  //use react lifecyle methods to do stuff
  componentDidMount(){
    //ajax..
  }

  componentWillUnmount(){
    //clean mounted stuff
  }


  render(){
    return(
      <div className="App">
        <Header message={this.state.pageHeader}/>
        <div>
          {this.state.contests.map(contest =>
            <ContestPreview key={contest.id} {...contest}/>
          )}
        </div>
      </div>
    );
  }
}

export default App;
