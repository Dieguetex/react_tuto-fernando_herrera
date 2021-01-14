import '@testing-library/jest-dom';
import heroes from '../../data/heroes';
import { getHeroeById, getHeroesByOwner } from '../../base/08-imp-exp';

describe('Pruebas de funciones de Héroes', () => {
	test('Debe devolver un héroe por id', () => {
		const id = 1;
		const heroe = getHeroeById(id);

		const heroeData = heroes.find((h) => h.id === id);

		expect(heroe).toEqual(heroeData);
	});

	test('Debe devolver un undefined si el id no existe', () => {
		const id = 10;
		const heroe = getHeroeById(id);

		expect(heroe).toBeUndefined();
	});

	test('Debe devolver un array con los héroes de DC', () => {
		const owner = 'DC';
		const heroes = getHeroesByOwner(owner);

		const heroesData = heroes.filter((h) => h.owner === owner);

		expect(heroes).toEqual(heroesData);
	});

	test('Debe devolver un array con los héroes de Marvel', () => {
		const owner = 'Marvel';
		const heroes = getHeroesByOwner(owner);

		expect(heroes.length).toBe(2);
	});
});
