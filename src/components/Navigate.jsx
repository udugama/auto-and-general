import React from 'react';
import { NavigateNext, NavigateBefore } from '@material-ui/icons';
import { Button } from '@material-ui/core';

export default class Navigate extends React.Component {

    render() {
        return (
            <Button
                variant="contained"
                color="default"
                onClick={this.props.onClick}
                startIcon={(this.props.name === 'Next') ? (<NavigateNext />) : (<NavigateBefore />)}
            >
                {this.props.name}
            </Button>
        );
    }    
}