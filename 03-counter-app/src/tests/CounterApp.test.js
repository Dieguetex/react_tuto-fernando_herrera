import '@testing-library/jest-dom';
import React from 'react';
import { shallow } from 'enzyme';
import CounterApp from '../CounterApp';

describe('Pruebas de  <CounterApp/>', () => {
	let wrapper = shallow(<CounterApp />);

	beforeEach(() => {
		wrapper = shallow(<CounterApp />);
	});

	test('Debe mostrar <CounterApp/> correctamente', () => {
		expect(wrapper).toMatchSnapshot();
	});

	test('Debe mostrar el valor por defecto de 100', () => {
		const wrapper = shallow(<CounterApp value={100} />);

		const counter = wrapper.find('h2').text().trim();

		expect(counter).toBe('100');
	});

	test('Debe de incrementar con el botón +1', () => {
		wrapper.find('button').at(0).simulate('click');
		const counter = wrapper.find('h2').text().trim();

		expect(counter).toBe('11');
	});

	test('Debe de decrementar con el botón -1', () => {
		wrapper.find('button').at(2).simulate('click');
		const counter = wrapper.find('h2').text().trim();

		expect(counter).toBe('9');
	});

	test('Debe de colocar el valor por defecto con el botón reset', () => {
		const wrapper = shallow(<CounterApp value={105} />);

		wrapper.find('button').at(0).simulate('click');
		wrapper.find('button').at(1).simulate('click');
		const counter = wrapper.find('h2').text().trim();

		expect(counter).toBe('105');
	});
});
