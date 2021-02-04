import React from 'react';
import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';

describe('Pruebas en <AddCategoy />', () => {
	const setCategories = () => {};
	const wrapper = shallow(<AddCategory setCategories={setCategories} />);

	test('Debe mostrarse correctamente', () => {
		expect(wrapper).toMatchSnapshot();
	});

	test('should Debe de cambiar la caja de texto', () => {
		const input = wrapper.find('input');
		const value = 'hola mundo';

		input.simulate('change', { target: { value } });

		expect(wrapper.find('p').text().trim()).toBe(value);
	});
});
