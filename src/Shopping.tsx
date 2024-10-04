import { useState } from "react";
import Product1 from "./images/image-product-1.jpg";
import Product2 from "./images/image-product-2.jpg";
import Product3 from "./images/image-product-3.jpg";
import Product4 from "./images/image-product-4.jpg";
import PrevImg from "./images/icon-previous.svg";
import NextImg from "./images/icon-next.svg";
import { Containerr, Imgs, Main } from "./Style";
import MinusImg from "./images/icon-minus.svg";
import PlusImg from "./images/icon-plus.svg";
import CartImg from "./images/icon-cart.svg";

type Props = {
  productCount: number;
  showCart: boolean;
  setShowCart: (cart: boolean) => void;
  setProductCount: (count: number) => void;
};

export default function Shopping({
  productCount,
  setProductCount,
  showCart,
  setShowCart,
}: Props) {
  const images = [Product1, Product2, Product3, Product4];
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const handlePlus = () => {
    setProductCount(productCount + 1);
  };

  const handleMinus = () => {
    if (productCount > 0) {
      setProductCount(productCount - 1);
    }
  };

  const handleShowCart = () => {
    if (productCount > 0) {
      setShowCart(true);
    }
  };

  const handleImageClick = (index: number) => {
    setCurrentIndex(index);
    setSelectedIndex(index);
  };

  return (
    <>
      <Containerr>
        <Imgs>
          {showCart && <p className="count">{productCount}</p>}
          <img className="main_img" src={images[currentIndex]} alt="products" />
          <div className="mini_imgs">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`product${index + 1}`}
                onClick={() => handleImageClick(index)}
                style={{
                  border:
                    selectedIndex === index ? "2px solid #ff7e1b  " : "none",
                  cursor: "pointer",
                }}
              />
            ))}
          </div>

          <div className="buttons">
            <img
              className="prev_img"
              onClick={handlePrev}
              src={PrevImg}
              alt="prev_img"
            />
            <img
              className="next_img"
              onClick={handleNext}
              src={NextImg}
              alt="next_img"
            />
          </div>
        </Imgs>
        <Main>
          <h3>SNEAKER COMPANY</h3>
          <h1>Fall Limited Edition Sneakers</h1>
          <p>
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.
          </p>
          <div className="prices">
            <div className="left">
              <h1>$125.00</h1>
              <p>50%</p>
            </div>
            <span>$250.00</span>
          </div>
          <div className="quantity_container">
            <div className="quantity">
              <img onClick={handleMinus} src={MinusImg} alt="minus_img" />
              <p>{productCount}</p>
              <img onClick={handlePlus} src={PlusImg} alt="plus_img" />
            </div>
            <button onClick={handleShowCart}>
              <img src={CartImg} alt="cart_img" />
              <p>Add to cart</p>
            </button>
          </div>
        </Main>
      </Containerr>
    </>
  );
}
