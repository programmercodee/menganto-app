import React from 'react'
import 'E:/College Project/frountend/src/App.css'
import { useState } from 'react';
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: 'Women Flared Rayon Printed Dress',
    href: '#',
    imageSrc: 'https://images.meesho.com/images/products/428211299/sxt9i_512.webp',
    imageAlt: "Long Dress",
    price: '₹299',
    color: 'Pink',
    discount_price: '₹299',
    discount:"90%"
  },

 {
    id: 2,
    name: 'Pretty Graceful Women Dresses',
    href: '#',
    imageSrc: 'https://images.meesho.com/images/products/319687497/sw39p_512.webp',
    imageAlt: "A Graceful long Dress ",
    price: '₹35',
    color: 'Black',
    discount_price: '₹299',
    discount:"90%"
  },

 {
    id: 3,
    name: 'Urbane Fashionista Women Dresses',
    href: '#',
    imageSrc: 'https://images.meesho.com/images/products/336139234/oypfg_512.webp',
    imageAlt: "Georgette",
    price: '₹79',
    color: 'Gray',
    discount_price: '₹299',
    discount:"90%"
  },


 {
    id: 4,
    name: 'Summer hipster',
    href: '#',
    imageSrc: 'https://images.meesho.com/images/products/390320630/lli9d_512.webp',
    imageAlt: "summer hipster white clothes",
    price: '₹79',
    color: 'White',
    discount_price: '₹299',
    discount:"90%"
  },

 {
    id: 5,
    name: 'Crepe Fabric Gown For Summer',
    href: '#',
    imageSrc: 'https://images.meesho.com/images/products/295202328/8zfhk_512.webp',
    imageAlt: "ummer And Winter Dress _With Belt",
    price: '₹79',
    color: 'Yellow',
    discount_price: '₹299',
    discount:"90%"
  },


//  {
//     id: 6,
//     name: 'D-665-BLACK',
//     href: '#',
//     imageSrc: 'https://images.meesho.com/images/products/372362508/qapwo_512.webp',
//     imageAlt: "summer hipster white clothes",
//     price: '$79',
//     color: 'Black',
//   },


//  {
//     id: 7,
//     name: 'Trendy Partywear Women Dresses',
//     href: '#',
//     imageSrc: 'https://images.meesho.com/images/products/397637499/egpkm_512.webp',
//     imageAlt: " Long Sleeves",
//     price: '$79',
//     color: 'Yellow-Green',
//   },


//  {
//     id: 8,
//     name: 'Women Dresses',
//     href: '#',
//     imageSrc: 'https://images.meesho.com/images/products/308273754/foxoh_512.webp',
//     imageAlt: "Three-Quarter Sleeves",
//     price: '$79',
//     color: 'White',
//   },


//  {
//     id: 9,
//     name: 'Fancy Fabulous Women Dresses',
//     href: '#',
//     imageSrc: 'https://images.meesho.com/images/products/392763613/oo3gm_512.webp',
//     imageAlt: "summer hipster white clothes",
//     price: '$79',
//     color: 'White-Sky-Blue',
//   },


//  {
//     id: 10,
//     name: 'Women Casual Solid Shoulder Strap Viscose Dungaree ',
//     href: '#',
//     imageSrc: 'https://images.meesho.com/images/products/223016488/sjjwc_512.webp',
//     imageAlt: "Short Sleeves",
//     price: '$79',
//     color: 'purple-White',
//   },


//  {
//     id: 11,
//     name: 'stylish rayon leaf printed ',
//     href: '#',
//     imageSrc: 'https://images.meesho.com/images/products/236089104/rthts_512.webp',
//     imageAlt: " Navy blue long",
//     price: '$79',
//     color: 'Blue',
//   },


//  {
//     id: 12,
//     name: 'Classy Feminine Women Dresses',
//     href: '#',
//     imageSrc: 'https://images.meesho.com/images/products/274084990/8tzch_512.webp',
//     imageAlt: "Cotton Blend",
//     price: '$79',
//     color: 'Dark Green',
//   },


//  {
//     id: 13,
//     name: 'Dress for Women Lavendar ',
//     href: '#',
//     imageSrc: 'https://images.meesho.com/images/products/274800459/ctpvd_512.webp',
//     imageAlt: "Body Fit Dress",
//     price: '$79',
//     color: 'Pink',
//   },


//  {
//     id: 14,
//     name: 'WESTERN WEAR',
//     href: '#',
//     imageSrc: 'https://images.meesho.com/images/products/380352796/wabqo_512.webp',
//     imageAlt: "Long Pies",
//     price: '$79',
//     color: 'Malti',
//   },


//  {
//     id: 15,
//     name: 'Stylish Modern Women Dresses',
//     href: '#',
//     imageSrc: 'https://images.meesho.com/images/products/324142852/n2n8k_512.webp',
//     imageAlt: "Party Dress ",
//     price: '$79',
//     color: 'White-Black',
//   },


//  {
//     id: 16,
//     name: 'Latest African Style Fashion Dresses',
//     href: '#',
//     imageSrc: 'https://images.meesho.com/images/products/375204136/2tpbz_512.webp',
//     imageAlt: "Lycra Dress",
//     price: '$79',
//     color: 'White',
//   },


//  {
//     id: 17,
//     name: 'Trendy Elegant Women Dresses',
//     href: '#',
//     imageSrc: 'https://images.meesho.com/images/products/376712984/nk3sv_512.webp',
//     imageAlt: "Long Sleeves",
//     price: '$79',
//     color: 'Black',
//   },


//  {
//     id: 18,
//     name: 'Fancy Latest Women Dresses',
//     href: '#',
//     imageSrc: 'https://images.meesho.com/images/products/373679831/xhadk_512.webp',
//     imageAlt: "Long Net Dress ",
//     price: '$79',
//     color: 'Black',
//   },


//  {
//     id: 4,
//     name: 'Summer hipster',
//     href: '#',
//     imageSrc: 'https://images.meesho.com/images/products/390320630/lli9d_512.webp',
//     imageAlt: "summer hipster white clothes",
//     price: '$79',
//     color: 'White',
//   },

//  {
//     id: 4,
//     name: 'Summer hipster',
//     href: '#',
//     imageSrc: 'https://images.meesho.com/images/products/390320630/lli9d_512.webp',
//     imageAlt: "summer hipster white clothes",
//     price: '$79',
//     color: 'White',
//   },


//  {
//     id: 4,
//     name: 'Summer hipster',
//     href: '#',
//     imageSrc: 'https://images.meesho.com/images/products/390320630/lli9d_512.webp',
//     imageAlt: "summer hipster white clothes",
//     price: '$79',
//     color: 'White',
//   },


//  {
//     id: 4,
//     name: 'Summer hipster',
//     href: '#',
//     imageSrc: 'https://images.meesho.com/images/products/390320630/lli9d_512.webp',
//     imageAlt: "summer hipster white clothes",
//     price: '$79',
//     color: 'White',
//   },


//  {
//     id: 4,
//     name: 'Summer hipster',
//     href: '#',
//     imageSrc: 'https://images.meesho.com/images/products/390320630/lli9d_512.webp',
//     imageAlt: "summer hipster white clothes",
//     price: '$79',
//     color: 'White',
//   },

//  {
//     id: 4,
//     name: 'Summer hipster',
//     href: '#',
//     imageSrc: 'https://images.meesho.com/images/products/390320630/lli9d_512.webp',
//     imageAlt: "summer hipster white clothes",
//     price: '$79',
//     color: 'White',
//   },

//  {
//     id: 4,
//     name: 'Summer hipster',
//     href: '#',
//     imageSrc: 'https://images.meesho.com/images/products/390320630/lli9d_512.webp',
//     imageAlt: "summer hipster white clothes",
//     price: '$79',
//     color: 'White',
//   },

//  {
//     id: 4,
//     name: 'Summer hipster',
//     href: '#',
//     imageSrc: 'https://images.meesho.com/images/products/390320630/lli9d_512.webp',
//     imageAlt: "summer hipster white clothes",
//     price: '$79',
//     color: 'White',
//   },


//  {
//     id: 4,
//     name: 'Summer hipster',
//     href: '#',
//     imageSrc: 'https://images.meesho.com/images/products/390320630/lli9d_512.webp',
//     imageAlt: "summer hipster white clothes",
//     price: '$79',
//     color: 'White',
//   },


//  {
//     id: 4,
//     name: 'Summer hipster',
//     href: '#',
//     imageSrc: 'https://images.meesho.com/images/products/390320630/lli9d_512.webp',
//     imageAlt: "summer hipster white clothes",
//     price: '$79',
//     color: 'White',
//   },


//  {
//     id: 4,
//     name: 'Summer hipster',
//     href: '#',
//     imageSrc: 'https://images.meesho.com/images/products/390320630/lli9d_512.webp',
//     imageAlt: "summer hipster white clothes",
//     price: '$79',
//     color: 'White',
//   },


//  {
//     id: 4,
//     name: 'Summer hipster',
//     href: '#',
//     imageSrc: 'https://images.meesho.com/images/products/390320630/lli9d_512.webp',
//     imageAlt: "summer hipster white clothes",
//     price: '$79',
//     color: 'White',
//   },


//  {
//     id: 4,
//     name: 'Summer hipster',
//     href: '#',
//     imageSrc: 'https://images.meesho.com/images/products/390320630/lli9d_512.webp',
//     imageAlt: "summer hipster white clothes",
//     price: '$79',
//     color: 'White',
//   },


//  {
//     id: 4,
//     name: 'Summer hipster',
//     href: '#',
//     imageSrc: 'https://images.meesho.com/images/products/390320630/lli9d_512.webp',
//     imageAlt: "summer hipster white clothes",
//     price: '$79',
//     color: 'White',
//   },


//  {
//     id: 4,
//     name: 'Summer hipster',
//     href: '#',
//     imageSrc: 'https://images.meesho.com/images/products/390320630/lli9d_512.webp',
//     imageAlt: "summer hipster white clothes",
//     price: '$79',
    
//     color: 'White',
//   },


//  {
//     id: 4,
//     name: 'Summer hipster',
//     href: '#',
//     imageSrc: 'https://images.meesho.com/images/products/390320630/lli9d_512.webp',
//     imageAlt: "summer hipster white clothes",
//     price: '$79',
//     color: 'White',
//      discount: '56%'
//   },



]

const dress = [


  {
    id: 1,
    name: 'Women Flared Rayon',
    href: '#',
    imageSrc: 'https://images.meesho.com/images/products/428211299/sxt9i_512.webp',
    imageAlt: "Printed Dress Long Dress",
    price: '₹599',
    discount_price:'₹299',
    discount:'50% OFF',
    color: 'Pink',
  },

 {
    id: 2,
    name: 'Pretty Graceful Women Dresses',
    href: '#',
    imageSrc: 'https://images.meesho.com/images/products/319687497/sw39p_512.webp',
    imageAlt: "A Graceful long Dress ",
    price: '₹1699',
    discount_price:'₹730',
    discount:'57% OFF',
    color: 'Black',
  },

 {
    id: 3,
    name: 'Urbane Fashionista',
    href: '#',
    imageSrc: 'https://images.meesho.com/images/products/336139234/oypfg_512.webp',
    imageAlt: "Georgette Women Dresses",
    price: '₹2799',
    discount_price:'₹1371',
    discount:'91% OFF',
    color: 'Gray',
  },


 {
    id: 4,
    name: 'Summer hipster',
    href: '#',
    imageSrc: 'https://images.meesho.com/images/products/390320630/lli9d_512.webp',
    imageAlt: "summer hipster",
    price: '₹9990',
    discount_price:'₹6493',
    discount:'35% OFF',
    color: 'White',
  },

]

const saree=[
  {
       id: 1,
      name: 'Fancy zari sarees With Plain Blouse',
      href: '#',
      imageSrc: 'https://images.meesho.com/images/products/421676884/jo70e_512.webp',
      imageAlt: "Fancy zari sarees With Plain Blouse",
      price: '₹599',
      discount_price:'₹299',
      discount:'50% OFF',
      color: 'DarkCyan',
  },
  
  {
       id: 2,
      name: 'Diamond Work Trendy Party Wear Srees',
      href: '#',
      imageSrc: 'https://images.meesho.com/images/products/428369918/zfe2v_512.webp',
      imageAlt: "Diamond Work Trendy Party Wear Srees",
      price: '₹500',
      discount_price:'₹200',
      discount:'60% OFF',
      color: 'purple',
  },
  
  {
       id: 3,
      name: 'Jimmi Choo Saree With Blouse Piece',
      href: '#',
      imageSrc: 'https://images.meesho.com/images/products/427110288/4oshh_512.webp',
      imageAlt: "Jimmi Choo Saree With Blouse Piece",
      price: '₹999',
      discount_price:'₹479',
      discount:'52% OFF',
      color: 'DarkPurple',
  },
  
  {
       id: 4,
      name: 'black divdo',
      href: '#',
      imageSrc: 'https://images.meesho.com/images/products/425814542/co6gz_512.webp',
      imageAlt: "Doteted black divdo",
      price: '₹799',
      discount_price:'₹469',
      discount:'41% OFF',
      color: 'Black',
  },
  
  {
       id: 5,
      name: 'sequence georgette',
      href: '#',
      imageSrc: 'https://images.meesho.com/images/products/328592946/heh2o_512.webp',
      imageAlt: "sequence georgette",
      price: '₹599',
      discount_price:'₹299',
      discount:'50% OFF',
      color: 'Black',
  },
  
  {
       id: 6,
      name: 'SHUBHSWAR Daily Wear georgette Saree with unstitched Blouse Piece',
      href: '#',
      imageSrc: 'https://images.meesho.com/images/products/99831971/c5k7r_512.webp',
      imageAlt: "SHUBHSWAR Daily Wear georgette Saree with unstitched Blouse Piece",
      price: '₹876',
      discount_price:'₹549',
      discount:'37% OFF',
      color: 'Red-Black',
  },
  
  {
       id: 7,
      name: 'Georgette Floral Printed Daily Wear Sarees For Women',
      href: '#',
      imageSrc: 'https://images.meesho.com/images/products/85310930/rr7vq_512.webp',
      imageAlt: "Printed Daily Sarees",
      price: '₹1098',
      discount_price:'₹989',
      discount:'9% OFF',
      color: 'Yellow-Green',
  },
  
  {
       id: 8,
      name: 'Regular Wear Georgette Printed Saree With Un-Stitched Blouse Piece',
      href: '#',
      imageSrc: 'https://images.meesho.com/images/products/416763312/brd1v_512.webp',
      imageAlt: "Printed Saree With Un-Stitched Blouse Piece",
      price: '₹7699',
      discount_price:'₹6459',
      discount:'16% OFF',
      color: 'Pink',
  },
  
  {
       id: 9,
      name: 'Regular Wear Georgette Printed Saree With Un-Stitched Blouse Piece',
      href: '#',
      imageSrc: 'https://images.meesho.com/images/products/416763092/nxbn8_512.webp',
      imageAlt: "Flower Printed Saree",
      price: '₹799',
      discount_price:'₹399',
      discount:'50% OFF',
      color: 'Red',
  },
  
  {
       id: 10,
      name: 'New Arrival Latest Georgette Printed Saree',
      href: '#',
      imageSrc: 'https://images.meesho.com/images/products/417809549/ovcwx_512.webp',
      imageAlt: "Laxmipati Bollywood Saree ",
      price: '₹789',
      discount_price:'₹399',
      discount:'49% OFF',
      color: 'Green',
  },
  
  {
       id: 11,
      name: 'Georgette Made Bollywood Printed Saree',
      href: '#',
      imageSrc: 'https://images.meesho.com/images/products/417807264/tsotl_512.webp',
      imageAlt: "Georgette Made Bollywood Printed Saree",
      price: '₹999',
      discount_price:'₹589',
      discount:'41% OFF',
      color: 'Pink-purple',
  },
  
  {
       id: 12,
      name: 'DAILYWEAR PRINTED SAREE',
      href: '#',
      imageSrc: 'https://images.meesho.com/images/products/138455986/3zo2d_512.webp',
      imageAlt: "DAILYWEAR PRINTED SAREE",
      price: '₹765',
      discount_price:'₹467',
      discount:'38% OFF',
      color: 'Gray',
  },
  
  {
       id: 13,
      name: 'Radhya Saree daily wear printed georgette saree with blouse piece',
      href: '#',
      imageSrc: 'https://images.meesho.com/images/products/421186758/eh33l_512.webp',
      imageAlt: "printed georgette saree with blouse piece",
      price: '₹699',
      discount_price:'₹589',
      discount:'15% OFF',
      color: 'Cream',
  },
  
  {
       id: 14,
      name: 'Radhya Saree daily wear georgette saree with blouse piece',
      href: '#',
      imageSrc: 'https://images.meesho.com/images/products/420099193/lc43i_512.webp',
      imageAlt: "Radhya Saree daily wear georgette saree with blouse piece",
      price: '₹895',
      discount_price:'₹555',
      discount:'37% OFF',
      color: 'DarkBlue',
  },
  
  {
       id: 15,
      name: 'Aishani Refined Sarees',
      href: '#',
      imageSrc: 'https://images.meesho.com/images/products/25944594/1eg1g_512.webp',
      imageAlt: "Aishani Refined Sarees",
      price: '₹999',
      discount_price:'₹589',
      discount:'41% OFF',
      color: 'Mix color',
  },
  
  {
       id: 16,
      name: 'Brand-new Vichitra silk saree with patchwork',
      href: '#',
      imageSrc: 'https://images.meesho.com/images/products/384263790/qbxtg_512.webp',
      imageAlt: "a Maharani lace border that is classy and elegant",
      price: '₹659',
      discount_price:'₹459',
      discount:'30% OFF',
      color: 'Green',
  },
  
  {
       id: 17,
      name: 'Georgette saree',
      href: '#',
      imageSrc: 'https://images.meesho.com/images/products/248457336/nopfx_512.webp',
      imageAlt: "Georgette Saree",
      price: '₹999',
      discount_price:'₹589',
      discount:'41%',
      color: 'Marun-LightPink',
  },
  
  {
       id: 18,
      name: 'Black Georgette white striped saree with blouse',
      href: '#',
      imageSrc: 'https://images.meesho.com/images/products/117280555/qvhgh_512.webp',
      imageAlt: "Black Georgette white striped saree with blouse",
      price: '₹989',
      discount_price:'₹769',
      discount:'22% OFF',
      color: 'Black-White',
  },
  
  {
       id: 19,
      name: 'NEW FENCY GEORGETTE CUT WORK SAREE',
      href: '#',
      imageSrc: 'https://images.meesho.com/images/products/137613094/ymide_512.webp',
      imageAlt: "NEW FENCY GEORGETTE CUT WORK SAREE",
      price: '₹569',
      discount_price:'₹289',
      discount:'57% OFF',
      color: 'Red',
  },
  
  {
       id: 20,
      name: "Women's Embellished Georgette Mirror Work Saree with Separate Blouse Piece",
      href: '#',
      imageSrc: 'https://images.meesho.com/images/products/185391155/ryeg1_512.webp',
      imageAlt: "Women's Embellished Georgette Mirror Work Saree with Separate Blouse Piece",
      price: '₹999',
      discount_price:'₹589',
      discount:'41% OFF',
      color: 'Blue',
  },
  
  {
       id: 21,
      name: 'Georgette Made Saree',
      href: '#',
      imageSrc: 'https://images.meesho.com/images/products/214050104/hlogt_512.webp',
      imageAlt: "Georgette Made Saree",
      price: '₹999',
      discount_price:'₹589',
      discount:'41% OFF',
      color: 'OrangeRed',
  },
  
  {
       id: 22,
      name: 'Bollywood Digital Print Georgette Saree',
      href: '#',
      imageSrc: 'https://images.meesho.com/images/products/423571777/1orrf_512.webp',
      imageAlt: "Bollywood Digital Print Georgette Saree",
      price: '₹789',
      discount_price:'₹479',
      discount:'39% OFF',
      color: 'Multicolour-pink',
  },
  
  {
       id: 23,
      name: 'Premium Georgette Diamond Work Stylish Party Wear Saree With Separate Blouse Piece',
      href: '#',
      imageSrc: 'https://images.meesho.com/images/products/258194254/t4njs_512.webp',
      imageAlt: "Premium Georgette Diamond Work Stylish Party Wear Saree With Separate Blouse Piece",
      price: '₹799',
      discount_price:'₹529',
      discount:'33% OFF',
      color: 'Black',
  },
  {
       id: 24,
      name: 'Chitrarekha Sensational Sarees',
      href: '#',
      imageSrc: 'https://images.meesho.com/images/products/127718493/xcf9g_512.webp',
      imageAlt: "Chitrarekha Sensational Sarees",
      price: '₹999',
      discount_price:'₹589',
      discount:'41% OFF',
      color: 'DarkRed',
  },
  
  {
       id: 25,
      name: 'Velvet Saree',
      href: '#',
      imageSrc: 'https://images.meesho.com/images/products/16351934/eb00a_512.webp',
      imageAlt: "Velvet Saree",
      price: '₹900',
      discount_price:'₹400',
      discount:'55% OFF',
      color: 'White-Blue',
  },
  
  {
       id: 26,
      name: 'Lycra Maroon Ruffle Saree With Blouse',
      href: '#',
      imageSrc: 'https://images.meesho.com/images/products/139015377/krtim_512.webp',
      imageAlt: "Lycra Maroon Ruffle Saree With Blouse",
      price: '₹888',
      discount_price:'₹759',
      discount:'14% OFF',
      color: 'Maroon',
  },
  
  {
       id: 27,
      name: 'Butterfly  net saree with Unstiched Blouse Piece',
      href: '#',
      imageSrc: 'https://images.meesho.com/images/products/101575529/2tkdy_512.webp',
      imageAlt:"Butterfly net saree with Unstiched Blouse Piece",
      price: '₹999',
      discount_price:'₹589',
      discount:'41% OFF',
      color: 'Bottel Green',
  },
  
  
  {
       id: 28,
      name: 'Bollywood Celebrity inspired Explore net saree With beautifull Embroidered all over moti work White colours',
      href: '#',
      imageSrc: 'https://images.meesho.com/images/products/303137988/zbmsa_512.webp',
      imageAlt:"Bollywood Celebrity inspired Explore net saree",
      price: '₹999',
      discount_price:'₹567',
      discount:'43% OFF',
      color: 'White',
  },
  
  
  {
       id: 29,
      name: 'New Bollywood Net Saree',
      href: '#',
      imageSrc: 'https://images.meesho.com/images/products/427775155/tlzzj_512.webp',
      imageAlt:"New Bollywood Net Saree",
      price: '₹789',
      discount_price:'₹269',
      discount:'65% OFF',
      color: 'Green',
  },
  
  
  {
       id: 30,
      name: 'New Fancy Flower Net sarees with unstiched Blouse pieces With Moti work Aqua Blue Colour',
      href: '#',
      imageSrc: 'https://images.meesho.com/images/products/300607431/gfbcd_512.webp',
      imageAlt:"Unstiched Blouse pieces With Moti work Aqua Blue Colour",
      price: '₹999',
      discount_price:'₹589',
      discount:'41% OFF',
      color: 'Aqua',
  },
  
  
  {
       id: 31,
      name: 'Coffee Lycra Blend Saree With Blouse',
      href: '#',
      imageSrc:'https://images.meesho.com/images/products/87179016/0gavu_512.webp',
      imageAlt:"Coffee Lycra Blend Saree With Blouse",
      price: '₹839',
      discount_price:'₹469',
      discount:'44% OFF',
      color: 'Coffee(Golden)',
  },
  
  {
       id: 32,
      name: 'Fashion Georgette Daily Wear Ombre Saree, with Blouse Piece',
      href: '#',
      imageSrc: 'https://images.meesho.com/images/products/81448703/ogrk9_512.webp',
      imageAlt:"Fashion Georgette Daily Wear Ombre Saree, with Blouse Piece",
      price: '₹559',
      discount_price:'₹301',
      discount:'53% OFF',
      color: 'Black-Gray',
  },
  
  {
       id: 33,
      name: 'Georgette Green Saree With Blouse',
      href: '#',
      imageSrc: 'https://images.meesho.com/images/products/179144773/agcb7_512.webp',
      imageAlt:"Georgette Green Saree With Blouse",
      price: '₹999',
      discount_price:'₹589',
      discount:'41% OFF',
      color: 'Green',
  },
  
  {
       id: 34,
      name:"Yashika Women's Georgette Floral Printed Saree with Blouse Piece",
      href: '#',
      imageSrc: 'https://images.meesho.com/images/products/159985954/donbq_512.webp',
      imageAlt:" Floral Printed Saree with Blouse Piece",
      price: '₹458',
      discount_price:'₹200',
      discount:'56% OFF',
      color: 'White',
  },
  
  {
       id: 35,
      name: 'Tiya Art Georgette Sarees',
      href: '#',
      imageSrc: 'https://images.meesho.com/images/products/7341275/a0325_512.webp',
      imageAlt:"Tiya Art Georgette Sarees",
      price: '₹779',
      discount_price:'₹589',
      discount:'24% OFF',
      color: 'Orange',
  },
  
  {
       id: 36,
      name: 'Casual Georgette Saree',
      href: '#',
      imageSrc: 'https://images.meesho.com/images/products/1535959/3nu3b_512.webp',
      imageAlt:"Casual Georgette Saree",
      price: '₹609',
      discount_price:'₹419',
      discount:'31% OFF',
      color: 'Black',
  },
  
  {
       id: 37,
      name: "Women's Georgette Floral Printed Saree with Blouse Piece  ",
      href: '#',
      imageSrc: 'https://images.meesho.com/images/products/127230334/ucwqz_512.webp',
      imageAlt:"Women's Georgette Floral Printed Saree with Blouse Piece  ",
      price: '₹699',
      discount_price:'₹389',
      discount:'44% OFF',
      color: 'Green',
  },
  
  {
       id: 38,
      name: 'Pretty, Printed Georgette Saree with Blouse Piece',
      href: '#',
      imageSrc: 'https://images.meesho.com/images/products/52711626/zq4t9_512.webp',
      imageAlt:"Pretty, Printed Georgette Saree with Blouse Piece",
      price: '₹888',
      discount_price:'₹500',
      discount:'43% OFF',
      color: 'Yellow',
  },
  
  {
       id: 39,
      name: 'Yellow Animal Print Georgette Saree with Blouse Piece',
      href: '#',
      imageSrc: 'https://images.meesho.com/images/products/244864550/ovc4s_512.webp',
      imageAlt:"Yellow Animal Print Georgette Saree with Blouse Piece",
      price: '₹709',
      discount_price:'₹509',
      discount:'28% OFF',
      color: 'Yellow',
  },
  
  {
       id: 40,
      name: 'Trendy Georgette Saree with Blouse piece',
      href: '#',
      imageSrc: 'https://images.meesho.com/images/products/103895830/vsbtk_512.webp',
      imageAlt:"Trendy Georgette Saree with Blouse piece",
      price: '₹800',
      discount_price:'₹509',
      discount:'36% OFF',
      color: 'BLACK',
  },
  
  {
       id: 41,
      name: 'Pretty, Printed Georgette Saree with Blouse Piece',
      href: '#',
      imageSrc: 'https://images.meesho.com/images/products/50148089/nsek6_512.webp',
      imageAlt:"Pretty, Printed Georgette Saree with Blouse Piece",
      price: '₹999',
      discount_price:'₹589',
      discount:'41%',
      color: 'Pink-Blue',
  },
  
  {
       id: 30,
      name: 'New Fancy Flower Net sarees with unstiched Blouse pieces With Moti work Aqua Blue Colour',
      href: '#',
      imageSrc: 'https://images.meesho.com/images/products/300607431/gfbcd_512.webp',
      imageAlt:"Unstiched Blouse pieces With Moti work Aqua Blue Colour",
      price: '₹999',
      discount_price:'₹589',
      discount:'41%',
      color: 'Aqua',
  },
  
  {
       id: 30,
      name: 'New Fancy Flower Net sarees with unstiched Blouse pieces With Moti work Aqua Blue Colour',
      href: '#',
      imageSrc: 'https://images.meesho.com/images/products/300607431/gfbcd_512.webp',
      imageAlt:"Unstiched Blouse pieces With Moti work Aqua Blue Colour",
      price: '₹999',
      discount_price:'₹589',
      discount:'41%',
      color: 'Aqua',
  },
  
  {
       id: 30,
      name: 'New Fancy Flower Net sarees with unstiched Blouse pieces With Moti work Aqua Blue Colour',
      href: '#',
      imageSrc: 'https://images.meesho.com/images/products/300607431/gfbcd_512.webp',
      imageAlt:"Unstiched Blouse pieces With Moti work Aqua Blue Colour",
      price: '₹999',
      discount_price:'₹589',
      discount:'41%',
      color: 'Aqua',
  },
  
  {
       id: 30,
      name: 'New Fancy Flower Net sarees with unstiched Blouse pieces With Moti work Aqua Blue Colour',
      href: '#',
      imageSrc: 'https://images.meesho.com/images/products/300607431/gfbcd_512.webp',
      imageAlt:"Unstiched Blouse pieces With Moti work Aqua Blue Colour",
      price: '₹999',
      discount_price:'₹589',
      discount:'41%',
      color: 'Aqua',
  },
  
  {
       id: 30,
      name: 'New Fancy Flower Net sarees with unstiched Blouse pieces With Moti work Aqua Blue Colour',
      href: '#',
      imageSrc: 'https://images.meesho.com/images/products/300607431/gfbcd_512.webp',
      imageAlt:"Unstiched Blouse pieces With Moti work Aqua Blue Colour",
      price: '₹999',
      discount_price:'₹589',
      discount:'41%',
      color: 'Aqua',
  },
  
  {
       id: 30,
      name: 'New Fancy Flower Net sarees with unstiched Blouse pieces With Moti work Aqua Blue Colour',
      href: '#',
      imageSrc: 'https://images.meesho.com/images/products/300607431/gfbcd_512.webp',
      imageAlt:"Unstiched Blouse pieces With Moti work Aqua Blue Colour",
      price: '₹999',
      discount_price:'₹589',
      discount:'41%',
      color: 'Aqua',
  },
  
  
  
  
      
  
  ]

export default function FemaleOrg() {
  return (
    <>
      <div className="mx-4 my-4 ">
        <div className="bg-hight bg-gray-200 lg:h-96 sm:h-96  text-dark sm:w-full sm:flex font-sans sm:justify-around lg:px-40 sm:px-14 sm:my-10">
          <div className="flex main-bg flex-col sm:w-2/4 sm:justify-center gap-4 sm:text-left py-10 ">
            <p>Women</p>
            <h1 className='lg:text-4xl text-3xl'>Slick. Modern. <h1 className='lg:text-4xl text-3xl'>Awesome.</h1></h1>
            <h1 className='lg:text-5xl text-3xl'>Explore now</h1>
            <button className='bg-gray-700 hover:bg-gray-900 transition w-40 h-10 text-gray-200 hover:text-gray-50'>Shop Collection</button>
          </div>
          <div className=" main-bg-img sm:w-2/4 flex sm:justify-end justify-center">
            <img className='' src="https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/hero.png" alt="" />
          </div>
        </div>
      </div>

      {/* // Female Section */}
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <Link to='/FemaleDresses'>  <h2 className="text-1xl font-normal tracking-tight text-gray-900 text-left cursor-pointer hover:text-blue-600">Female Dresses <span aria-hidden="true">&rarr;</span></h2></Link>

          <div className="mt-2 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {dress.map((dres) => (
              <div key={dres.id} className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-96">
                  <img
                    src={dres.imageSrc}
                    alt={dres.imageAlt}
                    className="sm:h-96 sm:w-full w-96 h-full  object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-2 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={dres.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {dres.name}
                      </a>
                    </h3>
                    <div className='flex flex-row '>

                      <p className="mt-1 text-sm text-gray-500 flex gap-3"><del>{dres.price}</del> <span className='text-dark font-bold'>{dres.discount_price}</span></p>

                    </div>

                  </div>
                  <div className='bg-dark text-light h-5 w-36  rounded-sm text-center '>
                    <p className="text-sm font-medium text-light "> {dres.discount} </p>

                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div  className='sm:h-full sm:w-full'>
  <img src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2024/7/11/08ca509d-1c91-474a-ade5-426bb438c44d1720669410658-Monsoon-Magic-Coupons.jpg" className='lg:w-full lg:h-full h-20 sm:h-28 object-cover' alt="" />
</div>

      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 text-center">Female Section</h2>

          <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {saree.map((product) => (
              <div key={product.id} className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75  lg:h-96">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="sm:h-96 sm:w-full w-96 h-72
                    object-cover object-center lg:h-96 lg:w-full"
                  />
                </div>
                <div className="mt-2">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={product.href}>
                        <span aria-hidden="true" className="" />
                        {product.name}
                      </a>
                    </h3>
                    <p className="mt-2 text-sm text-gray-500">{product.color}</p>

                  </div>
                  <div className='flex mt-2 items-center gap-2'>

                  <p className="text-xl font-bold text-gray-900">{product.price}</p>
                  <p className="text-sm font-medium text-gray-600"><del>{product.price}</del></p>
                  <p className="text-sm font-semibold text-green-700">{product.discount} off</p>
                  </div>
                  <p className='mt- text-sm text-gray-500'>Free delivery</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      
    </>
  )
}
