import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';

describe('Pruebas de <GifGridItem />', () => {
	const title = 'Un título';
	const url = 'https://localhost/algo.jgp';
	let wrapper = shallow(<GifGridItem title={title} url={url} />);

	test('Debe mostrar < GifGridItem /> correctamente', () => {
		expect(wrapper).toMatchSnapshot();
	});

	test('Debe de tener un párrafo con el title', () => {
		const p = wrapper.find('p');
		expect(p.text().trim()).toBe(title);
	});

	test('Debe de tener la imágen igual al url y alt de los props', () => {
		const img = wrapper.find('img');

		expect(img.prop('src')).toBe(url);
		expect(img.prop('alt')).toBe(title);
	});

	test('Debe tener animate__fadeIn', () => {
		const div = wrapper.find('div');

		expect(div.hasClass('animate__fadeIn')).toBe(true);
	});
});
