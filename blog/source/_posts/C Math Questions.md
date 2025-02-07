---
title: C 数学问题
description: 才...才不是笨蛋呢
mathjax: true
tags:
  - C
  - 数学问题
abbrlink: 20241126a
swiper_index: 3
cover: https://gitee.com/BigKnight53/gallery/raw/master/cover/Story.webp
date: 2024-11-26 19:40:00
updated: 2024-11-27 21:42:00
---

# 素数
```C
//判断素数的函数isPrime
int isPrime(int n)
{
    int i;
    //质数(素数)是指在大于 1 的自然数中，除了 1 和它自身外，不能被其他自然数整除的数
    if(n<2)
    {
        return 0;
    }
    //检查i=2到i=sqrt(n)即n的平方根是否有因子
    //在n较大时，对比i=2到i<=n-1提高了效率
    for(i=2;i*i<=n;i++)
    {
        if(n%i==0)
        {
            return 0;
        }
    }
    return 1;
}
```
# 斐波那契数列
```C
//斐波那契数列的函数fibonacci
int fibonacci(int n)
{
    if(n<=1)
    {
        return n;
    }
    else
    {
        //递归调用
        return fibonacci(n-1)+fibonacci(n-2);
    }
}
```