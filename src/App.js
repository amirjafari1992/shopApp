import React from 'react';
import Header from './components/header/header';
import MainContainer from './components/main/mainContainer';
import Footer from './components/footer/footer';
import { Provider } from 'react-redux';
import store from './store';

function App() {
	return (
		<Provider store={store}>
			<Header />
			<MainContainer />
			<Footer />
		</Provider>
	);
}

export default App;
