/**
 * Class to test RVI chart
 */
Ext.define("Chartsly.view.test.RelativeVigorIndex", {
    extend: 'Ext.Panel',
    requires: [
        'Chartsly.view.test.CandleStick',
        'Ext.chart.axis.Time',
        'Ext.chart.axis.Numeric',
        'Ext.chart.series.Line',
        'Chartsly.chart.indicator.RelativeVigorIndex',
        'Chartsly.model.Stock', 
        'Chartsly.store.Apple'
    ],
    config: {
        items: [
            {
                xtype: 'candlestick-test-chart',
                height: 350
            },
            {
                xclass: 'Chartsly.chart.indicator.RelativeVigorIndex',
                height: 250,
                background: 'white',
                series: [
                    {
                        store: Ext.create('Chartsly.store.Apple', {}), //'Apple',
                        type: 'rvi',
                        xField: 'date',
                        yField: 'rvi',
                        closeField: "close",
                        openField: "open",
                        highField: "high",
                        lowField: "low",
                        period: 15,
                        signalPeriod: 4,
                        // smooth: true,
                        style: {
                            stroke: 'rgba(67,174,175,0.75)',
                            miterLimit: 1
                        }
                    }
                ],
                axes: [
                    {
                        type: 'numeric',
                        position: 'left'
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
