angular.module("simplyKanban").factory("listFactory", function () {
    var service = {};

    var lists = [
        {
            id: 1,
            listName: "ToDo"
    },
        {
            id: 2,
            listName: "Doing"
    },
        {
            id: 3,
            listName: "Done"
    }
  ];

    service.getLists = function () {
        return lists;
    };

    service.addList = function (listName) {
        lists.push({
            id: _.uniqueId("list_"),
            listName: listName
        });
    };

    service.removeList = function (list) {
        _.pull(lists, list);
    };

    service.updateList = function (updatingList) {
        var list = _.findWhere(lists, {
            id: updatingList.id
        });
        list.listName = updatingList.listName;
    };

    return service;
});
