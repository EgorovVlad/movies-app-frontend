'use client';

import { type MutableRefObject, useEffect } from 'react';
import { upload } from '@/app/actions/upload';

type TArgs = {
  targetRef: MutableRefObject<HTMLDivElement | null>;
  inputRef: MutableRefObject<HTMLInputElement | null>;
}

type TResult = {
  onSelect: () => void;
  onChange: () => void;
  onUpload: (file: File) => Promise<any>;
};

const clearFileList = (inputRef: MutableRefObject<HTMLInputElement | null>) => {
  if (inputRef?.current) {
    inputRef.current.files = null;
  }
};

export const useUploader = (args: TArgs): TResult => {
  const { targetRef, inputRef } = args;


  const onDrop = (e: any) => {
    e.preventDefault();

    const files = e.dataTransfer.files;

    console.log(files);
  };

  const onSelect = () => {
    inputRef.current?.click();

    console.log(inputRef?.current?.files)
  };

  const onChange = () => {
    clearFileList(inputRef);

    console.log(inputRef?.current?.files)
  };

  const onUpload = async (file: File) => {
    const response = await upload(file);

    if (response) {
      clearFileList(inputRef);
    }
  };

  const preventDefaults = <T extends Event>(e: T) => {
    e.preventDefault();
    e.stopPropagation();
  }

  useEffect(() => {
    const dropArea = targetRef?.current;
    // Preventing default browser behavior when dragging a file over the container
    dropArea?.addEventListener('dragover', preventDefaults);
    dropArea?.addEventListener('dragenter', preventDefaults);
    dropArea?.addEventListener('dragleave', preventDefaults);

    // Handling dropping files into the area
    dropArea?.addEventListener('drop', onDrop);

    return () => {
      dropArea?.removeEventListener('dragover', preventDefaults);
      dropArea?.removeEventListener('dragenter', preventDefaults);
      dropArea?.removeEventListener('dragleave', preventDefaults);
      dropArea?.removeEventListener('drop', onDrop);
    };
  }, []);

  return {
    onSelect,
    onChange,
    onUpload,
  };
};
