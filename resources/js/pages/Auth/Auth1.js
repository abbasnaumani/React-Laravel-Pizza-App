//
// import React, {Component} from 'react';
// import {connect} from 'react-redux';
// import {Redirect} from 'react-router-dom';
//
// import Input from '../../components/UI/Input/Input';
// import Spinner from '../../components/UI/Spinner/Spinner';
// import './Auth.css';
// import * as actions from '../../store/actions/index';
// import Auxiliary from "../../hoc/Auxiliary/Auxiliary";
//
// class Auth extends Component {
//     state = {
//         controls: {
//             email: {
//                 elementType: 'input',
//                 elementConfig: {
//                     type: 'email',
//                     placeholder: 'Enter you email address',
//                     label: 'Email address',
//                     autoFocus: 'autofocus'
//                 },
//                 label: 'Email Address',
//                 value: '',
//                 validation: {
//                     required: true,
//                     isEmail: true
//                 },
//                 valid: false,
//                 touched: false
//             },
//             password: {
//                 elementType: 'input',
//                 elementConfig: {
//                     type: 'password',
//                     placeholder: 'Enter your password',
//                     autoComplete: 'current-password'
//                 },
//                 // label: <Auxiliary><span>Password</span><a className="tx-13" href="#">Forgot
//                 //     password?</a></Auxiliary>,
//                 label: <Auxiliary><span>Password</span></Auxiliary>,
//                 labelClassName: ['d-flex', 'justify-content-between'],
//                 value: '',
//                 validation: {
//                     required: true,
//                     minLength: 6
//                 },
//                 valid: false,
//                 touched: false
//             },
//             checkbox: {
//                 elementType: 'checkbox',
//                 elementConfig: {
//                     type: 'checkbox',
//                     label: 'Remember Me',
//                 },
//                 value: '',
//                 valid: false,
//                 touched: false
//             }
//         }
//     }
//
//     componentDidMount() {
//         console.log(this.props.authRedirectPath, ' I am login page');
//         if (this.props.authRedirectPath !== '/') {
//             this.props.onSetAuthRedirectPath();
//         }
//     }
//
//     componentDidUpdate = () => {
//         console.log(this.props, ' did update');
//     }
//     componentDidMount = () => {
//         console.log(this.props, ' did mount');
//     }
//
//     checkValidity(value, rules) {
//         let isValid = true;
//         if (!rules) {
//             return true;
//         }
//         if (rules.required) {
//             isValid = value.trim() !== '' && isValid;
//         }
//         if (rules.minLength) {
//             isValid = value.length >= rules.minLength && isValid
//         }
//         if (rules.maxLength) {
//             isValid = value.length <= rules.maxLength && isValid
//         }
//         if (rules.isEmail) {
//             const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
//             isValid = pattern.test(value) && isValid
//         }
//         if (rules.isNumeric) {
//             const pattern = /^\d+$/;
//             isValid = pattern.test(value) && isValid
//         }
//         return isValid;
//     }
//
//     inputChangedHandler = (event, controlName) => {
//         const updatedControls = {
//             ...this.state.controls,
//             [controlName]: {
//                 ...this.state.controls[controlName],
//                 value: event.target.value,
//                 valid: this.checkValidity(event.target.value, this.state.controls[controlName].validation),
//                 touched: true
//             }
//         };
//         this.setState({controls: updatedControls});
//     }
//
//     submitHandler = (event) => {
//         event.preventDefault();
//         // console.log(this.state.controls.email.value, this.state.controls.password.value)
//         this.props.onAuth(this.state.controls.email.value, this.state.controls.password.value);
//     }
//
//     render() {
//         const formElementsArray = [];
//         for (let key in this.state.controls) {
//             formElementsArray.push({
//                 id: key,
//                 config: this.state.controls[key]
//             });
//         }
//
//         let form = formElementsArray.map(formElement => (
//             <Input
//                 label={formElement.config.label}
//                 key={formElement.id}
//                 elementType={formElement.config.elementType}
//                 autoFocus={formElement.config.autofocus}
//                 labelClassName={formElement.config.labelClassName}
//                 autoComplete={formElement.config.autoComplete}
//                 elementConfig={formElement.config.elementConfig}
//                 value={formElement.config.value}
//                 invalid={!formElement.config.valid}
//                 shouldValidate={formElement.config.validation}
//                 touched={formElement.config.touched}
//                 changed={(event) => this.inputChangedHandler(event, formElement.id)}/>
//
//         ));
//         if (this.props.loading) {
//             form = <Spinner/>
//         }
//
//         let errorMessage = null;
//
//         if (this.props.error) {
//             errorMessage = (
//                 <p>{this.props.error.message}</p>
//             );
//         }
//         console.log(this.props.authRedirectPath, "before redirection");
//         console.log(this.props.isAuthenticated, "before isAuthenticated");
//         let authRedirect = null;
//         if (this.props.isAuthenticated) {
//             console.log(this.props.authRedirectPath, "redirection");
//             authRedirect = <Redirect to={this.props.authRedirectPath}/>
//         }
//         return (
//             <div className="container">
//                 <div className="row">
//                     <div className="col-md-6 container-fluid">
//                         <div className="signin-panel">
//                             <div className="signin-sidebar auth-sidebar">
//                                 {authRedirect}
//                                 {errorMessage}
//                                 <div className="container mb-5">
//                                     <div className="row justify-content-center mb-5 pb-3 mt-5 pt-5">
//                                         <div className="col-md-7 heading-section text-center">
//                                             <h2 className="mb-4">Login</h2>
//                                             <p className="flip">
//                                                 <span className="deg1"></span><span className="deg2"></span><span
//                                                 className="deg3"></span></p>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="signin-sidebar-body">
//                                     <div className="signin-form">
//                                         <form onSubmit={this.submitHandler}>
//                                             {form}
//                                             <div className="form-group mg-b-20 text-center">
//                                                 <h5>
//                                                     <button type="submit "
//                                                             className="btn btn-brand-01 btn-uppercase flex-fill main-btn-cls"> SIGN
//                                                         IN
//                                                     </button>
//                                                 </h5>
//                                             </div>
//                                         </form>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }
//
// const mapStateToProps = state => {
//     console.log(state.auth.authRedirectPath, "state.auth.authRedirectPath")
//     return {
//         loading: state.auth.loading,
//         error: state.auth.error,
//         isAuthenticated: state.auth.token !== null,
//         authRedirectPath: state.auth.authRedirectPath
//     };
// };
// const mapDispatchToProps = dispatch => {
//     return {
//         onAuth: (email, password) => dispatch(actions.auth(email, password)),
//         onSetAuthRedirectPath: () => dispatch(actions.setAuthRedirectPath('/menu'))
//     };
// };
//
// export default connect(mapStateToProps, mapDispatchToProps)(Auth);
