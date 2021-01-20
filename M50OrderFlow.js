module.exports = async function(context, commands) {
  var customerDetails = {
  	"postCode" : "SW11 2PN",
  	"houseNumber" : "14",
  	"sortCode1" : "11",
    "sortCode2" : "05",
    "sortCode3" : "97",
  	"accountNumber" : "01067810",
  	"accountName" : "MRS ELSIE SPENCER",
  	"title" : "Mrs",
  	"firstName" : "ELSIE",
  	"lastName" : "SPENCER",
    "dobDay" : "01",
    "dobMonth" : "01",
    "dobYear" : "1980",
  	"mobileNumber" : "7794605874",
  	"emailAddress" : "vaibhavi.jasolia@virginmedia.co.uk",
  	"securityWord" : "londonlondon"
  }

  await commands.navigate(
    'https://www.virginmedia.com/join/products'
  );

  await commands.measure.start('AvailabilityM50');

  await commands.click.byId('consent_prompt_submit');
  // find the select M50 Plan button and click it
  await commands.click.byXpathAndWait('//p[.=\'M50 Fibre Broadband\']/../following-sibling::div[2]//button');

  await commands.measure.stop();

  await commands.wait.byTime(2000);

  console.log(customerDetails.postCode + customerDetails.houseNumber);

  await commands.addText.byId(customerDetails.houseNumber, 'housenumber');
  await commands.addText.byId(customerDetails.postCode, 'postcode');

  await commands.click.byXpathAndWait('//button[@data-message-code=\'availability.confirm.address.findAddress\']');

  await commands.wait.byTime(2000);

  await commands.measure.start('InstallationM50');

  await commands.click.byXpathAndWait('//button[.=\'Yes, check availability\']');

  await commands.wait.byTime(2000);

  await commands.measure.stop();

  await commands.measure.start('CustomerDetailsM50');

  await commands.click.byXpathAndWait('//span[.=\'Continue\']/ancestor::button');

  await commands.wait.byTime(2000);

  await commands.measure.stop();

  await commands.wait.byTime(2000);

  await commands.measure.start('PaymentDetailsM50')

  await commands.click.byId('salutation');
  await commands.wait.byXpath('//select[@id=\'salutation\']/option[@value=2]',3000);
  await commands.click.byXpathAndWait('//select[@id=\'salutation\']/option[@value=2]');
  await commands.addText.byId(customerDetails.firstName, 'firstName');
  await commands.addText.byId(customerDetails.lastName, 'lastName');
  await commands.addText.byId(customerDetails.dobDay, 'smartDobDay');
  await commands.addText.byId(customerDetails.dobMonth, 'smartDobMonth');
  await commands.addText.byId(customerDetails.dobYear, 'smartDobYear');
  await commands.addText.byId(customerDetails.mobileNumber, 'phoneNumber');
  await commands.addText.byId(customerDetails.emailAddress, 'email');
  await commands.addText.byId(customerDetails.securityWord, 'securityQuestion');

  await commands.click.byXpathAndWait('//span[.=\'Continue\']/ancestor::button');

  await commands.wait.byTime(2000);

  return commands.measure.stop();

 /* await commands.wait.byId('accountHolderFullName',3000);

  await commands.measure.start('CreditCheckM50');

  await commands.addText.byId(customerDetails.accountName, 'accountHolderFullName');
  await commands.addText.byId(customerDetails.accountNumber, 'accountNumber');
  await commands.addText.byId(customerDetails.sortCode1, 'smartSortCode1');
  await commands.addText.byId(customerDetails.sortCode2, 'smartSortCode2');
  await commands.addText.byId(customerDetails.sortCode3, 'smartSortCode3');

  await commands.click.byId('authorise-check');

  await commands.click.byXpathAndWait('//span[.=\'Continue\']/ancestor::button');

  await commands.wait.byTime(2000);

  return commands.measure.stop();*/

};