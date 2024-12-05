import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from "../store/appContext";

const Navbar = () => {
   const { store, actions } = useContext(Context);

   return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
         <div className="container">
            <Link to="/" className="navbar-brand">Star Wars</Link>
            <div>
               <ul className="navbar-nav ml-auto">
                  <li className="nav-item dropdown">
                     <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        id="favoritesDropdown"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                     >
                        Favorites ({store.favorites.length})
                     </a>
                     <ul className="dropdown-menu" aria-labelledby="favoritesDropdown">
                        {store.favorites.map((fav, index) => (
                           <li key={index}>
                              <span className="dropdown-item">
                                 {fav.name}
                                 <button
                                    className="btn btn-danger btn-sm ms-2"
                                    onClick={() => actions.removeFavorite(fav)}
                                 >
                                    Remove
                                 </button>
                              </span>
                           </li>
                        ))}
                     </ul>
                  </li>
               </ul>
            </div>
         </div>
      </nav>
   );
};

export default Navbar;
