import React, { Component } from 'react';
import './style/PeriodicTable.css';

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

class ElementList extends Component {


    render() {
        const { elementList } = this.props

        return(
        
            <div className="periodic-table">
                {elementList.map((element) =>
                    <div 
                        className='element'
                        key={element.name}
                        style={{
                            gridColumn: element.xpos,
                            gridRow: element.ypos,
                            borderColor: colorMap[element.category],
                        }}
                    >
                        <strong>{element.symbol}</strong>
                        <small className="number">{element.number}</small>
                        <small className="name">{element.name}</small>
                    </div>
                
                )}
            </div>
    
        
        )
    }
}

export default ElementList