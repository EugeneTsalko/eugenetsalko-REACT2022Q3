import React from 'react';
import './Form.scss';
import { FormFields } from './Form.types';

type FormValues = {
  firstName: string | undefined;
  lastName: string | undefined;
  birthDate: string | undefined;
  location: string | undefined;
  dataAgree: boolean | undefined;
  sex: string | undefined;
  photo: string | undefined;
};

type FormState = {
  disabled: boolean;
  image: string;
  message: string;
};

type FormProps = {
  onChange: (e: FormValues) => void;
};

export class Form extends React.Component<FormProps, FormState> {
  fileRef: React.RefObject<HTMLInputElement>;
  firstNameRef: React.RefObject<HTMLInputElement>;
  lastNameRef: React.RefObject<HTMLInputElement>;
  dateRef: React.RefObject<HTMLInputElement>;
  locationRef: React.RefObject<HTMLSelectElement>;
  maleRef: React.RefObject<HTMLInputElement>;
  femaleRef: React.RefObject<HTMLInputElement>;
  dataAgreeRef: React.RefObject<HTMLInputElement>;
  messageRef: React.RefObject<HTMLDivElement>;

  constructor(props: FormProps) {
    super(props);
    this.state = {
      disabled: true,
      image: '',
      message: '',
    };
    this.firstNameRef = React.createRef();
    this.lastNameRef = React.createRef();
    this.dateRef = React.createRef();
    this.locationRef = React.createRef();
    this.maleRef = React.createRef();
    this.femaleRef = React.createRef();
    this.dataAgreeRef = React.createRef();
    this.fileRef = React.createRef();
    this.messageRef = React.createRef();
  }

  setDisabled = (option: boolean) => {
    if (option) {
      this.setState({ disabled: true });
    } else {
      this.setState({ disabled: false });
    }
  };

  validate = (data: Record<string, unknown>) => {
    const isValid = Object.values(data).every((value) => value !== '');

    if (isValid) {
      this.setDisabled(false);
      return true;
    } else {
      this.setDisabled(true);
      return false;
    }
  };

  detectSex = () => {
    if (!this.maleRef.current?.checked && !this.femaleRef.current?.checked) {
      return '';
    } else if (this.maleRef.current?.checked) {
      return 'male';
    } else return 'female';
  };

  handleImage = (event: React.FormEvent) => {
    const target = event.target as HTMLInputElement;
    if (target.files && target.files[0]) {
      this.setState({
        image: URL.createObjectURL(target.files[0]),
      });
    }
  };

  updateMessage = () => {
    this.setState({ message: 'The data has been saved' });
    setTimeout(() => this.setState({ message: '' }), 3000);
  };

  handleChange: React.FormEventHandler<HTMLFormElement & FormFields> = () => {
    const formData = {
      firstName: this.firstNameRef.current?.value,
      lastName: this.lastNameRef.current?.value,
      birthDate: this.dateRef.current?.value,
      location: this.locationRef.current?.value,
      sex: this.detectSex(),
    };
    this.validate(formData);
  };

  handleSubmit: React.FormEventHandler<HTMLFormElement & FormFields> = (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    const formData: FormValues = {
      firstName: this.firstNameRef.current?.value,
      lastName: this.lastNameRef.current?.value,
      birthDate: this.dateRef.current?.value,
      location: this.locationRef.current?.value,
      dataAgree: this.dataAgreeRef.current?.checked,
      sex: this.detectSex(),
      photo: this.state.image,
    };

    this.props.onChange(formData);

    this.updateMessage();

    form.reset();
    this.setDisabled(true);
  };

  render() {
    return (
      <>
        <form className="form" onSubmit={this.handleSubmit} onChange={this.handleChange}>
          <h1 className="form__title">Create card</h1>

          <label htmlFor="firstName">First name:</label>
          <input
            ref={this.firstNameRef}
            type="text"
            id="firstName"
            name="firstName"
            className="form__text-input"
            placeholder="Enter your first name..."
            autoComplete="off"
            required
          />

          <label htmlFor="lastName">Last name:</label>
          <input
            ref={this.lastNameRef}
            type="text"
            id="lastName"
            name="lastName"
            className="form__text-input"
            placeholder="Enter your last name..."
            autoComplete="off"
            required
          />

          <label htmlFor="birthDate">Birth date:</label>
          <input
            ref={this.dateRef}
            type="date"
            id="birthDate"
            name="birthDate"
            className="form__date-input"
            required
          />

          <label htmlFor="location">Location:</label>
          <select
            className="form__select"
            id="location"
            name="location"
            required
            defaultValue={''}
            ref={this.locationRef}
          >
            <option disabled value="">
              Choose your location...
            </option>
            <option>Europe</option>
            <option>Asia</option>
            <option>Africa</option>
            <option>Australia</option>
            <option>Antarctica</option>
            <option>North America</option>
            <option>South America</option>
          </select>

          <fieldset>
            <legend>Your sex:</legend>
            <input
              type="radio"
              id="radio1"
              name="sex"
              className="form__radio-input"
              required
              ref={this.maleRef}
            />
            <label htmlFor="radio1">Male</label>
            <input
              type="radio"
              id="radio2"
              name="sex"
              className="form__radio-input"
              ref={this.femaleRef}
            />
            <label htmlFor="radio2">Female</label>
          </fieldset>

          <label htmlFor="photo">Profile photo:</label>
          <input
            type="file"
            className="form__file-input"
            id="photo"
            name="photo"
            ref={this.fileRef}
            onChange={this.handleImage}
          />

          <label htmlFor="dataAgree">
            <input
              type="checkbox"
              name="dataAgree"
              id="dataAgree"
              className="form__checkbox-input"
            />
            I consent to my personal data
          </label>

          <button
            type="submit"
            className={(this.state.disabled && 'form__btn form__btn--disabled') || 'form__btn'}
          >
            Create
          </button>
        </form>
        <div className="form__message" ref={this.messageRef}>
          {this.state.message}
        </div>
      </>
    );
  }
}
