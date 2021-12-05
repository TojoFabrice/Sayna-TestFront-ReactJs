import React from 'react'
import { Carousel } from '@trendyol-js/react-carousel';
import Cards from '../../views/Overview/cards/Cards';

function CardScroll() {

    return (

           <Carousel>
               <Cards />
               <Cards />
               <Cards />
           </Carousel>

    )
}

export default CardScroll
