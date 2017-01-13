
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

const onPopState = handler => {
  window.onpopstate = handler;
};

class App extends React.Component{
  static propTypes = {
    initialData: React.PropTypes.object.isRequired
  };
  state = this.props.initialData;
  //use react lifecyle methods to do stuff
  componentDidMount(){
    onPopState((event) => {
      this.setState({
        currentContestId: (event.state || {}).currentContestId
      });
    });
  }

  componentWillUnmount(){
    onPopState(null);//cleaning pout the mounted stuff
  }

  fetchContest = (contestId) => {
    pushState(
      {currentContestId: contestId},
      `/contest/${contestId}`
    );

    api.fetchContest(contestId).then(contest =>{
      this.setState({
        currentContestId: contest.id,
        contests: {//cache fetched contest stuff on the state
          ...this.state.contests,
          [contest.id]: contest
        }
      });
    });
  }

  fetchContestList = () => {
    pushState(
      {currentContestId: null},
      '/'
    );
    api.fetchContestList().then(contests =>{
      this.setState({
        currentContestId: null,
        contests
      });
    });
  }


  pageHeader(){
    if(this.state.currentContestId){
      return this.currentContest().contestName;
    }
    return 'Naming Contest Example';
  }

  currentContest(){
    return this.state.contests[this.state.currentContestId];
  }

  currentContent(){
    if(this.state.currentContestId){
      return <Contest
        contestListClick = {this.fetchContestList}
        {...this.currentContest()} />;
    }
    return  <ContestList onContestClick = {this.fetchContest} contests={this.state.contests} />;
  }

  render(){
    return(
      <div className="App">
        <Header message={this.pageHeader()} />
        {this.currentContent()}
      </div>
    );
  }

}

export default App;
