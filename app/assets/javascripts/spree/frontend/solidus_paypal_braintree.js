// Placeholder manifest file.
// the installer will append this file to the app vendored assets here: vendor/assets/javascripts/spree/frontend/all.js'

window.SolidusPaypalBraintree = {

  setBraintreeApplePayContact: function(appleContact) {
    var apple_map = {
      locality: 'city',
      countryCode: 'country_code',
      familyName: 'last_name',
      givenName: 'first_name',
      postalCode: 'zip',
      administrativeArea: 'state_code',
    }
    for (var key in apple_map) {
      document.querySelector("#transaction_address_attributes_" + apple_map[key]).value = appleContact[key];
    }

    window.addressCon = appleContact;
    document.querySelector("#transaction_address_attributes_address_line_1").value = appleContact.addressLines[0];

    if(appleContact.addressLines.length > 1) {
      document.querySelector("#transaction_address_attributes_address_line_2").value = appleContact.addressLines[1];
    }

    document.querySelector("#transaction_phone").value = appleContact.phoneNumber;
    document.querySelector("#transaction_email").value = appleContact.emailAddress;
  },

  submitBraintreePayload: function(payload) {
    document.querySelector("#transaction_nonce").value = payload.nonce;
    document.querySelector("#transaction_payment_type").value = payload.type;
    document.querySelector('#new_transaction').submit();
  }
}
