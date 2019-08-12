# 个人对算法的学习

1. 排序
   1. 冒泡排序
   2. 选择排序
   3. 插入排序 
   4. 希尔排序
   5. 归并排序
   6. 快速排序
   7. 堆排序
2. 图
    1. 有向图
    2. 无向图
    3. 有环图
    4. 无环图
    5. 完全图
    6. 稠密图
    7. 蜥属土
    8. 拓扑图
3. 路
    1. 最长路
    2. 最短路
    3. 单源路径
4. 流
    1. 最大流
    2. 网络流
    3. 标准输入流
    4. 标准输出流
    5. 文件输入流
    6. 文件输出流
5. 树
    1. 二叉树
    2. 红黑树
    3. van emde boas书
    4. 最小生成树
6. 动态规划
    1. 线性
    2. 区间
    3. 坐标
    4. 背包
    5. 树形
7. 表
    1. 散列表
    2. 哈希表
    3. 邻接表
    4. 双向链表
    5. 循环链表




```js
//冒泡
function bubbleSort(arr) {
    var len = arr.length;
    for (var i = 0; i < len - 1; i++) {
        for (var j = i + 1; j < len; j++) {
            if (arr[i] > arr[j]) {
                var temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
};
```
```js
//选择
function selectionSort(arr) {
    var len = arr.length;
    for (var i = 0; i < len - 1; i++) {
        var minp = i;
        for (var j = i + 1; j < len; j++) {
            if (arr[j] < arr[minp]) {
                minp = j;
            }
        }
        var temp = arr[minp];
        arr[minp] = arr[i];
        arr[i] = temp;
    }
    return arr;
}
```

```js
//插入
function insertionSort(arr) {
    var len = arr.length;
    for (var i = 1; i < len; i++) {
        var preIndex = i - 1;
        var current = arr[i];
        while (preIndex >= 0 && arr[preIndex] > current) {
            arr[preIndex + 1] = arr[preIndex];
            preIndex--;
        }

        arr[preIndex + 1] = current;
    }
    return arr;
}
```
```js
//希尔
function shellSort(arr) {
    var len = arr.length;

    var gap = 1;
    while(gap< len/3){
        gap = gap*3 +1;
    }
    for (gap; gap >0; gap = Math.floor(gap/3)) {
        for(var i = gap;i<len;i++){
            var temp = arr[i];
            for(var j = i - gap;j>0&&arr[j]>temp;j-=gap){
                arr[j+gap]=arr[j];
            }
            arr[j+gap]=temp;
        }
    }
    return arr;
}
```

```js
// 归并
function mergeSort(arr){
    var len = arr.length;
    if(len<2){
        return arr;
    }
    var middle = Math.floor(len/2);
    var left = arr.slice(0,middle);
    var right = arr.slice(middle);

    return merge(mergeSort(left),mergeSort(right));
}

function merge(left,right){
    var result = [];
    while(left.length > 0 && right.length>0){
        if(left[0]<=right[0]){
            result.push(left.shift());
        }else{
            result.push(right.shift());
        }
    }
    while(left.length){
        result.push(left.shift());
    }

    while(right.length){
        result.push(right.shift());
    }

    return result;
}
```

```js
//快排
function quickSort(arr,left,right){
    var len = arr.length;
    var x = arr[left];
    var i = left;
    var j = right;

    if(left >= right)
    return arr;
    while(i!=j){
        while(i<j&& arr[j] >=x)j--;   
        arr[i]=arr[j];
        while(i<j&& arr[i] <=x)i++;
        arr[j] = arr[i];
    }

    arr[i] = x;
    quickSort(arr,left,i-1);
    quickSort(arr,i+1,right);
}
```

```JS
//a*
//其中的MAP.arr是二维数组
function searchRoad(start_x,start_y,end_x,end_y){
    var openList=[],    //开启列表
        closeList=[],   //关闭列表
        result=[],      //结果数组
        result_index;   //结果数组在开启列表中的序号

    openList.push({x:start_x,y:start_y,G:0});//把当前点加入到开启列表中，并且G是0

    do{
        var currentPoint = openList.pop();
        closeList.push(currentPoint);
        var surroundPoint=SurroundPoint(currentPoint);
        for(var i in surroundPoint) {
            var item = surroundPoint[i];                //获得周围的八个点
            if (
                item.x>=0 &&                            //判断是否在地图上
                item.y>=0 &&
                item.x<MAP.rows &&
                item.y<MAP.cols &&
                MAP.arr[item.x][item.y] != 1 &&         //判断是否是障碍物
                !existList(item, closeList) &&          //判断是否在关闭列表中
                MAP.arr[item.x][currentPoint.y]!=1 &&   //判断之间是否有障碍物，如果有障碍物是过不去的
                MAP.arr[currentPoint.x][item.y]!=1) {
                //g 到父节点的位置
                //如果是上下左右位置的则g等于10，斜对角的就是14
                var g = currentPoint.G + ((currentPoint.x - item.x) * (currentPoint.y - item.y) == 0 ? 10 : 14);
                if (!existList(item, openList)) {       //如果不在开启列表中
                    //计算H，通过水平和垂直距离进行确定
                    item['H'] = Math.abs(end_x - item.x) * 10 + Math.abs(end_y - item.y) * 10;
                    item['G'] = g;
                    item['F'] = item.H + item.G;
                    item['parent'] = currentPoint;
                    openList.push(item);
                }
                else {                                  //存在在开启列表中，比较目前的g值和之前的g的大小
                    var index = existList(item, openList);
                    //如果当前点的g更小
                    if (g < openList[index].G) {
                        openList[index].parent = currentPoint;
                        openList[index].G = g;
                        openList[index].F=g+openList[index].H;
                    }

                }
            }
        }
        //如果开启列表空了，没有通路，结果为空
        if(openList.length==0) {
            break;
        }
        openList.sort(sortF);//这一步是为了循环回去的时候，找出 F 值最小的, 将它从 "开启列表" 中移掉
    }while(!(result_index=existList({x:end_x,y:end_y},openList)));

    //判断结果列表是否为空
    if(!result_index) {
        result=[];
    }
    else {
        var currentObj=openList[result_index];
        do{
            //把路劲节点添加到result当中
            result.unshift({
                x:currentObj.x,
                y:currentObj.y
            });
            currentObj=currentObj.parent;
        }while (currentObj.x!=start_x || currentObj.y!=start_y);

    }
    return result;

}
//用F值对数组排序
function sortF(a,b){
    return b.F- a.F;
}
//获取周围八个点的值
function SurroundPoint(curPoint){
    var x=curPoint.x,y=curPoint.y;
    return [
        {x:x-1,y:y-1},
        {x:x,y:y-1},
        {x:x+1,y:y-1},
        {x:x+1,y:y},
        {x:x+1,y:y+1},
        {x:x,y:y+1},
        {x:x-1,y:y+1},
        {x:x-1,y:y}
    ]
}
//判断点是否存在在列表中，是的话返回的是序列号
function existList(point,list) {
    for(var i in list) {
        if(point.x==list[i].x && point.y==list[i].y) {
            return i;
        }
    }
    return false;
}
```