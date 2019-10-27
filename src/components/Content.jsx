import React from 'react';
import { Paper } from '@material-ui/core';
import Story from './Story';

export default class Content extends React.Component {

    render() {
        const listData = this.props.content;
        let storiesList = 'Stories List';
        if (listData) {
            storiesList = listData.map((row) => {
                return (
                    <Story key={row.objectID} data={row} />
                );
            });
        }
        return (
            <Paper style={{maxHeight: 400, overflow: 'auto'}} >
                {storiesList}
            </Paper>
        );
    }
}