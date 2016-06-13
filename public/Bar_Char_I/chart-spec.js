describe('chart', function () {
    var data = [4, 8, 15, 16, 23, 42];

    it('chart should be defined', function () {
        expect(Chart).toBeDefined();
        expect(Chart).toEqual(jasmine.any(Function));
        expect(new Chart).toEqual(jasmine.any(Object));
    });

    describe('chart data manipulation', function () {
        var chart;
        beforeEach(function () {
            chart = new Chart();
        });

        it('should get and set data', function () {
            expect(chart.getData()).toEqual([]);
            chart.setData(data);
            expect(chart.getData()).toEqual(data);
        });
    });

    describe('chart rendering', function () {
        var chart,
            divElement;
        beforeEach(function () {
            divElement = div();
            document.body.appendChild(divElement);

            chart = new Chart();
            chart.setData(data);
            chart.appendTo(divElement);
            chart.render();
        });

        afterEach(function () {
            document.body.removeChild(divElement);
        })

        it('should append to element selector', function () {
            expect(chart.body.attr('class')).toEqual('chart');
        });

        it('should render chart based on data', function () {
            expect(chart.body.selectAll('div').size()).toEqual(data.length)
            chart.body.selectAll('div').each(function (dataValue) {
                expect(+this.innerText).toEqual(dataValue);
            });
        });

        it('should scale based on space avialiable', function () {
            divElement.style.width = '420px';
            chart.rescale();
            expect(chart.barWidth(5)).toEqual(50);

            divElement.style.width = '840px';
            chart.rescale();
            expect(chart.barWidth(5)).toEqual(100);
        });
    });
});

/* Helper funcions */
function div() {
    var div = document.createElement('div');
    div.classList.add('chart');
    return div;
}
