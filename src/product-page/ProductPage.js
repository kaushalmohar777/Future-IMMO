import React, { useEffect, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/shopContext";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Button from "react-bootstrap/esm/Button";
import "./ProductPage.css";
import Fancybox from "../fancybox";
import "@fancyapps/ui/dist/fancybox.css";
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import AOS from "aos";
import "aos/dist/aos.css";

import Loading from "../Components/Loading";


const ProductPage = () => {
  let { handle } = useParams();
  const { fetchProductWithId, addItemToCheckout, product } =
    useContext(ShopContext);

  useEffect(() => {
    fetchProductWithId(handle);
    // fetchData()
    return () => {
      // setProduct(null)
    };
  }, [fetchProductWithId, handle]);

  const [qty, setqty] = useState(1);
  const handleDecrement = () => {
    if (qty > 1) {
      setqty((preCount) => preCount - 1);
    }
  };
  const handleIncrement = () => {
    if (qty < 10) {
      setqty((preCount) => preCount + 1);
    }
  };

  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);

  if (!product.title) return <Loading/> ;

  const descriptionary = product.descriptionHtml.split("<!-- split -->");
  //console.log(descriptionary);

  return (
    <>
      <Container className="productSingle" data-aos={"fade-up"}>
        <Row>
          <Col lg={7} className="produtimagediv">
            <div className="prod-gallery">
              <Swiper
                speed={1000}
                spaceBetween={5}
                slidesPerView={1}
                //  onSlideChange={() => console.log('slide change')}
                //  onSwiper={(swiper) => console.log(swiper)}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                modules={[Autoplay, Pagination]}
              >
                {product.images.map((img) => (
                  <SwiperSlide className="images" key={img.id}>
                    <div>
                      <img data-fancybox src={img.src} width="" height="" />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <div id="prodfullds" className="prod-description-long" dangerouslySetInnerHTML={{ __html: descriptionary[1] }} />
          </Col>
          <Col className="proddetail">
            <div className="proddetailiner">
              <h2>{product.title}</h2>
              <div className="pricediv">
                {product.variants[0].priceV2.currencyCode}{" "}
                {product.variants[0].price}
              </div>
              {/* <div className='prod-description'>
                {product.description}
              </div> */}
              <div
                className="prod-description"
                dangerouslySetInnerHTML={{ __html: descriptionary[0] }}
              />
              <div className="quntinput input-group w-auto align-items-center">
                <input
                  onClick={handleDecrement}
                  type="button"
                  value="-"
                  className="button-minus border qtybtn rounded-circle  icon-shape icon-sm mx-1 "
                />
                <div className="quantity-field border-0 text-center w-25">
                  {qty}
                </div>
                <input
                  onClick={handleIncrement}
                  type="button"
                  value="+"
                  className="button-plus border qtybtn rounded-circle icon-shape icon-sm "
                />
              </div>
              <Button onClick={() => addItemToCheckout(product.variants[0].id, qty)} >
                Add To Cart
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProductPage;
