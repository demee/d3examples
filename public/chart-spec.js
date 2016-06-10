describe('data', function () {
    beforeEach(function () {});

    it('has data', function () {
        expect(data).toBeDefined();
    })
});

describe('chart', function () {
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
            expect(chart.getData()).not.toBeDefined();
            chart.setData(data);
            expect(chart.getData()).toEqual(data);
        });
    });

    describe('chart rendering', function () {
        var chart;
        beforeEach(function () {
            chart = new Chart();
        });

        it('should append to element selector', function () {
            chart.appendTo(div());
            expect(chart.body.attr('class')).toEqual('chart');
        });

        it('should render chart based on data', function () {
            chart.setData(data);
            chart.appendTo(div());
            chart.render();

            expect(chart.body.selectAll('div').size()).toEqual(data.length)
            chart.body.selectAll('div').each(function (dataValue) {
                expect(+this.innerText).toEqual(dataValue);
            })
        });
    });
});

/* Helper funcions */ 
function div() {
    var div = document.createElement('div');
    div.classList.add('chart');
    return div;
}
