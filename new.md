## 《枕上诗书》-什么要可医相思之苦

> ```js
> 我问大夫
> 什么药可医相思之苦
> 他说九叶重楼二两
> 冬至蝉蛹一钱，渐煎入隔年雪
> 可医世人相思之苦
> 
> 我又问
> 可重楼七叶一枝花
> 冬至何来蝉蛹
> 雪又怎能隔年
> 相思又怎可解
> 
> 大夫说殊不知
> 夏枯即为九重楼
> 掘地三尺寒蝉现
> 除夕子时雪，落地已隔年
> 过了离别时，相思亦可解
> ```
>
> 

## 扁平结构数据转树形结构

> ```js
> function tree(arr, id=1) {
> const o = {}
> arr.forEach(item => {
>  const pItem = o[item.pid] || (o[item.pid] = {children:[]})
>  o[item.id] = {
>    ...item,
>    children: o[item.id] && o[item.id].chidren || []
>  };
>  pItem.children.push(o[item.id])
> })
> return o[id];
> }
> ```
>
> 当数据比较大时，会比较耗性能。所以我采用的是先通过reduce对数据进行去重（因为他有多个属性依赖），然后通过for循环把里面每条数据的子数据放入新添加的children属性中，然后再通过两层的for循环再次添加到最里层的children属性中
>
> https://juejin.cn/post/6983904373508145189?share_token=ecdf12ab-ac14-49d8-8d62-c71b3f9ab487

## 云计算

> ```js
> 云计算发展趋势
> https://juejin.cn/post/6844903943537950728?share_token=93087077-1f50-416c-b3e6-c871abb715b3
> 
> 云计算是啥
> https://juejin.cn/post/6844904087343857671?share_token=41311a2e-df92-473e-b78e-d5313b69ab24
> 
> 云计算未来趋势
> https://juejin.cn/post/6844903796531789837?share_token=728c7dd1-0c48-482d-9371-a63939559c6d
> 
> 大数据，人工智能，云计算三者关系
> https://juejin.cn/entry/6844903609314836488?share_token=58bea1c3-a465-4103-99ab-5a39c38a59cb
> ```
>
> 

