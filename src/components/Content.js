import { Card } from "../components/Card";

export const Content = ({products}) => {

  const getAllProducts = () => {
    return products.map(item => {
      return <Card key={item.id} title={item.title} price={item.price} imageUrl={item.imageUrl}/>
    });
  }

  return (
    <main>
        <section className="content">
          <div className="content-header">
            <h1 className="content-title">Все кроссовки</h1>
            <div className="content-search">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m15.25 15.25-3.364-3.37 3.364 3.37Zm-1.5-7.875a6.375 6.375 0 1 1-12.75 0 6.375 6.375 0 0 1 12.75 0v0Z" stroke="#E4E4E4" strokeWidth="2" strokeLinecap="round"/></svg>
              <input type="text" placeholder="Поиск..."/>
            </div>
          </div>
          <div className="content-wrapper">
            {getAllProducts()}
          </div>
        </section>
    </main> 
  )
}