// ./src/components/MovieShow.js
import React from 'react';
import { Link } from 'react-router-dom';
const ElementShow = ({match, elementList }) => {

  const element = elementList.find(element => element.number == match.params.elementId);

  console.log(element)
  
    return (
      <div>
        <h1>
        <u>{element.name}</u> ({element.symbol})
        </h1>
        
            <h3>
            <p>{element.summary}</p>
              <li>
                Appearance: {element.appearance}
              </li>
              <li>            
                Atomic Mass: {element.atomic_mass}
              </li>
              <li>            
                Category: {element.category}
              </li>
              <li>            
                Discovered By: {element.discovered_by}
              </li>
            </h3>
            <ul>
            <Link to={`/periodictable/`}> Back </Link>
            </ul>
            
      </div>
    );
  }
 
export default ElementShow;