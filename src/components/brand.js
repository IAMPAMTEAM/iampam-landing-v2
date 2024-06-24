import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import brand1 from '../assets/images/brand/brand-1-1.png';
import brand2 from '../assets/images/brand/brand-1-2.png';
import brand3 from '../assets/images/brand/brand-1-3.png';
import brand4 from '../assets/images/brand/brand-1-4.png';
import brand5 from '../assets/images/brand/brand-1-5.png';
import brand6 from '../assets/images/brand/brand-1-6.png';

class BrandOne extends Component {
  // componentDidMount() {
  //   const $ = window.$;
  //   if ($('.thm__owl-carousel').length) {
  //     $('.thm__owl-carousel').each(function () {
  //       var Self = $(this);
  //       var carouselOptions = Self.data('options');
  //       var carouselPrevSelector = Self.data('carousel-prev-btn');
  //       var carouselNextSelector = Self.data('carousel-next-btn');
  //       var thmCarousel = Self.owlCarousel(carouselOptions);
  //       if (carouselPrevSelector !== undefined) {
  //         $(carouselPrevSelector).on('click', function () {
  //           thmCarousel.trigger('prev.owl.carousel');
  //           return false;
  //         });
  //       }
  //       if (carouselNextSelector !== undefined) {
  //         $(carouselNextSelector).on('click', function () {
  //           thmCarousel.trigger('next.owl.carousel');
  //           return false;
  //         });
  //       }
  //     });
  //   }
  // }

  render() {
    let publicUrl = process.env.PUBLIC_URL + '/';
    let imagealt = 'image';

    return <section className="brand-one"></section>;
  }
}

export default BrandOne;
