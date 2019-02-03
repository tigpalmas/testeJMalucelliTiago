import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import LinearProgress from '@material-ui/core/LinearProgress';
import {purpleTitle} from "../colors/index";

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    progress: {
        margin: theme.spacing.unit * 2,
        color: purpleTitle,
    },
    linearColorPrimary: {
        backgroundColor: 'white',
    },
    linearBarColorPrimary: {
        backgroundColor: purpleTitle
    },
    // Reproduce the Facebook spinners.
    facebook: {
        margin: theme.spacing.unit * 2,
        position: 'relative',
    },
    facebook1: {
        color: '#eef3fd',
    },
    facebook2: {
        color: '#6798e5',
        animationDuration: '550ms',
        position: 'absolute',
        left: 0,
    },
});

function CustomizedProgress(props) {
    const { classes } = props;
    return (
        <Paper className={classes.root}>

            <LinearProgress
                classes={{
                    colorPrimary: classes.linearColorPrimary,
                    barColorPrimary: classes.linearBarColorPrimary,
                }}
            />

        </Paper>
    );
}

CustomizedProgress.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomizedProgress);
