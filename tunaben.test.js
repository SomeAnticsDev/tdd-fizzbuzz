/**
 * Like FizzBuzz, but not.
 * @param {Number} num FizzBuzzable number
 * @returns {string}
 */
function tunaben(num) {
	if (num % 15 === 0) {
		return 'tunaben';
	}

	if (num % 3 === 0) {
		return 'tuna';
	}

	if (num % 5 === 0) {
		return 'ben';
	}
}

describe("tunaben", () => {
    it("should return 'tuna' if given 3", () => {
        //Setup
        const expected = "tuna";

        //Exercise
        const actual = tunaben(3);

        //Assertion
        expect(actual).toBe(expected);

        //Teardown
        //None for this test
        //Today's example is simple so we won't have any teardown.
        //Teardown is most commonly needed once you introduce mocking or dependency injection.
    });

	it("should return 'tuna' if given 6", () => {
        //Setup
        const expected = "tuna";

        //Exercise
        const actual = tunaben(6);

        //Assertion
        expect(actual).toBe(expected);

        //Teardown
        //None for this test
        //Today's example is simple so we won't have any teardown.
        //Teardown is most commonly needed once you introduce mocking or dependency injection.
    });

	it("should return 'tuna' if given 27", () => {
        //Setup
        const expected = "tuna";

        //Exercise
        const actual = tunaben(27);

        //Assertion
        expect(actual).toBe(expected);

        //Teardown
        //None for this test
        //Today's example is simple so we won't have any teardown.
        //Teardown is most commonly needed once you introduce mocking or dependency injection.
    });

	it("should return 'ben' if given 5", () => {
        //Setup
        const expected = "ben";

        //Exercise
        const actual = tunaben(5);

        //Assertion
        expect(actual).toBe(expected);

        //Teardown
        //None for this test
        //Today's example is simple so we won't have any teardown.
        //Teardown is most commonly needed once you introduce mocking or dependency injection.
    });

	it("should return 'ben' if given 20", () => {
        //Setup
        const expected = "ben";

        //Exercise
        const actual = tunaben(20);

        //Assertion
        expect(actual).toBe(expected);

        //Teardown
        //None for this test
        //Today's example is simple so we won't have any teardown.
        //Teardown is most commonly needed once you introduce mocking or dependency injection.
    });

	it("should return 'ben' if given 95", () => {
        //Setup
        const expected = "ben";

        //Exercise
        const actual = tunaben(95);

        //Assertion
        expect(actual).toBe(expected);

        //Teardown
        //None for this test
        //Today's example is simple so we won't have any teardown.
        //Teardown is most commonly needed once you introduce mocking or dependency injection.
    });

	it("should return 'tunaben' if given 15", () => {
		const expected = 'tunaben';

		const actual = tunaben(15);

		expect(actual).toBe(expected);
	});

	it("should return 'tunaben' if given 45", () => {
		const expected = 'tunaben';

		const actual = tunaben(45);

		expect(actual).toBe(expected);
	});

	it("should return 'tunaben' if given 60", () => {
		const expected = 'tunaben';

		const actual = tunaben(60);

		expect(actual).toBe(expected);
	});
});