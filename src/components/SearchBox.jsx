import React from 'react';
import { Search } from '@material-ui/icons';
import { TextField } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';

export default class SearchBox extends React.Component{
      
    render() {
        return (
            <TextField
                id="outlined-email-input"
                label="Search"
                type="text"
                name="search"
                autoComplete="search"
                margin="normal"
                variant="outlined"
                InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <Search />
                    </InputAdornment>
                ),
                }}
                onChange={this.props.handleOnChange}
            />
        );
    }
}
