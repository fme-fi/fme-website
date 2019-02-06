import React, { Component } from 'react';

    const ListElement = (props) => {
        return ( 
            <li>
                <a href={props.url}>
                    <p>
                        {props.title}
                    </p>
                    <p>
                        lorem ipsum
                    </p>
                </a>
            </li>
         );
    }
  
    
    export default ListElement;