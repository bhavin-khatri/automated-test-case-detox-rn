import { device } from 'detox'


describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should show world screen after tap', async () => {
    await element(by.id('login-button')).tap();
    await device.reloadReactNative();
    await element(by.id('username-input')).replaceText('bhavin')
    await element(by.id('login-button')).tap();
    // await device.reloadReactNative();
    await element(by.id('username-input')).replaceText('bhavin')
    await element(by.id('password-input')).replaceText('bhavin')
    await element(by.id('login-button')).tap();
    // await device.reloadReactNative();
    await element(by.id('username-input')).replaceText('admin')
    await element(by.id('password-input')).replaceText('admin')
    await element(by.id('login-button')).tap();
  });
});
