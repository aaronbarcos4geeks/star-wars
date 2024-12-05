import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Detail = () => {
   const { type, id } = useParams();
   const [detail, setDetail] = useState(null);

   useEffect(() => {
      const fetchDetail = async () => {
         const res = await fetch(`https://www.swapi.tech/api/${type}/${id}`).then((res) => res.json());
         setDetail(res.result.properties);
      };
      fetchDetail();
   }, [type, id]);

   if (!detail) return <p className="text-center mt-5">Loading...</p>;

   return (
      <div className="container mt-5">
         <div className="card">
            <img
               src={`https://starwars-visualguide.com/assets/img/${type}/${id}.jpg`}
               className="card-img-top"
               alt={detail.name || 'Detail'}
               onError={(e) => (e.target.src = 'https://via.placeholder.com/150')}
            />
            <div className="card-body">
               <h5 className="card-title">{detail.name}</h5>
               <p className="card-text">
                  <pre>{JSON.stringify(detail, null, 2)}</pre>
               </p>
            </div>
         </div>
      </div>
   );
};

export default Detail;
