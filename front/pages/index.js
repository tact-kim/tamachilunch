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

export function restaurantList() {
  // const searchRes = await fetch('http://localhost:3000/restaurants/index');
  // const jsonList = searchRes;
  // return jsonList;
  axios({
    method: "GET",
    url: 'http://localhost:3000/restaurants/index',
  }).then((result) => {
    console.log(result.data[0]);
    return result.data;
  }).catch((err) => {
    alert("だめです。");
    return false;
  });
  // console.log(result.data);
  // return result;
}
export default function Home() {
  console.log(process.env.NEXT_PUBLIC_APP_GOOGLE_MAPS_API_KEY);
  const classes = useStyles();
  const {env} = getConfig();
  const [apiKey, setApiKey] = useState('');
  const [genre, setGenre] = useState('');
  const [restaurant, setRestaurant] = useState('');
  const search = useCallback(
    () =>{
    // TO DO apiに流す予定
    // const result = {
    //   1: {'name': '龍祥軒', 'genre': '中華', 'address': '東京都港区芝浦3-6-8うつみビル1F'},
    //   2: {'name': '武蔵', 'genre': 'ラーメン', 'address': '東京都港区芝浦３丁目１２−５'}
    // };
    let listFlg = restaurantList();
    if (listFlg === false) {
      alert("ごめんなさい")
    } else {
      setRestaurant(restaurantList());
    }
    console.log(restaurant);
    // setRestaurant(result);
  });
  useEffect(() => {
    
  }, []);
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
          {Object.values(restaurant).map(function(r){
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
