import React from 'react'

function Popup({ selected, closePopup }) {
	return (
		<section className="popup">
			<div className="content">
				<h2>{ selected.Title } <span>({ selected.Year })</span></h2>
				<p className="rating">Rating: {selected.imdbRating}</p>
				<div>
					<img src={selected.Poster} alt="poster" />
					<p><strong>Director: </strong>{selected.Director}</p>
					<p><strong>Actors: </strong>{selected.Actors}</p>
					<p><strong>Awards: </strong>{selected.Awards}</p>
					<p>{selected.Plot}</p>
					
				</div>
				<button className="close" onClick={closePopup}>Close</button>
			</div>
		</section>
	)
}

export default Popup