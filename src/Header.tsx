import { CartPay, HeaderContainer, Menu } from "./Style";
import MenuImg from "./images/icon-menu.svg";
import LogoImg from "./images/logo.svg";
import CartImg from "./images/icon-cart.svg";
import AvatarImg from "./images/image-avatar.png";
import ImgClose from "./images/icon-close.svg";
import FootImg from "./images/image-product-1.jpg";
import DeleteImg from "./images/icon-delete.svg";
import { useState } from "react";
type Props = {
  productCount: number;
  showCart: boolean;
  setShowCart: (cart: boolean) => void;
  setProductCount: (count: number) => void;
};
export default function Header({
  productCount,
  setProductCount,
  setShowCart,
}: Props) {
  const [show, setShow] = useState<boolean>(false);
  const [showPay, setShowPay] = useState<boolean>(false);
  const handleProduct = () => {
    if (productCount > 0) {
      setShowPay(true);
    }
  };
  const handleDelete = () => {
    setShowPay(false);
    setShowCart(false);
    setProductCount(0);
  };
  return (
    <>
      {show === true ? (
        <Menu>
          <img onClick={() => setShow(false)} src={ImgClose} alt="close_img" />
          <div className="navigation">
            <p>Collections</p>
            <p>Men</p>
            <p>Women</p>
            <p>About</p>
            <p>Contact</p>
          </div>
        </Menu>
      ) : (
        ""
      )}
      <HeaderContainer>
        {showPay === true ? (
          <CartPay>
            <h3>Cart</h3>
            <div className="line"></div>
            <div className="pay_container">
              <div className="pay">
                <img className="foot_img" src={FootImg} alt="foot_img" />
                <div>
                  <p>Fall Limited Edition Sneakers</p>
                  <h4>
                    $125 x {productCount} {125 * productCount}
                  </h4>
                </div>

                <img
                  onClick={handleDelete}
                  className="delete"
                  src={DeleteImg}
                  alt="delete_img"
                />
              </div>
              <button>Chekcout</button>
            </div>
          </CartPay>
        ) : (
          ""
        )}
        <div className="left_nav">
          <img
            className="menu_img"
            onClick={() => setShow(true)}
            src={MenuImg}
            alt="menu_img"
          />
          <img src={LogoImg} alt="logo_img" />
          <div className="navv">
            <h3>Collections</h3>
            <h3>Men</h3>
            <h3>Women</h3>
            <h3>About</h3>
            <h3>Contact</h3>
          </div>
        </div>
        <div className="right_nav">
          <img onClick={handleProduct} src={CartImg} alt="cart_img" />
          <img className="avatar_img" src={AvatarImg} alt="avatar_img" />
        </div>
      </HeaderContainer>
    </>
  );
}
