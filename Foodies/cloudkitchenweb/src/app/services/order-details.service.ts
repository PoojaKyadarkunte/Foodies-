import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

  foodDetails=[
    {
      id:1,
      foodName:"Paneer Grilled Sandwich",
      foodDetails:"Pan-fried masala Paneer",
      foodPrice:200,
      foodImg:"https://static.toiimg.com/thumb/60043279.cms?imgsize=195460&width=800&height=800"
    },

    {
      id:2,
      foodName:"Noodles",
      foodDetails:"Hakka Masala Noodles",
      foodPrice:170,
      foodImg:"https://www.cookwithmanali.com/wp-content/uploads/2014/11/Hakka-Noodles-1.jpg"
    },

    {
      id:3,
      foodName:"Veg Biryani",
      foodDetails:"Indian veggie Delight Veg Biryani",
      foodPrice:250,
      foodImg:"https://static.wixstatic.com/media/91e241_0cf76aa5613b4055be2f922f71edeaa0~mv2.jpg/v1/fill/w_807,h_537,al_c,lg_1,q_85,enc_auto/Ustaadi%20Hyderabadi%20Veg%20Biryani.jpg"
    },

    {
      id:4,
      foodName:"Idli Sambhar",
      foodDetails:"South Indian Special Sambhar Idli",
      foodPrice:150,
      foodImg:"https://media.istockphoto.com/id/638506124/photo/idli-with-coconut-chutney-and-sambhar.jpg?s=612x612&w=0&k=20&c=ze1ngBM0LY4w9aqWx_tGe2vTAr4uf36elveTDZ83fgw="
    },

    {
      id:5,
      foodName:"Masala Dosa",
      foodDetails:"South Indian Masala Tadka Dosa",
      foodPrice:280,
      foodImg:"https://t4.ftcdn.net/jpg/01/89/45/21/360_F_189452136_gJBG4ZRXY9NnZZCGV2s8QhObmpeerJTO.jpg"
    },

    {
      id:6,
      foodName:"Munchurian",
      foodDetails:"Cabbage Munchurian",
      foodPrice:200,
      foodImg:"https://media.istockphoto.com/id/1334115358/photo/cabbage-manchurian.jpg?s=612x612&w=0&k=20&c=lZvW1lWr03mQszDbx4v59IAnxWacQ_Ti275hjj18hcE="
    },

    {
      id:7,
      foodName:"French Fries",
      foodDetails:"French Fries,Rosemary,Portion,Tomato Sauce",
      foodPrice:260,
      foodImg:"https://c4.wallpaperflare.com/wallpaper/804/598/482/french-fries-rosemary-portion-sauce-tomatoes-wallpaper-preview.jpg"
    },

    {
      id:8,
      foodName:"Maharashtrian Thali",
      foodDetails:"3-Roti,2-Sabji,Rice,Dal,Curd,Sweet,Salad",
      foodPrice:450,
      foodImg:"https://content3.jdmagicbox.com/comp/mumbai/e2/022pxx22.xx22.110616134954.w6e2/catalogue/thali-marathmoli-restaurant-dadar-west-mumbai-maharashtrian-restaurants-0mpfneodel.jpg"
    },

    {
      id:9,
      foodName:"Pasta",
      foodDetails:"Tasty Masala Pasta",
      foodPrice:100,
      foodImg:"https://www.whoa.in/download/pasta-1080p-2k-4k-5k-hd-wallpapers-free-download---pasta-wallpapers"
    },

    {
      id:10,
      foodName:"Maggie",
      foodDetails:"Veg Corn Maggie ",
      foodPrice:200,
      foodImg:"https://t4.ftcdn.net/jpg/03/67/31/89/360_F_367318954_4ttRBcmaa22q30OsJRqflxgCOd9dB9t6.jpg"
    },

    {
      id:11,
      foodName:"Gulab Jamun",
      foodDetails:"Gulab Jamun",
      foodPrice:120,
      foodImg:"https://images.pexels.com/photos/15014919/pexels-photo-15014919.jpeg?cs=srgb&dl=pexels-zenith-photographics-15014919.jpg&fm=jpg"
    },

    {
      id:12,
      foodName:"Punjabi Thali",
      foodDetails:"3-Butter Roti,Anda-Kari,2-Sabji,Chawal,Ghee-Dal,Chanch,Sweet,Papad",
      foodPrice:400,
      foodImg:"https://www.shutterstock.com/image-photo/punjabi-thali-home-cooked-indian-260nw-1755363179.jpg"
    },

  ]
}
