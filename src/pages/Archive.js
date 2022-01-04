import React, { Component } from 'react';
import { orderBy } from 'lodash'
import TopMenuBar from './../components/common/TopMenuBar';
import Footer from './../components/common/Footer';
import { Container, Row, Col } from 'react-flexybox';
import { StaticQuery, graphql, Link } from 'gatsby';
        import MobileMenuToggle from './../components/common/MobileMenuToggle';
import { connect } from 'react-redux';
import { toggleMobileMenu } from './../store/actions/toggleMobileMenu';

function reOrderItems(items) {
    const posts = items.allWordpressPost.edges
    const reordered = orderBy(posts, [({node}) => new Date(node.date)], ['desc']);
    console.log(reordered)
    return reordered

}

function formatPostDate(thisPostDate) {
    const date = new Date(thisPostDate)
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
}

function formatTitle(data) {
    const formattedDate = formatPostDate(data.date)
    return `${data.title} – (${formattedDate})`
}

class Archive extends Component {
    componentDidMount() {
        this.props.onToggleMobileMenu(false);
    }
    render() {        
        return ( 
            <StaticQuery
                query={graphql`
                    query allWordpressPost {
                        allWordpressPost(filter: {tags: {elemMatch: {wordpress_id: { eq: 1187 }}}} ){
                            edges {
                            node {
                                wordpress_id
                                id
                                title
                                date
                                slug
                                tags {
                                    id
                                    wordpress_id
                                }
                            }
                            }
                        }
                    }
                `}
                render={data => (
                    <div>
                        <TopMenuBar subPage={true} />
                        <MobileMenuToggle subPage={true} />    
                        <Container fluid className="archiveList">
                            <Row center>
                                <Col xs={10} lg={8}>
                                    <h1>
                                        {`Archiv (${data.allWordpressPost.edges.length})`}
                                    </h1>
                                    <div>
                                        <ul>
                                            {
                                                reOrderItems(data).map(({node}, index) => (
                                                    <Link key={index} to={`blog/${node.slug}`}>
                                                        <li dangerouslySetInnerHTML={{__html: formatTitle(node)}} />
                                                    </Link>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                        <Footer />
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
 
export default connect(mapStateToProps, mapDispatchToProps)(Archive);