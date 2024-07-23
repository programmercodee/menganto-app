// import {useState} from 'react'
// import cart from "../NavBar/Cart1.svg";
import cart from 'E:/College Project/frountend/src/NavBar/Cart1.svg'
const products = [

  {
    "id": 1,
    "price": "₹1,999.00",
    "old_price": "₹2,999.00",
    "discount": "50.02%",
    "color": "Yellow",
    "imageSrc": "https://i.pinimg.com/736x/e8/ff/68/e8ff68f004bc6ede774f49a825236dac.jpg",
    // "name": "Beef - Prime Rib Aaa",
    "about": "Front of men's Basic Tee in black."
  },
  {
    "id": 2,
    "price": "₹2,599.00",
    "old_price": "₹4,599.00",
    "discount": "76.95%",
    "imageSrc": "https://i.pinimg.com/564x/b8/5e/20/b85e2018c6a930e7868d7a9997b3586d.jpg",
    "color": "Yellow",
    // "name": "Beef - Prime Rib Aaa",
    "about": "Front of men's Basic Tee in black."
  },
  {
    "id": 3,
    "price": "₹2,222.00",
    "old_price": "₹3,333.00",
    "discount": "50.00%",
    "color": "Yellow",
    "imageSrc": "https://i.pinimg.com/564x/7c/e1/82/7ce182b5fb13fd649bd634f508a53826.jpg",
    // "name": "Beef - Prime Rib Aaa",
    "about": "Front of men's Basic Tee in black."
  },
  {
    "id": 4,
    "price": "₹2,500.00",
    "old_price": "₹3,500.00",
    "discount": "40.00%",
    "color": "Yellow",
    "imageSrc": "https://i.pinimg.com/564x/53/72/ed/5372ed7a6ef763cf3aaac217b0a31087.jpg",
    // "name": "Beef - Prime Rib Aaa",
    "about": "Front of men's Basic Tee in black."
  },





  // More products...
]

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

export default function ManSummerstyles() {
  // const [count, setCount] = useState(0)
  return (
    <div>
       <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-24 lg:max-w-full lg:px-8 ">
          <h2 className="text-2xl font-bold tracking-tight text-dark">Best combination outfit for male</h2>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 xl:gap-x-4 ">
            {products.map((product) => (
              <div key={product.id} className="group relative hover:shadow-lg hover:shadow-gray-600 transition rounded-lg">
                <div className="box aspec t-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <h1 className='m-1 absolute font-bold opacity-1 right-4 top-2'><img src={cart} alt="" className='w-8 opacity-0 cart' /></h1>
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="container my-2 text-dark rounded-sm">

                  <div className="product-name">
                    <h1 className='font-bold text-xl'>
                      {product.name}
                    </h1>
                  </div>
                  <div className="product-about my-2">
                    <p>
                      {product.about}
                    </p>
                  </div>

                  <div className="product-rs flex gap-2 items-center">
                    <h1 className=' font-bold text-lg'>
                      {product.price}
                    </h1>
                    <del>
                      <h2 className='text-gray-500 text-sm'>
                        {product.old_price}

                      </h2>
                    </del>
                    <h2 className='text-red-400'>({product.discount} OFF)</h2>
                    {/* <p>{count}</p> */}
                  </div>
                </div>


              </div>
            ))}
          </div>
        </div>
    </div>

{/* Mans casual shoes section  */}
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
{/* Mans casual shoes section  */}

    </div>
  )
}
