//origianl code https://bost.ocks.org/mike/bar/

var Chart = function () {
    this.data = [];
    this.d3Scale = d3.scale.linear();
};

Chart.prototype.setData = function (_data) {
    this.data = _data;
    this.rescale();
};

Chart.prototype.getData = function () {
    return this.data;
};

Chart.prototype.appendTo = function (selector) {
    this.body = d3.select(selector);
    this.rescale();
}

Chart.prototype.rescale = function () {
    if(!this.body) return;
    this.d3Scale
        .domain([0, d3.max(this.data)])
        .range([0, this.body.node().getBoundingClientRect().width])
}

Chart.prototype.render = function () {
    var self = this;
    this.body
        .selectAll('div')
            .data(this.data)
        .enter().append('div')
            .style('width', function (d) { return self.barWidth(d) + 'px'})
            .text(_.identity)
}

Chart.prototype.barWidth = function (dataValue) {
    return this.d3Scale(dataValue);
}
