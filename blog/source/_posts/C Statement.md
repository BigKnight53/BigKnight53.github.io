---
title: C 语句中的选择结构和循环结构
description: 很基础
mathjax: true
tags:
  - C
abbrlink: 20241019a
swiper_index: 2
cover: https://gitee.com/BigKnight53/gallery/raw/master/cover/default_cover_0.webp
date: 2024-10-19 12:00:00
updated: 2024-12-24 16:55:00
---

# 1.选择结构
## 1.1 if语句
```C
if (条件表达式)
{
    //若条件为真，则输出下面的语句，否则跳过if语句
}
```
{% note info flat %}C#中把任何非零和非空的值假定为 true，把零或 null 假定为 false{% endnote %}
{% note info flat %}if语句用来实现两个分支的选择结构，而switch语句用来实现多分支的选择结构{% endnote %}

## 1.2 if...else语句
```C
if(条件表达式)
{
    /* 如果条件为真则将执行的语句 */
}
else
{
    /* 如果条件为假则将执行的语句 */
}
```

## 1.3 if...else if...else语句
```C
if(条件表达式1)
{
    /* 如果条件1为真则将执行的语句 */
}

/////////////////////////////////////////////// 一旦某个 else if 已执行，其他的 else if 或 else 将不会被执行
else if(条件表达式2)
{
    /* 如果条件2为真则将执行的语句 */
}
else if(条件表达式3)
{
    /* 如果条件3为真则将执行的语句 */
}

/////////////////////////////////////////////// else 必须在所有 else if 之后
else
{
    /* 如果所有条件都不为真则将执行的语句 */
}
```

## 1.4 嵌套if语句
```C
if(判断条件1)
{
    /* 当布尔表达式 1 为真时执行 */
    if(判断条件2)
    {
       /* 当布尔表达式 2 为真时执行 */
    }
}
```
{% note info flat %}C#中嵌套 if...else 语句是合法的，这意味着可以在一个 if 或 else if 语句内使用另一个 if 或 else if 语句{% endnote %}

## 1.5 switch语句
```C
int a;
    printf("Please write a number of 1-3:\n");
    scanf("%d",&a);
    switch(a)
    {
       //在每个case语句后打个break，使每一次执行之后均可直接跳出switch语句，从而不再执行后面的语句
       case 1:printf("1 is true\n");break;
       case 2:printf("2 is true\n");break;
       case 3:printf("3 is true\n");break;
       default:printf("error!\n");
    }
```
{% note info flat %}switch语句用来实现多分支的选择结构，它会比较表达式的值与 case 标签值，如果匹配成功，则从这个 case 后的语句开始执行，并执行后面所有 case 后的语句，如果没有一个匹配，则执行 default 后的语句{% endnote %}

# 2.循环结构
{%note info flat %}在前面已经将出现过break，那么顺便讲一下break和continue语句{%endnote%}
* break语句：只作用于循环语句和switch语句，用于终止当前循环，跳出循环体，并执行循环后的语句
* continue语句：用于跳过当次循环，不管循环体是否执行完毕，直接进入下一次循环
## 2.1 for语句
```C
int sum=0;
    //当i不满足i<101时，条件表达式为假，循环结束
    for(int i=1;i<101;i++)//i++用另一种表达就是i=i+1或者i+=1，i++在完成一个循环后才会执行
    {
       sum+=i;//累加i，这行语句等价于sum=sum+i
    }
    printf("sum = %d\n",sum);
```
{% note info flat %}for语句会在初始化表达式和条件表达式都为真的情况下，执行循环体，如果条件表达式为假将跳出循环{% endnote %}

## 2.2 while语句
```C
while(条件表达式)
{
    /* 循环体 */
}
```
{% note info flat %}while语句每次循环前都会先判断表达式是否为真，为真则执行循环体，为假则跳出循环{% endnote %}

## 2.3 do...while语句
```C
do
{
    /* 循环体 */
}
while(条件表达式);
```
{% note info flat %}do...while语句的语法与while语句类似，但是它第一次是不需要判断的，直接执行循环体，再之后加入判断是否执行循环体{% endnote %}

>**Tips:**
>1.嵌套的循环控制变量不能相同
>2.内循环的循环控制变量变化快，外循环的循环控制变量变化慢
>3.确定好循环体起始点，另外逻辑很重要

# 减少语句嵌套小技巧：（合理使用，具体情况具体分析）
>1.表驱动法
>2.提早返回
>3.面向对象
>4.高阶函数
>5.空值判断

* 首先来看看没有使用任何技巧的情况
```C
if (character.Ready) {
    if (character.Grounded) {
        if (character.Crounching) {
            if (!character.IsMoving) {
                character.Attack();
            }else {
                console.writeline("Moving");
            }
        }else {
            console.writeline("Not Crounching");
        }
    }else {
        console.writeline("Not Grounded");
    }
}else {
    console.writeline("Not Ready");
}
```
* 提早返回（卫语句--就是所谓的防御性编程）
```C
//其实就是逆向思维，颠倒了一下判断逻辑
if (!character.Ready) {
    console.writeline("Not Ready");
    return;
}
if (!character.Grounded) {
    console.writeline("Not Grounded");
    return;
}
if (!character.Crounching) {
    console.writeline("Not Crouching");
    return;
}
if (character.IsMoving) {
    console.writeline("Moving");
    return;
}
character.Attack();
```