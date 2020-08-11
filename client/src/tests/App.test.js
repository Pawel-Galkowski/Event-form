/* eslint-disable require-jsdoc */
import React from 'react';
import {fireEvent} from '@testing-library/react';
import App from '../App';
import TestRenderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';

test('React test', async () => {
  const testValue = null;
  expect(testValue).toBeNull();
});

class RenderApp extends React.Component {
  render() {
    return <App />;
  }
}

const testInstance = TestRenderer.create(RenderApp);

describe('Render of components', () => {
  it('render correctly', () => {
    expect(testInstance.props({placeholder: 'Name'})).toBeTruthy();
    expect(testInstance.props({placeholder: 'Surname'})).toBeTruthy();
    expect(testInstance.props({placeholder: 'Email'})).toBeTruthy();
    expect(testInstance.props({id: 'date'})).toBeTruthy();
    expect(testInstance.props({id: 'send'})).toBeTruthy();
  });
});

describe('Test Input values', () => {
  it('updates on change', () => {
    const nameInput = testInstance.props({placeholder: 'Name'});
    const surnameInput = testInstance.props({placeholder: 'Surname'});
    const emailInput = testInstance.props({placeholder: 'Email'});
    const dateInput = testInstance.props({id: 'date'});

    fireEvent.change(nameInput, {
      target: {
        value: 'inputTest',
      },
    });
    expect(nameInput.value).toBe('inputTest');

    fireEvent.change(surnameInput, {
      target: {
        value: 'surnameInput',
      },
    });
    expect(surnameInput.value).toBe('surnameInput');

    fireEvent.change(emailInput, {
      target: {
        value: 'email@input.pl',
      },
    });
    expect(emailInput.value).toBe('email@input.pl');

    fireEvent.change(dateInput, {
      target: {
        value: '2020-08-20',
      },
    });
    expect(dateInput.value).toBe('2020-08-20');
  });
});

describe('submit button', () => {
  it('Valid trigger formSubmit', () => {
    const wrapper = TestRenderer.create(RenderApp);
    const form = wrapper.find('form').first();

    const name = wrapper.find('input[name="name"]');
    name.instance().value = 'cerny';
    name.simulate('change', name);

    const surname = wrapper.find('input[name="surname"]');
    surname.instance().value = 'cerny';
    surname.simulate('change', surname);

    const email = wrapper.find('input[name="email"]');
    email.instance().value = 'email@input.pl';
    email.simulate('change', email);

    const date = wrapper.find('input[name="date"]');
    date.instance().value = '2020-08-20';
    date.simulate('change', date);

    form.simulate('submit');
    expect(wrapper).toBeTruthy();
  });

  it('Invalid formSubmit', () => {
    const wrapper = TestRenderer.create(RenderApp);
    const form = wrapper.find('form').first();

    const surname = wrapper.find('input[name="surname"]');
    surname.instance().value = 'cerny';
    surname.simulate('change', surname);

    const email = wrapper.find('input[name="email"]');
    email.instance().value = 'email@input.pl';
    email.simulate('change', email);

    const date = wrapper.find('input[name="date"]');
    date.instance().value = '2020-08-20';
    date.simulate('change', date);

    form.simulate('submit');
    expect(wrapper.find('.wrong-data').first().text()).toBe(
        'Name cannot be blank',
    );
  });
});
