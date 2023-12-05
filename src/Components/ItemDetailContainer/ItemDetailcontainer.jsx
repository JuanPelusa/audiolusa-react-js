import { useState, useEffect} from "react"
import { useParams } from "react-router-dom"
import allProducts from '../json/allProducts.json'

const ItemDetailContainer = () => {

    const {item, setItem} = useState({})
    const {id} = useParams

    useEffect (()=>{
        const promise = new Promise ((resolve)=>{
            setTimeout (()=>{
                resolve(allProducts.find(item=> item.id === parseInt(id)))
            }, 1000)
        });
        promise.then((data)=>{
            setItem(data)
        })
    }, [id])

    return (
        <div className="backMobile">
            <div className="container-fluid">
                <div className="row cols-4">    
                    <ItemDetail item={item} /> 
                </div>
            </div>
        </div>
    )

}
 
export default ItemDetailContainer


    