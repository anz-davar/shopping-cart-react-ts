import {useShoppingCart} from "../context/ShoppincCartContext";
import storeItems from '../data/items.json'
import {Button, Stack} from "react-bootstrap";
import {formatCurrency} from "../utilities/formatCurrency";

type cartItemProps = {
    id: number,
    quantity: number,
}


export function CartItem({id, quantity}: cartItemProps) {
    const {removeFromCart} = useShoppingCart()
    // @ts-ignore
    const item = storeItems.find(item => id === item.id)
    if (item == null) {
        return null;
    }
    return (
        <Stack direction='horizontal' gap={2} className='d-flex align-items-center'>
            <img src={item.imgUrl} style={{width: '125px', height: "75px", objectFit: 'cover'}}></img>
            <div className='me-auto'>
                <div>{item.name} {quantity > 1 &&
                <span className='text-muted' style={{fontSize: '.65rem'}}> X{quantity}</span>}</div>
                <div className='text-muted' style={{fontSize: '.75rem'}}>
                    {formatCurrency(item.price)}
                </div>
            </div>
            <div>
                {formatCurrency(item.price*quantity)}
            </div>
            <Button variant='outline-danger' size='sm' onClick={()=>removeFromCart(item.id)}>
                &times;
            </Button>
        </Stack>
    )


}
