import './category.css'
import { FooterElement, Menu } from '../../components'
import { Link, useParams } from'react-router-dom'

function Category({ categories }) {
  const { category } = useParams()
  const { title, products } = categories[category] || []

  const reversedProducts = [...products].reverse();

  const elements = reversedProducts.map((product, index) => {
    const isEvenIndex = index % 2 === 0;
    return(
      <div className={`category-product-wrapper ${isEvenIndex ? 'even-index' : 'odd-index'}`} key={product.id}>
        <div>
          <img className='product-img' src={product.categoryImage.desktop} alt="" />
        </div>
        <div className='text-left'>
          {product.new && (
            <p className='new-product'> 
              new product
            </p>
          )}
          <h2 className='category-product-title'>
            {product.name}
          </h2>
          <p className='category-product-description'>
            {product.description}
          </p>
          <Link to={product.slug}>
            <button className='category-product-button btn-default-1'>
              see product
            </button>
          </Link>
        </div>
      </div>
    )
  })


  return (
    <div>
      <header className='category-header'>
        <h2 className='header-title'>
          {title}
        </h2>
      </header>
      <section className='category-section max-container'>
        {elements} 
      </section>

      <section>
        <Menu />
      </section>
      <FooterElement /> 
    </div>
  )
}

export default Category