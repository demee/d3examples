var data = [4, 8, 15, 16, 23, 42];

var Chart = function () {};

Chart.prototype.setData = function (_data) {
    this.data = _data;
};

Chart.prototype.getData = function () {
    return this.data;
};

Chart.prototype.appendTo = function (selector) {
    this.body = d3.select(selector);
}

Chart.prototype.render = function () {
    this.body
        .selectAll('div')
            .data(this.data)
        .enter().append('div')
            .style('width', function (d) { return d * 10 + 'px'})
            .text(_.identity)
}


// Exaple of use

var chart = new Chart();

chart.appendTo('.chart');
chart.setData(data);
chart.render();
