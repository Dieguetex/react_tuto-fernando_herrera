import '@testing-library/jest-dom';

import { getUser, getUsuarioActivo } from '../../base/05-funciones';

describe('Pruebas en 05-funciones', () => {
	test('getUser debe devolver un objeto', () => {
		const userTest = {
			uid: 'ABC123',
			username: 'El_Papi1502',
		};
		const user = getUser();

		expect(user).toEqual(userTest);
	});

	test('getUsuarioActivo debe devolver un Objeto', () => {
		const nombre = 'Carlos';
		const usuarioActivo = getUsuarioActivo(nombre);

		expect(usuarioActivo).toEqual({
			uid: 'ABC567',
			username: nombre,
		});
	});
});
