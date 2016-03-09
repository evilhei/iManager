

AdminConfig = {
  collections: {
    GeneralMaterial: {
      // collection options
    }
  }
};

if(Meteor.isClient) {
  Accounts.ui.config({
    passwordSignupFields: 'USERNAME_ONLY'
  });
}

