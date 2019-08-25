import React from 'react';
import { IMAGE_BASE_URL } from '../../../config';
import './Actor.css';

const Actor = (props) => {

    const POSTER_SIZE = 'w154';
    const {  profile_path, name, character} = props.actor;
    return (
      <div className="rmdb-actor">
        <img 
            src={profile_path 
                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${profile_path}`
                : './images/no_image.jpg'
            }
            alt="actor-thumb"
        />
        <span className="rmdb-actor-name">{name}</span>
        <span className="rmdb-actor-character">{character}</span>
      </div>
    )
}

export default Actor;