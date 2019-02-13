import React, { Component } from 'react';

    const ListElement = (props) => {
        return ( 
            <li>
                <a href={props.url}>
                    <p dangerouslySetInnerHTML={{__html: props.title}} ></p>
                    <p dangerouslySetInnerHTML={{__html: props.description}}></p>
                </a>
            </li>
         );
    }
  
    
    export default ListElement;