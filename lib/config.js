

AdminConfig = {
  collections: {
    WorkCenter: {
      // collection options
    },
    ScrapType: {
      // collection options
    },
    ScrapReport: {
      // collection options
    },
    Worker: {
      
    }
  }
};

if(Meteor.isClient) {
  Accounts.ui.config({
    passwordSignupFields: 'USERNAME_ONLY'
  });
}
//siin on selectize valikute objectid
Meteor.startup(function() {
    optScrapType = function() {
    var optScrapType = ScrapType.find().fetch();
    return optScrapType;
  };

    workCenter = function() {
    var workCenter = WorkCenter.find().fetch();
    return workCenter;
  };

    optWorker = function() {
    var optWorker = Worker.find().fetch();
    return optWorker;
  };
})