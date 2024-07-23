import '../App.css'
import { Link } from 'react-router-dom';

const banners = [
  {
    id: 1,
    imgSrc: "https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/navigation/3/category-1.png",
    name: "Female Fashion",
    link: "/Female"
  },
  {
    id: 2,
    imgSrc: "https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/navigation/3/category-4.png",
    name: "Male Fashion",
    link: "/male"
  },
  {
    id: 3,
    imgSrc: "https://decode18.com/wp-content/uploads/2017/04/banner-spring-2018.jpg",
    name: "Gowns",
    link: "/FemaleDresses"
  },
  {
    id: 4,
    imgSrc: "https://img.freepik.com/free-photo/glamorous-stiletto-pair-vibrant-pink-color-generated-by-ai_188544-21011.jpg?size=626&ext=jpg&ga=GA1.1.1224184972.1711670400&semt=ais",
    name: "High Heels",
    link: "/FemaleDresses"
  },
  {
    id: 5,
    imgSrc: "https://img.freepik.com/premium-photo/brown-pair-shoes-banner-generate-ai_98402-20716.jpg",
    name: "Casual Shoes",
    link: "/MansShoes"
  },

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
    "name": "Beef - Prime Rib Aaa",
    "price": "₹949.00",
    "old_price": "₹1,999,00",
    "discount": "52%",
    "rating": "5.0",
    "imageSrc": "https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/w/c/v/6-art-ca519-6-vellinto-black-original-imah2vztsaezgywy.jpeg?q=70",
  },
]

const dress = [


  {
    id: 1,
    name: 'Women Flared Rayon',
    href: '#',
    imageSrc: 'https://images.meesho.com/images/products/428211299/sxt9i_512.webp',
    imageAlt: "Printed Dress Long Dress",
    price: '₹599',
    discount_price: '₹299',
    discount: '50% OFF',
    color: 'Pink',
  },

  {
    id: 2,
    name: 'Pretty Graceful Women Dresses',
    href: '#',
    imageSrc: 'https://images.meesho.com/images/products/319687497/sw39p_512.webp',
    imageAlt: "A Graceful long Dress ",
    price: '₹1699',
    discount_price: '₹730',
    discount: '57% OFF',
    color: 'Black',
  },

  {
    id: 3,
    name: 'Urbane Fashionista',
    href: '#',
    imageSrc: 'https://images.meesho.com/images/products/336139234/oypfg_512.webp',
    imageAlt: "Georgette Women Dresses",
    price: '₹2799',
    discount_price: '₹1371',
    discount: '91% OFF',
    color: 'Gray',
  },


  {
    id: 4,
    name: 'Summer hipster',
    href: '#',
    imageSrc: 'https://images.meesho.com/images/products/390320630/lli9d_512.webp',
    imageAlt: "summer hipster",
    price: '₹9990',
    discount_price: '₹6493',
    discount: '35% OFF',
    color: 'White',
  },

]

function Home() {
  return (
    <>
      <main>
        <div className="px-4 py-6 sm:px-6 lg:px-8 ">

          <div id="carouselExampleDark" class="carousel carousel-dark slide my-4 " data-bs-ride="carousel">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner w-full rounded-lg">
              <div class="carousel-item active  " data-bs-interval="10000">
                <img src="https://static.vecteezy.com/system/resources/previews/006/560/561/original/4-april-sale-poster-or-banner-with-4-over-on-product-podium-scene-april-4-sales-banner-template-design-for-social-media-and-website-special-offer-sale-50-off-campaign-or-promotion-free-vector.jpg" class="d-block w-100 lg:h-96 object-ontain" alt="benner" />
                <div class="carousel-caption d-none d-md-block">
                  <h5 className=' text-white'>MEGA SALE</h5>
                  <p className=' text-white'>GET 50% OFF ON ANY T-SHIRT</p>
                </div>
              </div>
              <div class="carousel-item" data-bs-interval="2000">
                <img src="https://t3.ftcdn.net/jpg/04/65/46/52/360_F_465465254_1pN9MGrA831idD6zIBL7q8rnZZpUCQTy.jpg" class="d-block w-100 lg:h-96 object-coer" alt="..." />
                <div class="carousel-caption d-none d-md-block">
                  <h5 className=' text-white'>GREAT DISCOUNT</h5>
                  <p className=' text-white'>GET GREAT DISCOUNT ON ELECTRONIC PRODUCTS</p>
                </div>
              </div>
              <div class="carousel-item">
                <img src="https://img.freepik.com/premium-vector/summer-sale-women-social-media-banner-template-design_596383-208.jpg?w=1380" class="d-block w-100 lg:h-96 object-over" alt="..." />
                <div class="carousel-caption d-none d-md-block">
                  <h5 className=' text-dark'>ONE DAY SALE</h5>
                  <p className=' text-dark'>GET SUMMER SALE ON WOMEN FASHION</p>
                </div>
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="grid gap-4">
              <div>
                <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg" alt="" />
              </div>
              <div>
                <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg" alt="" />
              </div>
              <div>
                <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg" alt="" />
              </div>
            </div>
            <div className="grid gap-4">
              <div>
                <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" alt="" />
              </div>
              <div>
                <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg" alt="" />
              </div>
              <div>
                <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg" alt="" />
              </div>
            </div>
            <div className="grid gap-4">
              <div>
                <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg" alt="" />
              </div>
              <div>
                <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg" alt="" />
              </div>
              <div>
                <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg" alt="" />
              </div>
            </div>
            <div className="grid gap-4">
              <div>
                <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg" alt="" />
              </div>
              <div>
                <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg" alt="" />
              </div>
              <div>
                <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg" alt="" />
              </div>
            </div>
          </div>

          <>

          </>

          {/* Top Product */}

          <div className="font-sans bg-gray-50 px4 py-8">
            <div className="mx-auto lg:max-w-6xl md:max-w-4xl">
              <h2 className="text-4xl font-extrabold text-gray-800 text-center mb-12">Top Products</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">

                <div className="bg-white p-3 cursor-pointer shadow-sm rounded-md hover:scale-[1.03] transition-all">
                  <div className="w-full h-[130px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
                    <img src="https://readymadeui.com/images/watch1.webp" alt="product1"
                      className="h-full w-5/6 mx-auto block object-contain" />
                  </div>
                  <div className="text-center mt-4">
                    <h3 className="text-sm font-bold text-gray-800">French Timex</h3>
                    <h4 className="text-base text-blue-600 font-bold mt-2">$95.00</h4>
                  </div>
                </div>

                <div className="bg-white p-3 cursor-pointer shadow-sm rounded-md hover:scale-[1.03] transition-all">
                  <div className="w-full h-[130px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
                    <img src="https://readymadeui.com/images/product14.webp" alt="product2"
                      className="h-full w-5/6 mx-auto block object-contain" />
                  </div>
                  <div className="text-center mt-4">
                    <h3 className="text-sm font-bold text-gray-800">Echo Elegance</h3>
                    <h4 className="text-base text-blue-600 font-bold mt-2">$20.00</h4>
                  </div>
                </div>

                <div className="bg-white p-3 cursor-pointer shadow-sm rounded-md hover:scale-[1.03] transition-all">
                  <div className="w-full h-[130px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
                    <img src="https://readymadeui.com/images/laptop4.webp" alt="product3"
                      className="h-full w-5/6 mx-auto block object-contain" />
                  </div>
                  <div className="text-center mt-4">
                    <h3 className="text-sm font-bold text-gray-800">Acer One 14 AMD</h3>
                    <h4 className="text-base text-blue-600 font-bold mt-2">$400.00</h4>
                  </div>
                </div>

                <div className="bg-white p-3 cursor-pointer shadow-sm rounded-md hover:scale-[1.03] transition-all">
                  <div className="w-full h-[130px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
                    <img src="https://readymadeui.com/images/watch4.webp" alt="product4"
                      className="h-full w-5/6 mx-auto block object-contain" />
                  </div>
                  <div className="text-center mt-4">
                    <h3 className="text-sm font-bold text-gray-800">Irish Cream Dream</h3>
                    <h4 className="text-base text-blue-600 font-bold mt-2">$11.00</h4>
                  </div>
                </div>

                <div className="bg-white p-3 cursor-pointer shadow-sm rounded-md hover:scale-[1.03] transition-all">
                  <div className="w-full h-[130px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
                    <img src="https://readymadeui.com/images/coffee7.webp" alt="product5"
                      className="h-full w-5/6 mx-auto block object-contain" />
                  </div>
                  <div className="text-center mt-4">
                    <h3 className="text-sm font-bold text-gray-800">Luxury desk clock</h3>
                    <h4 className="text-base text-blue-600 font-bold mt-2">$90.00</h4>
                  </div>
                </div>

                <div className="bg-white p-3 cursor-pointer shadow-sm rounded-md hover:scale-[1.03] transition-all">
                  <div className="w-full h-[130px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
                    <img src="https://readymadeui.com/images/watch7.webp" alt="product6"
                      className="h-full w-5/6 mx-auto block object-contain" />
                  </div>
                  <div className="text-center mt-4">
                    <h3 className="text-sm font-bold text-gray-800">Smart Watch</h3>
                    <h4 className="text-base text-blue-600 font-bold mt-2">$110.00</h4>
                  </div>
                </div>

                <div className="bg-white p-3 cursor-pointer shadow-sm rounded-md hover:scale-[1.03] transition-all">
                  <div className="w-full h-[130px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
                    <img src="https://readymadeui.com/images/watch8.webp" alt="product7"
                      className="h-full w-5/6 mx-auto block object-contain" />
                  </div>
                  <div className="text-center mt-4">
                    <h3 className="text-sm font-bold text-gray-800">Creative Wall Clock</h3>
                    <h4 className="text-base text-blue-600 font-bold mt-2">$50.00</h4>
                  </div>
                </div>

                <div className="bg-white p-3 cursor-pointer shadow-sm rounded-md hover:scale-[1.03] transition-all">
                  <div className="w-full h-[130px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
                    <img src="https://readymadeui.com/images/laptop2.webp" alt="product8"
                      className="h-full w-5/6 mx-auto block object-contain" />
                  </div>
                  <div className="text-center mt-4">
                    <h3 className="text-sm font-bold text-gray-800">ASUS Vivobook 15</h3>
                    <h4 className="text-base text-blue-600 font-bold mt-2">$450.00</h4>
                  </div>
                </div>

                <div className="bg-white p-3 cursor-pointer shadow-sm rounded-md hover:scale-[1.03] transition-all">
                  <div className="w-full h-[130px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
                    <img src="https://readymadeui.com/images/watch3.webp" alt="product1"
                      className="h-full w-5/6 mx-auto block object-contain" />
                  </div>
                  <div className="text-center mt-4">
                    <h3 className="text-sm font-bold text-gray-800">French Timex</h3>
                    <h4 className="text-base text-blue-600 font-bold mt-2">$95.00</h4>
                  </div>
                </div>

                <div className="bg-white p-3 cursor-pointer shadow-sm rounded-md hover:scale-[1.03] transition-all">
                  <div className="w-full h-[130px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
                    <img src="https://readymadeui.com/images/product14.webp" alt="product2"
                      className="h-full w-5/6 mx-auto block object-contain" />
                  </div>
                  <div className="text-center mt-4">
                    <h3 className="text-sm font-bold text-gray-800">Echo Elegance</h3>
                    <h4 className="text-base text-blue-600 font-bold mt-2">$20.00</h4>
                  </div>
                </div>

                <div className="bg-white p-3 cursor-pointer shadow-sm rounded-md hover:scale-[1.03] transition-all">
                  <div className="w-full h-[130px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
                    <img src="https://readymadeui.com/images/laptop4.webp" alt="product3"
                      className="h-full w-5/6 mx-auto block object-contain" />
                  </div>
                  <div className="text-center mt-4">
                    <h3 className="text-sm font-bold text-gray-800">Acer One 14 AMD</h3>
                    <h4 className="text-base text-blue-600 font-bold mt-2">$400.00</h4>
                  </div>
                </div>

                <div className="bg-white p-3 cursor-pointer shadow-sm rounded-md hover:scale-[1.03] transition-all">
                  <div className="w-full h-[130px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
                    <img src="https://readymadeui.com/images/watch5.webp" alt="product4"
                      className="h-full w-5/6 mx-auto block object-contain" />
                  </div>
                  <div className="text-center mt-4">
                    <h3 className="text-sm font-bold text-gray-800">Irish Cream Dream</h3>
                    <h4 className="text-base text-blue-600 font-bold mt-2">$11.00</h4>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

        <div className='px-2 w-full mt-2 mb-4'>
          <img src="https://www.krukkegaarden.no/images/demo/banners.png" alt="" className='w-full object-cover object-center ' />
        </div>

        <div className="bg-white ">
          <div className="mx-auto max-w-2xl md:max-w-4xl sm:max-w-1xl px-4 py-4 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 text-center">High-Light Section</h2>

            <div className="mt-6 grid grid-cols-2 sm:gap-x-0 gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xl:gap-x-10">
              {banners.map((banner) => (
                <div key={banner.id} className="group relative mx-auto">
                  <div className="aspect-h-1 aspect-w-1 w-full  overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 h-full ">
                    <h1 className='absolute bottom-5 left-5 text-xl font-bold'>{banner.name}</h1>
                    <Link to={banner.link}>
                      <img
                        src={banner.imgSrc}
                        alt='ss'
                        className="w-60 h-[8rem] lg:h-[10rem] md:h-full sm:h-[10rem]
                    object-cor objct-center "
                      />
                    </Link>
                  </div>

                </div>
              ))}
            </div>

          </div>
        </div>

        <>
          <div class="bg-white py-24 sm:py-32">
            <div class="mx-auto max-w-7xl px-6 lg:px-8">
              <h2 class="text-center text-lg font-semibold leading-8 text-gray-900">Trusted by the world’s most innovative teams</h2>
              <div class="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                <img class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg" alt="Transistor" width="158" height="48" />
                <img class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg" alt="Reform" width="158" height="48" />
                <img class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg" alt="Tuple" width="158" height="48" />
                <img class="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1" src="https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg" alt="SavvyCal" width="158" height="48" />
                <img class="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1" src="https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg" alt="Statamic" width="158" height="48" />
              </div>
            </div>
          </div>

        </>

        {/* Mans casual shoes section  */}

        <div className='px-4 py-3'>
        <Link to='/MansShoes'> 
        <img src="https://ebazarninja.wordpress.com/wp-content/uploads/2017/04/banner.jpg?w=700" className='w-full rounded-xl' alt="" />
        </Link>
      </div>



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

        {/* Mans casual shoes section  */}

        {/* // Female Section */}
        <div className='py-2 px-3'>
        <Link to='/FemaleDresses'>
<img src="https://image.made-in-china.com/44f3j00TtEkYczhIBgy/2024-Women-s-New-Products-Sexy-and-Fashionable-High-Banner-Party-Long-Banquet-Dress-Elegant-Night-Club-Dress.webp" className=' object-cover rounded-xl w-full' alt="" />
</Link>
</div>


        <div className="bg-white">
          <div className="mx-auto max-w-2xl px-4 py-10 xl:py-7 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <Link to='/FemaleDresses'>  <h2 className="text-1xl py-2 font-normal tracking-tight text-gray-900 text-left cursor-pointer hover:text-blue-600">Female Dresses <span aria-hidden="true">&rarr;</span></h2></Link>

            <div className=" grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
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
        {/* // Female Section */}

      </main>
      <>

        <div class="mx-auto max-w-screen-lg">

          <div class="mt-10 flex flex-col items-start justify-center space-y-4 py-8 px-4 sm:flex-row sm:space-y-0 md:justify-between lg:px-0">
            <div class="max-w-lg">
              <h1 class="text-2xl font-bold text-gray-800">Beep Essences</h1>
              <p class="mt-2 text-gray-600">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo, alias. Quas necessitatibus exercitationem praesentium.</p>
            </div>
            <div class="">
              <button class="flex whitespace-nowrap rounded-lg bg-pink-600 px-6 py-2 font-bold text-white transition hover:translate-y-1">
                <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 inline h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Shop Now!!!
              </button>

            </div>
          </div>

          <main class="grid grid-cols-2 gap-x-6 gap-y-10 px-2 pb-20 sm:grid-cols-3 sm:px-8 lg:mt-16 lg:grid-cols-4 lg:gap-x-4 lg:px-0">
            <article class="relative">
              <div class="aspect-square overflow-hidden">
                <img class="h-full w-full object-cover transition-all duration-300 group-hover:scale-125" src="https://images.unsplash.com/photo-1458538977777-0549b2370168?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyZnVtZXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
              </div>
              <div class="absolute top-0 m-1 rounded-full bg-white">
                <p class="rounded-full bg-gray-800 p-1 text-[10px] font-bold uppercase tracking-wide text-white sm:py-1 sm:px-3">Sale</p>
              </div>
              <div class="mt-4 flex items-start justify-between">
                <div class="">
                  <h3 class="text-xs font-semibold sm:text-sm md:text-base">
                    <a href="#" title="" class="">
                      Arabian Musk
                      <span class="absolute" aria-hidden="true"></span>
                    </a>
                  </h3>
                  <div class="mt-2 flex items-center">
                    <svg class="block h-3 w-3 align-middle text-pink-600 sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" class=""></path>
                    </svg>
                    <svg class="block h-3 w-3 align-middle text-pink-600 sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" class=""></path>
                    </svg>
                    <svg class="block h-3 w-3 align-middle text-pink-600 sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" class=""></path>
                    </svg>
                    <svg class="block h-3 w-3 align-middle text-pink-600 sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" class=""></path>
                    </svg>
                    <svg class="block h-3 w-3 align-middle text-gray-400 sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" class=""></path>
                    </svg>
                  </div>
                </div>

                <div class="text-right">
                  <del class="mt-px text-xs font-semibold text-gray-600 sm:text-sm"> $79.00 </del>
                  <p class="text-xs font-normal sm:text-sm md:text-base">$99.00</p>
                </div>
              </div>
            </article>

            <article class="relative">
              <div class="aspect-square overflow-hidden">
                <img class="h-full w-full object-cover transition-all duration-300 group-hover:scale-125" src="https://images.unsplash.com/photo-1593487568720-92097fb460fb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBlcmZ1bWV8ZW58MHx8MHx8fDA%3D" alt="" />
              </div>
              <div class="mt-4 flex items-start justify-between">
                <div class="">
                  <h3 class="text-xs font-semibold sm:text-sm md:text-base">
                    <a href="#" title="" class="">
                      Albanian Essence
                      <span class="absolute" aria-hidden="true"></span>
                    </a>
                  </h3>
                  <div class="mt-2 flex items-center">
                    <svg class="block h-3 w-3 align-middle text-pink-600 sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" class=""></path>
                    </svg>
                    <svg class="block h-3 w-3 align-middle text-pink-600 sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" class=""></path>
                    </svg>
                    <svg class="block h-3 w-3 align-middle text-pink-600 sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" class=""></path>
                    </svg>
                    <svg class="block h-3 w-3 align-middle text-pink-600 sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" class=""></path>
                    </svg>
                    <svg class="block h-3 w-3 align-middle text-pink-600 sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" class=""></path>
                    </svg>
                  </div>
                </div>

                <div class="text-right">
                  <p class="text-xs font-normal sm:text-sm md:text-base">$299.00</p>
                </div>
              </div>
            </article>
            <article class="relative">
              <div class="aspect-square overflow-hidden">
                <img class="h-full w-full object-cover transition-all duration-300 group-hover:scale-125" src="https://media.istockphoto.com/id/2149954181/photo/three-luxury-perfume-bottles.webp?b=1&s=170667a&w=0&k=20&c=2KqCBbv6B03MNIPwwVQH2iSvcomS4gRexlXm7A_VcTk=" alt="" />
              </div>
              <div class="mt-4 flex items-start justify-between">
                <div class="">
                  <h3 class="text-xs font-semibold sm:text-sm md:text-base">
                    <a href="#" title="" class="">
                      Siberian Perfum
                      <span class="absolute" aria-hidden="true"></span>
                    </a>
                  </h3>
                  <div class="mt-2 flex items-center">
                    <svg class="block h-3 w-3 align-middle text-pink-600 sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" class=""></path>
                    </svg>
                    <svg class="block h-3 w-3 align-middle text-pink-600 sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" class=""></path>
                    </svg>
                    <svg class="block h-3 w-3 align-middle text-pink-600 sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" class=""></path>
                    </svg>
                    <svg class="block h-3 w-3 align-middle text-pink-600 sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" class=""></path>
                    </svg>
                    <svg class="block h-3 w-3 align-middle text-pink-600 sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" class=""></path>
                    </svg>
                  </div>
                </div>

                <div class="text-right">
                  <p class="text-xs font-normal sm:text-sm md:text-base">$49.00</p>
                </div>
              </div>
            </article>

            <article class="relative">
              <div class="aspect-square overflow-hidden">
                <img class="h-full w-full object-cover transition-all duration-300 group-hover:scale-125" src="/images/smoFeHear4Jw3trckgKja.png" alt="" />
              </div>
              <div class="mt-4 flex items-start justify-between">
                <div class="">
                  <h3 class="text-xs font-semibold sm:text-sm md:text-base">
                    <a href="#" title="" class="">
                      Albanian Essence
                      <span class="absolute" aria-hidden="true"></span>
                    </a>
                  </h3>
                  <div class="mt-2 flex items-center">
                    <svg class="block h-3 w-3 align-middle text-pink-600 sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" class=""></path>
                    </svg>
                    <svg class="block h-3 w-3 align-middle text-pink-600 sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" class=""></path>
                    </svg>
                    <svg class="block h-3 w-3 align-middle text-pink-600 sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" class=""></path>
                    </svg>
                    <svg class="block h-3 w-3 align-middle text-pink-600 sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" class=""></path>
                    </svg>
                    <svg class="block h-3 w-3 align-middle text-pink-600 sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" class=""></path>
                    </svg>
                  </div>
                </div>

                <div class="text-right">
                  <p class="text-xs font-normal sm:text-sm md:text-base">$299.00</p>
                </div>
              </div>
            </article>

            <article class="relative">
              <div class="aspect-square overflow-hidden">
                <img class="h-full w-full object-cover transition-all duration-300 group-hover:scale-125" src="/images/vxPx1IPRjSynYYiQve8vF.png" alt="" />
              </div>
              <div class="absolute top-0 m-1 rounded-full bg-white">
                <p class="rounded-full bg-black p-1 text-[10px] font-bold uppercase tracking-wide text-white sm:py-1 sm:px-3">Sale</p>
              </div>
              <div class="mt-4 flex items-start justify-between">
                <div class="">
                  <h3 class="text-xs font-semibold sm:text-sm md:text-base">
                    <a href="#" title="" class="">
                      Arabian Musk
                      <span class="absolute" aria-hidden="true"></span>
                    </a>
                  </h3>
                  <div class="mt-2 flex items-center">
                    <svg class="block h-3 w-3 align-middle text-pink-600 sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" class=""></path>
                    </svg>
                    <svg class="block h-3 w-3 align-middle text-pink-600 sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" class=""></path>
                    </svg>
                    <svg class="block h-3 w-3 align-middle text-pink-600 sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" class=""></path>
                    </svg>
                    <svg class="block h-3 w-3 align-middle text-pink-600 sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" class=""></path>
                    </svg>
                    <svg class="block h-3 w-3 align-middle text-gray-400 sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" class=""></path>
                    </svg>
                  </div>
                </div>

                <div class="text-right">
                  <del class="mt-px text-xs font-semibold text-gray-600 sm:text-sm"> $79.00 </del>
                  <p class="text-xs font-normal sm:text-sm md:text-base">$99.00</p>
                </div>
              </div>
            </article>

            <article class="relative">
              <div class="aspect-square overflow-hidden">
                <img class="h-full w-full object-cover transition-all duration-300 group-hover:scale-125" src="/images/dfo3blySZHLP-ZKzjChgq.png" alt="" />
              </div>
              <div class="mt-4 flex items-start justify-between">
                <div class="">
                  <h3 class="text-xs font-semibold sm:text-sm md:text-base">
                    <a href="#" title="" class="">
                      Danish Levoune
                      <span class="absolute" aria-hidden="true"></span>
                    </a>
                  </h3>
                  <div class="mt-2 flex items-center">
                    <svg class="block h-3 w-3 align-middle text-pink-600 sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" class=""></path>
                    </svg>
                    <svg class="block h-3 w-3 align-middle text-pink-600 sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" class=""></path>
                    </svg>
                    <svg class="block h-3 w-3 align-middle text-pink-600 sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" class=""></path>
                    </svg>

                    <svg class="block h-3 w-3 align-middle text-pink-600 sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" class=""></path>
                    </svg>

                    <svg class="block h-3 w-3 align-middle text-gray-400 sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" class=""></path>
                    </svg>
                  </div>
                </div>

                <div class="text-right">
                  <p class="text-xs font-normal sm:text-sm md:text-base">$79.00</p>
                </div>
              </div>
            </article>

            <article class="relative">
              <div class="aspect-square overflow-hidden">
                <img class="h-full w-full object-cover transition-all duration-300 group-hover:scale-125" src="/images/vxPx1IPRjSynYYiQve8vF.png" alt="" />
              </div>
              <div class="absolute top-0 m-1 rounded-full bg-white">
                <p class="rounded-full bg-black p-1 text-[10px] font-bold uppercase tracking-wide text-white sm:py-1 sm:px-3">Sale</p>
              </div>
              <div class="mt-4 flex items-start justify-between">
                <div class="">
                  <h3 class="text-xs font-semibold sm:text-sm md:text-base">
                    <a href="#" title="" class="">
                      Arabian Musk
                      <span class="absolute" aria-hidden="true"></span>
                    </a>
                  </h3>
                  <div class="mt-2 flex items-center">
                    <svg class="block h-3 w-3 align-middle text-pink-600 sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" class=""></path>
                    </svg>
                    <svg class="block h-3 w-3 align-middle text-pink-600 sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" class=""></path>
                    </svg>
                    <svg class="block h-3 w-3 align-middle text-pink-600 sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" class=""></path>
                    </svg>
                    <svg class="block h-3 w-3 align-middle text-pink-600 sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" class=""></path>
                    </svg>
                    <svg class="block h-3 w-3 align-middle text-gray-400 sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" class=""></path>
                    </svg>
                  </div>
                </div>

                <div class="text-right">
                  <del class="mt-px text-xs font-semibold text-gray-600 sm:text-sm"> $79.00 </del>
                  <p class="text-xs font-normal sm:text-sm md:text-base">$99.00</p>
                </div>
              </div>
            </article>

            <article class="relative">
              <div class="aspect-square overflow-hidden">
                <img class="h-full w-full object-cover transition-all duration-300 group-hover:scale-125" src="/images/dfo3blySZHLP-ZKzjChgq.png" alt="" />
              </div>
              <div class="mt-4 flex items-start justify-between">
                <div class="">
                  <h3 class="text-xs font-semibold sm:text-sm md:text-base">
                    <a href="#" title="" class="">
                      Danish Levoune
                      <span class="absolute" aria-hidden="true"></span>
                    </a>
                  </h3>
                  <div class="mt-2 flex items-center">
                    <svg class="block h-3 w-3 align-middle text-pink-600 sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" class=""></path>
                    </svg>
                    <svg class="block h-3 w-3 align-middle text-pink-600 sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" class=""></path>
                    </svg>
                    <svg class="block h-3 w-3 align-middle text-pink-600 sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" class=""></path>
                    </svg>

                    <svg class="block h-3 w-3 align-middle text-pink-600 sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" class=""></path>
                    </svg>

                    <svg class="block h-3 w-3 align-middle text-gray-400 sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" class=""></path>
                    </svg>
                  </div>
                </div>

                <div class="text-right">
                  <p class="text-xs font-normal sm:text-sm md:text-base">$79.00</p>
                </div>
              </div>
            </article>
          </main>
        </div>

      </>

    </>

  );
}

export default Home;