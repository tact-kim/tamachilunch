import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {useState} from 'react';
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
  
  const classes = useStyles();
  const [genre, setGenre] = useState('');
  const [restaurant, setRestaurant] = useState('');
  const search = () =>{
    // TO DO apiに流す予定
    const result = {
      1: {'name': '龍祥軒', 'genre': '中華', 'address': '東京都港区芝浦3-6-8うつみビル1F'},
      2: {'name': '武蔵', 'genre': 'ラーメン', 'address': '東京都港区芝浦３丁目１２−５'}
    };
    setRestaurant(result);
  }
  return (
    <>
      <div>
        Tamachilunch
      </div>
      <Container fixed>
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
              <Card>
                <CardContent>
                  <div>{r.name}</div>
                  <div>{r.genre}</div>
                  <div>{r.address}</div>
                  <iframe
                    loading="lazy"
                    allowfullscreen
                    src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyDA_12U4PFBgiBwDyqj3pWjtXwRb0tzX1Q&q=${r.address}`}>
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
