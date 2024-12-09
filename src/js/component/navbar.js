import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from "../store/appContext";

const Navbar = () => {
   const { store, actions } = useContext(Context);

   console.log(store.favorites);

   return (
      <nav className="position-sticky top-0 navbar navbar-expand-lg navbar-dark bg-dark" style={{ zIndex: 1000 }}>
         <div className="container">
            <Link to="/" className="navbar-brand">
               <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
                  <path d="M 10.300781 12 C 7.890625 12 6 13.933594 6 16.402344 C 6 17.3125 6.261719 17.875 6.515625 18.308594 L 6.59375 18.46875 L 6.699219 18.597656 C 6.75 18.667969 6.851563 18.8125 6.984375 19 L 0 19 L 0 26.125 L 0.503906 27.632813 L 3.503906 36.632813 L 3.957031 38 L 8.523438 38 L 8.992188 36.652344 L 9 36.625 L 9.007813 36.652344 L 9.476563 38 L 19.421875 38 L 19.890625 36.660156 L 20.121094 36 L 21.078125 36 L 21.3125 36.660156 L 21.78125 38 L 33 38 L 33 37.453125 C 33.382813 37.710938 33.996094 38 34.800781 38 L 43.097656 38 C 45.609375 38 47.5 36.109375 47.5 33.597656 C 47.5 32.6875 47.238281 32.125 46.984375 31.691406 L 46.890625 31.503906 L 46.761719 31.347656 L 46.480469 31 L 49 31 L 49 19 L 45.265625 19 C 45.609375 18.335938 45.800781 17.585938 45.800781 16.800781 C 45.800781 14.152344 43.648438 12 41 12 L 33 12 L 33 15.117188 L 32.390625 13.347656 L 31.925781 12 Z M 10.300781 14 L 24 14 L 24 16 L 20 16 L 20 23 L 17 23 L 17 16 L 11.597656 16 C 11.199219 16 10.902344 16.300781 10.902344 16.699219 C 10.902344 16.800781 11 16.898438 11 17 L 12.902344 19.597656 C 13 19.800781 13.199219 20 13.199219 20.597656 C 13.199219 22 12.101563 23 10.800781 23 L 2 23 L 2 21 L 9.601563 21 C 10 21 10.300781 20.699219 10.199219 20.300781 C 10.199219 20.199219 10.097656 20.101563 10.097656 20 C 10.097656 20 8.601563 17.800781 8.300781 17.402344 C 8.199219 17.199219 8 17 8 16.402344 C 8 15 9 14 10.300781 14 Z M 26.300781 14 L 30.5 14 L 33.597656 23 L 31.097656 23 L 30.402344 21 L 26.597656 21 L 25.902344 23 L 23.402344 23 Z M 35 14 L 41 14 C 42.5 14 43.800781 15.199219 43.800781 16.800781 C 43.800781 18.101563 42.898438 19.199219 41.699219 19.5 C 41.699219 19.5 42.300781 20 42.800781 20.597656 C 43 20.800781 43.199219 21 43.597656 21 L 47 21 L 47 23 L 41.800781 23 C 41.402344 23 41.101563 22.800781 41 22.699219 C 40.222656 22 38.660156 20.515625 38 19.890625 C 38 20.875 38 23 38 23 L 35 23 Z M 28.402344 15.402344 L 27.199219 19 L 29.597656 19 Z M 38 16 L 38 18 L 40.300781 18 C 40.902344 18 41.402344 17.601563 41.402344 17 C 41.402344 16.398438 40.902344 16 40.300781 16 Z M 14.207031 18 L 15 18 L 15 19.351563 C 14.910156 19.09375 14.796875 18.882813 14.6875 18.691406 L 14.609375 18.546875 L 14.515625 18.421875 Z M 22 18 L 22.910156 18 L 22 20.824219 Z M 15 21.9375 L 15 25 L 10.800781 25 C 12.796875 25 14.445313 23.730469 15 21.9375 Z M 28.019531 23 L 28.980469 23 L 29.214844 23.660156 L 29.683594 25 L 27.316406 25 L 27.785156 23.660156 Z M 40 24.449219 C 40.382813 24.707031 40.992188 25 41.800781 25 L 42.300781 25 C 40.558594 25 39.050781 26.039063 38.339844 27.546875 C 37.527344 26.03125 35.933594 25 34.097656 25 L 40 25 Z M 24.140625 25 L 26 25 L 26 30.574219 L 24.597656 26.367188 Z M 2.398438 27 L 4.898438 27 L 6.199219 30.902344 L 7.601563 27 L 10.402344 27 L 11.699219 30.902344 L 13 27 L 15.597656 27 L 12.597656 36 L 10.902344 36 L 9 30.5 L 7.101563 36 L 5.398438 36 Z M 18.5 27 L 22.699219 27 L 25.699219 36 L 23.199219 36 L 22.5 34 L 18.699219 34 L 18 36 L 15.597656 36 Z M 28 27 L 34.097656 27 C 35.597656 27 36.902344 28.199219 36.902344 29.800781 C 36.902344 31.101563 36 32.199219 34.800781 32.5 C 34.800781 32.5 35.300781 33 35.800781 33.597656 C 36 33.800781 36.199219 34 36.597656 34 L 41.902344 34 C 42.199219 34 42.5 33.699219 42.5 33.300781 C 42.5 33.199219 42.402344 33.101563 42.402344 33 C 42.402344 33 40.5 30.800781 40.199219 30.5 C 40.097656 30.300781 39.902344 30.101563 39.902344 29.5 C 39.902344 28.101563 41 27 42.300781 27 L 47 27 L 47 29 L 43.699219 29 C 43.398438 29 43.097656 29.402344 43.097656 29.800781 C 43.097656 29.902344 43.199219 30 43.199219 30.097656 L 45.199219 32.597656 C 45.300781 32.800781 45.5 33 45.5 33.597656 C 45.5 35.097656 44.398438 36 43.097656 36 L 34.800781 36 C 34.402344 36 34.101563 35.800781 34 35.699219 C 33.222656 35 31.65625 33.507813 31 32.886719 L 31 36 L 28 36 Z M 20.597656 28.402344 L 19.402344 32 L 21.800781 32 Z M 31 29 L 31 31 L 33.300781 31 C 33.902344 31 34.402344 30.601563 34.402344 30 C 34.402344 29.398438 33.902344 29 33.300781 29 Z M 38.53125 31.640625 L 38.5625 31.699219 L 38.785156 31.914063 C 38.804688 31.933594 38.832031 31.960938 38.863281 32 L 38.367188 32 C 38.425781 31.882813 38.484375 31.761719 38.53125 31.640625 Z"></path>
               </svg>
            </Link>
            <div className="btn-group dropstart">
               <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                  Favorites ({store.favorites.length})
               </button>
               <ul className="dropdown-menu">
                  {store.favorites.map((fav, index) => (
                     <li key={index}>
                        <span className="dropdown-item d-flex justify-content-between align-items-center gap-2">
                           <Link to={fav.url.replace('https://www.swapi.tech/api', '')}>{fav.name}</Link>
                           <svg onClick={() => actions.removeFavorite(fav)} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3" viewBox="0 0 16 16">
                              <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
                           </svg>
                        </span>
                     </li>
                  ))}
               </ul>
            </div>
         </div>
      </nav>
   );
};

export default Navbar;
