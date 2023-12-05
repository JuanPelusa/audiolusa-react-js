import { useState, useEffect} from "react"
import { useParams } from "react-router-dom"
import allProducts from '../json/allProducts.json'
import ItemList from "../ItemList/ItemList"
import { Container} from "react-bootstrap"

const ItemListContainer = () => {

    const [item, setItem] = useState([])
    const {id} = useParams();

    useEffect (()=> {
        const fetchData = async()=>{
            try{
                const data = await new Promise((resolve)=>{
                    setTimeout(()=>{
                        resolve( id ? allProducts.filter(item => item.category === id) : allProducts)
                    })
                });
                setItem(data);
            }catch (error) {
                console.log('Error:', error);
            }
        };
        fetchData();
    }, [id])

    return (
        <main>
            <Container data-aos="fade-up" data-aos-duration="300" data-aos-easing="ease-in-out">
                <div>
                    <h4 className="hi">- Some of our products -</h4>
                </div>
                <ItemList item={item} /> 
            </Container>
        </main>

    )
}

export default ItemListContainer