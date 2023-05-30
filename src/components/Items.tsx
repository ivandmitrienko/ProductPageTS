import React, { Dispatch, PureComponent } from 'react';
import { connect } from 'react-redux';
import { AiFillCloseCircle } from 'react-icons/ai';
import { TbFileDescription } from 'react-icons/tb'
import style from './Layout.module.scss';
import Quantity from './Quantity';
import { NavLink } from 'react-router-dom';
import { Constants } from './actions/actions';
import { Product } from 'types';


class Items extends PureComponent<ItemsProps> {

    setMoreCount = () => {
        this.props.addCountofProduct(this.props.index);
    }

    setLessCount = () => {
        if (this.props.product.count === 1) {
            return;    
        } else {
            this.props.reduceCountofProduct(this.props.index);
        }
    };

    deleteProduct = () => {
        this.props.deleteProduct(this.props.index);
    }

    render() {
        return (
            <div className={style.product}>
                <img src={this.props.product.image} alt="" />
                <div className={style.countOfProduct}>
                    <div>
                        <span>
                            {this.props.product.nameOfProduct}
                        </span>
                    </div>
                    <Quantity
                        setMoreCount={this.setMoreCount}
                        setLessCount={this.setLessCount}
                    >
                        {this.props.product.count}
                    </Quantity>
                    <div>
                        <span>Total: {this.props.product.nameOfPrice * this.props.product.count}$</span>
                    </div>
                </div>
                <div className={style.closeAndDiscribe}>
                    <AiFillCloseCircle size={25} onClick={this.deleteProduct} />
                    <div className={style.moreInformation}>
                        <NavLink
                            to={`/ProductDescription/${this.props.product.id}`}
                            // state={{product:this.props.product}}
                            style={{ color: 'white' }}
                        >
                            <TbFileDescription size={25} />
                        </NavLink>
                    </div>
                </div>
            </div>
        )
    }
}

interface DispatchAction{
    index:number,
    type:Constants,

}

const mapDispatchToProps = (dispatch:Dispatch<DispatchAction>) => ({
    addCountofProduct: (index:number) => {
        dispatch({
            type: Constants.ADD_PRODUCT_COUNT,
            index: index
        })
    },
    reduceCountofProduct: (index:number) => {
        dispatch({
            type: Constants.REDUCE_PRODUCT_COUNT,
            index: index
        })
    },
    deleteProduct: (index:number) => {
        dispatch({
            type: Constants.DELETE_PRODUCT,
            index: index
        })
    },
});

type DispatchProps = ReturnType<typeof mapDispatchToProps>;

type Props = {
    index:number,
    product:Product,
    key:number
}

type ItemsProps = DispatchProps & Props

export default connect(null, mapDispatchToProps)(Items);