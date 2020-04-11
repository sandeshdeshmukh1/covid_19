import React from 'react';
import { Card, CardContent, Typography, styled, StylesProvider, Grid } from '@material-ui/core';
import Countup from 'react-countup';



const gridStyles = {
    display: 'flex',
    marginTop: '2rem',
    marginLeft: '16rem',

}
const cardStyles = {
    marginLeft: '3rem',

    height: '25vh',

}








const Cards = (props) => {
    const realData = props.data.data
    if (!realData.confirmed) {
        return 'Loading.....';
    }
    return (
        <div >
            <Grid style={gridStyles}>
                <Card style={cardStyles}>
                    <CardContent>
                        <Typography gutterBottom variant="h4" component="h2">
                            Cases
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="h2" variant="h3" color='Primary'>
                            <Countup start={0} end={realData.confirmed.value} duration={10}>
                            </Countup>
                        </Typography>
                    </CardContent>
                </Card>
                <Card style={cardStyles}>
                    <CardContent>
                        <Typography gutterBottom variant="h4" component="h2">
                            Recovered
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="h2" variant="h3" color='textSecondary'>
                            <Countup start={0} end={realData.recovered.value} duration={10}>
                            </Countup>

                        </Typography>
                    </CardContent>
                </Card>
                <Card style={cardStyles}>
                    <CardContent>
                        <Typography gutterBottom variant="h4" component="h2">
                            Deaths
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="h2" variant="h3" color='error'>
                            <Countup start={0} end={realData.deaths.value} duration={10}>
                            </Countup>
                        </Typography>
                    </CardContent>
                </Card>

            </Grid>


        </div>
    );
}

export default Cards;