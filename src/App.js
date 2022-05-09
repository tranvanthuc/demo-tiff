import SampleTiff from './assets/rgb-3c-16b.tiff';
import PreviewFile from './components/PreviewFile';

const App = () => {
  return (
    <div className='MyComponent'>
      <div className='header'>React sample</div>
      <img src={SampleTiff} alt='data'></img>
      <PreviewFile />
    </div>
  );
};

export default App;
