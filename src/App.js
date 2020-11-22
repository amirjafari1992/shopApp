import React, { useEffect } from 'react';
import Header from './components/header/header';
import MainContainer from './components/main/mainContainer';
import Footer from './components/footer/footer';
import { Provider } from 'react-redux';
import store from './store';
import { subscribeToTimer } from './api';

function App() {
	const [ time, setTime ] = React.useState('no time');
	// useEffect(() => {
	// 	subscribeToTimer((err, timestamp) => setTime(timestamp));
	// });
	return (
		<Provider store={store}>
			<Header />
			<MainContainer />
			<Footer />
		</Provider>
	);
}

export default App;
