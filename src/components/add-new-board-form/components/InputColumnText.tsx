import { TextField } from '@/components/text-field';
import React from 'react';
import { ImageEnum } from '@/utils/ImageEnum';
import {
  InputColumnTextContainer,
  InputColumnTextImage,
} from '@/components/add-new-board-form/components/addNewBoardForm.styled';

interface InputColumnTextProps {
  key: string;
  id: string;
  onDeleteColumnName: (id: string) => void;
  value: string;
  disabled?: boolean;
}

export const InputColumnText: React.FC<InputColumnTextProps> = ({
  key, id, onDeleteColumnName, value, disabled,
}) => (
  <InputColumnTextContainer>
    <TextField
      key={key}
      disabled={disabled}
      value={value}
      isError={false}
      placeholder="e.g. Column Name"
      id="Board Name"
    />
    <InputColumnTextImage
      onClick={() => onDeleteColumnName(id)}
      src={ImageEnum.CROSS}
      height={15}
      width={15}
      alt={key}
    />
  </InputColumnTextContainer>
);
