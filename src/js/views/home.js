import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from "../store/appContext";

const Home = () => {
   const [data, setData] = useState({ people: [], vehicles: [], planets: [] });
   const { store, actions } = useContext(Context);

   useEffect(() => {
      const fetchData = async () => {
         const people = await fetch('https://www.swapi.tech/api/people').then((res) => res.json());
         const vehicles = await fetch('https://www.swapi.tech/api/vehicles').then((res) => res.json());
         const planets = await fetch('https://www.swapi.tech/api/planets').then((res) => res.json());
         setData({ people: people.results, vehicles: vehicles.results, planets: planets.results });
      };
      fetchData();
   }, []);

   const renderCard = (item, type) => (
      <div key={item.uid} className="col-md-4 mb-3">
         <div className="card">
            <img
               src={`https://starwars-visualguide.com/assets/img/${type}/${item.uid}.jpg`}
               className="card-img-top"
               alt={item.name}
               onError={(e) => (e.target.src = 'https://via.placeholder.com/150')}
            />
            <div className="card-body">
               <h5 className="card-title">{item.name}</h5>
               <Link to={`/${type}/${item.uid}`} className="btn btn-primary">
                  View Details
               </Link>
               <button
                  className="btn btn-warning ms-2"
                  onClick={() => actions.addFavorite(item)}
               >
                  Add to Favorites
               </button>
            </div>
         </div>
      </div>
   );

   return (
      <div className="container">
         <h1>Star Wars Entities</h1>
         <h2>People</h2>
         <div className="row">{data.people.map((person) => renderCard(person, 'characters'))}</div>
         <h2>Vehicles</h2>
         <div className="row">{data.vehicles.map((vehicle) => renderCard(vehicle, 'vehicles'))}</div>
         <h2>Planets</h2>
         <div className="row">{data.planets.map((planet) => renderCard(planet, 'planets'))}</div>
      </div>
   );
};

export default Home;
