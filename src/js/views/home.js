import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from "../store/appContext";

const Home = () => {
   const [data, setData] = useState({ people: [], vehicles: [], planets: [] });
   const [isLoading, setIsLoading] = useState(true);
   const { store, actions } = useContext(Context);

   useEffect(() => {
      const fetchData = async () => {
         setIsLoading(true);
         try {
            const people = await fetch('https://www.swapi.tech/api/people').then((res) => res.json());
            const vehicles = await fetch('https://www.swapi.tech/api/vehicles').then((res) => res.json());
            const planets = await fetch('https://www.swapi.tech/api/planets').then((res) => res.json());
            setData({ people: people.results, vehicles: vehicles.results, planets: planets.results });
         } catch (error) {
            console.error("Error fetching data:", error);
         } finally {
            setIsLoading(false);
         }
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
               onError={(e) => (e.target.src = 'https://starwars-visualguide.com/assets/img/placeholder.jpg')}
            />
            <div className="card-body">
               <h5 className="card-title">{item.name}</h5>
               <div className='d-flex justify-content-between'>
                  <Link to={`/${type === 'characters' ? 'people' : type}/${item.uid}`} className="btn btn-outline-primary">
                     Learn more!
                  </Link>
                  <button
                     className="btn btn-outline-warning ms-2"
                     onClick={() => actions.addFavorite(item)}
                  >
                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                     </svg>
                  </button>
               </div>
            </div>
         </div>
      </div>
   );

   if (isLoading) {
      return (
         <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="spinner-border text-primary" role="status">
               <span className="visually-hidden">Loading...</span>
            </div>
         </div>
      );
   }

   return (
      <div className="container">
         <h2 className=' mt-4 mb-4 text-danger'>People</h2>
         <div className="horizontal-scroll">{data.people.map((person) => renderCard(person, 'characters'))}</div>
         <h2 className=' mt-4 mb-4 text-danger'>Vehicles</h2>
         <div className="horizontal-scroll">{data.vehicles.map((vehicle) => renderCard(vehicle, 'vehicles'))}</div>
         <h2 className='mt-4 mb-4 text-danger'>Planets</h2>
         <div className="horizontal-scroll">{data.planets.map((planet) => renderCard(planet, 'planets'))}</div>
      </div>
   );
};

export default Home;
