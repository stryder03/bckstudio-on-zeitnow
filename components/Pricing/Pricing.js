import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Grid from '@material-ui/core/Grid';
import StarIcon from '@material-ui/icons/StarBorder';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles(theme => ({
    '@global': {
        ul: {
            margin: 0,
            padding: 0,
            listStyle: 'none',
        },
    },
    link: {
        margin: theme.spacing(1, 1.5),
    },
    cardHeader: {
        backgroundColor: theme.palette.secondary.main
    },
    cardPricing: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'baseline',
        marginBottom: theme.spacing(2),
    },
    cards: {
        marginTop: "2.5rem"
    },
    priceButton: {
        fontWeight: 'bold',
    },
    featuredPriceButton: {
        fontWeight: 'bold',
        '&:hover': {
            color: "#ffffff"
        }
    },
}));


export default function Pricing(props) {
    const classes = useStyles();

    const {tiers} = props;


    return (
        <React.Fragment>
            <Container maxWidth='md' component='main'>
                <Grid container spacing={5} alignItems={ tiers.length > 1 ? 'flex-end' : 'center'} justify={'center'}>
                    {tiers.map(tier => (
                        // Premium card is full width at sm breakpoint
                        <Grid item key={tier.title} xs={12} sm={tier.title === 'Premium' ? 12 : 6} md={4}>
                            <Card className={classes.cards}>
                                <CardHeader
                                    title={tier.title}
                                    titleTypographyProps={{ align: 'center' }}
                                    subheaderTypographyProps={{ align: 'center' }}
                                    action={tier.title === 'Standard' ? <StarIcon /> : null}
                                    className={classes.cardHeader}
                                />
                                <CardContent>
                                    <div className={classes.cardPricing}>
                                        <Typography component="h2" variant="h3" color="textPrimary">
                                            ${tier.price}
                                        </Typography>
                                        <Typography variant="h6" color="textSecondary">
                                            /{tier.term}
                                        </Typography>
                                    </div>
                                    <ul>
                                        {tier.description.map(line => (
                                            <Typography component="li" variant="subtitle1" align="left" key={line}>
                                                <Divider/>
                                                {line}
                                                <Divider/>
                                            </Typography>
                                        ))}
                                    </ul>
                                </CardContent>
                                <CardActions>
                                    <Button fullWidth
                                            variant={tier.buttonVariant}
                                            color="primary"
                                            href={"https://www.paypal.com/cgi-bin/webscr&cmd=_s-xclick&hosted_button_id="+tier.inputValue}
                                            className={tier.buttonVariant === 'contained' ? classes.featuredPriceButton : classes.priceButton}>
                                            {tier.buttonText}
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </React.Fragment>
    );
}

