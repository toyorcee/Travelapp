import React, { useEffect, useState } from "react";
import classes from "./SuggestedPlaces.module.css";
import { AiFillStar } from "react-icons/ai";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
// import { suggestedPlacesData } from "../../data/data";
// import img from "../../assets/img3.jpg";

const SuggestedPlaces = () => {
  const [estates, setEstates] = useState([]);
  const { token } = useSelector((state) => state.auth);
  const { type } = useParams();

  useEffect(() => {
    const fetchTypeRooms = async () => {
      try {
        const res = await fetch(`http://localhost:5000/room`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await res.json();
        setEstates(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchTypeRooms();
  }, []);

  return (
    <section id="suggested" className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.titles}>
          <h5 className={classes.subtitle}>Most visited places</h5>
          <h2 className={classes.title}>
            Favourite destinations of our clients
          </h2>
        </div>
        <div className={classes.places}>
          {estates.map((suggestedPlace) => (
            <Link
              to={`/typeDetail/${suggestedPlace._id}`}
              className={classes.place}
              key={suggestedPlace._id}
            >
              <div className={classes.imgWrapper}>
                <img
                  src={`http://localhost:5000/images/${suggestedPlace.photo}`}
                  alt=""
                />
              </div>
              <div className={classes.titleAndReview}>
                <span>{suggestedPlace.title}</span>
                <span className={classes.review}>
                  <AiFillStar className={classes.icon} />
                  <span>{suggestedPlace.review} (2)</span>
                </span>
              </div>
              <div className={classes.countryAndPrice}>
                <span>
                  Country: <span>{suggestedPlace.country}</span>
                </span>
                <span className={classes.price}>
                  {suggestedPlace.price}$ / <span>per person</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuggestedPlaces;
