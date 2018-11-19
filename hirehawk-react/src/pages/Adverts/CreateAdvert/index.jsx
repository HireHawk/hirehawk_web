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

class CreateAdvert extends React.Component{

    constructor() {
        super();
        this.state = {
            name: '',
            category: '',
            info: '',
            location: '',
            price: '',
            numb_of_hours: '',
            errors: []
        }
    }

    handleNameChange(event) {
        this.setState({
            name: event.target.value,
        });
    }
    handleCategoryChange(event) {
        this.setState({
            category: event.target.value,
        });
    }
    handleInfoChange(event) {
        this.setState({
            info: event.target.value,
        });
    }
    handleLocationChange(event) {
        this.setState({
            location: event.target.value,
        });
    }
    handlePriceChange(event) {
        this.setState({
            price: event.target.value,
        });
    }
    handleNumbOfHoursChange(event) {
        this.setState({
            numb_of_hours: event.target.value,
        });
    }

    isEmpty(value) {
        return !value.trim();
    }

    sendValues() {
        console.log("SEND ", this.state);
        AdvertAPI.createAdvert(this.state);
    }

    render() {

        var html = (
            <div className='fullScreen' style={{ background: '#444444' }}>
                <div className={this.props.classes.header}>
                    <h1>Advert</h1>
                </div>
                <Paper className={[this.props.classes.root, 'centered'].join(' ')} elevation={1}>
                    <TextField
                        required
                        label="Name"
                        margin="normal"
                        value={this.state.name}
                        className={this.props.classes.textField}
                        onChange={this.handleNameChange.bind(this)}
                    />
                    <TextField
                        required
                        label="Location"
                        margin="normal"
                        value={this.state.location}
                        className={this.props.classes.textField}
                        onChange={this.handleLocationChange.bind(this)}

                    />
                    <TextField
                        required
                        id="standard-number"
                        label="Price"
                        value={this.state.price}
                        onChange={this.handlePriceChange.bind(this)}
                        type="number"
                        className={this.props.classes.textField}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        margin="normal"
                    />
                    <TextField
                        label="Info"
                        margin="normal"
                        value={this.state.info}
                        className={this.props.classes.textField}
                        onChange={this.handleInfoChange.bind(this)}
                        multiline
                        rowsMax="4"
                    />
                    {this.state.errors.map((error, i) => {
                        return (<div className="error">{error}</div>);
                    })}

                    <div style={{ height: '2em' }} />{ /*used for scaling,for textBoxes not to take */}
                    <Button variant="contained"
                            className={[this.props.classes.button, 'centered'].join(' ')}
                            onClick={this.submit.bind(this)}>
                        Submit
                    </Button>
                </Paper>
            </div>
        );
        return <div>{html}</div>;
    }


    submit() {
        let errorsContainer = [];

        if (this.isEmpty(this.state.name) ||
            this.isEmpty(this.state.location) ||
            this.isEmpty(this.state.price)) {
            errorsContainer.push("Some fields are empty");
        }

        this.setState({
            errors: errorsContainer
        });

        if (errorsContainer.length === 0) {
            this.sendValues();
        }
    }

}

export default withStyles(styles)(CreateAdvert);
