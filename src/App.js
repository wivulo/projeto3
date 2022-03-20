import './App.css';
import profile from './profile.jpg';

function MyButton(){
  return (
    <button>Click me</button>
  );
}

// export default function App() {
//   return (
//     <div className="App">
//       <h1>Welcome to my App</h1>
//       <MyButton />
//     </div>
//   );
// }

const user = {
  name: 'Walter Ivulo',
  imageUrl: profile,
  imageSize: 90,
};

export default function Profile(){
  return (
    <div className='App'>
      <h1>{user.name}</h1>
      <img 
        className='avatar'
        src={user.imageUrl}
        alt={'photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
    </div>
  );
}

