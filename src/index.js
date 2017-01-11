import React from 'react';
import ReactDOM from 'react-dom';

const Header = ({message}) =>{
  return(
		<h2>
			{message}
		</h2>
  );
};

//proptyping to ensure that the correct app compoent is getting correct
Header.propTypes = {
  message: React.PropTypes.string
};

const App = () => {
  return (
		<div>
			<Header message = "Naming Constests"/>
			<div>
				...
			</div>
		</div>

  );
};





ReactDOM.render(
	<App />,
  document.getElementById('root')
);
