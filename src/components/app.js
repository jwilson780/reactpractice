
import React from 'react';
import Header from './header';
import ContestList from './contest-list';
import Contest from './contest';
import * as api from '../api';

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

    api.fetchContest(contestId).then(contest =>{
      this.setState({
        pageHeader: contest.contestName,
        currentContestId: contest.id,
        contests: {//cache fetched contest stuff on the state
          ...this.state.contests,
          [contest.id]: contest
        }
      });
    });
  }

  currentContent(){
    if(this.state.currentContestId){
      return <Contest {...this.state.contests[this.state.currentContestId]} />;
    }
    return  <ContestList onContestClick = {this.fetchContest} contests={this.state.contests} />;
  }

  render(){
    return(
      <div className="App">
        <Header message={this.state.pageHeader} />
        {this.currentContent()}
      </div>
    );
  }

}

export default App;
