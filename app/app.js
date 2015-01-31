(function() {
    "use strict";

    var DEFAULT_ROUTE = 'one';

    var template = document.querySelector('#t');

    template.pages = [
        {name: 'Expenses', hash: '', icon: 'list', url: 'pages/expenses.html' },
        {name: 'Categories', hash: '', icon: 'grade', url: 'pages/categories.html' },
        {name: 'Search', hash: '', icon: 'search', url: 'pages/search.html' },
        {name: 'Stats', hash: '', icon: 'assessment', url: 'pages/stats.html' },
        {name: 'Calc', hash: '', icon: 'apps', url: 'pages/calculator.html' }
    ];

    template.addEventListener('template-bound', function(e) {
        /*var keys = document.querySelector('#keys');

        // Allow selecting pages by num keypad. Dynamically add
        // [1, template.pages.length] to key mappings.
        var keysToAdd = Array.apply(null, template.pages).map(function(x, i) {
            return i + 1;
        }).reduce(function(x, y) {
            return x + ' ' + y;
        });
        keys.keys += ' ' + keysToAdd;

        this.route = this.route || DEFAULT_ROUTE; // Select initial route.*/
    });

    template.keyHandler = function(e, detail, sender) {
        /*var pages = document.querySelector('#pages');

        // Select page by num key.
        var num = parseInt(detail.key);
        if (!isNaN(num) && num <= this.pages.length) {
            pages.selectIndex(num - 1);
            return;
        }

        switch (detail.key) {
            case 'left':
            case 'up':
                pages.selectPrevious();
                break;
            case 'right':
            case 'down':
                pages.selectNext();
                break;
            case 'space':
                detail.shift ? pages.selectPrevious() : pages.selectNext();
                break;
        }*/
    };

    template.cyclePages = function(e, detail, sender) {
        // Click clicks should navigate and not cycle pages.
        if (e.path[0].localName == 'a') {
            return;
        }

        e.shiftKey ? sender.selectPrevious(true) : sender.selectNext(true);
    };

    template.menuItemSelected = function(e, detail, sender) {
        if (detail.isSelected) {
            document.querySelector('#scaffold').closeDrawer();
        }
    };

    template.onResponse = function(e, detail, sender) {
        var article = detail.response.querySelector('article');
        var pages = document.querySelector('#pages');
        this.injectBoundHTML(article.innerHTML, pages.selectedItem.firstElementChild);
    };

})();