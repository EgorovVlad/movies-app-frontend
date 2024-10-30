import { useRef } from 'react';

import { useUploader } from '@/shared/FileUploader/api/useUploader';
import IconDownload from '@/lib/icons/IconDownload';

import type { TFileUploaderProps } from './types';
import styles from './styles.module.css';

export const FileUploader = (props: TFileUploaderProps) => {
  const { style } = props;
  const dropdAreaRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const { onSelect, onChange } = useUploader({ targetRef: dropdAreaRef, inputRef });

  return (
    <>
      <div
        ref={(node) => {
          if (node) {
            dropdAreaRef.current = node;
          }
        }}
        className={styles.container}
        style={style}
        onClick={onSelect}
      >
        <IconDownload className={styles.icon} />
        <div className={styles.text}>Drop other image here</div>
      </div>

      <input
        hidden
        ref={(node) => {
          if (node) {
            inputRef.current = node;
          }
        }}
        type="file"
        onChange={onChange}
      />
    </>
  );
};
