import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';
import './PhotoCarousel.css';

export default function PhotoCarousel (props) {
  return (
    <MDBCarousel showControls>
      <MDBCarouselItem
        className='w-50 d-block mx-auto carousel-img'
        itemId={1}
        src='/img-1.jpg'
      />
      <MDBCarouselItem
        className='w-50 d-block mx-auto carousel-img'
        itemId={2}
        src='/img-2.jpg'
      />
      <MDBCarouselItem
        className='w-50 d-block mx-auto carousel-img'
        itemId={3}
        src='/img-3.jpg'
      />
      <MDBCarouselItem
        className='w-50 d-block mx-auto carousel-img'
        itemId={4}
        src='/img-4.jpg'
      />
      <MDBCarouselItem
        className='w-50 d-block mx-auto carousel-img'
        itemId={5}
        src='/img-5.jpg'
      />
      <MDBCarouselItem
        className='w-50 d-block mx-auto carousel-img'
        itemId={6}
        src='/img-6.jpg'
      />
    </MDBCarousel>
  );
}