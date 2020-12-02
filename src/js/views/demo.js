import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/demo.scss";

export const Demo = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container-fluid">
			<h1>Characteres</h1>
			<div className="row scroll">
				{store.person.map((people, index) => {
					return (
						<div className="card scrollchild" key={index}>
							<img
								src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-YtlIW6hAVM_U9KD2gsNV5KFgNuv1moG9Fw&usqp=CAU"
								className="card-img-top"
								alt="..."
							/>
							<div className="card-body ">
								<h5 className="card-title">{people.name}</h5>
								<h6>Gender: {people.gender}</h6>
								<h6>Hair-Color: {people.hair_color}</h6>
								<h6>Eye-Color: {people.eye_color}</h6>
								<div className="row justify-content-between ">
									<Link
										to={{
											pathname: "/people",
											state: {
												people: people
											}
										}}>
										<button className="btn btn-outline-secondary more">Learn More!</button>
									</Link>

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
						<div className="card" key={index}>
							<img
								src="https://cdn.shopify.com/s/files/1/0101/2792/products/Under_Construction_copy_600x600_crop_center.jpg?v=1569104295"
								className="card-img-top"
								alt="..."
							/>
							<div className="card-body">
								<h5 className="card-title">{planet.name}</h5>
								<h6 className="card-subtitle mb-2 text-muted">Terrain: {planet.terrain}</h6>
								<p className="card-text">Population: {planet.population}</p>
								<div className="row justify-content-between">
									<button href="#" className="btn btn-outline-secondary card-link">
										Card link
									</button>
									<i className="far fa-heart" />
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};
