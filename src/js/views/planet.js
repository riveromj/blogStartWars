import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import "../../styles/people.css";

export const Planet = props => {
	const { store, actions } = useContext(Context);
	const planet = props.location.state.planet;
	console.log(planet);
	return (
		<div className="cointainer-fluid">
			<div className="row" id="description">
				<div className="col-6 character">
					<img src="https://dummyimage.com/800x600/000/fff" className="card-img-top" alt="..." />
				</div>
				<div className="col-6 ">
					<h1 className="title">{planet.name}</h1>
					<p>
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
						the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of
						type and scrambled it to make a type specimen book. It has survived not only five centuries, but
						also the leap into electronic typesetting, remaining essentially unchanged. It was popularised
						in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more
						recently with desktop publishing software like Aldus PageMaker including versions of Lorem
						Ipsum.
					</p>
				</div>
			</div>
			<hr className="line" />
			<div className="row" id="features">
				<div className="col">
					<h3>Name</h3>
					<p>{planet.name}</p>
				</div>
				<div className="col">
					<h3>Climate</h3>
					<p>{planet.climate}</p>
				</div>
				<div className="col">
					<h3>Population</h3>
					<p>{planet.population}</p>
				</div>
				<div className="col">
					<h3>Orbital Period</h3>
					<p>{planet.orbital_period}</p>
				</div>
				<div className="col">
					<h3>Rotation Period</h3>
					<p>{planet.rotation_period}</p>
				</div>
				<div className="col">
					<h3>Diameter</h3>
					<p>{planet.diameter}</p>
				</div>
			</div>
		</div>
	);
};
Planet.propTypes = {
	location: PropTypes.any
};
