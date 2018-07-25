/*------------------------------------------------------
    Author : www.webthemez.com
    License: Commons Attribution 3.0
    http://creativecommons.org/licenses/by/3.0/
---------------------------------------------------------  */
import template from 'assets/js/template-web.js'
(function ($) {
    "use strict";
    //

    var options = {
        issue_type: {
            baseOption: {
                color: ["#716ACA", "#00C5DC"],
                tooltip: {
                    trigger: "item",
                    formatter: "{a} <br/>{b}: {c} ({d}%)"
                },
                legend: {
                    orient: "vertical",
                    top: "20%",
                    right: "10%",
                    itemWidth: 16,
                    itemHeight: 4,
                    formatter: '{name}'
                },
                series: [{
                    name: "业务类型",
                    type: "pie",
                    center: ["50%", "50%"],
                    radius: ["40%", "60%"],
                    avoidLabelOverlap: false,
                    hoverOffset: 5,
                    label: {
                        normal: {
                            show: true,
                            position: "outside",
                            formatter: "{b}:{d}%"
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                fontSize: "16",
                                fontWeight: "bold"
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            show: true,
                            normal: {
                                lineStyle: {
                                    color: 'rgba(6, 6, 6, 0.3)'
                                },
                                smooth: 0.2,
                                length: 10,
                                length2: 20
                            }
                        }
                    },
                    itemStyle: {},
                    data: [{
                        value: 300,
                        name: "零售"
                    }, {
                        value: 600,
                        name: "对公"
                    }]
                }]
            },
            media: [{
                query: {
                    maxWidth: 390,
                },
                option: {
                    legend: {
                        orient: "vertical",
                        top: "10%",
                        right: "20%",
                        itemWidth: 14,
                        itemHeight: 4,
                        formatter: '{name}'
                    },
                    series: [{
                        name: "业务类型",
                        type: "pie",
                        center: ["50%", "50%"],
                        radius: ["20%", "35%"],
                        avoidLabelOverlap: false,
                        hoverOffset: 3,
                        label: {
                            normal: {
                                show: true,
                                position: "outside",
                                formatter: "{b}:{d}%"
                            },
                            emphasis: {
                                show: true,
                                textStyle: {
                                    fontSize: "16",
                                    fontWeight: "bold"
                                }
                            }
                        },
                        labelLine: {
                            normal: {
                                show: true,
                                normal: {
                                    lineStyle: {
                                        color: 'rgba(6, 6, 6, 0.3)'
                                    },
                                    smooth: 0.2,
                                    length: 5,
                                    length2: 5
                                }
                            }
                        },
                    }]
                },
            }]
        },
        gurant_type: {
            color: ["#34bfa3"],
            tooltip: {
                trigger: "item",
                axisPointer: {
                    // 坐标轴指示器，坐标轴触发有效
                    type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            grid: {
                show: false,
                left: "8%",
                top: 40,
                bottom: "25%",
                // right: "4%",
                // containLabel: false
            },
            xAxis: [{
                name: "类型",
                show: true,
                type: "category",
                data: ['无', '抵押', '质押', '保证', '抵押+质押', '抵押+保证', '质押+保证', '抵押+质押+保证'],
                axisTick: {
                    alignWithLabel: true
                },
                axisLabel: {
                    //倾斜角度
                    rotate: 30
                },
            }],
            yAxis: [{
                name: "数量",
                show: true,
                type: "value",
                // axisLabel: {
                // 	formatter: '{value}'
                // }
            }],
            series: [{
                name: "担保分布",
                type: "bar",
                barWidth: 30,
                data: [10, 52, 200, 334, 390, 330, 220, 300]
            }]
        }
    }
    var mainApp = {
        initFunction: function () {
            /*MENU
            ------------------------------------*/
            $('#main-menu').metisMenu();

            $(window).bind("load resize", function () {
                if ($(this).width() < 768) {
                    $('div.sidebar-collapse').addClass('collapse')
                } else {
                    $('div.sidebar-collapse').removeClass('collapse')
                }
            });

        },

        initialization: function () {
            // mainApp.initFunction();
            var issue_chart = echarts.init(document.querySelector('#main'));
            var gurant_chart = echarts.init(document.querySelector('#guaranttype'));
            // 业务类型分布option
            issue_chart.setOption(options.issue_type);
            gurant_chart.setOption(options.gurant_type);
            $(window).bind("load resize", function () {
                issue_chart.resize();
                gurant_chart.resize();
            });
        }

    }
    // Initializing ///

    $(function () {
        var data = {
            list: [{
                    UPDATE_TIME: "2017/12/12",
                    TYPES_OF: "对公",
                    BUSINESS_TYPES: "滚动资金贷款",
                    PRINCIPAL: 200.12,
                    INTEREST: 10.23,
                    LUMP_SUM: 250.25,
                    OVERDUE_DATE: "2018/12/12",
                    GUARANTEE_METHOD: "抵押",
                    BUSINESS_ORGANIZATION: "中国银行"
                },
                {
                    UPDATE_TIME: "2017/12/12",
                    TYPES_OF: "对公",
                    BUSINESS_TYPES: "滚动资金贷款",
                    PRINCIPAL: 200.12,
                    INTEREST: 10.23,
                    LUMP_SUM: 250.25,
                    OVERDUE_DATE: "2018/12/12",
                    GUARANTEE_METHOD: "抵押",
                    BUSINESS_ORGANIZATION: "中国银行"
                },
                {
                    UPDATE_TIME: "2017/12/12",
                    TYPES_OF: "对公",
                    BUSINESS_TYPES: "滚动资金贷款",
                    PRINCIPAL: 200.12,
                    INTEREST: 10.23,
                    LUMP_SUM: 250.25,
                    OVERDUE_DATE: "2018/12/12",
                    GUARANTEE_METHOD: "抵押",
                    BUSINESS_ORGANIZATION: "中国银行"
                },
                {
                    UPDATE_TIME: "2017/12/12",
                    TYPES_OF: "对公",
                    BUSINESS_TYPES: "滚动资金贷款",
                    PRINCIPAL: 200.12,
                    INTEREST: 10.23,
                    LUMP_SUM: 250.25,
                    OVERDUE_DATE: "2018/12/12",
                    GUARANTEE_METHOD: "抵押",
                    BUSINESS_ORGANIZATION: "中国银行"
                },
                {
                    UPDATE_TIME: "2017/12/12",
                    TYPES_OF: "对公",
                    BUSINESS_TYPES: "滚动资金贷款",
                    PRINCIPAL: 200.12,
                    INTEREST: 10.23,
                    LUMP_SUM: 250.25,
                    OVERDUE_DATE: "2018/12/12",
                    GUARANTEE_METHOD: "抵押",
                    BUSINESS_ORGANIZATION: "中国银行"
                },
                {
                    UPDATE_TIME: "2017/12/12",
                    TYPES_OF: "对公",
                    BUSINESS_TYPES: "滚动资金贷款",
                    PRINCIPAL: 200.12,
                    INTEREST: 10.23,
                    LUMP_SUM: 250.25,
                    OVERDUE_DATE: "2018/12/12",
                    GUARANTEE_METHOD: "抵押",
                    BUSINESS_ORGANIZATION: "中国银行"
                },
                {
                    UPDATE_TIME: "2017/12/12",
                    TYPES_OF: "对公",
                    BUSINESS_TYPES: "滚动资金贷款",
                    PRINCIPAL: 200.12,
                    INTEREST: 10.23,
                    LUMP_SUM: 250.25,
                    OVERDUE_DATE: "2018/12/12",
                    GUARANTEE_METHOD: "抵押",
                    BUSINESS_ORGANIZATION: "中国银行"
                },
                {
                    UPDATE_TIME: "2017/12/12",
                    TYPES_OF: "对公",
                    BUSINESS_TYPES: "滚动资金贷款",
                    PRINCIPAL: 200.12,
                    INTEREST: 10.23,
                    LUMP_SUM: 250.25,
                    OVERDUE_DATE: "2018/12/12",
                    GUARANTEE_METHOD: "抵押",
                    BUSINESS_ORGANIZATION: "中国银行"
                },
                {
                    UPDATE_TIME: "2017/12/12",
                    TYPES_OF: "对公",
                    BUSINESS_TYPES: "滚动资金贷款",
                    PRINCIPAL: 200.12,
                    INTEREST: 10.23,
                    LUMP_SUM: 250.25,
                    OVERDUE_DATE: "2018/12/12",
                    GUARANTEE_METHOD: "抵押",
                    BUSINESS_ORGANIZATION: "中国银行"
                },
                {
                    UPDATE_TIME: "2017/12/12",
                    TYPES_OF: "对公",
                    BUSINESS_TYPES: "滚动资金贷款",
                    PRINCIPAL: 200.12,
                    INTEREST: 10.23,
                    LUMP_SUM: 250.25,
                    OVERDUE_DATE: "2018/12/12",
                    GUARANTEE_METHOD: "抵押",
                    BUSINESS_ORGANIZATION: "中国银行"
                },
                {
                    UPDATE_TIME: "2017/12/12",
                    TYPES_OF: "对公",
                    BUSINESS_TYPES: "滚动资金贷款",
                    PRINCIPAL: 200.12,
                    INTEREST: 10.23,
                    LUMP_SUM: 250.25,
                    OVERDUE_DATE: "2018/12/12",
                    GUARANTEE_METHOD: "抵押",
                    BUSINESS_ORGANIZATION: "中国银行"
                },
                {
                    UPDATE_TIME: "2017/12/12",
                    TYPES_OF: "对公",
                    BUSINESS_TYPES: "滚动资金贷款",
                    PRINCIPAL: 200.12,
                    INTEREST: 10.23,
                    LUMP_SUM: 250.25,
                    OVERDUE_DATE: "2018/12/12",
                    GUARANTEE_METHOD: "抵押",
                    BUSINESS_ORGANIZATION: "中国银行"
                },
                {
                    UPDATE_TIME: "2017/12/12",
                    TYPES_OF: "对公",
                    BUSINESS_TYPES: "滚动资金贷款",
                    PRINCIPAL: 200.12,
                    INTEREST: 10.23,
                    LUMP_SUM: 250.25,
                    OVERDUE_DATE: "2018/12/12",
                    GUARANTEE_METHOD: "抵押",
                    BUSINESS_ORGANIZATION: "中国银行"
                },
                {
                    UPDATE_TIME: "2017/12/12",
                    TYPES_OF: "对公",
                    BUSINESS_TYPES: "滚动资金贷款",
                    PRINCIPAL: 200.12,
                    INTEREST: 10.23,
                    LUMP_SUM: 250.25,
                    OVERDUE_DATE: "2018/12/12",
                    GUARANTEE_METHOD: "抵押",
                    BUSINESS_ORGANIZATION: "中国银行"
                },
                {
                    UPDATE_TIME: "2017/12/12",
                    TYPES_OF: "对公",
                    BUSINESS_TYPES: "滚动资金贷款",
                    PRINCIPAL: 200.12,
                    INTEREST: 10.23,
                    LUMP_SUM: 250.25,
                    OVERDUE_DATE: "2018/12/12",
                    GUARANTEE_METHOD: "抵押",
                    BUSINESS_ORGANIZATION: "中国银行"
                },
            ]
        }
        let html = template('claims_list', data);
        $("#claims_list_content").html(html)
        $('#dataTable-claims').dataTable();
        mainApp.initFunction();
        mainApp.initialization();
    });

}(jQuery));