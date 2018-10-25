import React from 'react'
import Paper from '@material-ui/core/Paper';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';


import 'styles/positioning.css'
import MainFields from './MainFields'
import ExtraFields from './ExtraFields';

const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        maxWidth: '720px',
    },
    button: {
        margin: theme.spacing.unit,
        background: '#333333',
        color: 'white'
    },
    bottomPanel: {
        position: 'fixed',
        height: '20%',
        width: '100%',
        bottom: 0,
        left: 0,
        background: '#666666'
    },
    container: {
        background: 'blue'
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        borderRadius: 0,
        color: 'red',
        width: '100%'
    },
    textfield: {
        color: 'red'
    },
    dense: {
        marginTop: 16,
    },
    menu: {
        width: 200,
    },
    header: {
        display: 'block',
        position: 'absolute',
        top: 0,
        left: 0,
        height: '10%',
        width: '100%',
        textAlign: 'center',
        verticalAlign: 'center',
        color: 'white',
        textShadow: `#000 0px 0px 0.5px,	 #000 0px 0px 0.5px,	 #000 0px 0px 0.5px,
								 #000 0px 0px 0.5px,	 #000 0px 0px 0.5px,	 #000 0px 0px 0.5px`,
    },
    palette: {
        primary: 'yellow',
        secondary: 'yellow',
        error: 'red',
        common: {
            darkBlack: 'yellow',
        }
    }
});

var fields = {
    login: '',
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    secondName: '',
    lastName: ''
}

class RegisterPage extends React.Component {

    constructor() {
        super();
        this.state = {
            step: 1
        }
    }

    saveValues(field_value) {
        return function () {
            for (let i in field_value) {
                fields[i] = field_value[i];
            }
        }.bind(this)()
    }

    sendValues() {
        console.log("SEND ", fields);
    }

    nextStep() {
        this.setState({
            step: this.state.step + 1,
        });
    }
    prevStep() {
        this.setState({
            step: this.state.step - 1,
        });
    }

    content() {
        switch (this.state.step) {
            case 1:
                return <MainFields
                    fields={fields}
                    owner={this}
                    nextStep={this.nextStep}
                    saveValues={this.saveValues}
                    classes={this.props.classes} />;
            case 2:
                return <ExtraFields
                    fields={fields}
                    owner={this}
                    prevStep={this.prevStep}
                    saveValues={this.saveValues}
                    sendValues={this.sendValues}
                    classes={this.props.classes} />;
        }
    }

    render() {

        var html = (
            <div className='fullScreen' style={{ background: '#444444' }}>
                <div className={this.props.classes.header}>
                    <h1>Registration</h1>
                </div>
                {this.content()}
            </div>
        );
        return <div>{html}</div>;
    }

};
RegisterPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RegisterPage);
