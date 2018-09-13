export const chartsoption = {
  // 借款人分布option
  optionborrwor: {
    backgroundColor: '#fff',
    title: {
      sublink: '#',
      itemGap: 30,
      left: 'center',
      textStyle: {
        color: '#000',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 30
      },
      subtextStyle: {
        color: '#58d9df',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 16
      }
    },
    tooltip: {
      trigger: 'item'
    },
    //  显示区域图例
    visualMap: {
      min: 0,
      max: 500,
      left: 'left',
      top: 'bottom',
      text: ['高', '低'],
      calculable: true,
      inRange: {
        color: [
          '#FFFFFF',
          '#DDEEFD',
          '#C7E4FC',
          '#B6DCFB',
          '#A8D5FA',
          '#99CEF9',
          '#81C3F8',
          '#71BBF7',
          '#5AB0F6',
          '#45A5F5',
          '#319CF4',
          '#2295F3'
        ]
      }
    },
    toolbox: {
      show: true,
      orient: 'vertical',
      left: 'right',
      top: 'center',
      feature: {
        dataView: {
          readOnly: false
        },
        restore: {},
        saveAsImage: {}
      }
    },
    geo: {
      map: 'china',
      zoom: 1.2,
      label: {
        normal: {
          show: true,
          color: '#4699F9'
        },
        emphasis: {
          show: true,
          color: '#fff'
        }
      },
      roam: false,
      itemStyle: {
        normal: {
          areaColor: '#fff',
          borderColor: '#36a3f7'
        },
        emphasis: {
          areaColor: '#36a3f7'
        }
      }
    },
    series: [{
      type: 'map',
      mapType: 'china',
      geoIndex: 0,
      name: '借款人总数',
      label: {
        normal: {
          show: true
        },
        emphasis: {
          show: true
        }
      },
      data: [{
        name: '北京',
        value: 298
      },
      {
        name: '天津',
        value: 20
      },
      {
        name: '上海',
        value: 15
      },
      {
        name: '重庆',
        value: 51
      },
      {
        name: '河北',
        value: 3
      },
      {
        name: '河南',
        value: 133,
        selected: true
      },
      {
        name: '云南',
        value: 75
      },
      {
        name: '辽宁',
        value: 11
      },
      {
        name: '黑龙江',
        value: 11
      },
      {
        name: '湖南',
        value: 14
      },
      {
        name: '安徽',
        value: 0
      },
      {
        name: '山东',
        value: 4
      },
      {
        name: '新疆',
        value: 9
      },
      {
        name: '江苏',
        value: 50
      },
      {
        name: '浙江',
        value: 4
      },
      {
        name: '江西',
        value: 52
      },
      {
        name: '湖北',
        value: 14
      },
      {
        name: '广西',
        value: 0
      },
      {
        name: '甘肃',
        value: 325
      },
      {
        name: '山西',
        value: 3
      },
      {
        name: '内蒙古',
        value: 18
      },
      {
        name: '陕西',
        value: 33
      },
      {
        name: '吉林',
        value: 11
      },
      {
        name: '福建',
        value: 1
      },
      {
        name: '贵州',
        value: 2
      },
      {
        name: '广东',
        value: 18
      },
      {
        name: '青海',
        value: 492
      },
      {
        name: '西藏',
        value: 219
      },
      {
        name: '四川',
        value: 402
      },
      {
        name: '宁夏',
        value: 0
      },
      {
        name: '海南',
        value: 0
      },
      {
        name: '台湾',
        value: 0
      },
      {
        name: '香港',
        value: 0
      },
      {
        name: '澳门',
        value: 0
      }
      ]
    }]
  },
  // 业务类型分布option
  issue_type_option: {
    color: ['#716ACA', '#00C5DC'],
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
      orient: 'vertical',
      top: '20%',
      right: '10%',
      itemWidth: 16,
      itemHeight: 4,
      formatter: '{name}'
    },
    series: [{
      name: '业务类型',
      type: 'pie',
      center: ['40%', '50%'],
      radius: ['60%', '80%'],
      avoidLabelOverlap: false,
      hoverOffset: 5,
      label: {
        normal: {
          show: true,
          position: 'outside',
          formatter: '{b}:{d}%'
        },
        emphasis: {
          show: true,
          textStyle: {
            fontSize: '16',
            fontWeight: 'bold'
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
        value: 310,
        name: '零售'
      }, {
        value: 120,
        name: '对公'
      }]
    }]
  },
  // 风险分类比例分布option
  risk_type_option: {
    color: ['#36A3F7', '#FFB822', '#34BFA3', '#F4516C', '#716ACA'],
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
      orient: 'vertical',
      top: '20%',
      right: '5%',
      // data: ['正常', '关注', '次级', '可疑', '损失'],
      itemWidth: 16,
      itemHeight: 4
    },
    series: [{
      name: '风险分类',
      type: 'pie',
      center: ['40%', '50%'],
      radius: ['60%', '80%'],
      avoidLabelOverlap: false,
      hoverOffset: 5,
      label: {
        normal: {
          show: true,
          position: 'outside',
          formatter: '{b}:{d}%'
        },
        emphasis: {
          show: true,
          textStyle: {
            fontSize: '16',
            fontWeight: 'bold'
          }
        }
      },
      // 饼图的视觉指引线
      labelLine: {
        show: true,
        normal: {
          smooth: 0.2,
          length: 10,
          length2: 20
        }
      },
      data: [{
        value: 20,
        name: '正常'
      },
      {
        value: 80,
        name: '关注'
      },
      {
        value: 120,
        name: '次级'
      },
      {
        value: 220,
        name: '可疑'
      },
      {
        value: 110,
        name: '损失'
      }
      ]
    }]
  },
  // 担保类型分布比例
  guarantorfenbuoption: {
    color: ['#34bfa3'],
    tooltip: {
      trigger: 'item',
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    grid: {
      show: false,
      left: '3%',
      top: 30,
      bottom: '30%'
      // right: '4%',
      // containLabel: false
    },
    xAxis: [{
      name: '类型',
      show: true,
      type: 'category',
      data: [],
      axisTick: {
        alignWithLabel: true
      },
      axisLabel: {
        //  倾斜角度
        interval: 0,
        rotate: 30
      }
    }],
    yAxis: [{
      name: '数量',
      show: true,
      type: 'value'
      // axisLabel: {
      // 	formatter: '{value}'
      // }
    }],
    series: [{
      name: '担保分布',
      type: 'bar',
      barWidth: 32,
      data: [10, 52, 200, 334, 390, 330, 220, 300]
    }]
  },
  // 贷款人金额分布比例
  lenderfenbuoption: {
    color: ['#AFD8F8'],
    tooltip: {
      trigger: 'item',
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    grid: {
      show: false,
      left: '3%',
      top: 30,
      bottom: '5%',
      containLabel: true
    },
    xAxis: [{
      show: true,
      name: '金额',
      type: 'category',
      data: [],
      axisTick: {
        alignWithLabel: true
      },
      axisLabel: {
        //  倾斜角度
        rotate: 20,
        interval: 0
      }
    }],
    yAxis: [{
      show: true,
      name: '数量',
      type: 'value'
    }],
    series: [{
      name: '贷款人金额分布比例',
      type: 'bar',
      barWidth: 32,
      data: [10, 52, 200, 334, 390, 330]
    }]
  },
  // 财产线索分布
  propertyfenbuoption: {
    title: {
      itemGap: 30,
      left: 'center',
      textStyle: {
        color: '#1a1b4e',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 30
      },
      subtextStyle: {
        color: '#58d9df',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 16
      }
    },
    //  显示区域图例
    visualMap: {
      min: 0,
      max: 100,
      left: 'left',
      top: 'bottom',
      text: ['高', '低'],
      calculable: true,
      inRange: {
        color: [
          '#fefefe',
          '#DDEEFD',
          '#C7E4FC',
          '#B6DCFB',
          '#A8D5FA',
          '#99CEF9',
          '#81C3F8',
          '#71BBF7',
          '#5AB0F6',
          '#45A5F5',
          '#319CF4',
          '#2295F3'
        ]
      }
    },
    tooltip: {
      trigger: 'item'
    },
    toolbox: {
      show: true,
      orient: 'vertical',
      left: 'right',
      top: 'center',
      feature: {
        dataView: {
          readOnly: false
        },
        restore: {},
        saveAsImage: {}
      }
    },
    geo: {
      map: 'china',
      zoom: 1.2,
      label: {
        normal: {
          show: true,
          color: '#4699F9'
        },
        emphasis: {
          show: true,
          color: '#fff'
        }
      },
      roam: false,
      itemStyle: {
        normal: {
          areaColor: '#fff',
          borderColor: '#36a3f7'
        },
        emphasis: {
          areaColor: '#36a3f7'
        }
      }
    },
    series: [{
      name: '抵质押物分布',
      type: 'map',
      mapType: 'china',
      geoIndex: 0,
      label: {
        normal: {
          show: true
        },
        emphasis: {
          show: true
        }
      },
      data: []
    }]
  },
  //  渠道选项
  channelsoption: {
    backgroundColor: '#fff',
    // 调色盘
    color: ['#716ACA', '#F4516C'],
    title: {
      text: '联合金控委外渠道数据'
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['代理债权数量', '总涉案标的（万元）'],
      right: 110
    },
    toolbox: {
      show: false,
      feature: {
        restore: {
          show: true
        },
        saveAsImage: {
          show: true
        }
      }
    },
    calculable: true,
    xAxis: [{
      type: 'category',
      data: [],
      //  可以设置坐标轴显示类目的倾斜角度，在坐标轴类目很多的时候使用，防止重叠
      axisLabel: {
        //  倾斜角度
        // rotate:30
      },
      show: true
    }],
    yAxis: [{
      show: true,
      type: 'value',
      name: '代理债权数量',
      splitLine: {
        show: false
      },
      min: 0,
      scale: true,
      nameLocation: 'end',
      boundaryGap: [0.2, 0.2]
    },
    {
      show: true,
      type: 'value',
      scale: true,
      splitLine: {
        show: false
      },
      min: 0,
      name: '总涉案标的(万元)',
      nameLocation: 'end',
      boundaryGap: [0.2, 0.2]
    }
    ],
    series: [{
      name: '代理债权数量',
      type: 'bar',
      itemStyle: {
        color: '#F4516C'
      },
      data: [],
      barWidth: 32
    },
    {
      name: '总涉案标的（万元）',
      type: 'bar',
      yAxisIndex: 1,
      itemStyle: {
        color: '#716ACA'
      },
      data: [],
      barGap: '5%',
      barCategoryGap: '15%',
      barWidth: 32
    }
    ]
  }
}
