import React from "react";
import { useLocation } from "react-router-dom";
import Title from "../components/common/Title";
import { CartStyle } from "./Cart";
import CartSummary from "../components/cart/CartSummary";
import Button from "../components/common/Button";
import InputText from "../components/common/InputText";
import { useForm } from "react-hook-form";
import { Delivery, OrderSheet } from "../model/order.model";

interface DeliveryForm extends Delivery {
  addressDetail: string;
}

function Order() {
  const location = useLocation();
  const orderDataFromCart = location.state;
  const { totalQuantity, totalPrice, firstBookTitle } = orderDataFromCart;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DeliveryForm>();

  const handlePay = (data: DeliveryForm) => {
    const orderData: OrderSheet = {
      ...orderDataFromCart,
      delivery: {
        ...data,
        address: `${data.address} ${data.addressDetail}`,
      },
    };
  };

  return (
    <div>
      <Title size="large">주문서 작성</Title>
      <CartStyle>
        <div className="content">
          <div className="order-info">
            <Title size="medium" color="text">
              배송 정보
            </Title>
            <form className="delivery">
              <fieldset>
                <label>주소</label>
                <div className="input">
                  <InputText
                    inputType="text"
                    {...register("address", { required: true })}
                  />
                </div>
                <Button size="large" scheme="normal">
                  주소 찾기
                </Button>
              </fieldset>
              {errors.address && <p>주소를 입력해주세요.</p>}
              <fieldset>
                <label>상세 주소</label>
                <div className="input">
                  <InputText
                    inputType="text"
                    {...register("addressDetail", { required: true })}
                  />
                </div>
              </fieldset>
              {errors.addressDetail && <p>상세주소를 입력해주세요.</p>}

              <fieldset>
                <label>수령인</label>
                <div className="input">
                  <InputText
                    inputType="text"
                    {...register("receiver", { required: true })}
                  />
                </div>
              </fieldset>
              {errors.receiver && <p>수령인 입력해주세요.</p>}

              <fieldset>
                <label>전화번호</label>
                <div className="input">
                  <InputText
                    inputType="text"
                    {...register("contact", { required: true })}
                  />
                </div>
              </fieldset>
              {errors.contact && <p>전화번호를 입력해주세요.</p>}
            </form>
          </div>
          <div className="order-info">
            <Title size="medium" color="text">
              주문 상품
            </Title>
          </div>
          <strong>
            {firstBookTitle}등 총 {totalQuantity}
          </strong>
        </div>
        <div className="summary">
          <CartSummary totalQuantity={totalQuantity} totalPrice={totalPrice} />
          <Button
            size="large"
            scheme="primary"
            onClick={handleSubmit(handlePay)}
          >
            결제하기
          </Button>
        </div>
      </CartStyle>
    </div>
  );
}

export default Order;
