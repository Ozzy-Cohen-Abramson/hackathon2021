import React, { useState, useContext, useEffect } from 'react';
import './StoreMenu.css';
import Card from './Card';
import coins from '../../images/store/coins.png';
import coins2 from '../../images/store/coins2.png';
import coins3 from '../../images/store/coins3.png';
import box from '../../images/store/box.png';
import box2 from '../../images/store/box2.png';
import box3 from '../../images/store/box3.png';
import crystal from '../../images/store/crystal.png';
import crystal2 from '../../images/store/crystal2.png';
import crystal3 from '../../images/store/crystal3.png';
import usd from '../../images/store/usd.png';
import AppContext from '../../context/AppContext';

function StoreMenu() {
  const {
    setUserUsd,
    userUsd,
    userCrystals,
    setUserCrystals,
    userCoins,
    setUserCoins,
    userBoxes,
    setUserBoxes,
  } = useContext(AppContext);

  const buy = (index) => {
    switch (currency[index].getCurrency) {
      case 'boxes':
        if (userCrystals <= currency[index].paySum) break;
        setUserBoxes((box) => box + currency[index].getSum);
        setUserCrystals((crystals) => crystals - currency[index].paySum);
        break;
      case 'coins':
        if (userCrystals >= currency[index].paySum) {
          setUserCoins((coins) => coins + currency[index].getSum);
          setUserCrystals((crystals) => crystals - currency[index].paySum);
          break;
        }
        console.log('you dont have crystals');
        break;

      case 'crystals':
        if (userUsd >= currency[index].paySum) {
          setUserCrystals((crystals) => crystals + currency[index].getSum);
          setUserUsd((usd) => usd - currency[index].paySum);
          break;
        }
        console.log('you dont have ils');
        break;

      default:
        console.log('some error');
        break;
    }
  };

  useEffect(() => {
    console.log('userUsd is', userUsd);
  }, [userUsd]);

  useEffect(() => {
    console.log('userCrystals is', userCrystals);
  }, [userCrystals]);

  useEffect(() => {
    console.log('userCoins is', userCoins);
  }, [userCoins]);

  useEffect(() => {
    console.log('userBoxes is', userBoxes);
  }, [userBoxes]);

  const [currency] = useState([
    //buy boxes and pay crystals
    {
      paySum: 0,
      getSum: 1,
      payCurrency: 'crystals',
      payCurrencyImg: crystal,
      getCurrency: 'boxes',
      buy: buy,
      image: box,
    },
    {
      paySum: 20,
      getSum: 1,
      payCurrency: 'crystals',
      payCurrencyImg: crystal,
      getCurrency: 'boxes',
      buy: buy,
      image: box2,
    },
    {
      paySum: 30,
      getSum: 1,
      payCurrency: 'crystals',
      payCurrencyImg: crystal,
      getCurrency: 'boxes',
      buy: buy,
      image: box3,
    },
    //buy coins and pay crystals
    {
      paySum: 15,
      getSum: 1000,
      payCurrency: 'crystals',
      payCurrencyImg: crystal,
      getCurrency: 'coins',
      buy: buy,
      image: coins,
    },
    {
      paySum: 50,
      getSum: 5000,
      payCurrency: 'crystals',
      payCurrencyImg: crystal,
      getCurrency: 'coins',
      buy: buy,
      image: coins2,
    },
    {
      paySum: 90,
      getSum: 10000,
      payCurrency: 'crystals',
      payCurrencyImg: crystal,
      getCurrency: 'coins',
      buy: buy,
      image: coins3,
    },
    //buy crystals and pay usd
    {
      paySum: 1,
      getSum: 70,
      payCurrency: 'usd',
      payCurrencyImg: usd,
      getCurrency: 'crystals',
      buy: buy,
      image: crystal,
    },
    {
      paySum: 3,
      getSum: 200,
      payCurrency: 'usd',
      payCurrencyImg: usd,
      getCurrency: 'crystals',
      buy: buy,
      image: crystal2,
    },
    {
      paySum: 4,
      getSum: 400,
      payCurrency: 'usd',
      payCurrencyImg: usd,
      getCurrency: 'crystals',
      buy: buy,
      image: crystal3,
    },
  ]);

  return (
    <div className='perspective'>
      <label className='tab' htmlFor='tab-top'>
        Boxes
      </label>
      <label className='tab' htmlFor='tab-front'>
        Coins
      </label>
      <label className='tab' htmlFor='tab-bottom'>
        Crystals
      </label>
      <input type='radio' name='tabs' id='tab-top' />
      <input type='radio' name='tabs' id='tab-front' />
      <input type='radio' name='tabs' id='tab-bottom' />
      <div className='cube'>
        <div className='tab-content' id='boxes'>
          {currency.map((currency, index) => {
            if (currency.getCurrency === 'boxes') {
              return <Card key={index} index={index} data={currency} />;
            }
            return <></>;
          })}
        </div>
        <div className='tab-content' id='coins'>
          {currency.map((currency, index) => {
            if (currency.getCurrency === 'coins') {
              return <Card key={index} index={index} data={currency} />;
            }
            return <></>;
          })}
        </div>
        <div className='tab-content' id='crystals'>
          {currency.map((currency, index) => {
            if (currency.getCurrency === 'crystals') {
              return <Card key={index} index={index} data={currency} />;
            }
            return <></>;
          })}
        </div>
      </div>
    </div>
  );
}

export default StoreMenu;
