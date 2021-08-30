import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import axios from 'axios';
import {useState, useEffect, useCallback} from 'react';
import getConfig from "next/config"
import {
  FormControl,
  Select,
  MenuItem,
  Button,
  Container,
  Card,
  CardContent} 
  from '@material-ui/core';

import {
  makeStyles
} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(3),
    minWidth: 200
  }
}))

export default function Home() {
  async function restaurantList() {

    const apiResult = await axios({
      method: "GET",
      url: 'http://localhost:3000/restaurants/index',
    }).then()
    .catch((err) => alert("だめです。"));
    return apiResult.data;
  }
  const classes = useStyles();
  const {env} = getConfig();
  const [apiKey, setApiKey] = useState('');
  const [genre, setGenre] = useState('');
  const [restaurant, setRestaurant] = useState([{
    "id": null,
    "name": null,
    "genre": null,
    "address": null,
    "created_at": null,
    "updated_at": null
  }]);
  const search = useCallback(
    async () =>{

    let list = await restaurantList();
    if (list === false) {
      alert("ごめんなさい")
    } else {
      setRestaurant(list);
    }
  },[]);
  return (
    <>
      <Container>
        <FormControl className={classes.formControl}>
          <Select value={genre} onChange={(e) => setGenre(e.target.value)}>
            <MenuItem value="chainese">中華</MenuItem>
            <MenuItem value="japanese">和食</MenuItem>
            <MenuItem value="italian">洋食</MenuItem>
            <MenuItem value="ramen">ラーメン</MenuItem>
          </Select>
          <Button color="primary" onClick={search}>
            探す
          </Button>
        </FormControl>
        <div>
          {restaurant?.map(function(r){
            return (
              <Card key={Math.random()}>
                <CardContent>
                  <div>{r.name}</div>
                  <div>{r.genre}</div>
                  <div>{r.address}</div>
                  <iframe
                    style={{border: 0}}
                    loading="lazy"
                    allowFullScreen
                    src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_APP_GOOGLE_MAPS_API_KEY}&q=${r.address}`}>
                      </iframe>
                </CardContent>
              </Card>
              );
            })}
        </div>
      </Container>
    </>
  )
}
