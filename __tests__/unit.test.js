import {
    isPhoneNumber,
    isEmail,
    isStrongPassword,
    isDate,
    isHexColor,
  } from '../code-to-unit-test/unit-test-me';

// isPhoneNumber
test('UCSD phone number', () => {
    expect(isPhoneNumber(`858-534-2230`)).toBe(false); // wrong! <-------------------
});
test('CSE phone number', () => {
    expect(isPhoneNumber(`858-534-8872`)).toBe(true);
});
test('phone number with letters', () => {
    expect(isPhoneNumber(`abc-def-gh1j`)).toBe(false);
});
test('short phone number', () => {
    expect(isPhoneNumber(`619`)).toBe(false);
});

// testing isEmail
test('gmail', () => {
    expect(isEmail('student@gmail.com')).toBe(true);
});
test('ucsd email', () => {
    expect(isEmail('student@ucsd.edu')).toBe(true);
});
test('gmail wrong syntax', () => {
    expect(isEmail('fake@gmailcom')).toBe(false);
});
test('ucsd email wrong syntax', () => {
    expect(isEmail('fake@@ucsd.edu')).toBe(false);
});


// testing isStrongPassword
test('good password', () => {
    expect(isStrongPassword('Good_Password')).toBe(true);
});
test('complex password', () => {
    expect(isStrongPassword('pass123word')).toBe(true);
});
test('long password', () => {
    expect(isStrongPassword('This_password_is_too_long')).toBe(false);
});
test('invalid characters in password', () => {
    expect(isStrongPassword('Not&Allowed')).toBe(false);
});

// testing isDate
test('today\'s date', () => {
    expect(isDate('5/8/2024')).toBe(true);
});
test('next year\'s date', () => {
    expect(isDate('05/08/2025')).toBe(true);
});
test('wrong characters in date', () => {
    expect(isDate('5-8-2024')).toBe(false);
});
test('wrong year in date', () => {
    expect(isDate('5/8/24')).toBe(false);
});

// testing isHexColor
test('white hex', () => {
    expect(isHexColor('#FFFFFF')).toBe(true);
});
test('black hex', () => {
    expect(isHexColor('000000')).toBe(true);
});
test('word color but not hex', () => {
    expect(isHexColor('red')).toBe(false);
});
test('too short hex', () => {
    expect(isHexColor('E')).toBe(false);
});
