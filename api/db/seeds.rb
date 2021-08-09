# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Restaurant.create!(
  [
    {name: "龍祥軒", genre: "中華", address: "東京都港区芝浦3-6-8うつみビル1F"},
    {name: '武蔵', genre: 'ラーメン', address: '東京都港区芝浦3丁目12-5'},
    {name: 'はんぞう', genre: '和食', address: '東京都港区芝浦3丁目6-8TOKIビルB1'},
    {name: '正直や', genre: '和食', address: '東京都港区芝浦3-13-9藤ビルB1'},
  ]
)