import Banner from './components/Banner';
import Button from './components/Button';

function App() {
  const handleButtonClick = () => {
    console.log('Button clicked!');
  };

  return (
    <div className="App">
      <Banner text="Welcome on my Page" />
      <Button onClick={handleButtonClick}>Click me</Button>
    </div>
  );
}

export default App;
