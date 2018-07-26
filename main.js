var app = angular.module('app', []);

app.controller('table', function ($scope) {

    $scope.reverse = false;

    $scope.field = 'ID';
    $scope.formVisible = false;
    $scope.name = '';
    $scope.description = '';
    $scope.price = '$';


    if (localStorage.getItem('data')) {
        $scope.products = JSON.parse(localStorage.getItem('data'));
        if ($scope.products.length === 0) {
            $scope.products = [{
                ID: 1,
                Name: 'IPhone X',
                Description: 'The iPhone X display has rounded corners.',
                Price: '$1,120',
                edit: false
            }, {
                ID: 2,
                Name: 'Samsung Galaxy s8',
                Description: '2G network.......',
                Price: '$950',
                edit: false
            }];
        }
    } else {
        $scope.products = [{
            ID: 1,
            Name: 'IPhone X',
            Description: 'The iPhone X display has rounded corners.',
            Price: '$1,120',
            edit: false
        }, {
            ID: 2,
            Name: 'Samsung Galaxy s8',
            Description: '2G network.......',
            Price: '$950',
            edit: false
        }];
        localStorage.setItem('data', JSON.stringify($scope.products))
    }


    $scope.edit = function (index) {
        var i;
        for (i = 0; i < $scope.products.length; i++) {
            if ($scope.products[i].ID === index) {
                $scope.products[i].edit = true;
            }
        }
    };

    $scope.cancel = function (index) {
        var i;
        for (i = 0; i < $scope.products.length; i++) {
            if ($scope.products[i].ID === index) {
                $scope.products[i].edit = false;
            }
        }
    };

    $scope.remove = function (index) {
        var i;
        for (i = 0; i < $scope.products.length; i++) {
            if ($scope.products[i].ID === index) {
                $scope.products.splice(i, 1);
            }
        }
        localStorage.setItem('data', JSON.stringify(this.products))
    };


    $scope.changeForm = function () {
        $scope.formVisible = true;
    };

    $scope.cancelForm = function () {
        $scope.formVisible = false;
    };


    $scope.create = function () {
        $scope.products.push({
            ID: $scope.products.length + 1,
            Name: this.name,
            Description: this.description,
            Price: this.price,
            edit: false
        });
        $scope.name = '';
        $scope.description = '';
        $scope.price = '$';
        localStorage.setItem('data', JSON.stringify(this.products));
        $scope.formVisible = false;
    };


    $scope.update = function (product) {
        var i;
        for (i = 0; i < $scope.products.length; i++) {
            if ($scope.products[i].ID === product.ID) {
                $scope.products[i].edit = false;
                $scope.products[i].Name = this.name;
                $scope.products[i].Description = this.description;
                $scope.products[i].Price = this.price;
            }
        }
        $scope.name = '';
        $scope.description = '';
        $scope.price = '$';
        localStorage.setItem('data', JSON.stringify(this.products))

    };


    $scope.checkfield = function (field) {
        $scope.field = field;
        $scope.reverse = !($scope.reverse);
    }
});


