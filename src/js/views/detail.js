import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Detail = () => {
   const { type, id } = useParams();
   const [isLoading, setIsLoading] = useState(true);
   const [detail, setDetail] = useState(null);

   useEffect(() => {
      const fetchDetail = async () => {
         setIsLoading(true);
         try {
            const res = await fetch(`https://www.swapi.tech/api/${type}/${id}`).then((res) => res.json());
            setDetail(res.result.properties);
         } catch (error) {
            console.error("Error fetching data:", error);
         } finally {
            setIsLoading(false);
         }
      };
      fetchDetail();
   }, [type, id]);

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
      <div className="container mt-5">
         <div className="card mb-3" style={{ maxWidth: "1250px" }}>
            <div className="row g-0">
               <div className="col-md-4">
                  <img
                     src={`https://starwars-visualguide.com/assets/img/${type === 'people' ? 'characters' : type}/${id}.jpg`}
                     className="img-fluid rounded-start"
                     alt={detail.name || 'Detail'}
                     onError={(e) => (e.target.src = 'https://starwars-visualguide.com/assets/img/placeholder.jpg')}
                  />
               </div>
               <div className="col-md-8">
                  <div className="card-body">
                     <h5 className="card-title">{detail.name}</h5>
                     <p className="card-text">
                        <strong>Height:</strong> {detail.height} cm<br />
                        <strong>Mass:</strong> {detail.mass} kg<br />
                        <strong>Hair Color:</strong> {detail.hair_color}<br />
                        <strong>Skin Color:</strong> {detail.skin_color}<br />
                        <strong>Eye Color:</strong> {detail.eye_color}<br />
                        <strong>Birth Year:</strong> {detail.birth_year}<br />
                        <strong>Gender:</strong> {detail.gender}
                     </p>
                     <p className="card-text">
                        <small className="text-muted">Last updated: {new Date(detail.edited).toLocaleDateString()}</small>
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Detail;
