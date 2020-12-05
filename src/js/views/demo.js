import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/demo.scss";

export const Demo = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container-fluid">
			<h1>Characteres</h1>
			<div className="row">
				{store.person.map((people, index) => {
					return (
						<div key={index}>
							<div className="card">
								<img src="https://dummyimage.com/400x200/000/fff" className="card-img-top" alt="..." />
								<div className="card-body ">
									<h5 className="card-title">{people.name}</h5>
									<h6>Gender: {people.gender}</h6>
									<h6>Hair-Color: {people.hair_color}</h6>
									<h6>Eye-Color: {people.eye_color}</h6>
									{console.log(people)}
									<div className="botones">
										<Link
											to={{
												pathname: "/people",
												state: {
													people: people
												}
											}}>
											<button className="btn btn-outline-secondary more">Learn More!</button>
										</Link>
										<button className="btn btn-outline-secondary">
											{store.favorite.includes(people.name) ? (
												<i
													className="far fa-heart pointer heart activated"
													onClick={() => {
														actions.addFavorite(people.name);
														store.favorite.map((favorite, index) => {
															//console.log(favorite, index);
															return (
																<div key={index}>
																	<ul className="list-group">
																		<li className="list-group-item">{favorite}</li>
																	</ul>
																</div>
															);
														});
													}}
												/>
											) : (
												<i
													className="far fa-heart pointer heart"
													onClick={() => {
														actions.addFavorite(people.name);
														store.favorite.map((favorite, index) => {
															//console.log(favorite, index);
															return (
																<div key={index}>
																	<ul className="list-group">
																		<li className="list-group-item">{favorite}</li>
																	</ul>
																</div>
															);
														});
													}}
												/>
											)}
										</button>
									</div>
								</div>
							</div>
						</div>
					);
				})}
			</div>

			<h1>Planets</h1>
			<div className="row scroll">
				{store.planets.map((planet, index) => {
					return (
						<div key={index}>
							<div className="card">
								<img src="https://dummyimage.com/400x200/000/fff" className="card-img-top" alt="..." />
								<div className="card-body">
									<h5 className="card-title">{planet.name}</h5>
									<h6 className="card-subtitle mb-2 text-muted">Terrain: {planet.terrain}</h6>
									<p className="card-text">Population: {planet.population}</p>
									<div className="row justify-content-between">
										<Link
											to={{
												pathname: "/planet",
												state: {
													planet: planet
												}
											}}>
											<button className="btn btn-outline-secondary more">Card Link!</button>
										</Link>
										<i className="far fa-heart" />
									</div>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};
