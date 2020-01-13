import React, { Component } from 'react';
import { Container, Row, Col } from 'react-flexybox';
import ListElement from './../components/common/ListElement';
import striptags from 'striptags';
import UsefulSidebar from './../components/UsefulSidebar';
import TopMenuBar from './../components/common/TopMenuBar';
import Footer from './../components/common/Footer';
import MobileMenuToggle from './../components/common/MobileMenuToggle';
import { connect } from 'react-redux';
import { createGithubIssue, getAllIssues } from '../store/actions/createGhIssue'
import { toggleMobileMenu } from './../store/actions/toggleMobileMenu';
import IssueTicket from '../components/common/IssueTicket'
import classnames from 'classnames'
import Icon from 'react-icons-kit'
import { plusCircle } from 'react-icons-kit/feather/plusCircle'

import styles from '../style/modules/Issue.module.scss'
import { FaExclamationTriangle } from 'react-icons/fa';

class LinkCollection extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showIssueForm: false,
            issueTitle: '',
            issueBody: '',
            issueBy: '',
            isSuccess: false,
        }
    }
    componentDidMount() {
        this.props.onToggleMobileMenu(false);
        Promise.all([
            this.props.onFetchAllGhIssues()
        ])
    }
    createGhIssue() {
       this.setState({
           showIssueForm: !this.state.showIssueForm,
       })
    }
    handleSubmitCreation() {
        const issueObject = {
            title: this.state.issueTitle,
            body: `${this.state.issueBody} %ISSUEDBY%: ${this.state.issueBy}`,
        }
        Promise.all([
            createGithubIssue(issueObject)
        ]).then(res => {
            this.setState({
                isSuccess: true,
            })
        })
    }

    render() {
        console.debug('isSucces', this.props.issues.length)
        return (
            <div>
                <TopMenuBar subPage={true} />
                <MobileMenuToggle subPage={true} />
                <Container>
                <Row
                    center
                >
                    <Col className="col" style={{margin: `20px`}} xs={12} lg={10}>
                        <div className={classnames(
                            !this.state.issues ? styles.issueContainer : styles.hidden
                        )}>
                            <div className={styles.header}>
                                <div className={styles.metaContainer}>
                                    <p>
                                        Összes nyitott hibajegy: {this.props.issues.length}
                                    </p>
                                </div>
                                <div className={styles.buttonContainer}>
                                    <Icon icon={plusCircle} size="1.4em" />
                                    <button
                                        type="button"
                                        onClick={() => this.createGhIssue()}
                                        className={styles.btn}
                                    >
                                        Új hibajegy felvétele
                                    </button>
                                </div>
                            </div>
                            <div
                                className={classnames(
                                    styles.openIssueForm,
                                    !this.state.showIssueForm ? styles.hidden : null,
                                )}
                            >
                                <div className={styles.inputContainer}>
                                    <label className={styles.label}>
                                        hiba rövid megnevezése
                                        <input
                                            className={styles.input}
                                            type="text"
                                            onChange={e => this.setState({issueTitle: e.target.value})}
                                            value={this.state.issueTitle}
                                            placeholder="Nem működő link"
                                        />
                                    </label>
                                </div>
                                <div className={styles.inputContainer}>
                                    <label className={styles.label}>
                                        hiba részletes leírása (hol történt, milyen böngésző, mi történt, és minek kellett volna...)
                                        <input
                                            className={styles.input}
                                            type="text"
                                            onChange={e => this.setState({issueBody: e.target.value})}
                                            value={this.state.issueBody}
                                            placeholder="Az X link nem működik az Y oldalon."
                                        />
                                    </label>
                                </div>
                                <div className={styles.inputContainer}>
                                    <label className={styles.label}>
                                        Neved, és email címed. Ha szeretnéd megadhatod az email címed, ha esetleg további információra lenne szükség a hiba kijavításához. Nem kötelező.
                                        <input
                                            className={styles.input}
                                            type="text"
                                            onChange={e => this.setState({issueBy: e.target.value})}
                                            value={this.state.issueBy}
                                            placeholder="John Doe john@doe.com"
                                        />
                                    </label>
                                </div>
                                <div className={styles.submitBtnContainer}>
                                    <button
                                        type="button"
                                        onClick={() => this.handleSubmitCreation()}
                                        className={styles.btn}
                                    >
                                        Hibajegy beküldése
                                    </button>
                                    
                                </div>
                            </div>
                            <div className={classnames(
                                styles.noOpenIssue,
                                this.props.issues.length === 0 ? null : styles.hide,
                            )}>
                                <p>
                                    <span>🐶</span> Jelenleg nincs nyitott hibajegy!
                                </p>
                            </div>
                        </div>
                        <div className={classnames(
                            this.state.isSuccess === true ? styles.successContainer : styles.hide
                        )}>
                            <p>
                                Köszönjük! Hibabejelentését megkaptuk! Igyekszünk a probléma kijavításában!
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Footer />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    isMobileMenuOpen: state.isMobileMenuOpen.isMobileMenuOpen,
    issues: state.issues.issues
})

const mapDispatchToProps = dispatch => ({
    onToggleMobileMenu: (isMobileMenuOpen) => dispatch(toggleMobileMenu(isMobileMenuOpen)),
    onFetchAllGhIssues: () => dispatch(getAllIssues())
})

export default connect(mapStateToProps, mapDispatchToProps)(LinkCollection);