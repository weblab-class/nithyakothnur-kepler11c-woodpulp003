import React, { useState, useEffect } from "react";

import { get } from "../../utilities";

/**
 * Card is a component for displaying content like stories
 *
 * Proptypes
 * @param {string} _id of the story
 * @param {string} creator_name
 * @param {string} content of the story
 */

 const WaveCard = (props) => {
    

    return (
        <div className="Card-container">
          <SingleWave _id={props._id} content={props.test} />
        </div>
      );
};
    
export default WaveCard;
 