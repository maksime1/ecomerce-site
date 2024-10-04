import styled from "styled-components";

export const HeaderContainer = styled.header`
  .navv {
    @media (min-width: 1440px) {
      display: flex;
      gap: 32px;
    }
  }
  @media (min-width: 1440px) {
    padding: 43px 165px 34px 165px;
    border-bottom: 1px solid #e4e9f2;
  }
  padding: 24px 24px 28px 24px;
  display: flex;
  justify-content: space-between;
  .avatar_img {
    width: 24px;
    height: 24px;
    @media (min-width: 1440px) {
      width: 50px;
      height: 50px;
    }
  }
  .left_nav {
    display: flex;
    align-items: center;
    gap: 16px;
    @media (min-width: 1440px) {
      gap: 56px;
    }
  }
  .left_nav h3 {
    display: none;
    @media (min-width: 1440px) {
      display: block;
      color: #69707d;
      font-size: 15px;
      line-height: 1.73;
    }
  }
  .menu_img {
    @media (min-width: 1440px) {
      display: none;
    }
  }

  .right_nav {
    display: flex;
    align-items: center;
    gap: 23px;
    @media (min-width: 1440px) {
      gap: 46px;
    }
  }
`;
export const Imgs = styled.div`
  .mini_imgs {
    display: none;
    @media (min-width: 1440px) {
      display: flex;
      gap: 31px;
      margin-top: 32px;
    }
  }
  .mini_imgs img {
    width: 88px;
    height: 88px;
    border-radius: 10px;
    border: none;
  }
  .next_img {
    @media (min-width: 1440px) {
      display: none;
    }
  }
  .prev_img {
    @media (min-width: 1440px) {
      display: none;
    }
  }
  @media (min-width: 1440px) {
    .main_img {
      width: 445px;
      height: 445px;
      border-radius: 15px;
      border: none;
    }
  }
  position: relative;
  & > img {
    width: 100%;
    height: 300px;
  }
  .count {
    background-color: #ff7e1b;
    width: 18px;
    height: 15px;
    border-radius: 6.5px;
    border: none;
    text-align: center;
    font-size: 10px;
    font-weight: bold;
    color: #fff;
    position: absolute;
    top: -55px;
    left: 290px;
    @media (min-width: 1440px){
      position: absolute;
      top: -170px;
      left: 955px;
    }
  }
  .buttons {
    padding: 0 16px;
    display: flex;
    justify-content: space-between;
    position: absolute;
    top: 140px;
    gap: 300px;
  }
  .buttons img {
    width: 20px;
    height: 20px;
  }
`;
export const Main = styled.main`
  .quantity_container {
    @media (min-width: 1440px) {
      display: flex;
      gap: 16px;
    }
  }
  padding: 24px 24px 88px 24px;
  & > h3 {
    color: #ff7e1b;
    font-size: 12px;
    font-weight: bold;
    letter-spacing: 1.85px;
    margin-bottom: 19px;
    @media (min-width: 1440px) {
      margin-bottom: 27px;
    }
  }
  & > h1 {
    color: #1d2026;
    font-size: 28px;
    font-weight: bold;
    line-height: 1.14;
    margin-bottom: 15px;
    @media (min-width: 1440px) {
      color: #1d2026;
      font-size: 44px;
      font-weight: bold;
      line-height: 1.09;
      margin-bottom: 32px;
      width: 445px;
    }
  }
  & > p {
    color: #69707d;
    font-size: 15px;
    line-height: 1.67;
    margin-bottom: 28px;
    @media (min-width: 1440px) {
      font-size: 16px;
      line-height: 1.63;
      width: 445px;
    }
  }
  .prices {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 26px;
  }
  .prices {
    @media (min-width: 1440px) {
      display: flex;
      flex-direction: column;
      align-items: start;
      gap: 10px;
      margin-bottom: 32px;
    }
  }
  .prices h1 {
    color: #1d2026;
    font-size: 28px;
    font-weight: bold;
  }
  .prices span {
    color: #b6bcc8;
    font-size: 16px;
    font-weight: bold;
    line-height: 1.63;
    text-decoration: line-through;
  }
  .left {
    display: flex;
    align-items: center;
    gap: 16px;
  }
  .left p {
    background-color: #ffeee2;
    width: 51px;
    padding: 7px 8px 4px;
    border-radius: 6px;
    border: none;
    color: #ff7e1b;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
  }
  .quantity {
    background-color: #f6f8fd;
    width: 327px;
    padding: 22px 24px 18px;
    border-radius: 10px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;
    @media (min-width: 1440px) {
      width: 157px;
      height: 56px;
      padding: 22px 16px 17px;
    }
  }
  .quantity p {
    color: #1d2026;
    font-size: 16px;
    font-weight: bold;
  }
  button {
    color: #fff;
    gap: 20px;
    display: flex;
    align-items: center;
    background-color: #ff7e1b;
    width: 327px;
    padding: 19px 104px 18px;
    border-radius: 10px;
    border: none;
    box-shadow: 0 20px 50px -20px #ff7e1b;
    @media (min-width: 1440px) {
      width: 272px;
      height: 56px;
      padding: 19px 76px 18px 77px;
    }
  }
  button p {
    font-size: 14px;
    font-weight: bold;
  }
`;
export const Menu = styled.div`
  width: 250px;
  height: 900px;
  z-index: 1;
  background-color: #fff;
  padding: 25px 131px 598px 25px;
  position: absolute;
  .navigation {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 54px;
  }
  .navigation p {
    color: #1d2026;
    font-size: 18px;
    font-weight: bold;
    line-height: 1.44;
  }
`;
export const CartPay = styled.div`
  background-color: #fff;
  width: 360px;
  height: 256px;
  border-radius: 10px;
  border: none;
  box-shadow: 0 20px 50px -20px rgba(29, 32, 38, 0.5);
  position: absolute;
  top: 90px;
  right: 8px;
  z-index: 1;
  & > h3 {
    margin-top: 24px;
    margin-left: 24px;
  }
  .line {
    background-color: #e4e9f2;
    width: 360px;
    height: 1px;
    margin-top: 27px;
  }
  .pay_container {
    padding: 24px 24px 32px 24px;
  }
  .pay_container button {
    background-color: #ff7e1b;
    width: 312px;

    padding: 22px 119px 18px 120px;
    border-radius: 10px;
    border: none;
    text-align: center;
    margin-top: 24px;
    color: #fff;
    font-weight: bold;
    font-size: 16px;
  }
  .foot_img {
    width: 50px;
    height: 50px;
    border-radius: 4px;
    border: none;
  }
  .delete {
    width: 20px;
    height: 20px;
  }
  .pay {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
export const Containerr = styled.div`
  @media (min-width: 1440px) {
    padding: 90px 212px 132px 213px;
    display: flex;
    gap: 125px;
  }
`;
