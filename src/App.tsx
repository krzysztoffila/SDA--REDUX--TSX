import Banner from './components/Banner';
import Button from './components/Button';
import EffectButton from './components/EffectButton';
import Form from './components/Form';
import Input from './components/Input';
import Link from './components/Link';
import SuperInput from './components/SuperInput';
// import List from './components/List';

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
      <Form />
      {/* <List/> */}
      <EffectButton />
      <SuperInput />
    </div>
  );
}

export default App;
