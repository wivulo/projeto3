import './App.css';

const products = [
  {title: 'Rama', isFruit: false, id: 1},
  {title: 'Ginboa', isFruit: false, id: 2},
  {title: 'Maça', isFruit: true, id: 3},
];

export default function ShopingList(){
  const listItem = products.map(product => 
    <li key={product.id} style={{color: product.isFruit ? 'magenta' : 'darkgreen'}}>
      {product.title}
    </li>
  );


  return (
    <div className='App'>
      <ul>{listItem}</ul>
    </div>
  );
}

