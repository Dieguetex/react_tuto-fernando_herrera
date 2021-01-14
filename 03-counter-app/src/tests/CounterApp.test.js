import '@testing-library/jest-dom';
import React from 'react';
import { shallow } from 'enzyme';
import CounterApp from '../CounterApp';

describe('Pruebas de  <CounterApp/>', () => {
	test('Debe mostrar <CounterApp/> correctamente', () => {
		const wrapper = shallow(<CounterApp />);

		expect(wrapper).toMatchSnapshot();
	});

	test('Debe mostrar el valor por defecto de 100', () => {
		const wrapper = shallow(<CounterApp value={100} />);

		const counter = wrapper.find('h2').text().trim();

		expect(counter).toBe('100');
	});
});
