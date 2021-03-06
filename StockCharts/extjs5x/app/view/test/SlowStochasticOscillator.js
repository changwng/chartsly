/**
 * Class to test SlowStochasticOscillator chart
 */
Ext.define("Chartsly.view.test.SlowStochasticOscillator", {
    extend: 'Ext.Panel',
    requires: [
        'Chartsly.view.test.CandleStick',
        'Ext.chart.axis.Time',
        'Ext.chart.axis.Numeric',
        'Ext.chart.series.Line',
        'Chartsly.chart.indicator.SlowStochasticOscillator',
        'Chartsly.model.Stock', 
        'Chartsly.store.Apple'
    ],
    config: {
        items: [
	    {
                xtype: 'candlestick-test-chart',
                height: 350,
            },			
            {
                xclass: 'Chartsly.chart.indicator.SlowStochasticOscillator',
                height: 250,
                insetPadding: {
                    top: 10,
                    right: 0,
                    left: 0,
                    bottom: 0
                },
                background: 'white',
                series: [
                    {
                        store: Ext.create('Chartsly.store.Apple', {}), //'Apple',
                        type: 'slowstochasticoscillator',
                        xField: 'date',
                        yField: 'slowpctk',
                        highField: "high",
                        lowField: "low",
                        closeField: "close",
			overboughtLevel: 80,
                        oversoldLevel: 20,
                        lookBackPeriod: 14,  //in days
			smaPctK: 3,   //days 
			smaPctD: 3,   //days  
			smooth: true,
                        style: {
                             stroke: 'rgba(0,0,0,0.75)',
                             miterLimit: 1
                        }
                    },
		
                ],
                axes: [
                    {
                        type: 'numeric',
                        position: 'left',
                        style: {
                            axisLine: false
                        }
                    },
                    {
                        type: 'time',
                        position: 'bottom',
                        fields: ['date'],
                        style: {
                            strokeStyle: '#666',
                            estStepSize: 150
                        },
                        dateFormat: 'Y',
                        segmenter: {
                            type: 'time',
                            step: {
                                unit: 'y',
                                step: 1
                            }
                        },
                        label: {
                            fontSize: 10,
                            fillStyle: '#666'
                        }
                    }
                ]
            }
        ]
    }
});
