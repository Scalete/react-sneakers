function App() {
  return (
    <div className="wrapper">
      <header className="header">
        <div className="header-wrapper">
          <div className="header-content">
            <img src="./img/logo.png" alt="Logo" />
            <div className="header-text">
              <h3 className="header-title">REACT SNEAKERS</h3>
              <p className="header-description">Магазин лучших кроссовок</p>
            </div>
          </div>
          <ul className="header-menu">
            <li className="header-item">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.545 18.182a.818.818 0 1 0 0-1.637.818.818 0 0 0 0 1.637ZM16.546 18.182a.818.818 0 1 0 0-1.637.818.818 0 0 0 0 1.637ZM1 1h3.273l2.192 10.956a1.636 1.636 0 0 0 1.637 1.317h7.953a1.636 1.636 0 0 0 1.636-1.317L19 5.09H5.09" stroke="#9B9B9B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
              <span>500 грн.</span>
            </li>
            <li className="header-item">
              <svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.1 0c1.63 0 2.998.55 4.105 1.648 1.108 1.099 1.662 2.44 1.662 4.023 0 .775-.163 1.559-.489 2.35a13.462 13.462 0 0 1-1.075 2.11c-.391.613-1.05 1.405-1.98 2.374-.928.97-1.71 1.753-2.345 2.35-.635.599-1.653 1.511-3.054 2.74l-1.515 1.357-1.515-1.31c-1.368-1.26-2.378-2.188-3.03-2.786a53.412 53.412 0 0 1-2.37-2.35c-.928-.97-1.588-1.762-1.98-2.376a12.166 12.166 0 0 1-1.05-2.108A6.422 6.422 0 0 1 0 5.67c0-1.583.554-2.924 1.662-4.023C2.769.549 4.122 0 5.718 0c1.89 0 3.453.727 4.69 2.181C11.648.727 13.212 0 15.1 0Zm-4.593 16.092A169.312 169.312 0 0 0 14 12.917a46.75 46.75 0 0 0 2.419-2.496c.88-.97 1.49-1.818 1.832-2.545a5.134 5.134 0 0 0 .513-2.205c0-1.034-.35-1.89-1.05-2.569-.7-.679-1.572-1.018-2.615-1.018-.782 0-1.523.226-2.223.679-.7.452-1.197 1.034-1.49 1.745H9.431C9.17 3.797 8.69 3.215 7.99 2.763a4.11 4.11 0 0 0-2.272-.679c-1.043 0-1.906.34-2.59 1.018C2.443 3.781 2.1 4.637 2.1 5.671c0 .743.163 1.478.489 2.205.326.727.937 1.576 1.833 2.545.896.97 1.71 1.801 2.443 2.496a250.19 250.19 0 0 0 3.445 3.175l.098.097.098-.097Z" fill="#9B9B9B"/></svg>
            </li>
            <li className="header-item">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 10C0 4.579 4.579 0 10 0s10 4.579 10 10c0 3.19-1.592 6.078-4 7.924V18h-.102c-1.668 1.245-3.711 2-5.898 2s-4.23-.755-5.898-2H4v-.076C1.592 16.078 0 13.189 0 10Zm7.123 5.236a3.002 3.002 0 0 0-1.049 1.691A7.82 7.82 0 0 0 10 18a7.82 7.82 0 0 0 3.926-1.073A3.003 3.003 0 0 0 11 14.573H9a3.002 3.002 0 0 0-1.877.663Zm6.645-1.824a5.007 5.007 0 0 1 1.842 2.229C17.077 14.182 18 12.176 18 10c0-4.337-3.663-8-8-8s-8 3.663-8 8c0 2.176.923 4.182 2.39 5.641A5.007 5.007 0 0 1 9 12.573h2a5.007 5.007 0 0 1 2.768.839ZM6 8c0-2.28 1.72-4 4-4 2.28 0 4 1.72 4 4 0 2.28-1.72 4-4 4-2.28 0-4-1.72-4-4Zm2 0c0 1.178.822 2 2 2s2-.822 2-2-.822-2-2-2-2 .822-2 2Z" fill="#9B9B9B"/></svg>
            </li>
          </ul>
        </div>
      </header>

      <main>
        <div className="content">
          <div className="content-header">
            <h1 className="content-title">Все кроссовки</h1>
          </div>
          <div className="content-wrapper">
            <div className="card">
              <img src="./img/card-img.jpg" alt="Card" />
              <h5 className="card-title">Мужские Кроссовки Nike Blazer Mid Suede</h5>
              <div className="card-price">
                <div className="card-price-text">
                  <span>Цена:</span>
                  <b>3 499 грн.</b>
                </div>
                <button>
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x=".5" y=".5" width="31" height="31" rx="7.5" fill="#fff" stroke="#F2F2F2"/><path d="M20.665 15.131h-3.463v-3.463c0-1.335-2.07-1.335-2.07 0v3.463h-3.464c-1.335 0-1.335 2.071 0 2.071h3.463v3.463c0 1.335 2.071 1.335 2.071 0v-3.463h3.463c1.335 0 1.335-2.07 0-2.07Z" fill="#D3D3D3"/></svg>
                </button>
              </div>
            </div>
            <div className="card">
              <img src="./img/card-img.jpg" alt="Card" />
              <h5 className="card-title">Мужские Кроссовки Nike Blazer Mid Suede</h5>
              <div className="card-price">
                <div className="card-price-text">
                  <span>Цена:</span>
                  <b>3 499 грн.</b>
                </div>
                <button>
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x=".5" y=".5" width="31" height="31" rx="7.5" fill="#fff" stroke="#F2F2F2"/><path d="M20.665 15.131h-3.463v-3.463c0-1.335-2.07-1.335-2.07 0v3.463h-3.464c-1.335 0-1.335 2.071 0 2.071h3.463v3.463c0 1.335 2.071 1.335 2.071 0v-3.463h3.463c1.335 0 1.335-2.07 0-2.07Z" fill="#D3D3D3"/></svg>
                </button>
              </div>
            </div>
            <div className="card">
              <img src="./img/card-img.jpg" alt="Card" />
              <h5 className="card-title">Мужские Кроссовки Nike Blazer Mid Suede</h5>
              <div className="card-price">
                <div className="card-price-text">
                  <span>Цена:</span>
                  <b>3 499 грн.</b>
                </div>
                <button>
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x=".5" y=".5" width="31" height="31" rx="7.5" fill="#fff" stroke="#F2F2F2"/><path d="M20.665 15.131h-3.463v-3.463c0-1.335-2.07-1.335-2.07 0v3.463h-3.464c-1.335 0-1.335 2.071 0 2.071h3.463v3.463c0 1.335 2.071 1.335 2.071 0v-3.463h3.463c1.335 0 1.335-2.07 0-2.07Z" fill="#D3D3D3"/></svg>
                </button>
              </div>
            </div>
            <div className="card">
              <img src="./img/card-img.jpg" alt="Card" />
              <h5 className="card-title">Мужские Кроссовки Nike Blazer Mid Suede</h5>
              <div className="card-price">
                <div className="card-price-text">
                  <span>Цена:</span>
                  <b>3 499 грн.</b>
                </div>
                <button>
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x=".5" y=".5" width="31" height="31" rx="7.5" fill="#fff" stroke="#F2F2F2"/><path d="M20.665 15.131h-3.463v-3.463c0-1.335-2.07-1.335-2.07 0v3.463h-3.464c-1.335 0-1.335 2.071 0 2.071h3.463v3.463c0 1.335 2.071 1.335 2.071 0v-3.463h3.463c1.335 0 1.335-2.07 0-2.07Z" fill="#D3D3D3"/></svg>
                </button>
              </div>
            </div>
            <div className="card">
              <img src="./img/card-img.jpg" alt="Card" />
              <h5 className="card-title">Мужские Кроссовки Nike Blazer Mid Suede</h5>
              <div className="card-price">
                <div className="card-price-text">
                  <span>Цена:</span>
                  <b>3 499 грн.</b>
                </div>
                <button>
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x=".5" y=".5" width="31" height="31" rx="7.5" fill="#fff" stroke="#F2F2F2"/><path d="M20.665 15.131h-3.463v-3.463c0-1.335-2.07-1.335-2.07 0v3.463h-3.464c-1.335 0-1.335 2.071 0 2.071h3.463v3.463c0 1.335 2.071 1.335 2.071 0v-3.463h3.463c1.335 0 1.335-2.07 0-2.07Z" fill="#D3D3D3"/></svg>
                </button>
              </div>
            </div>
        </div>
        </div>
      </main>
    </div>
  );
}

export default App;
