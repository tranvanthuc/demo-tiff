import SampleTiff from './assets/rgb-3c-16b.tiff';

const App = () => {

  return (
    <div className='MyComponent'>
      <div className='header'>React sample</div>
      <img src={SampleTiff} alt='data'></img>
    </div>
  );
};

export default App;
