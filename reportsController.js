let app = angular.module('myApp', ['chart.js']);
app.controller('myCtrl', function($scope, $filter, $location) {

    let reportDataInternal = {
        "reportStartDate": "2016-12-01T00:00:00",
        "subscriptionName": "Flexera",
        "showClasses": true,
        "classesCountList": [
            {
                "day": "2016-12-01T00:00:00",
                "amount": 3
            },
            {
                "day": "2016-12-02T00:00:00",
                "amount": 4
            },
            {
                "day": "2016-12-03T00:00:00",
                "amount": 4
            },
            {
                "day": "2016-12-04T00:00:00",
                "amount": 2
            },
            {
                "day": "2016-12-05T00:00:00",
                "amount": 4
            },
            {
                "day": "2016-12-06T00:00:00",
                "amount": 3
            },
            {
                "day": "2016-12-07T00:00:00",
                "amount": 3
            },
            {
                "day": "2016-12-08T00:00:00",
                "amount": 3
            },
            {
                "day": "2016-12-09T00:00:00",
                "amount": 3
            },
            {
                "day": "2016-12-10T00:00:00",
                "amount": 3
            },
            {
                "day": "2016-12-11T00:00:00",
                "amount": 1
            },
            {
                "day": "2016-12-12T00:00:00",
                "amount": 7
            },
            {
                "day": "2016-12-13T00:00:00",
                "amount": 9
            },
            {
                "day": "2016-12-14T00:00:00",
                "amount": 8
            },
            {
                "day": "2016-12-15T00:00:00",
                "amount": 8
            },
            {
                "day": "2016-12-16T00:00:00",
                "amount": 7
            },
            {
                "day": "2016-12-17T00:00:00",
                "amount": 6
            },
            {
                "day": "2016-12-18T00:00:00",
                "amount": 3
            },
            {
                "day": "2016-12-19T00:00:00",
                "amount": 5
            },
            {
                "day": "2016-12-20T00:00:00",
                "amount": 6
            },
            {
                "day": "2016-12-21T00:00:00",
                "amount": 5
            },
            {
                "day": "2016-12-22T00:00:00",
                "amount": 5
            },
            {
                "day": "2016-12-23T00:00:00",
                "amount": 3
            },
            {
                "day": "2016-12-24T00:00:00",
                "amount": 1
            },
            {
                "day": "2016-12-25T00:00:00",
                "amount": 1
            },
            {
                "day": "2016-12-26T00:00:00",
                "amount": 1
            },
            {
                "day": "2016-12-27T00:00:00",
                "amount": 1
            },
            {
                "day": "2016-12-28T00:00:00",
                "amount": 1
            },
            {
                "day": "2016-12-29T00:00:00",
                "amount": 1
            },
            {
                "day": "2016-12-30T00:00:00",
                "amount": 1
            },
            {
                "day": "2016-12-31T00:00:00",
                "amount": 1
            }
        ],
        "endUserUsagePerDay": [
            {
                "day": "2016-12-31T00:00:00",
                "amount": 0
            },
            {
                "day": "2016-12-30T00:00:00",
                "amount": 0
            },
            {
                "day": "2016-12-29T00:00:00",
                "amount": 0
            },
            {
                "day": "2016-12-28T00:00:00",
                "amount": 3
            },
            {
                "day": "2016-12-27T00:00:00",
                "amount": 0
            },
            {
                "day": "2016-12-26T00:00:00",
                "amount": 1
            },
            {
                "day": "2016-12-25T00:00:00",
                "amount": 0
            },
            {
                "day": "2016-12-24T00:00:00",
                "amount": 4
            },
            {
                "day": "2016-12-23T00:00:00",
                "amount": 7
            },
            {
                "day": "2016-12-22T00:00:00",
                "amount": 11
            },
            {
                "day": "2016-12-21T00:00:00",
                "amount": 16
            },
            {
                "day": "2016-12-20T00:00:00",
                "amount": 16
            },
            {
                "day": "2016-12-19T00:00:00",
                "amount": 17
            },
            {
                "day": "2016-12-18T00:00:00",
                "amount": 1
            },
            {
                "day": "2016-12-17T00:00:00",
                "amount": 6
            },
            {
                "day": "2016-12-16T00:00:00",
                "amount": 25
            },
            {
                "day": "2016-12-15T00:00:00",
                "amount": 25
            },
            {
                "day": "2016-12-14T00:00:00",
                "amount": 31
            },
            {
                "day": "2016-12-13T00:00:00",
                "amount": 42
            },
            {
                "day": "2016-12-12T00:00:00",
                "amount": 28
            },
            {
                "day": "2016-12-11T00:00:00",
                "amount": 1
            },
            {
                "day": "2016-12-10T00:00:00",
                "amount": 1
            },
            {
                "day": "2016-12-09T00:00:00",
                "amount": 5
            },
            {
                "day": "2016-12-08T00:00:00",
                "amount": 17
            },
            {
                "day": "2016-12-07T00:00:00",
                "amount": 18
            },
            {
                "day": "2016-12-06T00:00:00",
                "amount": 19
            },
            {
                "day": "2016-12-05T00:00:00",
                "amount": 16
            },
            {
                "day": "2016-12-04T00:00:00",
                "amount": 1
            },
            {
                "day": "2016-12-03T00:00:00",
                "amount": 4
            },
            {
                "day": "2016-12-02T00:00:00",
                "amount": 13
            },
            {
                "day": "2016-12-01T00:00:00",
                "amount": 24
            }
        ],
        "projectMemberUsagePerDay": [
            {
                "day": "2016-12-31T00:00:00",
                "amount": 0
            },
            {
                "day": "2016-12-30T00:00:00",
                "amount": 1
            },
            {
                "day": "2016-12-29T00:00:00",
                "amount": 1
            },
            {
                "day": "2016-12-28T00:00:00",
                "amount": 1
            },
            {
                "day": "2016-12-27T00:00:00",
                "amount": 0
            },
            {
                "day": "2016-12-26T00:00:00",
                "amount": 1
            },
            {
                "day": "2016-12-25T00:00:00",
                "amount": 0
            },
            {
                "day": "2016-12-24T00:00:00",
                "amount": 2
            },
            {
                "day": "2016-12-23T00:00:00",
                "amount": 2
            },
            {
                "day": "2016-12-22T00:00:00",
                "amount": 2
            },
            {
                "day": "2016-12-21T00:00:00",
                "amount": 3
            },
            {
                "day": "2016-12-20T00:00:00",
                "amount": 5
            },
            {
                "day": "2016-12-19T00:00:00",
                "amount": 7
            },
            {
                "day": "2016-12-18T00:00:00",
                "amount": 3
            },
            {
                "day": "2016-12-17T00:00:00",
                "amount": 5
            },
            {
                "day": "2016-12-16T00:00:00",
                "amount": 7
            },
            {
                "day": "2016-12-15T00:00:00",
                "amount": 6
            },
            {
                "day": "2016-12-14T00:00:00",
                "amount": 7
            },
            {
                "day": "2016-12-13T00:00:00",
                "amount": 8
            },
            {
                "day": "2016-12-12T00:00:00",
                "amount": 5
            },
            {
                "day": "2016-12-11T00:00:00",
                "amount": 1
            },
            {
                "day": "2016-12-10T00:00:00",
                "amount": 1
            },
            {
                "day": "2016-12-09T00:00:00",
                "amount": 3
            },
            {
                "day": "2016-12-08T00:00:00",
                "amount": 3
            },
            {
                "day": "2016-12-07T00:00:00",
                "amount": 4
            },
            {
                "day": "2016-12-06T00:00:00",
                "amount": 4
            },
            {
                "day": "2016-12-05T00:00:00",
                "amount": 2
            },
            {
                "day": "2016-12-04T00:00:00",
                "amount": 1
            },
            {
                "day": "2016-12-03T00:00:00",
                "amount": 2
            },
            {
                "day": "2016-12-02T00:00:00",
                "amount": 3
            },
            {
                "day": "2016-12-01T00:00:00",
                "amount": 5
            }
        ],
        "usageSummaryList": [
            {
                "uom": 2,
                "remainingBalanceLastMonth": 210,
                "usagePerDay": [
                    {
                        "day": "2016-12-31T00:00:00",
                        "amount": 0
                    },
                    {
                        "day": "2016-12-30T00:00:00",
                        "amount": 0
                    },
                    {
                        "day": "2016-12-29T00:00:00",
                        "amount": 0
                    },
                    {
                        "day": "2016-12-28T00:00:00",
                        "amount": 3
                    },
                    {
                        "day": "2016-12-27T00:00:00",
                        "amount": 0
                    },
                    {
                        "day": "2016-12-26T00:00:00",
                        "amount": 1
                    },
                    {
                        "day": "2016-12-25T00:00:00",
                        "amount": 0
                    },
                    {
                        "day": "2016-12-24T00:00:00",
                        "amount": 4
                    },
                    {
                        "day": "2016-12-23T00:00:00",
                        "amount": 7
                    },
                    {
                        "day": "2016-12-22T00:00:00",
                        "amount": 11
                    },
                    {
                        "day": "2016-12-21T00:00:00",
                        "amount": 16
                    },
                    {
                        "day": "2016-12-20T00:00:00",
                        "amount": 16
                    },
                    {
                        "day": "2016-12-19T00:00:00",
                        "amount": 17
                    },
                    {
                        "day": "2016-12-18T00:00:00",
                        "amount": 1
                    },
                    {
                        "day": "2016-12-17T00:00:00",
                        "amount": 6
                    },
                    {
                        "day": "2016-12-16T00:00:00",
                        "amount": 25
                    },
                    {
                        "day": "2016-12-15T00:00:00",
                        "amount": 25
                    },
                    {
                        "day": "2016-12-14T00:00:00",
                        "amount": 31
                    },
                    {
                        "day": "2016-12-13T00:00:00",
                        "amount": 42
                    },
                    {
                        "day": "2016-12-12T00:00:00",
                        "amount": 28
                    },
                    {
                        "day": "2016-12-11T00:00:00",
                        "amount": 1
                    },
                    {
                        "day": "2016-12-10T00:00:00",
                        "amount": 1
                    },
                    {
                        "day": "2016-12-09T00:00:00",
                        "amount": 5
                    },
                    {
                        "day": "2016-12-08T00:00:00",
                        "amount": 17
                    },
                    {
                        "day": "2016-12-07T00:00:00",
                        "amount": 18
                    },
                    {
                        "day": "2016-12-06T00:00:00",
                        "amount": 19
                    },
                    {
                        "day": "2016-12-05T00:00:00",
                        "amount": 16
                    },
                    {
                        "day": "2016-12-04T00:00:00",
                        "amount": 1
                    },
                    {
                        "day": "2016-12-03T00:00:00",
                        "amount": 4
                    },
                    {
                        "day": "2016-12-02T00:00:00",
                        "amount": 13
                    },
                    {
                        "day": "2016-12-01T00:00:00",
                        "amount": 24
                    }
                ],
                "additionalChanges": [
                    {
                        "day": "2016-12-14T00:00:00",
                        "changeType": 0,
                        "description": "2016-12-14 incident credit",
                        "amount": -31
                    },
                    {
                        "day": "2016-12-01T00:00:00",
                        "changeType": 1,
                        "description": "Total Student/End User Days for converted Instructor/IT Days",
                        "amount": 15
                    }
                ],
                "remainingBalanceThisMonth": 0,
                "includedAmount": 0,
                "onDemandUnitPrice": 12,
                "overageSupportFeesUSD": 195.84,
                "overageUSD": 1347.84
            },
            {
                "uom": 3,
                "remainingBalanceLastMonth": 103,
                "usagePerDay": [
                    {
                        "day": "2016-12-31T00:00:00",
                        "amount": 0
                    },
                    {
                        "day": "2016-12-30T00:00:00",
                        "amount": 1
                    },
                    {
                        "day": "2016-12-29T00:00:00",
                        "amount": 1
                    },
                    {
                        "day": "2016-12-28T00:00:00",
                        "amount": 1
                    },
                    {
                        "day": "2016-12-27T00:00:00",
                        "amount": 0
                    },
                    {
                        "day": "2016-12-26T00:00:00",
                        "amount": 1
                    },
                    {
                        "day": "2016-12-25T00:00:00",
                        "amount": 0
                    },
                    {
                        "day": "2016-12-24T00:00:00",
                        "amount": 2
                    },
                    {
                        "day": "2016-12-23T00:00:00",
                        "amount": 2
                    },
                    {
                        "day": "2016-12-22T00:00:00",
                        "amount": 2
                    },
                    {
                        "day": "2016-12-21T00:00:00",
                        "amount": 3
                    },
                    {
                        "day": "2016-12-20T00:00:00",
                        "amount": 5
                    },
                    {
                        "day": "2016-12-19T00:00:00",
                        "amount": 7
                    },
                    {
                        "day": "2016-12-18T00:00:00",
                        "amount": 3
                    },
                    {
                        "day": "2016-12-17T00:00:00",
                        "amount": 5
                    },
                    {
                        "day": "2016-12-16T00:00:00",
                        "amount": 7
                    },
                    {
                        "day": "2016-12-15T00:00:00",
                        "amount": 6
                    },
                    {
                        "day": "2016-12-14T00:00:00",
                        "amount": 7
                    },
                    {
                        "day": "2016-12-13T00:00:00",
                        "amount": 8
                    },
                    {
                        "day": "2016-12-12T00:00:00",
                        "amount": 5
                    },
                    {
                        "day": "2016-12-11T00:00:00",
                        "amount": 1
                    },
                    {
                        "day": "2016-12-10T00:00:00",
                        "amount": 1
                    },
                    {
                        "day": "2016-12-09T00:00:00",
                        "amount": 3
                    },
                    {
                        "day": "2016-12-08T00:00:00",
                        "amount": 3
                    },
                    {
                        "day": "2016-12-07T00:00:00",
                        "amount": 4
                    },
                    {
                        "day": "2016-12-06T00:00:00",
                        "amount": 4
                    },
                    {
                        "day": "2016-12-05T00:00:00",
                        "amount": 2
                    },
                    {
                        "day": "2016-12-04T00:00:00",
                        "amount": 1
                    },
                    {
                        "day": "2016-12-03T00:00:00",
                        "amount": 2
                    },
                    {
                        "day": "2016-12-02T00:00:00",
                        "amount": 3
                    },
                    {
                        "day": "2016-12-01T00:00:00",
                        "amount": 5
                    }
                ],
                "additionalChanges": [
                    {
                        "day": "2016-12-14T00:00:00",
                        "changeType": 0,
                        "description": "2016-12-14 incident credit",
                        "amount": -15
                    },
                    {
                        "day": "2016-12-01T00:00:00",
                        "changeType": 1,
                        "description": "Total converted Instructor/IT Days",
                        "amount": -15
                    }
                ],
                "remainingBalanceThisMonth": 8,
                "includedAmount": 0,
                "onDemandUnitPrice": 9,
                "overageSupportFeesUSD": 0,
                "overageUSD": 0
            },
            {
                "uom": 5,
                "remainingBalanceLastMonth": 32269.07,
                "usagePerDay": [
                    {
                        "day": "2016-12-31T00:00:00",
                        "amount": 0
                    },
                    {
                        "day": "2016-12-30T00:00:00",
                        "amount": 32
                    },
                    {
                        "day": "2016-12-29T00:00:00",
                        "amount": 18.67
                    },
                    {
                        "day": "2016-12-28T00:00:00",
                        "amount": 336.97
                    },
                    {
                        "day": "2016-12-27T00:00:00",
                        "amount": 0
                    },
                    {
                        "day": "2016-12-26T00:00:00",
                        "amount": 56.16
                    },
                    {
                        "day": "2016-12-25T00:00:00",
                        "amount": 0
                    },
                    {
                        "day": "2016-12-24T00:00:00",
                        "amount": 882.77
                    },
                    {
                        "day": "2016-12-23T00:00:00",
                        "amount": 1813.13
                    },
                    {
                        "day": "2016-12-22T00:00:00",
                        "amount": 2545.88
                    },
                    {
                        "day": "2016-12-21T00:00:00",
                        "amount": 3385.16
                    },
                    {
                        "day": "2016-12-20T00:00:00",
                        "amount": 6007.72
                    },
                    {
                        "day": "2016-12-19T00:00:00",
                        "amount": 2856.46
                    },
                    {
                        "day": "2016-12-18T00:00:00",
                        "amount": 568
                    },
                    {
                        "day": "2016-12-17T00:00:00",
                        "amount": 2125.49
                    },
                    {
                        "day": "2016-12-16T00:00:00",
                        "amount": 4564.47
                    },
                    {
                        "day": "2016-12-15T00:00:00",
                        "amount": 6699.74
                    },
                    {
                        "day": "2016-12-14T00:00:00",
                        "amount": 6295.36
                    },
                    {
                        "day": "2016-12-13T00:00:00",
                        "amount": 6223.34
                    },
                    {
                        "day": "2016-12-12T00:00:00",
                        "amount": 2516.75
                    },
                    {
                        "day": "2016-12-11T00:00:00",
                        "amount": 385.65
                    },
                    {
                        "day": "2016-12-10T00:00:00",
                        "amount": 172.23
                    },
                    {
                        "day": "2016-12-09T00:00:00",
                        "amount": 455.33
                    },
                    {
                        "day": "2016-12-08T00:00:00",
                        "amount": 1594
                    },
                    {
                        "day": "2016-12-07T00:00:00",
                        "amount": 1808.67
                    },
                    {
                        "day": "2016-12-06T00:00:00",
                        "amount": 2143.33
                    },
                    {
                        "day": "2016-12-05T00:00:00",
                        "amount": 1812
                    },
                    {
                        "day": "2016-12-04T00:00:00",
                        "amount": 288
                    },
                    {
                        "day": "2016-12-03T00:00:00",
                        "amount": 858
                    },
                    {
                        "day": "2016-12-02T00:00:00",
                        "amount": 2091.25
                    },
                    {
                        "day": "2016-12-01T00:00:00",
                        "amount": 4854.73
                    }
                ],
                "additionalChanges": [
                    {
                        "day": "2016-12-14T00:00:00",
                        "changeType": 0,
                        "description": "2016-12-14 incident credit",
                        "amount": -6295.4
                    }
                ],
                "remainingBalanceThisMonth": 0,
                "includedAmount": 0,
                "onDemandUnitPrice": 0.12,
                "overageSupportFeesUSD": 506.4657,
                "overageUSD": 3485.6757
            },
            {
                "uom": 6,
                "remainingBalanceLastMonth": 0,
                "usagePerDay": [
                    {
                        "day": "2016-12-31T00:00:00",
                        "amount": 4946.81
                    },
                    {
                        "day": "2016-12-30T00:00:00",
                        "amount": 5136.82
                    },
                    {
                        "day": "2016-12-29T00:00:00",
                        "amount": 5136.82
                    },
                    {
                        "day": "2016-12-28T00:00:00",
                        "amount": 4596.82
                    },
                    {
                        "day": "2016-12-27T00:00:00",
                        "amount": 4036.82
                    },
                    {
                        "day": "2016-12-26T00:00:00",
                        "amount": 4036.82
                    },
                    {
                        "day": "2016-12-25T00:00:00",
                        "amount": 5156.82
                    },
                    {
                        "day": "2016-12-24T00:00:00",
                        "amount": 5726.82
                    },
                    {
                        "day": "2016-12-23T00:00:00",
                        "amount": 8006.82
                    },
                    {
                        "day": "2016-12-22T00:00:00",
                        "amount": 9326.82
                    },
                    {
                        "day": "2016-12-21T00:00:00",
                        "amount": 9326.82
                    },
                    {
                        "day": "2016-12-20T00:00:00",
                        "amount": 9326.82
                    },
                    {
                        "day": "2016-12-19T00:00:00",
                        "amount": 8876.82
                    },
                    {
                        "day": "2016-12-18T00:00:00",
                        "amount": 4276.82
                    },
                    {
                        "day": "2016-12-17T00:00:00",
                        "amount": 11016.82
                    },
                    {
                        "day": "2016-12-16T00:00:00",
                        "amount": 11171.84
                    },
                    {
                        "day": "2016-12-15T00:00:00",
                        "amount": 14796.84
                    },
                    {
                        "day": "2016-12-14T00:00:00",
                        "amount": 15081.84
                    },
                    {
                        "day": "2016-12-13T00:00:00",
                        "amount": 14546.84
                    },
                    {
                        "day": "2016-12-12T00:00:00",
                        "amount": 10496.84
                    },
                    {
                        "day": "2016-12-11T00:00:00",
                        "amount": 3161.84
                    },
                    {
                        "day": "2016-12-10T00:00:00",
                        "amount": 3981.84
                    },
                    {
                        "day": "2016-12-09T00:00:00",
                        "amount": 5731.84
                    },
                    {
                        "day": "2016-12-08T00:00:00",
                        "amount": 5731.84
                    },
                    {
                        "day": "2016-12-07T00:00:00",
                        "amount": 5731.84
                    },
                    {
                        "day": "2016-12-06T00:00:00",
                        "amount": 5731.84
                    },
                    {
                        "day": "2016-12-05T00:00:00",
                        "amount": 5231.84
                    },
                    {
                        "day": "2016-12-04T00:00:00",
                        "amount": 6141.84
                    },
                    {
                        "day": "2016-12-03T00:00:00",
                        "amount": 11076.84
                    },
                    {
                        "day": "2016-12-02T00:00:00",
                        "amount": 11076.84
                    },
                    {
                        "day": "2016-12-01T00:00:00",
                        "amount": 9935.97
                    }
                ],
                "additionalChanges": [
                    {
                        "day": "2016-12-14T00:00:00",
                        "changeType": 0,
                        "description": "ignore 2016-12-14 peak",
                        "amount": -15081.84
                    }
                ],
                "remainingBalanceThisMonth": 0,
                "includedAmount": 10000,
                "onDemandUnitPrice": 0.24,
                "overageSupportFeesUSD": 204,
                "overageUSD": 1404
            }
        ]
    };

    const uomEnum = {
        0: "DailyPeakConcurrentRamGb",
        1: "DailyPeakDiskGb",
        2: "StudentEndUserDays",
        3: "InstructorVendorUserDays",
        4: "UserDays",
        5: "RamGbHours",
        6: "MonthlyPeakDiskGb",
        7: "StandardSupportFees"
    };

    const changeTypeEnum = {
        0: "Incident",
        1: "Conversion",
        2: "Credit"
    };

    let reportData = dtoToEnumsStringAndOrderedList(reportDataInternal);

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function sortFunction(a,b){
        return new Date(a.day) - new Date(b.day);
    }


    function dtoToEnumsStringAndOrderedList(reportDataInternal){
        $scope.totalOverage = 0;

        reportDataInternal.classesCountList.sort(sortFunction);
        reportDataInternal.endUserUsagePerDay.sort(sortFunction);
        reportDataInternal.projectMemberUsagePerDay.sort(sortFunction);
        reportDataInternal.usageSummaryList.forEach(x => {
            x.usagePerDay.sort(sortFunction);
            x.uom = uomEnum[x.uom];
            x.additionalChanges.forEach(ac => ac.changeType = changeTypeEnum[ac.changeType]);
            console.log($scope.totalOverage);
            console.log(x.overageUSD);
            $scope.totalOverage += x.overageUSD;
            console.log($scope.totalOverage);
        });
        return reportDataInternal;
    }

    let reportStartDate = new Date(reportData.reportStartDate);
    $scope.ReportStartDateMonthYear = $filter('date')(reportStartDate, 'MMMM yyyy');

    $scope.daysInReportMonth = daysInMonth(reportStartDate.getMonth()+1, reportStartDate.getFullYear());//getRandomInt(28,31);

    function getRandomUsage() {
        let usageArray = [];
        for(let i=1;i<=31;i++){
            usageArray.push({
                day: "2016-12-"+ (i<10? "0"+i : i) +"T09:00:00",
                amount: getRandomInt(0,1000)
            })
        }
        return usageArray;
    }

    let shouldShowClasses = getUrlParameter('showClasses');



    $scope.subscriptionName = reportData.subscriptionName;
    $scope.currentDate = new Date();


    function daysInMonth(month,year) {
        return new Date(year, month, 0).getDate();
    }

    let viewData = [];

    function populateViewData(){
        populateUsersData();
        populateRamData();
        populateDiskData();
    }

    function getSumOfUsageList(list){
        return list.reduce((a,b) => a+b.amount, 0);
    }

    function populateUsersData() {
        const incidentList = reportData.usageSummaryList.filter(u => u.uom.includes("UserDays")).map(uom => uom.additionalChanges.filter(ac => ac.changeType === "Incident")[0]);
        console.log(incidentList);
        viewData[0] = {
            data: [
                usageToChartArray(reportData.endUserUsagePerDay),
                usageToChartArray(reportData.projectMemberUsagePerDay)
            ],
            UomReadableName: uomToReadableName.Training,
            seriesNames: [uomToReadableName.StudentEndUserDays, uomToReadableName.InstructorVendorUserDays],
            tableColsNames: ["Date", uomToReadableName.StudentEndUserDays, uomToReadableName.InstructorVendorUserDays],
            tableUsagePerDayRows: getTableUsagePerDayRows("users", {usagePerDay:reportData.projectMemberUsagePerDay, includedAmount: 0, additionalChanges: incidentList}),
            lastRow: getUsersLastRowValues(),
            summaryTable: getUsersSummaryTables()
        };
        if(shouldShowClasses){
            viewData[0].data.push(usageToChartArray(reportData.classesCountList));
            viewData[0].seriesNames.push("Classes");
            viewData[0].tableColsNames.splice(1, 0, "Classes");
            viewData[0].lastRow.splice(1, 0, getSumOfUsageList(reportData.classesCountList));
        }
    }

    const uomToReadableName = {
        Training: "Training Labs / Classes",
        StudentEndUserDays: "Student/End User Days",
        InstructorVendorUserDays: "Instructor/IT Days",
        UserDays: "Student/End Days & Instructor/IT User Days",
        RamGbHours: "RAM GB-Hours",
        MonthlyPeakDiskGb: "Storage (GB)"
    };

    function getSummaryTable(usageSummaryList){
        const notIncludedUsageForUom = reuse['notIncludedUsage'+usageSummaryList.uom];
        const changesWithoutIncidents = usageSummaryList.additionalChanges.filter(ac => ac.changeType !== "Incident");
        const totalChanges = getSumOfUsageList(changesWithoutIncidents);
        const overageForUom = notIncludedUsageForUom + totalChanges - usageSummaryList.remainingBalanceLastMonth;

        let table = [];

        const readableName = uomToReadableName[usageSummaryList.uom];
        if(usageSummaryList.uom === 'MonthlyPeakDiskGb') {
            table.push(
                [
                    readableName,
                    '',
                    "bold"
                ],
                [
                    "Pre-purchased GB DISK peak",
                    formatNumber(usageSummaryList.includedAmount)
                ],
                [
                    `${$scope.ReportStartDateMonthYear} GB DISK peak`,
                    formatNumber(Math.max.apply(Math, usageSummaryList.usagePerDay.map(function(o){return (o.amount);})))
                ],
                [
                    'GB DISK peak overage',
                    formatNumber(reuse['notIncludedUsage'+usageSummaryList.uom]),
                    "background"
                ]
            );
        }

        if(!(usageSummaryList.uom === 'MonthlyPeakDiskGb')) {
            table.push(
                [
                    readableName,
                    '',
                    "bold"
                ]
            );
        }

        if(!(usageSummaryList.uom === 'MonthlyPeakDiskGb') || usageSummaryList.remainingBalanceLastMonth > 0) {
            table.push(
                [
                    `Balance of Pre-Paid ${readableName} - Beginning of ${$scope.ReportStartDateMonthYear}`,
                    formatNumber(usageSummaryList.remainingBalanceLastMonth)
                ],
                [
                    `Total ${readableName} ${usageSummaryList.uom !== "MonthlyPeakDiskGb" ? "Used" : ""} - ${$scope.ReportStartDateMonthYear}`,
                    formatNumber(notIncludedUsageForUom)
                ]
            );

            changesWithoutIncidents.forEach(ac => {
                table.push(
                    [
                        ac.description,
                        formatNumber(ac.amount)
                    ]
                );
            });

            table.push(
                [
                    `Remaining Balance of Pre-Paid ${readableName} - End of ${$scope.ReportStartDateMonthYear}`,
                    usageSummaryList.remainingBalanceThisMonth > 0 ? formatNumber(usageSummaryList.remainingBalanceThisMonth) : '-',
                    "background"
                ]
            );
        }

        if(usageSummaryList.overageUSD > 0){
            table.push(
                [
                    `On-Demand ${readableName} Unit Price`,
                    '$ ' + formatNumber(usageSummaryList.onDemandUnitPrice)
                ],
                [
                    'Support Fees',
                    '$ ' + formatNumber(usageSummaryList.overageSupportFeesUSD)
                ],
                [
                    `${readableName} Overage in USD`,
                    '$ ' + formatNumber(usageSummaryList.overageUSD),
                    "background"
                ]
            )
        }
        return table;
    }

    function getUsersSummaryTables() {
        let tables = [];
        const uoms = reportData.usageSummaryList.filter(uom => uom.uom.includes("UserDays"));
        reuse.notIncludedUsageUserDays = reuse.notIncludedUsageStudentEndUserDays + reuse.notIncludedUsageInstructorVendorUserDays;
        uoms.forEach(uom => {

            tables.push(getSummaryTable(uom));
        });

        return tables
    }

    let reuse = {};

    function getUsersLastRowValues() {
        reuse.notIncludedUsageStudentEndUserDays = getSumOfUsageList(reportData.endUserUsagePerDay);
        reuse.notIncludedUsageInstructorVendorUserDays = getSumOfUsageList(reportData.projectMemberUsagePerDay);
        return [
            "Total",
            formatNumber(reuse.notIncludedUsageStudentEndUserDays),
            formatNumber(reuse.notIncludedUsageInstructorVendorUserDays),
        ]
    }

    function getTableUsagePerDayRows(uom, usageSummaryList) {
        let rows = [];
        for(let i=0; i<$scope.daysInReportMonth; i++){
            let incidentForThisDay = usageSummaryList.additionalChanges.filter(ac => (new Date(ac.day).getDate() === new Date(usageSummaryList.usagePerDay[i].day).getDate() && ac.changeType === "Incident"));
            let incidentAmountForThisDay;
            if(incidentForThisDay) incidentAmountForThisDay = getSumOfUsageList(incidentForThisDay);
            let row = [];
            row.push({
                data: $filter('date')(new Date(usageSummaryList.usagePerDay[i].day),'MMMM dd, yyyy'),
                style: ''
            });

            function addCellWithOptionalIncident(usagePerDay) {
                let cell = {style: {'color': '#579bd5'}};
                if(incidentAmountForThisDay < 0 ){
                    cell.style = {'color': 'red'};
                    if((usagePerDay.amount + incidentAmountForThisDay) < 0 ){
                        usagePerDay.amount = 0;
                        incidentAmountForThisDay += usagePerDay.amount;
                    }
                    else{
                        usagePerDay.amount += incidentAmountForThisDay;
                        incidentAmountForThisDay = 0;
                    }
                }
                cell.data = usagePerDay.amount > 0 ? formatNumber(usagePerDay.amount) : '-';
                row.push(cell);
            }

            if(uom === "users"){
                if(shouldShowClasses) row.push({
                    data: reportData.classesCountList[i].amount,
                    style: {'color': '#579bd5'}
                });

                addCellWithOptionalIncident(reportData.endUserUsagePerDay[i]);
            }

            addCellWithOptionalIncident(usageSummaryList.usagePerDay[i]);

            if(uom === "disk" && usageSummaryList.includedAmount > 0){
                row.push({
                    data: formatNumber(usageSummaryList.includedAmount),
                    style: ''
                });
                row.push({
                    data:usageSummaryList.usagePerDay[i].amount > usageSummaryList.includedAmount ? formatNumber(usageSummaryList.usagePerDay[i].amount - usageSummaryList.includedAmount) : "-",
                    style: ''
                });
            }
            rows.push(row);
        }
        return rows;
    }

    function formatNumber(num){
        return $filter('number')(num, ((num % 1) != 0) ? 2 : 0)
    }

    function populateRamData() {
        let usageSummaryList = reportData.usageSummaryList.find(function(usage){
            return usage.uom === "RamGbHours";
        });

        //the order of this 3 lines should not changed since I'm changing usageSummaryList.usagePerDay in getTableUsagePerDayRows()
        let dataForChart = usageToChartArray(usageSummaryList.usagePerDay);
        let tableUsagePerDayRows = getTableUsagePerDayRows("ram", usageSummaryList);
        reuse.notIncludedUsageRamGbHours = getSumOfUsageList(usageSummaryList.usagePerDay);
        //the order of this 3 lines should not changed since I'm changing usageSummaryList.usagePerDay in getTableUsagePerDayRows()

        viewData[1] = {
            data: [
                dataForChart
            ],
            UomReadableName: uomToReadableName[usageSummaryList.uom],
            seriesNames: ["RAM Usage"],
            tableColsNames: ["Date", "RAM GB-Hours Usage"],
            tableUsagePerDayRows: tableUsagePerDayRows,
            lastRow: [
                "Total RAM Usage", formatNumber(reuse.notIncludedUsageRamGbHours),
            ],
            summaryTable: [getSummaryTable(usageSummaryList)]
        }
    }

    function populateDiskData() {
        let usageSummaryList = reportData.usageSummaryList.find(function(usage){
            return usage.uom === "MonthlyPeakDiskGb";
        });

        //the order of this 3 lines should not changed since I'm changing usageSummaryList.usagePerDay in getTableUsagePerDayRows()
        let dataForChart = usageToChartArray(usageSummaryList.usagePerDay);
        let tableRows = getTableUsagePerDayRows("disk", usageSummaryList);
        reuse.notIncludedUsageMonthlyPeakDiskGb = Math.max.apply(Math,tableRows.map(function(o){return (o[3].data !== '-') ? parseFloat(o[3].data.replace(/\,/g,'')) : 0;}));
        //the order of this 3 lines should not changed since I'm changing usageSummaryList.usagePerDay in getTableUsagePerDayRows()

        viewData[2] = {
            data: [
                dataForChart
            ],
            UomReadableName: "Storage (GB)",
            seriesNames: ["DISK Usage", "Contracted DISK"],
            tableColsNames: ["Date", "DISK Usage", "Contracted DISK", "Overage (GB)"],
            tableUsagePerDayRows: tableRows,
            lastRow: [
                "Max Daily Overage", '', '', formatNumber(reuse.notIncludedUsageMonthlyPeakDiskGb)
            ],
            summaryTable: [getSummaryTable(usageSummaryList), [["Total Overage to Invoice in USD", "$ " + formatNumber($scope.totalOverage), "background"]]]
        };
        if(usageSummaryList.includedAmount > 0){
            let included = [];
            for (let i=0; i<$scope.daysInReportMonth; i++){
                included[i] = usageSummaryList.includedAmount;
            }
            viewData[2].data.push(included);
        }
    }

    function usageToChartArray(usagePerDay) {
        let data = [];
        usagePerDay.forEach(function (upd) {
            data.push(upd.amount);
        });
        return data;
    }

    $scope.labels = getLabels();

    function getLabels() {
        let labels =[];
        for (let i=1; i<=$scope.daysInReportMonth; i++){
            labels.push(i);
        }
        return labels;
    }

    $scope.options = {
        scales: {
            yAxes: [
            ]
        },
        legend: {
            display: true,
            position: 'right',
            labels: {
                boxWidth: 20,
                fontSize: 10,
            }
        },
        elements: {
            line: {
                tension: 0,
                fill: false,
                borderWidth: 0,
                borderColor: '#000'
            },
            point: {
                // pointStyle: 'triangle',
                // radius: 10,
                // borderWidth: 0,
                // borderColor: '#000'
            }

        }
    };

    $scope.overrides = {};

    populateViewData();

    $scope.viewData = viewData;

    function getUrlParameter(param, dummyPath) {
        var sPageURL = dummyPath || window.location.search.substring(1),
            sURLVariables = sPageURL.split(/[&||?]/),
            res;

        for (var i = 0; i < sURLVariables.length; i += 1) {
            var paramName = sURLVariables[i],
                sParameterName = (paramName || '').split('=');

            if (sParameterName[0] === param) {
                res = sParameterName[1];
            }
        }

        return res;
    }

});