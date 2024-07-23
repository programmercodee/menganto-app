import { useState } from 'react'
const Shoes = [
  {
    "id": 1,
    "name": "Royal VINTIQUE Party Wear",
    "price": "₹773.00",
    "old_price": "₹1,999,00",
    "discount": "61%",
    "rating": "4.0",
    "imageSrc": "	https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/g/m/g/10-art-ca493-10-vellinto-brown-original-imah2v2mq5ze6twz.jpeg?q=70",
  },
  {
    "id": 2,
    "name": "CLARKIN Sneakers For Men",
    "price": "₹1,199.00",
    "old_price": "₹2,999,00",
    "discount": "60%",
    "rating": "5.0",
    "imageSrc": "https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/r/f/5/11-2531910312-11-u-s-polo-assn-off-white-original-imags5qhjgh9sgq2.jpeg?q=70",
  },
  {
    "id": 3,
    "name": "OGIY RETRO SHOES For Men",
    "price": "₹477.00",
    "old_price": "₹1,999,00",
    "discount": "76%",
    "rating": "4.0",
    "imageSrc": "	https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/p/m/o/10-oogiy-44-aeonik-grey-original-imagxggbdytbygbg.jpeg?q=70",
  },
  {
    "id": 4,
    "name": "ASIAN Men's Casual Shoes",
    "price": "₹729.00",
    "old_price": "₹1,299,00",
    "discount": "44%",
    "rating": "3.0",
    "imageSrc": "https://m.media-amazon.com/images/I/71cflgAolqL._AC_UL480_FMwebp_QL65_.jpg",
  },
  {
    "id": 5,
    "name": "Lightweight,Comfort For Men",
    "price": "₹849.00",
    "old_price": "₹1,999,00",
    "discount": "57%",
    "rating": "3.0",
    "imageSrc": "	https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/s/c/y/10-mrj2028-10-aadi-black-original-imagh8ztuazpkcpm.jpeg?q=70",
  },
  {
    "id": 6,
    "name": "Beef - Prime Rib Aaa",
    "price": "₹949.00",
    "old_price": "₹1,999,00",
    "discount": "52%",
    "rating": "5.0",
    "imageSrc": "https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/w/c/v/6-art-ca519-6-vellinto-black-original-imah2vztsaezgywy.jpeg?q=70",
  },
  {
    "id": 7,
    "name": "Casual Sneakers for Men's",
    "price": "₹1,299.00",
    "old_price": "₹2,015,00",
    "discount": "36%",
    "rating": "4.0",
    "imageSrc": "	https://images.meesho.com/images/products/425571894/qa0xz_512.webp",
  },
  {
    "id": 8,
    "name": "Goldstar Shoes For Men's",
    "price": "₹999.00",
    "old_price": "₹1,990,00",
    "discount": "50%",
    "rating": "5.0",
    "imageSrc": "	https://images.meesho.com/images/products/427823112/htxrp_400.webp",
  },
  {
    "id": 9,
    "name": "Beef - Prime Rib Aaa",
    "price": "₹777.00",
    "old_price": "₹1,499.00",
    "discount": "48%",
    "rating": "4.0",
    "imageSrc": "	https://images.meesho.com/images/products/274888942/aaga0_400.webp",
  },
  {
    "id": 10,
    "name": "Latest Casual Shoes",
    "price": "₹649.00",
    "old_price": "₹999.00",
    "discount": "35%",
    "rating": "3.0",
    "imageSrc": "	https://images.meesho.com/images/products/326610507/mvy1j_400.webp",
  },
  {
    "id": 11,
    "name": "Crakk Men's white shoes",
    "price": "₹899.00",
    "old_price": "₹1,999,00",
    "discount": "55%",
    "rating": "4.0",
    "imageSrc": "	https://images.meesho.com/images/products/415804635/jsl6l_400.webp",
  },
  {
    "id": 11,
    "name": "Casual Shoe for Men",
    "price": "₹1,099.00",
    "old_price": "₹1,799,00",
    "discount": "39%",
    "rating": "4.0",
    "imageSrc": "https://images.meesho.com/images/products/413374105/uonnf_400.webp",
  },
]

export default function MansShoes() {

  return (
    <>
      <div className='px-4 py-3'>
        <img src="https://ebazarninja.wordpress.com/wp-content/uploads/2017/04/banner.jpg?w=700" className='w-full rounded-xl' alt="" />
      </div>
      
      <div className="bg-white">
        <div className="mx-auto max-w-md md:max-w-3xl px-4 py-16 sm:px-6 sm:py-10 lg:max-w-6xl xl:max-w-7xl lg:px-8 ">
          <h2 className="text-2xl font-bold tracking-tight text-dark text-center">Best combination outfit for male</h2>

          <div className="mt-6  grid grid-cols- gap-x-6 gap-y-10 sm:grid-cols-1 md:min-w-1xl justify-centers items-center   lg:grid-cols-3 xl:grid-cols-3 md:grid-cols-2 xl:gap-x-4 ">
            {Shoes.map((Shoe) => (

              <div class="relative flex sm:w-full  max-w-sm flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
                <a class="relative mx-3 mt-3 flex h-60  overflow-hidden rounded-xl" href="#">
                  <img class="object-cover w-96" src={Shoe.imageSrc} alt="product image" />
                  <span class="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">{Shoe.discount} OFF</span>
                </a>
                <div class="mt-4 px-5 pb-5">
                  <a href="#">
                    <h5 class="text-xl tracking-tight text-slate-900">{Shoe.name}</h5>
                  </a>
                  <div class="mt-2 mb-5 flex items-center justify-between">
                    <p className='flex items-end gap-2'>
                      <span class="text-2xl font-bold text-slate-900">{Shoe.price}</span>
                      <span class="text-sm text-slate-900 line-through">{Shoe.old_price}</span>
                    </p>
                    <div class="flex items-center">


                      <span class="mr-2 ml-3 rounded bg-gray-800 px-2.5 py-0.5 flex gap-2 justify-center items-center text-white text-xs font-semibold">{Shoe.rating}
                      <svg aria-hidden="true" class="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
                      </span>
                    </div>
                  </div>
                  <a href="#" class="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
                    <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    Add to cart</a
                  >
                </div>
              </div>

            ))}
          </div>
        </div>

      </div>

      <div className='px-4 py-3'>
        <img src="https://i.pinimg.com/originals/f9/a4/69/f9a46992fd6749345613615227655e8b.jpg" className='w-full rounded-xl' alt="" />
      </div>


      <>
        <div class="relative m-10 w-full max-w-xs overflow-hidden rounded-lg bg-white shadow-md">
          <a href="#">
            <img class="h-60 rounded-t-lg object-cover" src="https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="product image" />
          </a>
          <span class="absolute top-0 left-0 w-28 translate-y-4 -translate-x-6 -rotate-45 bg-black text-center text-sm text-white">Sale</span>
          <div class="mt-4 px-5 pb-5">
            <a href="#">
              <h5 class="text-xl font-semibold tracking-tight text-slate-900">Nike Air MX Super 5000</h5>
            </a>
            <div class="mt-2.5 mb-5 flex items-center">
              <span class="mr-2 rounded flex justify-center items-center gap-2 bg-gray-800 text-white px-2.5 py-0.5 text-xs font-semibold">5.0 <span><svg aria-hidden="true" class="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg></span></span>
         
            </div>
            <div class="flex items-center justify-between">
              <p>
                <span class="text-3xl font-bold text-slate-900">₹249</span>
                <span class="text-sm text-slate-900 line-through">₹299</span>
              </p>
              <a href="#" class=" w-28 h-10 flex items-center justify-center rounded-md bg-gray-900 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
                <svg xmlns="http://www.w3.org/2000/svg" class="mr-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                Add to cart</a
              >
            </div>
          </div>
        </div>

      </>

    </>
  )
}
