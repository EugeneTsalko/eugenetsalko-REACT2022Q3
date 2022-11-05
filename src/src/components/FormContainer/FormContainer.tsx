import { Form } from 'components/Form/Form';
import PersonCard from 'components/PersonCard/PersonCard';
import React, { useState } from 'react';
import './FormContainer.scss';
import { IPersonProps } from './FormContainer.types';

export const FormContainer = () => {
  const [persons, setPersons] = useState<IPersonProps[]>();

  const handleChange = (person: IPersonProps) => {
    setPersons([...(persons || []), person]);
  };

  return (
    <>
      <Form onChange={handleChange} />
      <div className="form-cards" data-testid="react-formcards">
        {persons &&
          persons.map((person, index) => {
            return <PersonCard data={person} key={index}></PersonCard>;
          })}
      </div>
    </>
  );
};
