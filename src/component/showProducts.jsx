import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Skeleton from 'react-loading-skeleton'
import {NavLink} from 'react-router-dom'


const ShowProducts = () => {
  const [loading, setLoading] = useState(false);

  const [productData, setProductData] = useState([]);

  const fetchData = async () => {
    setLoading(true)
    const api_response = await axios.get('https://api.predic8.de/shop/products/?limit=13');
    const productUrls = api_response.data.products.map(product => product.product_url);
    const productPromises = productUrls.map(url => axios.get(`https://api.predic8.de${url}`));
    const products = await Promise.all(productPromises);
    const data = (products.map(product => product.data));
    setProductData(data.filter(item => item.photo_url))
    setLoading(false)
  };

  useEffect(() => {
    fetchData();
  }, []);
  
  console.log('data',)

  
  const Loading = () => {
    return(
      <>
       Loading ....
      </>
    )
  }


  return (
    <>
      
      {loading ? (
        
        <Loading/>
      ) : productData && (
        <>
          {
            productData.map(item => {
              let img = `https://api.predic8.de${item.photo_url }`
              return (
                <>
                  <div className="col-md-3 mb-4">
                    <div className="card h-150 text-center p-1" key={item.name}>
                      <img src={img} className="card-img-top" alt={item.name} />
                      <div className="card-body ">
                        
                        <h5 className="card-title mb-0">{item.name }</h5>
                        <p className="card-text lead fw-bold">${item.price}</p>
                        <NavLink to={`/products/${item.name}`} className="btn btn-outline-secondary">Buy now</NavLink>
                      </div>
                    </div>
                  </div>

                </>
              )
            })
            
          }
        </>
      )}
     
    </>
  )
}

export default ShowProducts