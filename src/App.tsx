import Banner from './components/Banner';
import Button from './components/Button';
import Input from './components/Input';
import Link from './components/Link';

function App() {
  const handleButtonClick = () => {
    console.log('Button clicked!');
  };

  return (
    <div className="App">
      <Banner text="Welcome on my Page" />
      <Button onClick={handleButtonClick}>Click me</Button>
      <Link link="#">Come to my Web Page!</Link>
      <Input />
    </div>
  );
}

export default App;
