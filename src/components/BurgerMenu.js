import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql, Link } from 'gatsby';

class BurgerMenu extends Component {    
    render() { 
        return ( 
            <StaticQuery
                query={graphql`
                    query MobileMenuQuery {
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
                    <div className="burgerMenuContainer">
                        <ul>
                        {
                            data.allWordpressPage.edges.map(({node}) => (
                                this.state.currentPage === node.slug ?
                                    <li>
                                        <Link className="activeMenuItem" to={`/${node.slug}`}>
                                            {node.title}
                                        </Link>
                                    </li>
                                :   <li>
                                        <Link to={`/${node.slug}`}>
                                            {node.title}
                                        </Link>
                                    </li>
                            ))
                        }
                        <ul>                        
                    </div>
                )}
                />
         );
    }
}
 
export default BurgerMenu;