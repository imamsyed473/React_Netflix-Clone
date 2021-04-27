import './App.css';
import Raw from './Raw';
import requests from './requests';
import Banner from './Banner';
import Nav from './Nav';

function App() {
	return (
		<div className="App">
			{/*Nav Bar  */}
			<Nav />
			{/* Banner */}
			<Banner />
			<Raw title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
			<Raw title="Trending Now" fetchUrl={requests.fetchTrending} />
			<Raw title="Top Rated" fetchUrl={requests.fetchTopRated} />
			<Raw title="Action Movies" fetchUrl={requests.fetchActionMovies} />
			<Raw title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
			<Raw title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
			<Raw title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
			<Raw title="Documantries" fetchUrl={requests.fetchDocumentaries} />
		</div>
	);
}

export default App;
