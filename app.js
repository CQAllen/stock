var app = angular.module('plunker', ['ngTouch', 'ui.grid']);

app.controller('stockController', function($scope,$interval) {
    $scope.stocks = [];
    $scope.stockList = [];

    $scope.follow = function(){
        console.log('stockNr',$scope.stockNr);
        console.log($scope.stockList);
        if(contains($scope.stockList,$scope.stockNr)){
            // console.log($scope.stockList);
            alert('你已经添加过该股票了！');

        }else{

            console.log($scope.stockList);
            

            $interval(function(){

                jQuery.ajax({
                    url: "http://qt.gtimg.cn/q="+$scope.stockNr,
                    dataType: "script",
                    cache: true,
                    success: function(jqXHR, status) {
                        var data = window['v_'+$scope.stockNr];
                        // console.log(data);
                        // console.log(data.split("~"));
                        $scope.stock = data.split("~");
                        $scope.add2Stocks($scope.stock);




                        
                        
                    }
                });

            }, 5000);
        }
    console.log($scope.stocks);
};

$scope.add2Stocks = function(data){
    var cur_stock = {'未知':data[0],  
         '名字':data[1] , 
         '代码':data[2],  
         '当前价格':data[3],  
         '昨收':data[4],  
         '今开':data[5],  
         '成交量（手）':data[6],  
         '外盘':data[7],  
         '内盘':data[8],  
         '买一':data[9],  
         '买一量（手）':data[10],  
         '买二':data[11],  
         '买二量（手）':data[12],  
         '买三':data[13],  
         '买三量（手）':data[14],  
         '买四':data[15],  
         '买四量（手）':data[16],  
         '买五':data[17],  
         '买五量（手）':data[18],
         '卖一':data[19],  
         '卖一量（手）':data[20],  
         '卖二':data[21],  
         '卖二量（手）':data[22], 
         '卖三':data[23],  
         '卖三量（手）':data[24], 
         '卖四':data[25],  
         '卖四量（手）':data[26], 
         '卖五':data[27],  
         '卖五量（手）':data[28], 
         '最近逐笔成交':data[29],  
         '时间':data[30],  
         '涨跌':data[31], 
         '涨跌%' :data[32], 
         '最高'  :data[33],
         '最低'  :data[34],
         '价格/成交量（手）/成交额'  :data[35],
         '成交量（手）'  :data[36],
         '成交额（万）'  :data[37],
         '换手率'  :data[38],
         '市盈率' :data[39] ,
        // 'test':data[40],
        // '最高'  :data[41],
        // '最低'  :data[42],
        '振幅'  :data[43],
        '流通市值':data[44] ,
        '总市值' :data[45] ,
        '市净率' :data[46] ,
        '涨停价' :data[47] ,
        '跌停价':data[48]}
    if(contains($scope.stockList,$scope.stockNr)){
        var index = $scope.stockList.indexOf($scope.stockNr);
        // var cdate = new Date().format('yyyy-MM-dd');
        // var cdate = new Date().format('HH:mm:ss');
        cur_stock['未知'] += cdate;
        $scope.stocks.splice(index,1,cur_stock);
    }else{
        $scope.stocks.push(cur_stock);
        $scope.stockList.push($scope.stockNr);
    }

}

$scope.gridOptions = {
    columnDefs: [
    { name: '未知', field: '未知', width: 200 },
    { name: '名字', field: '名字', width: 200 },
    { name: '代码', field: '代码', width: 200 },
    { name: '当前价格', field: '当前价格', width: 200 },
    { name: '昨收', field: '昨收', width: 200 },
    { name: '今开', field: '今开', width: 200 },
    { name: '成交量（手）', field: '成交量（手）', width: 200 },
    { name: '外盘', field: '外盘', width: 200 },
    { name: '内盘', field: '内盘', width: 200 },
    { name: '买一', field: '买一', width: 200 },
    { name: '买一量（手）', field: '买一量（手）', width: 200 },
    { name: '买二', field: '买二', width: 200 },
    { name: '买二量（手）', field: '买二量（手）', width: 200 },
    { name: '买三', field: '买三', width: 200 },
    { name: '买三量（手）', field: '买三量（手）', width: 200 },
    { name: '买四', field: '买四', width: 200 },
    { name: '买四量（手）', field: '买四量（手）', width: 200 },
    { name: '买五', field: '买五', width: 200 },
    { name: '买五量（手）', field: '买五量（手）', width: 200 },
    { name: '卖一', field: '卖一', width: 200 },
    { name: '卖一量（手）', field: '卖一量（手）', width: 200 },
    { name: '卖二', field: '卖二', width: 200 },
    { name: '卖二量（手）', field: '卖二量（手）', width: 200 },
    { name: '卖三', field: '卖三', width: 200 },
    { name: '卖三量（手）', field: '卖三量（手）', width: 200 },
    { name: '卖四', field: '卖四', width: 200 },
    { name: '卖四量（手）', field: '卖四量（手）', width: 200 },
    { name: '卖五', field: '卖五', width: 200 },
    { name: '卖五量（手）', field: '卖五量（手）', width: 200 },
    { name: '最近逐笔成交', field: '最近逐笔成交', width: 200 },
    { name: '时间', field: '时间', width: 200 },
    { name: '涨跌', field: '涨跌', width: 200 },
    { name: '涨跌%', field: '涨跌%', width: 200 },
    { name: '最高', field: '最高', width: 200 },
    { name: '最低', field: '最低', width: 200 },
    { name: '价格/成交量（手）/成交额', field: '价格/成交量（手）/成交额', width: 200 },
    { name: '成交量（手）', field: '成交量（手）', width: 200 },
    { name: '成交额（万）', field: '成交额（万）', width: 200 },
    { name: '换手率', field: '换手率', width: 200 },
    { name: '市盈率', field: '市盈率', width: 200 },
    // { name: 'test', field: 'test', width: 200 },
    // { name: '最高', field: '最高', width: 200 },
    // { name: '最低', field: '最低', width: 200 },
    { name: '振幅', field: '振幅', width: 200 },
    { name: '流通市值', field: '流通市值', width: 200 },
    { name: '总市值', field: '总市值', width: 200 },
    { name: '市净率', field: '市净率', width: 200 },
    { name: '涨停价', field: '涨停价', width: 200 },
    { name: '跌停价', field: '跌停价', width: 200 }
    ]
};

$interval(function(){
    $scope.gridOptions.data = $scope.stocks;
},5000);

function contains(arr, val) {
    if (arr.indexOf(val) !== -1) {
        return true;
    } else {
        return false;
    }
}

Date.prototype.format =function(format)
{
    var o = {
        "M+" : this.getMonth()+1, //month
"d+" : this.getDate(),    //day
"h+" : this.getHours(),   //hour
"m+" : this.getMinutes(), //minute
"s+" : this.getSeconds(), //second
"q+" : Math.floor((this.getMonth()+3)/3),  //quarter
"S" : this.getMilliseconds() //millisecond
}
if(/(y+)/.test(format)) format=format.replace(RegExp.$1,
    (this.getFullYear()+"").substr(4- RegExp.$1.length));
    for(var k in o)if(new RegExp("("+ k +")").test(format))
        format = format.replace(RegExp.$1,
            RegExp.$1.length==1? o[k] :
            ("00"+ o[k]).substr((""+ o[k]).length));
    return format;
}

});
