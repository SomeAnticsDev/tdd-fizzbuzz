import {tunaben} from './tunaben';

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

    it("should return 'tuna' if the the number passed in is divisible by 3", () => {
        expect(tunaben(3)).toBe("tuna");
    });

});