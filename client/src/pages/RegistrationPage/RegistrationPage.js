import React from 'react';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import styles from './RegistrationPage.module.sass';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {clearErrorSignUpAndLogin} from '../../actions/actionCreator';
import CONSTANTS from '../../constants';
import LinkLogo from "../../components/LinkLogo";
import Article from './json';

const RegistrationPage = (props) => {
    props.clearError();

    const changeRoute = () => {
        props.history.replace('/');
    };

    return (
        <div className={styles.signUpPage}>
            <div className={styles.signUpContainer}>
                <div className={styles.headerSignUpPage}>
                    <LinkLogo src={`${CONSTANTS.STATIC_IMAGES_PATH}logo.png`} />
                    <div className={styles.linkLoginContainer}>
                        <Link to='/login' style={{textDecoration: 'none'}}><span>Login</span></Link>
                    </div>
                </div>
                {/* {error && <Error data={error.data} status={error.status} clearError={authClear}/>} */}
                <div className={styles.headerFormContainer}>
                    <h2>
                        CREATE AN ACCOUNT
                    </h2>
                    <h4>
                        We always keep your name and email address private.
                    </h4>
                </div>
                <RegistrationForm changeRoute={changeRoute}/>
            </div>
            <Article/>
        </div>
    )
};


const mapDispatchToProps = (dispatch) => {
    return {
        clearError: () => dispatch(clearErrorSignUpAndLogin())
    }
};

export default connect(null, mapDispatchToProps)(RegistrationPage);