import React from 'react';
import axios from 'axios';
import { Paper, Grid } from '@material-ui/core';

import SearchBox from './SearchBox';
import Navigate from './Navigate';
import Content from './Content';

export default class Container extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          currentPage: 1,
          search: '',
          numberOfPages: 0,
          hitsPerPage: 20,
        };

        this.requestTimer = '';

    }

    searchStories (currentPageNumber) { 
        const url = `https://hn.algolia.com/api/v1/search?query=${this.state.search}&tags=story&page=${currentPageNumber}`;
        axios.get(url)
        .then(response => {
            const {
                status,
                data: {
                    nbPages,
                    hits,
                }
            } = response;
            if (status === 200) {
                let totalPages = nbPages;
                if (totalPages > 1) {
                    totalPages = totalPages - 1;
                }
                this.setState({
                    numberOfPages: totalPages,
                    data: hits,
                });
            }
        });
    }

    delayedRequest (event) {
        this.setState({ search: event.target.value });
        if (this.requestTimer) {
            clearTimeout(this.requestTimer);
        }
        this.requestTimer = setTimeout(() => {
            this.setState({ currentPage: 1 });
            this.searchStories(1);
        }, 200);
    }

    handleNextPage() {
        const totalPages = this.state.numberOfPages;
        if (this.state.currentPage < totalPages) {
            const currentPageNumber = this.state.currentPage + 1;
            this.setState({ currentPage: currentPageNumber });
            this.searchStories(currentPageNumber);
        }
    }

    handlePreviousPage() {
        if (this.state.currentPage > 1) {
            const currentPageNumber = this.state.currentPage - 1;
            this.setState({ currentPage: currentPageNumber });
            this.searchStories(currentPageNumber);
        }
    }

    render() {
        return ( 
            <Paper >
                <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper >
                        <SearchBox handleOnChange={this.delayedRequest.bind(this)}  />
                    </Paper>
                </Grid>
                <Grid item xs={1}></Grid>
                <Grid item xs={10}>
                    <Content content={this.state.data} />
                </Grid>
                <Grid item xs={1}></Grid>
                <Grid item xs={1} >
                    <Paper ></Paper>
                </Grid>
                <Grid item xs={3} >
                    <Paper ><Navigate name={'Previous'} onClick={this.handlePreviousPage.bind(this)} /></Paper>
                </Grid>
        
                <Grid item xs={3} >
                    <Paper > Page {this.state.currentPage} of {this.state.numberOfPages} </Paper>
                </Grid>
                <Grid item xs={3} >
                    <Paper ><Navigate name={'Next'} onClick={this.handleNextPage.bind(this)} /></Paper>
                </Grid>
                <Grid item xs={1} >
                    <Paper ></Paper>
                </Grid>
                </Grid>
    
            </Paper>
        );
    }
}