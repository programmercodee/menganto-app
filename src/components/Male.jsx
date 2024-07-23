import { useState } from 'react';
import '../App.css'
import cart from "../NavBar/Cart1.svg";
import { Link } from "react-router-dom";
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

const Shoes =[
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
    "name": "Beef - Prime Rib Aaa",
    "price": "₹949.00",
    "old_price": "₹1,999,00",
    "discount": "52%",
    "rating": "5.0",
    "imageSrc": "https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/w/c/v/6-art-ca519-6-vellinto-black-original-imah2vztsaezgywy.jpeg?q=70",
  },
]

export default function Male() {
  const [count, setCount] = useState(0)
  return (
    <>

      <>
        {/* banner */}
        <div class="relative overflow-hidden bg-white  my-10">
          <div class="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
            <div class="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
              <div class="sm:max-w-lg">
                <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Summer styles are finally here</h1>
                <p class="mt-4 text-xl text-gray-500">This year, our new summer collection will shelter you from the harsh elements of a world that doesn't care if you live or die.</p>
              </div>
              <div>
                <div class="mt-10">
                  {/* <!-- Decorative image grid --> */}
                  <div aria-hidden="true" class="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl">
                    <div class="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                      <div class="flex items-center space-x-6 lg:space-x-8">
                        <div class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                          <div class="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                            <img src="https://images.unsplash.com/photo-1622470953794-aa9c70b0fb9d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" class="h-full w-full object-cover object-center" />
                          </div>
                          <div class="h-64 w-44 overflow-hidden rounded-lg">
                            <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg" alt="" class="h-full w-full object-cover object-center" />
                          </div>
                        </div>
                        <div class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                          <div class="h-64 w-44 overflow-hidden rounded-lg">
                            <img src="https://plus.unsplash.com/premium_photo-1690366911099-0c0e170c9a51?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" class="h-full w-full object-cover object-center" />
                          </div>
                          <div class="h-64 w-44 overflow-hidden rounded-lg">
                            <img src="https://images.unsplash.com/photo-1613852348851-df1739db8201?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" class="h-full w-full object-cover object-center" />
                          </div>
                          <div class="h-64 w-44 overflow-hidden rounded-lg">
                            <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg" alt="" class="h-full w-full object-cover object-center" />
                          </div>
                        </div>
                        <div class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                          <div class="h-64 w-44 overflow-hidden rounded-lg">
                            <img src="https://plus.unsplash.com/premium_photo-1688497831503-235238709bd2?q=80&w=1956&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" class="h-full w-full object-cover object-center" />
                          </div>
                          <div class="h-64 w-44 overflow-hidden rounded-lg">
                            <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg" alt="" class="h-full w-full object-cover object-center" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Link to="/ManSummerstyles">
                    <a href="#" class="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700">Shop Collection</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>


      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-24 lg:max-w-full lg:px-8 ">
          <h2 className="text-2xl font-bold tracking-tight text-dark">Best combination outfit for male</h2>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 xl:gap-x-4 ">
            {products.map((product) => (
              <div key={product.id} className="group relative hover:shadow-lg hover:shadow-gray-600 transition rounded-lg">
                <div className="box aspec t-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <h1 className='m-1 absolute font-bold opacity-1 right-4 top-2'><img src={cart} alt="" className='w-8 opacity-0 cart' onClick={() => setCount((count) => count + 1)} /></h1>
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
                    <p>{count}</p>
                  </div>
                </div>


              </div>
            ))}
          </div>
        </div>

      </div>

      <div className='sm:h-full sm:w-full'>
        <img src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2024/7/11/0f9337d3-cb19-4975-919c-e90c4f3944b41720669410722-OMG--Deals.jpg" alt="" className='lg:w-full lg:h-full h-28 sm:h-28 object-cover' />
      </div>


      {/* first card */}
      <>

        <div className="bg-white">
          <div className="mx-auto max-w-2xl px-4 py-5 sm:px-6 sm:py-24 lg:max-w-full lg:px-8 ">
          <Link to='/MansShoes'>  <h2 className="text-1xl font-normal tracking-tight text-gray-900 text-left cursor-pointer hover:text-blue-600">Mans Shoes <span aria-hidden="true">&rarr;</span></h2></Link>

            <div className="mt-3 grid grid-cols- gap-x-6 gap-y-10 sm:grid-cols-1 justify-centers items-center  lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 xl:gap-x-4 ">
              {Shoes.map((Shoe) => (

                <div class="relative flex sm:w-full  max-w-sm flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
                  <Link to='/MansShoes'>
                  <a class="relative mx-3 mt-3 flex h-60  overflow-hidden rounded-xl" href="#">
                    <img class="object-cover w-96" src={Shoe.imageSrc} alt="product image" />
                    <span class="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">{Shoe.discount} OFF</span>
                  </a>
                  </Link>
                
                  <div class="mt-1 px-5 pb-3">
                  
                  
                  </div>
                </div>

              ))}
            </div>
          </div>

        </div>
     

      </>

      {/* seconf card  */}


    </>
  )
}