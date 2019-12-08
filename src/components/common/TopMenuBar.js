import React, { useState, useEffect } from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { useStore } from 'react-redux'
import striptags from 'striptags';
import styled from 'styled-components';
import FmeLogo from './../assets/others/logo.svg';
import { FaInstagram, FaFacebookF } from 'react-icons/fa/'
import MemberShipFee from './MemberShipFee';

const FmeLogoImage = styled.img`
    max-width: 100px;
    display: flex;
    align-self: center;
    &:hover {
        pointer: none;
        border: none;
    }
`;

let lastScrollY = 0;
let ticking = false;


export default (props) => {
    const [currentPage, setCurrentPage] = useState("");
    const [fixMenuBar, setFixMenuBar] = useState("")
    const store = useStore()
    useEffect( () => {
        let urlArray = window.location.href.split("/");
        setCurrentPage(urlArray[urlArray.length - 1])
        
        window.addEventListener('scroll', handleScroll);
        return function cleanup() {
            window.removeEventListener('scroll', handleScroll);
        }
    });

    function handleScroll () {        
        lastScrollY = window.scrollY;
        if (!ticking) {
        window.requestAnimationFrame(() => {
            if (lastScrollY > 180) {
                setFixMenuBar("fixed")
            } else {
                setFixMenuBar("")
            }
            ticking = false;
            });
            ticking = true;
        }
    }

    const data = useStaticQuery(graphql`
        query MenuStructureQuery {
            allWordpressPage(filter: { wordpress_parent: {eq: 532} }) {
                edges {
                node {
                    id
                    title
                    content
                    excerpt
                    date
                    modified
                    slug
                    status, 
                    menu_order
                    }
                }
            }    
        }
    `);

    const result = data.allWordpressPage.edges.sort( (a,b) => {  
        return b.node.menu_order - a.node.menu_order
    })
    
    let isSubPage = props.subPage ? 'subPage' : '';
    return (
            <div
                className={`topMenuContainer ${isSubPage}`}
                style={ store.getState().blur.blur ? { filter: 'blur(10px)'} : {} }
            >
                <div className={`topMenuBar ${fixMenuBar}`}>
                    {
                        fixMenuBar === 'fixed' ? 
                        <MemberShipFee />
                        : null
                    }
                    <ul>
                    <li>
                        <Link to="/">
                            <FmeLogoImage src={FmeLogo} />
                        </Link>
                    </li>
                    {
                        result.map(({node}) => (
                                currentPage === node.slug ?
                                    <li className="activePage" key={node.slug}>
                                        <Link to={`/${node.slug}`}>
                                            {node.title}
                                            <p>
                                                {
                                                    striptags(node.excerpt)
                                                }
                                            </p>
                                        </Link>
                                    </li>
                                : <li key={node.slug}>
                                    <Link to={`/${node.slug}`}>
                                        {node.title}
                                        <p>
                                            {
                                                striptags(node.excerpt)
                                            }
                                        </p>
                                    </Link>
                                </li>
                        ))
                    }
                    </ul>
                    <ul className={isSubPage}>
                        <li>
                            Közösségi média
                        </li>
                        <li>
                            <FaInstagram size="1.1em" />
                        </li>
                        <li>
                            <FaFacebookF size="1.1em" />
                        </li>
                    </ul>
                </div>          
            </div>             
    )
    
}