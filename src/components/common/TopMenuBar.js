import React, { Component } from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import striptags from 'striptags';
import styled from 'styled-components';
import FmeLogo from './../assets/others/logo.svg';
import { FaInstagram, FaFacebookF } from 'react-icons/fa/'
import MemberShipFee from './MemberShipFee';

const SocialImage = styled.img``;

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

class TopMenuBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isMenuBarFixed: false,            
            currentPage: null
        }
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        let urlArray = window.location.href.split("/");
        let currentPage = urlArray[urlArray.length - 1];        
        this.setState({
            currentPage: currentPage
        })
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        lastScrollY = window.scrollY;
        if (!ticking) {
        window.requestAnimationFrame(() => {
            if (lastScrollY > 180) {
                this.setState({
                    isMenuBarFixed: true
                })
            } else {
                this.setState({
                    isMenuBarFixed: false
                })
            }
            ticking = false;
            });
            ticking = true;
        }
    }
    render() {
        let fixMenuBar = this.state.isMenuBarFixed ? 'fixed' : '';
        let isSubPage = this.props.subPage ? 'subPage' : '';        
        return (
            <StaticQuery
                query={graphql`
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
                                status        
                            }
                            }
                        }    
                    }
                `}
            
                render={data => (                
                <div className={`topMenuContainer ${isSubPage}`}>                    
                    <div className={`topMenuBar ${fixMenuBar}`}>
                        {
                            this.state.isMenuBarFixed ? 
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
                            data.allWordpressPage.edges.map(({node}) => (
                                    this.state.currentPage === node.slug ?
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
                    
                
            )}
            />
        )
    }
}

export default TopMenuBar;