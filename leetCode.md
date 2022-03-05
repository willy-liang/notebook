### 1.两数之和

> ```html
> 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。
> 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。
> 你可以按任意顺序返回答案。
>  
> 输入：nums = [2,7,11,15], target = 9
> 输出：[0,1]
> 解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。
> 
> 输入：nums = [3,2,4], target = 6
> 输出：[1,2]
> 
> 输入：nums = [3,3], target = 6
> 输出：[0,1]
> ```
>
> ```js
> var twoSum = function(nums, target) {
>     for(let i = 0; i < nums.length; i++) {
>       for(let j = i+1; j < nums.length; j++) {
>         if(nums[i] + nums[j] == target)
>           return [i, j]
>       }
>     }
> };
> ```

## 2.两数相加

> ```html
> 给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。
> 请你将两个数相加，并以相同形式返回一个表示和的链表。
> 你可以假设除了数字 0 之外，这两个数都不会以 0 开头。
> 
> 输入：l1 = [2,4,3], l2 = [5,6,4]
> 输出：[7,0,8]
> 解释：342 + 465 = 807.
> 
> 输入：l1 = [0], l2 = [0]
> 输出：[0]
> 
> 输入：l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
> 输出：[8,9,9,9,0,0,0,1]
> ```
>
> ```js
> var addTwoNumbers = function (l1, l2) {
>     let len = l1.length > l2.length ? l1.length : l2.length,
>         storage = 0,
>         arr = new Array(len).fill(0)
>     for (let i = 0; i < len; i++) {
>       let arri = (l1[i] || 0) + (l2[i] || 0) + storage
>       storage = Math.floor(arri / 10)
>       arr[i] = arri % 10
>       if (i == len - 1 && storage == 1) {
>         arr.push(1)
>       }
>     }
>     return arr
> };
> console.log(addTwoNumbers([2, 4, 3], [5, 6, 4]))
> console.log(addTwoNumbers([9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9]))
> ```
>
> 