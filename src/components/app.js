
import React from 'react';
import Header from './header';
import ContestList from './contest-list';


//use functional syntax if stateless
//class snytax if dynamic


const pushState = (obj,url) => {
  window.history.pushState(obj,'',url);
};

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

  fetchContest = (contestId) => {
    pushState(
      {currentContestId: contestId},
      `/contest/${contestId}`
    );
  };


  render(){
    return(
      <div className="App">
        <Header message={this.state.pageHeader} />
        <ContestList
          onContestClick = {this.fetchContest}
          contests={this.state.contests}
          />
      </div>
    );
  }
}

export default App;
