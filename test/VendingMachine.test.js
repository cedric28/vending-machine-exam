const vm = require("../src/VendingMachine");
const wallet = require("../src/Wallet");

// Constants
const TWO_DOLLAR_ACCESSOR = 'TwoDollars';
const ONE_DOLLAR_ACCESSOR = 'OneDollar';
const HALF_ACCESSOR = 'Half';
const TWENTY_CENTS_ACCESSOR = 'TwentyCents';
const DIME_ACCESSOR = 'Dime';

describe('Vending Machine tests', () => {
    let coin1;
    let coin2;
    let coin3;
    let coin4;
    beforeEach(() => {
        coin1 = wallet.addMoneyWallet(ONE_DOLLAR_ACCESSOR, 3)
        coin2 = wallet.addMoneyWallet(HALF_ACCESSOR, 1)
        coin3 = wallet.addMoneyWallet(TWENTY_CENTS_ACCESSOR, 1)
        coin4 = wallet.addMoneyWallet(DIME_ACCESSOR, 1)
    });

    describe('Successful Purchase Item', () => {
        test("Buy Caramel and show change", () => {
            expect(vm.purchaseItem(1, 3.8)).toEqual([
                { name: 'Caramel', price: 2.5 },
                1.3
            ]);
        });
        test('Buy Hazelnut and show change', () => {
            expect(vm.purchaseItem(2, 3.8)).toEqual([
                { name: 'Hazelnut', price: 3.1 },
                0.7
              ]);
        });
        test('Organic Raw and show change', () => {
            expect(vm.purchaseItem(3, 3.8)).toEqual([
                { name: 'Organic Raw', price: 2},
                1.8
              ]);
        });
    });

    describe('Failed Purchase Item', () => {
        test("Buy Item not existing in machine", () => {
            expect(vm.purchaseItem(10, 3.8)).toEqual(false);
        });

        test("Buy Item with low wallet balance", () => {
            expect(vm.purchaseItem(1, 0.2)).toEqual(false);
        });
    });
});