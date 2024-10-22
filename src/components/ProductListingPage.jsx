// src/components/ProductListingPage.js
import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { addToCart } from '../redux/cartSlice';
import { setAromaticPlants, setOtherPlants, setAirPurifyingPlants, setDecorativePlants } from '../redux/productSlice';

const API_KEY = 'eA73jYL14TQP4IOWAMUNCfY5bDWIcG34uPFBBjk99AUias1Ier9tYcXs';

function ProductListingPage() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);
  const { aromaticPlants, otherPlants, airPurifyingPlants, decorativePlants } = useSelector((state) => state.products);

  useEffect(() => {
    const fetchProducts = async () => {
      const aromaticPlantNames = ['Lavender', 'Rosemary', 'Mint', 'Jasmine', 'Basil'];
      const otherPlantNames = ['Fern', 'Cactus', 'Peace Lily', 'Aloe Vera', 'Spider Plant', 'Snake Plant', 'Succulent', 'Fiddle Leaf Fig', 'Bamboo Palm', 'ZZ Plant'];
      const airPurifyingPlantNames = ['Areca Palm', 'Boston Fern', 'Rubber Plant', 'Dracaena', 'English Ivy'];
      const decorativePlantNames = ['Orchid', 'Bonsai', 'Chinese Evergreen', 'Croton', 'Bird of Paradise'];

      const fetchPlantImages = async (plantNames) => {
        const promises = plantNames.map(async (plant) => {
          const res = await axios.get(`https://api.pexels.com/v1/search?query=${plant}&per_page=1`, {
            headers: { Authorization: API_KEY },
          });
          return {
            name: plant,
            price: Math.floor(Math.random() * 100) + 10,
            description: `Beautiful ${plant}`,
            imageUrl: res.data.photos[0]?.src.medium || '/images/default-plant.jpg',
          };
        });
        return Promise.all(promises);
      };

      const fetchedAromaticPlants = await fetchPlantImages(aromaticPlantNames);
      const fetchedOtherPlants = await fetchPlantImages(otherPlantNames);
      const fetchedAirPurifyingPlants = await fetchPlantImages(airPurifyingPlantNames);
      const fetchedDecorativePlants = await fetchPlantImages(decorativePlantNames);

      dispatch(setAromaticPlants(fetchedAromaticPlants));
      dispatch(setOtherPlants(fetchedOtherPlants));
      dispatch(setAirPurifyingPlants(fetchedAirPurifyingPlants));
      dispatch(setDecorativePlants(fetchedDecorativePlants));
    };

    fetchProducts();
  }, [dispatch]);

  return (
    <div className="container">
      {/* Aromatic Plants Section */}
      <section className="mb-5">
        <h2>Aromatic Plants</h2>
        <div className="row">
          {aromaticPlants.map((product, index) => (
            <div className="col-md-4" key={index}>
              <div className="card mb-4 h-100">
                <img
                  src={product.imageUrl}
                  className="card-img-top"
                  alt={product.name}
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.description}</p>
                  <p className="card-text">${product.price}</p>
                  <button
                    className="btn btn-success"
                    onClick={() => dispatch(addToCart(product))}
                    disabled={cart.some(item => item.name === product.name)}
                  >
                    {cart.some(item => item.name === product.name) ? 'Added to Cart' : 'Add to Cart'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Other Plants Section */}
      <section className="mb-5">
        <h2>Other Plants</h2>
        <div className="row">
          {otherPlants.map((product, index) => (
            <div className="col-md-4" key={index}>
              <div className="card mb-4 h-100">
                <img
                  src={product.imageUrl}
                  className="card-img-top"
                  alt={product.name}
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.description}</p>
                  <p className="card-text">${product.price}</p>
                  <button
                    className="btn btn-success"
                    onClick={() => dispatch(addToCart(product))}
                    disabled={cart.some(item => item.name === product.name)}
                  >
                    {cart.some(item => item.name === product.name) ? 'Added to Cart' : 'Add to Cart'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Air-Purifying Plants Section */}
      <section className="mb-5">
        <h2>Air-Purifying Plants</h2>
        <div className="row">
          {airPurifyingPlants.map((product, index) => (
            <div className="col-md-4" key={index}>
              <div className="card mb-4 h-100">
                <img
                  src={product.imageUrl}
                  className="card-img-top"
                  alt={product.name}
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.description}</p>
                  <p className="card-text">${product.price}</p>
                  <button
                    className="btn btn-success"
                    onClick={() => dispatch(addToCart(product))}
                    disabled={cart.some(item => item.name === product.name)}
                  >
                    {cart.some(item => item.name === product.name) ? 'Added to Cart' : 'Add to Cart'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Decorative Plants Section */}
      <section className="mb-5">
        <h2>Decorative Plants</h2>
        <div className="row">
          {decorativePlants.map((product, index) => (
            <div className="col-md-4" key={index}>
              <div className="card mb-4 h-100">
                <img
                  src={product.imageUrl}
                  className="card-img-top"
                  alt={product.name}
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.description}</p>
                  <p className="card-text">${product.price}</p>
                  <button
                    className="btn btn-success"
                    onClick={() => dispatch(addToCart(product))}
                    disabled={cart.some(item => item.name === product.name)}
                  >
                    {cart.some(item => item.name === product.name) ? 'Added to Cart' : 'Add to Cart'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default ProductListingPage;
