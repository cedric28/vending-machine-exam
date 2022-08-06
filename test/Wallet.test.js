const wallet = require("../src/Wallet");
// Constants
const TWO_DOLLAR_ACCESSOR = 'TwoDollars';
const ONE_DOLLAR_ACCESSOR = 'OneDollar';
const HALF_ACCESSOR = 'Half';
const TWENTY_CENTS_ACCESSOR = 'TwentyCents';
const DIME_ACCESSOR = 'Dime';

describe('Wallet tests', () => {
    describe('Successful Insert Coins in Wallet', () => {
        test("Deposit 2 two dollar coins", () => {
        expect(wallet.addMoneyWallet(TWO_DOLLAR_ACCESSOR,2)).toEqual(true);
        });
        test('Deposit 5 one dollar coins', () => {
            expect(wallet.addMoneyWallet(ONE_DOLLAR_ACCESSOR, 5)).toEqual(true);
        });
        test('Deposit 5 half cents', () => {
            expect(wallet.addMoneyWallet(HALF_ACCESSOR, 5)).toEqual(true);
        });
        test('Deposit 5 Twenty Cents', () => {
            expect(wallet.addMoneyWallet(TWENTY_CENTS_ACCESSOR, 5)).toEqual(true);
        });
        test('Deposit 5 dimes', () => {
            expect(wallet.addMoneyWallet(DIME_ACCESSOR, 5)).toEqual(true);
        });
    });

    describe('Failed Insert Coins in Wallet', () => {
        test("Deposit 5 two dollar coins reached limit", () => {
            expect(wallet.addMoneyWallet(TWO_DOLLAR_ACCESSOR,5)).toEqual(false);
        });

        test('Deposit 10 one dollar coins reached limit', () => {
            expect(wallet.addMoneyWallet(ONE_DOLLAR_ACCESSOR, 10)).toEqual(false);
        });

        test('Deposit 60 half cents reached limit', () => {
            expect(wallet.addMoneyWallet(HALF_ACCESSOR, 60)).toEqual(false);
        });

        test('Deposit 60 Twenty Cents reached limit', () => {
            expect(wallet.addMoneyWallet(TWENTY_CENTS_ACCESSOR, 60)).toEqual(false);
        });
        
        test('Deposit 60 dimes reached limit', () => {
            expect(wallet.addMoneyWallet(DIME_ACCESSOR, 60)).toEqual(false);
        });

        test('Deposit 10 nickel($5c) invalid data ', () => {
            expect(wallet.addMoneyWallet('Nickel', 10)).toEqual(false);
        });
    });
});