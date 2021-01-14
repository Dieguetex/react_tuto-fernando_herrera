import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import PrimeraApp from '../PrimeraApp';

describe('Pruebas de <PrimeraApp />', () => {
	// test('Debe mostrar el mensaje de "Hola soy Goku"', () => {
	// 	const saludo = 'Hola soy Goku';
	// 	const { getByText } = render(<PrimeraApp saludo={saludo} />);
	// 	expect(getByText(saludo)).toBeInTheDocument();
	// });

	test('Debe mostrar <PrimeraApp /> correctamente', () => {
		const saludo = 'Hola soy Goku';
		const wrapper = shallow(<PrimeraApp saludo={saludo} />);

		expect(wrapper).toMatchSnapshot();
	});

	test('Debe mostrar el subtítulo enviado por props', () => {
		const saludo = 'Hola soy Goku';
		const subtitulo = 'Soy un subtítulo';
		const wrapper = shallow(
			<PrimeraApp saludo={saludo} subtitulo={subtitulo} />
		);

		const textoParrafo = wrapper.find('p').text();

		expect(textoParrafo).toBe(subtitulo);
	});
});
