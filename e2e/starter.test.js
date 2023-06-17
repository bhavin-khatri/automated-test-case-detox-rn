describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should show world screen after tap', async () => {
    await element(by.id('loginBtnTestId')).tap();
    await device.reloadReactNative();
    await element(by.id('userNameTestId')).replaceText('bhavin')
    await element(by.id('loginBtnTestId')).tap();
    await device.reloadReactNative();
    await element(by.id('userNameTestId')).replaceText('bhavin')
    await element(by.id('passwordTestId')).replaceText('bhavin')
    await element(by.id('loginBtnTestId')).tap();
    await device.reloadReactNative();
    await element(by.id('userNameTestId')).replaceText('admin')
    await element(by.id('passwordTestId')).replaceText('admin')
    await element(by.id('loginBtnTestId')).tap();
    await device.reloadReactNative();
  });
});
