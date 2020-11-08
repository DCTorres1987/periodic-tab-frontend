import React from 'react';

// presentational component
const Element = ({element}) => {

    return (
        <div>
    
            <h1>
              <u>{element.name}</u> ({element.symbol})
            </h1>
          
          <h3>
          <p>{element.summary}</p><br/>
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
              <li>
                Source: 
                {/* _blank opens browser in another window tab */}
                {/* noreferrer prevents passing the referrer information to the target website by removing the referral info from the HTTP header. */}
                  <a href={element.source} target='_blank' rel='noreferrer'> {element.source}</a>
              </li>
          </h3>

              
        </div>
      );


}

export default Element;