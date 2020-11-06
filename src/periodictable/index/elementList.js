import React from 'react';
import './PeriodicTable.css';
import { Link } from 'react-router-dom';

const colorMap = {
    "noble gas": "#FFBC42",
    "alkaline earth metal": "#EC674E",
    "diatomic nonmetal": "#D81159",
    "alkali metal": "#8F2D56",
    "transition metal": "#58586B",
    "post-transition metal": "#218380",
    lanthanide: "#4AABAF",
    metalloid: "#73D2DE",
  };

// stateless component used to output element JSX
const ElementList = ({elementList}) => {

        return(
            <div>
                 <span><h3>Choose an element from the periodic table </h3></span>
                <div className="periodic-table">

                    {elementList.map((element) =>
                        <Link key={element.number} to={`/periodictable/${element.number}`}
                    
                                className='element'
                                style={{
                                    gridColumn: element.xpos,
                                    gridRow: element.ypos,
                                    borderColor: colorMap[element.category],
                                }}                   
                            >
                                <strong>{element.symbol}</strong>
                                <small className="number">{element.number}</small>
                                <small className="name">{element.name}</small>
                            </Link>            
                    )}
                </div>  
            </div>      
        )
    
}

export default ElementList