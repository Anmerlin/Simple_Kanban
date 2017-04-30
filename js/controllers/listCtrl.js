angular.module("simplyKanban").controller("listCtrl", function (listFactory, cardFactory) {

    this.isEditing = false;
    this.editingCard = null;

    this.removeList = function (list) {
        listFactory.removeList(list);
    };

    this.editList = function (list) {
        this.isEditing = true;
        this.editingList = angular.copy(list);
    };

    this.updateList = function () {
        listFactory.updateList(this.editingList);
        this.editingList = null;
        this.isEditing = false;
    };

    this.getCards = function (list) {
        return cardFactory.getCards(list);
    };

    this.createCard = function (list) {
        cardFactory.createCard(list, this.cardDescription);
        this.cardDescription = "";
    };

});
