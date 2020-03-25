$(function(){
  var datas=[
  {
    name:'Java',
    rank:1,
    change:'降',
    range:'-0.01%'
  },
  {
    name:'C',
    rank:2,
    change:'升',
    range:'+2.44%'
  },
  {
    name:'Python',
    rank:3,
    change:'升',
    range:'+1.41%'
  },
  {
    name:'C++',
    rank:4,
    change:'降',
    range:'-2.58%'
  },
  {
    name:'C#',
    rank:5,
    change:'升',
    range:'+2.07%'
  },
  { 
    name:'Visual Basic.NET',
    rank:6,
    change:'降',
    range:'-1.17%'
  },
  {
    name:'JavaScript',
    rank:7,
    change:'降',
    range:'-0.85%'
  }

  ]
var myHot=document.getElementById('main1');
  var hot=new Handsontable(myHot,{
    data:datas,
    columns:[
    { 
      data:'name',
      type:'text',
    },
    {
      data:'rank',
      type:'numeric'
    },
    {
      data:'change',
      type:'text'
    },
    {
      data:'range',
      type:'text'
      
    }
    ],
    colHeaders:['语言名称','排名','升或降','变化幅度'],
    autoWrapRow: true,
    colWidths:'200px',
    rowHeights:'40px',
    className:'htCenter htMiddle',
    manualColumnResize: true,
    manualRowResize: true 
  })

var myChart = echarts.init(document.getElementById('main2'));
var xData=[2000,2005,2010,2015,2020],
    yData=[6,9,8,8,7];
var option = {
  title: {
    text: 'JavaScript语言排名变化'
  },
  tooltip: {},
  xAxis: {
    data: xData            
  },
  yAxis: {},
  series: [{
    name: '排名',
    type: 'line',
    data: yData
  }]
};
myChart.setOption(option);
})
