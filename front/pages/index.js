import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {FormControl, Select, MenuItem, Button} from '@material-ui/core';
import {useState} from 'react';

export default function Home() {
  
  const [genre, setGenre] = useState('');
  const [restaurant, setRestaurant] = useState('');
  const search = () =>{
    // TO DO apiに流す予定
    const result = {
      1: {'name': '龍祥軒', 'genre': 'chainese', 'address': '東京都港区芝浦3-6-8 うつみビル1F'},
      2: {'name': '武蔵', 'genre': 'ramen', 'address': '東京都港区芝浦３丁目１２−５'}
    };
    setRestaurant(result);
  }
  return (
    <div>
      <FormControl>
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
            <div>
              {r.name}
              {r.genre}
              {r.address}
            </div>
            );
        })}
      </div>
    </div>
  )
}
