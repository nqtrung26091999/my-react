import { useState, useMemo } from "react";

function App() {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [products, setProducts] = useState([])

  const handleOnclick = () => {
    setProducts([...products, {
      name,
      price: +price
    }])
  }

  const total = useMemo(() => {
    const result = products.reduce((result, product) => {
      console.log("re-total")
      return result + product.price
    }, 0)
    return result
  }, [products])
  
  console.log(products);

  return (
    <div style={{ padding: 32 }}>
      <input
        value={name}
        placeholder="Nhập tên"
        onChange={(e) => setName(e.target.value)}
      />
      <br/>
      <input
        value={price}
        placeholder="Nhập giá"
        onChange={(e) => setPrice(e.target.value)}
      />
      <br/>
      <button
        onClick={handleOnclick}
      >
        Add
      </button>
      <br/>
      Total: {total}
      <br/>
      <ul>
        {products.map((product, index) => (
          <li key={index}>{product.name} - {product.price}</li>
        ))}
      </ul>
    </div>
  )
}

export default App;
