import React from 'react';
import { connect } from 'react-redux';
import BurgerContainer from './BurgerContainer';
import IceCreamContainer from './IceCreamContainer';
import CakeContainer from './CakeContainer';


function ShopContainer({noMoney}) {
  return (
    <>
        {
            noMoney &&
                <div>
                    <BurgerContainer/>
                    <CakeContainer/>
                    <IceCreamContainer/>
                </div>
        }
    </>
  )
}

const mapStateToProps = (state) => {
    return {
        noMoney: state.brokeReducer.noMoney
    }
}

export default connect(
    mapStateToProps
)(ShopContainer)
