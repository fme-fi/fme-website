import React, { Component } from 'react';
import { FaTimes } from 'react-icons/fa';
import { connect } from 'react-redux';
import { toggleMobileMenu } from './../store/actions/toggleMobileMenu';
import { StaticQuery, graphql, Link } from 'gatsby';

class BurgerMenu extends Component {    
    render() {
        return (
        <StaticQuery
            query={graphql`
                query MenuStructureQueryMobile {
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
                <div className={`burgerMenu`}>
                    <div className="closeContainer">
                        <FaTimes onClick={ () => this.props.onToggleMobileMenu(false)} size={32} color="#1C3142" />
                    </div>
                    <ul>
                        <li>
                            <Link to={"/"}>
                                Főoldal
                            </Link>
                        </li>
                        {
                            data.allWordpressPage.edges.map(({node}) => (
                                <li key={node.id}>
                                    <Link to={`/${node.slug}`}>
                                        {node.title}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            )}
            />
         );
    }
}

const mapStateToProps = state => ({
    isMobileMenuOpen: state.isMobileMenuOpen.isMobileMenuOpen
})

const mapDispatchToProps = dispatch => ({
    onToggleMobileMenu: (isMobileMenuOpen) => dispatch(toggleMobileMenu(isMobileMenuOpen))
})
 
export default connect(mapStateToProps, mapDispatchToProps)(BurgerMenu);