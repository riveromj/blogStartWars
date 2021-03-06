import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import "../../styles/people.css";

export const People = props => {
	const { store, actions } = useContext(Context);
	const people = props.location.state.people;
	console.log(people);
	return (
		<div className="cointainer-fluid">
			<div className="row" id="description">
				<div className="col-6 character">
					<img src="https://dummyimage.com/800x600/000/fff" className="card-img-top" alt="..." />
				</div>
				<div className="col-6 ">
					<h1 className="title">{people.name}</h1>
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
					<p>{people.name}</p>
				</div>
				<div className="col">
					<h3>Birth Year</h3>
					<p>{people.birth_year}</p>
				</div>
				<div className="col">
					<h3>Gender</h3>
					<p>{people.gender}</p>
				</div>
				<div className="col">
					<h3>Height</h3>
					<p>{people.height}</p>
				</div>
				<div className="col">
					<h3>Skin Color</h3>
					<p>{people.skin_color}</p>
				</div>
				<div className="col">
					<h3>Eye Color</h3>
					<p>{people.eye_color}</p>
				</div>
			</div>
		</div>
	);
};
People.propTypes = {
	location: PropTypes.any
};
