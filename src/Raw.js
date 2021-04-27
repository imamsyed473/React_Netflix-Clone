import React, { useState, useEffect } from 'react';
import axios from './axios';
import './Row.css';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';


const base_url = 'https://image.tmdb.org/t/p/original/';

const Raw = ({ title, fetchUrl, isLargeRow }) => {
	const [ movies, setMovies ] = useState([]);
	const [ trailerUrl, setTrailerUrl ] = useState('');

	//a snippet of code wich runs based on a specific condition
	useEffect(
		() => {
			async function fetchData() {
				const request = await axios.get(fetchUrl);
				setMovies(request.data.results);
				return request.data.results;
			}
			fetchData();
		},
		[ fetchUrl ]
	);

	const opts = {
		height: '390',
		width: '100%',
		playerVars: {
			autoplay: 1
		}
	};

	const handleClick = (movie) => {
		if (trailerUrl) {
			setTrailerUrl("");
		} else {
			movieTrailer(movie?.name || "")
			.then((url)=>{
				const urlParams = new URLSearchParams(new URL(url).search);
			setTrailerUrl(urlParams.get('v'));

			}).catch((error) => console.log(error));
		}
	};

	//console.log(movies);
	return (
		<div className="row">
			<h2>{title}</h2>

			<div className="row_posters">
				{/* several raw posters */}
				{movies.map((movie) => (
					<img
						// isLargeRow && 'row_posterLarge'
						key={movie.id}
						onClick={() => handleClick(movie)}
						className={`row_poster ${isLargeRow && 'row_posterLarge'}`}
						src={base_url + (isLargeRow ? movie.poster_path : movie.backdrop_path)}
						alt={movie.name}
					/>
				))}
			</div>
			{trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
		</div>
	);
};

export default Raw;
