import '@testing-library/jest-dom';
import { getHeroeByIdAsync } from '../../base/09-promesas';
import heroes from '../../data/heroes';

describe('Pruebas con promesas', () => {
	test('getHeroeByIdAsync debe devolver un Héroe Async', (done) => {
		const id = 1;

		getHeroeByIdAsync(id).then((heroe) => {
			expect(heroe).toBe(heroes[0]);
			done();
		});
	});

	test('Debe obtener un error si el héroe por id no existe', (done) => {
		const id = 10;
		getHeroeByIdAsync(id).catch((err) => {
			expect(err).toBe('No se pudo encontrar el héroe');
			done();
		});
	});
});
