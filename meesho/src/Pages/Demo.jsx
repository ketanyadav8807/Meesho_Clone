import React, {useState, useEffect} from 'react'
import { SingleProduct } from '../Components/PageProducts/SingleProduct';

export const Demo = () => {

    const [data, setData] = useState([])
    useEffect(() => {
      getData();
    }, [])
    
    const getData = () => {
        try {
            fetch(`https://meesho-db.herokuapp.com/Kids`, {
                method: "GET",
                headers: {
                    "content-type": "application/json",
                },
            }).then((r) => {
                console.log(r)
                r.json();
            }
            ).then((d) => {
                console.log(d)
                setData(d)
            })
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div style={{width:"100%", backgroundColor:"yellow"}}>
        {
            data.map(item => {
                <SingleProduct
            item={item}
            key={item.id}
            images={item.images[0]}
            title={item.title}
            originalPrice={item.original_price}
            discountedPrice={item.discounted_price}
            rating={item.rating}
          />
            })
        }
    </div>
  )
}
