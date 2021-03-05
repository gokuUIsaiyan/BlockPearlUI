import React, {useState} from "react";

import { makeStyles } from "@material-ui/core/styles";

// core components

import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";

import Grid from "@material-ui/core/Grid";
import {TransactionChart} from "../../components/Charts/TransactionChart";
import {useSelector} from "react-redux";
import Typography from "@material-ui/core/Typography";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));
export default function Chart() {
  const address = useSelector((state) => state.wallet.address);

  const [type, setType] = useState('net');
  const [time, setTime] = useState('day');

  const typeChange = (event) => {
    setType(event.target.value);
  };

  const timeChange = (event) => {
    setTime(event.target.value);
  };


  const classes = useStyles();
  return (
      <div>
        {address != "" &&
        <GridContainer>
          <Grid xs={12}>
            <Card>
              <CardHeader >
                <FormControl className={classes.formControl}>
                  <InputLabel id="input-data-chart-label">Chart Data</InputLabel>
                  <Select
                      labelId="select-data-chart"
                      id="data-chart"
                      value={type}
                      onChange={typeChange}
                  >
                    <MenuItem value={'net'}>Net</MenuItem>
                    <MenuItem value={'volume'}>Volume</MenuItem>
                    <MenuItem value={'sell'}>Sell</MenuItem>
                    <MenuItem  value={'buy'}>Buy</MenuItem>
                  </Select>
                </FormControl>
                <FormControl className={classes.formControl}>
                  <InputLabel id="input-time-scale-label">Time Scale</InputLabel>
                  <Select
                      labelId="select-time-scale"
                      id="time-scale"
                      value={time}
                      onChange={timeChange}
                  >
                    <MenuItem value={'minute'}>Minute</MenuItem>
                    <MenuItem value={'hour'}>Hour</MenuItem>
                    <MenuItem value={'day'}>Day</MenuItem>
                    <MenuItem  value={'week'}>Week</MenuItem>
                    <MenuItem  value={'month'}>Month</MenuItem>
                  </Select>
                </FormControl>
              </CardHeader>
              <CardBody>
                <TransactionChart  time={time} type={type}/>
              </CardBody>
              {/*<CardFooter stats>*/}
              {/*    <div className={classes.stats}>*/}
              {/*        <Danger>*/}
              {/*            <Warning />*/}
              {/*        </Danger>*/}
              {/*        <a href="#pablo" onClick={e => e.preventDefault()}>*/}
              {/*            Get more space*/}
              {/*        </a>*/}
              {/*    </div>*/}
              {/*</CardFooter>*/}
            </Card>
          </Grid>
        </GridContainer>
        }
      </div>
  );
}
