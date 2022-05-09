import { useState, useEffect } from 'react';

const ImageUpload = () => {
  console.log('window.UTIF', window.UTIF);
  const UTIF = window.UTIF;
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();

  // create a preview as a side effect, whenever selected file is changed
  useEffect( () => {
    async function fetchData() {
      if (!selectedFile) {
        setPreview(undefined);
        return;
      }
  
      const buff = await selectedFile.arrayBuffer();
      const data = UTIF.bufferToURI(buff)
      setPreview(data);
    }
    fetchData();
    

    // free memory when ever this component is unmounted
    // return () => URL.revokeObjectURL(objectUrl);
  }, [UTIF, selectedFile]);

  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }

    // I've kept this example simple by using the first image instead of multiple
    setSelectedFile(e.target.files[0]);
  };

  return (
    <div>
      <input type='file' onChange={onSelectFile} />
      {selectedFile && <img src={preview} alt='data' />}
    </div>
  );
};

export default ImageUpload;