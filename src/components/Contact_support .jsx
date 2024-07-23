import React from 'react'
import '../App.css'

export default function Contact_support() {
    return (
        <>

            <header className='w-full flex px-4 lg:py-4 lg:flex-row flex-col items-center my-10 '>
                <div className="head lg:w-1/2 lg:mx-5 my-10">
                    <h1 className='text-4xl lg:w-11/12 font-bold py-6'>We built our business on great customer service</h1>
                    <p className='text-gray-500 font-medium lg:w-4/5'>At the beginning at least, but then we realized we could make a lot more money if we kinda stopped caring about that. Our new strategy is to write a bunch of things that look really good in the headlines, then clarify in the small print but hope people don't actually read it.</p>
                </div>
                <div className="lg:w-1/2 main-img">
                    <img className='rounded-xl lg:w-full lg:h-full w-96 h-96' src="https://st2.depositphotos.com/3591429/7699/i/450/depositphotos_76994273-stock-photo-customer-service-support-concept.jpg" alt="" />
                </div>
            </header>

            <div className="logos flex w-full lg:items-center lg:flex-row flex-col lg:justify-around  my-14 ">
                <div className="first">
                    <div className="img my-4 sm:flex items-center lg:block">
                        <img src="https://tailwindui.com/img/ecommerce/icons/icon-shipping-simple.svg" alt="" className='mx-3'/>
                        <div className="heading mx-4">
                        <h1 className='py-2 text-lg'>Free shipping</h1>
                        <p className='lg:max-w-80 w-4/5 text-sm'>It's not actually free we just price it into the products. Someone's paying for it, and it's not us.</p>
                    </div>
                    </div>
                    
                </div>
                <div className="second">
                    <div className="img my-4 sm:flex items-center lg:block ">
                    <img src="https://tailwindui.com/img/ecommerce/icons/icon-warranty-simple.svg" alt=""  className='mx-3'/>
                    <div className="heading mx-4">
                        <h1 className='py-2 text-lg'>10-year warranty</h1>
                        <p className='lg:max-w-80 text-sm  w-4/5'>If it breaks in the first 10 years we'll replace it. After that you're on your own though.</p>
                    </div>
                    </div>
                </div>
                <div className="third">
                    <div className="img my-4 sm:flex items-center lg:block ">
                    <img src="https://tailwindui.com/img/ecommerce/icons/icon-exchange-simple.svg" alt="" className='mx-3'/>
                    <div className="heading mx-4">
                        <h1 className='py-2 text-lg'>Exchanges</h1>
                        <p className='lg:max-w-80 text-sm w-4/5'>If you don't like it, trade it to one of your friends for something of theirs. Don't send it here though.</p>
                    </div>
                    </div>
                </div>
            </div>

            <section class=" dark:bg-gray-900">
                <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                    <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Us</h2>
                    <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>
                    <form action="#" class="space-y-8">
                        <div>
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                            <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@gmail.com" required />
                        </div>
                        <div>
                            <label for="subject" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
                            <input type="text" id="subject" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required />
                        </div>
                        <div class="sm:col-span-2">
                            <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                            <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                        </div>
                        <button type="submit" class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary- sm:w-fit hover:bg-primary- focus:ring-4 focus:outline-none focus:ring-primary- dark:bg-primary- dark:hover:bg-primary- dark:focus:ring-primary- bg-gray-700 hover:bg-gray-800">Send message</button>
                    </form>
                </div>
            </section>
        </>


    )
}

