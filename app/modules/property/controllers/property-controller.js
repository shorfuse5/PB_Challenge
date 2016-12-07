import offerCommentslModal from '../templates/comments-modal.html';

PropertyCtrl.$inject = ['$rootScope', '$scope', 'property_data', '$mdDialog'];

export default function PropertyCtrl ($rootScope, $scope, property_data, $mdDialog) {

  const vm = this;

  vm.data = property_data;

  let offerComments = vm.data.recent_offer.comments;

  vm.status_bar = {
    "background-color" : "#01AEF0"
  }

  if(vm.data.response.acceptance === "withdrawn"){
    vm.response = "You have withdrawn your acceptance of the offer";
    vm.status_bar = {
      "background-color" : "#E81F2A"
    }
    vm.response_style = {
      "background-color" : "#E8E8E8",
      "border-width" : "2px",
      "border-color" : "#E81F2A"
    }
  } else if(vm.data.response.acceptance === "accepted"){
    vm.response = "You have accepted the recent offer made on your property";
    vm.status_bar = {
      "background-color" : "#42A5F5"
    }
    vm.response_style = {
      "background-color" : "#BBDEFB",
      "border-width" : "1px",
      "border-color" : "#42A5F5"
    }
  } else if(vm.data.response.acceptance === "pending") {
    vm.response = "You have a recent offer awaiting your feedback";
    vm.status_bar = {
      "background-color" : "#009688"
    }
    vm.response_style = {
      "background-color" : "#80CBC4",
      "border-width" : "1px",
      "border-color" : "#009688"
    }
  } else {
    console.log("Response data has an invalid input");
    vm.response = "Sorry, something went wrong on our end";
    vm.status_bar = {
      "background-color" : "grey"
    }
    vm.response_style = {
      "background-color" : "#E8E8E8",
      "border-width" : "1px",
      "border-color" : "#E8E8E8"
    }
  }

  vm.negotiation = function(ev) {
    let ok = $mdDialog.confirm()
          .title('Negotiate for me')
          .textContent('By clicking ok you agree to let our expert negotiate on your behalf.')
          .targetEvent(ev)
          .ok('OK')
          .cancel('Cancel');

    $mdDialog.show(ok).then(function() {
      console.log("Confirmed");
    }, function() {
      console.log("Cancelled");
    });
  };

  vm.offer_comments = function(){
    $mdDialog.show({
      controller: OfferCommentsController,
      controllerAs: 'comments',
      template: offerCommentslModal,
      locals: {
        offerComments : offerComments
      },
      parent: angular.element(document.body),
      clickOutsideToClose: true,
      fullscreen: true
    })
    .then(function() {
      console.log();
    }, function() {
      console.log('You cancelled the dialog.');
    });
  }

    function OfferCommentsController($mdDialog, offerComments) {
      const vm = this;

      vm.comments = offerComments;

      vm.hide = function() {
        $mdDialog.hide();
      };

      vm.cancel = function() {
        $mdDialog.cancel();
      };
  }
}
