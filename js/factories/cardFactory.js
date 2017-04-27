angular.module("simplyKanban").factory("cardFactory", function () {
  var service = {};

  var cards = [
    {
      id: 1,
      description: "Finish work on the application",
      list_id: 1
    },
    {
      id: 2,
      description: "Make a layout",
      list_id: 1
    },
    {
      id: 3,
      description: "Learn the basics of AngularJS",
      list_id: 3
    }
  ];

  service.getCards = function (list) {
    return _.filter(cards, { list_id: list.id });
  };

  service.createCard = function (list, cardDescription) {
    cards.push({
      id: _.uniqueId("card_"),
      description: cardDescription,
      list_id: list.id
    });
  };

  service.deleteCard = function (card) {
    return _.pull(cards, card);
  };

  service.updateCard = function (updatingCard) {
    var card = _.findWhere(cards, { id: updatingCard.id });
    card.description = updatingCard.description;
  };

  return service;
});
