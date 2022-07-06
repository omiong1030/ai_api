import React from 'react'
import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

import "../../css/classification/dropdirectory.css"
import Image_Train from "./images/train.png"
import Image_Val from "./images/val.png"

export const DropDirectory = () => {

    const onDrop = useCallback((acceptedFiles) => {
        console.log(acceptedFiles);
    }, []);

    const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div>
        <h1>Classification/Train</h1>
        <div className='dropzone'>
            <div {...getRootProps()}>
                <input {...getInputProps()} name="train" />
                <img src={Image_Train} alt="フォルダ" className="sampleImg"></img>
            </div>
            <div {...getRootProps()}>
                  <input {...getInputProps()} name="train" />
                <img src={Image_Val} alt="フォルダ" className="sampleImg"></img>
            </div>
        </div>
    </div>
  );
}

