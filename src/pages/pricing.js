import { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import * as PortOne from '@portone/browser-sdk/v2';
import { useNavigate } from 'react-router-dom';

const Pricing = () => {
  const [selectedProduct, setSelectedProduct] = useState('zerotrust');
  const [selectedInterval, setSelectedInterval] = useState('Pay Yearly');
  const [zeroTrustPrice, setZeroTrustPrice] = useState('');
  const [cloudOpsPrice, setCloudOpsPrice] = useState('');

  useEffect(() => {
    selectedInterval === 'Pay Yearly' ? setZeroTrustPrice('$100.00') : setZeroTrustPrice('$10.00');
  }, [selectedInterval]);

  useEffect(() => {
    selectedInterval === 'Pay Yearly' ? setCloudOpsPrice('$200.00') : setCloudOpsPrice('$20.00');
  }, [selectedInterval]);

  const navigate = useNavigate();

  const subscribe = async () => {
    const orderInfo = {
      storeId: 'store-e80d4fff-be65-4d04-9e84-e1a99e6184e2',
      channelKey: 'channel-key-06e9a427-7834-42df-945c-630201f25aba',
      paymentId: `payment-${crypto.randomUUID()}`,
      orderName: 'cloudOps',
      totalAmount: 100,
      currency: 'CURRENCY_KRW',
      payMethod: 'CARD',
    };
    const response = await PortOne.requestPayment(orderInfo);
    if (response.code != null) {
      console.error(response.message);
      return;
    }
    const notified = await fetch('https://9ajdcwvcs2.execute-api.ap-northeast-2.amazonaws.com/dev/payment/complete', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({
        paymentId: response.paymentId,
        orderProduct: orderInfo.orderName,
      }),
    });
    navigate('/');
    if (notified.ok) {
      console.log('Payment completed');
      console.log(notified);
      navigate('/');
    } else {
      console.error('Failed to notify payment completion');
      console.log(notified);
    }
  };

  return (
    <section className="pricing-wrap">
      <div className="pricing-cont">
        <p className="pricing-cont__title">What do you need?</p>
        <div className="pricing-cont__products">
          <Form>
            <div key="inline-radio" className="mb-3">
              <div className="pricing-cont__product">
                <Form.Check
                  type="radio"
                  id="check-zerotrust"
                  name="product"
                  value="zerotrust"
                  label="ZeroTrust"
                  onChange={(e) => setSelectedProduct(e.target.value)}
                  className="pricing-cont__product-label"
                  checked={selectedProduct === 'zerotrust'}
                />
              </div>
              <div className="pricing-cont__product">
                <Form.Check
                  type="radio"
                  id="check-cloudops"
                  name="product"
                  value="cloudops"
                  label="CloudOps"
                  onChange={(e) => setSelectedProduct(e.target.value)}
                  className="pricing-cont__product-label"
                  checked={selectedProduct === 'cloudops'}
                />
              </div>
            </div>
          </Form>
        </div>

        <div className="pricing-cont__interval">
          <p className="pricing-cont__interval-title">Payment interval</p>
          <div className="pricing-cont__products"></div>
          <Form>
            <div key="inline-radio" className="mb-3">
              <div className="pricing-cont__product">
                <Form.Check
                  type="radio"
                  id="check-yearly"
                  name="interval"
                  value={selectedInterval}
                  label="Pay Yearly"
                  onChange={(e) => setSelectedInterval('Pay Yearly')}
                  className="pricing-cont__product-label"
                  checked={selectedInterval === 'Pay Yearly'}
                />
              </div>
              <div className="pricing-cont__product">
                <Form.Check
                  type="radio"
                  id="check-monthly"
                  name="interval"
                  value={selectedInterval}
                  label="Pay Monthly"
                  onChange={(e) => setSelectedInterval('Pay Monthly')}
                  className="pricing-cont__product-label"
                  checked={selectedInterval === 'Pay Monthly'}
                />
              </div>
            </div>
          </Form>
        </div>

        <hr className="pricing-division" />

        <div className="pricing-cont__total">
          <p className="pricing-cont__total-title">Total</p>
          {selectedProduct === 'zerotrust' ? <p className="dollar">{zeroTrustPrice}</p> : <p className="dollar">{cloudOpsPrice}</p>}
        </div>

        <div className="pricing-cont__btn">
          <Button variant="primary" className="pricing-cont__btn-subscribe" onClick={subscribe}>
            SUBSCRIBE
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
