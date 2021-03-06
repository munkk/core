import * as Match from './match';

describe('Match', () => {

	let column = {
		key: 'value'
	};

	let columns = [column];

	let test = {
		key: {
			expression: {
				kind: 'condition',
				op: 'equals',
				right: 123,
				left: 'value'
			}
		},
	};

	let model = {
		filter: () => {
			return {
				by: test,
				assertFactory: () => ({
					equals: (x, y) => x === y,
					lessThan: (x, y) => x < y,
					isNull: x => x === '' || x === null || x === undefined || isNaN(x) || isFinite(x)
				})
			};
		},
		data: () => {
			return {
				columns: columns
			}
		}
	};

	let context = {
		model: model,
		valueFactory: value => value => value,
		labelFactory: value => value => value,
	};

	describe('match', () => {
		it('should return true if there are matching entities', () => {
			let test = Match.match(context);
			let result = test(123);
			expect(result).to.equal(true);
		});

		it('should return false if there are no matching entities', () => {
			let test = Match.match(context);
			let result = test(321);
			expect(result).to.equal(false);
		});
	});
});