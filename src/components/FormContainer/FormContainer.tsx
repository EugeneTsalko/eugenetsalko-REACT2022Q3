import { Form } from 'components/Form/Form';
import PersonCard from 'components/PersonCard/PersonCard';
import React from 'react';
import './FormContainer.scss';

interface IPersonProps {
  firstName: string | undefined;
  lastName: string | undefined;
  birthDate: string | undefined;
  location: string | undefined;
  dataAgree: boolean | undefined;
  sex: string | undefined;
  photo: string | undefined;
}

type Persons = Array<IPersonProps> | null;
type FormProps = Record<string, unknown>;
type FormState = { persons: Persons };

export class FormContainer extends React.Component<FormProps, FormState> {
  constructor(props: FormProps) {
    super(props);
    this.state = {
      persons: null,
    };
  }

  handleChange = (person: IPersonProps) => {
    this.setState({
      persons: [...(this.state.persons || []), person],
    });
  };

  render() {
    return (
      <>
        <Form onChange={this.handleChange} />
        <div className="form-cards">
          {this.state.persons &&
            this.state.persons.map((person, index) => {
              return <PersonCard data={person} key={index}></PersonCard>;
            })}
        </div>
      </>
    );
  }
}
