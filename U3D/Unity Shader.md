

* Unlit Shader,这是最基本也是最简单的模版，通过学习它了解顶点片断着色器的基本构成，以及对Shader有初步的认识。
* 利用顶点片断着色器做一些简单案例，比如一些游戏内常用的效果，与此同时深入学习Shader语法，以及用到的相关数学运算符。
* 尝试优化你的Shader，提升美术效果，减少变体数，减少运算量。
* 读一读渲染管线的书，加深对Shader理解的宽度与高度。
* 开始接触光照模型，了解Surface Shader。
* 各种光照算法研究一通。。。。顺便复习下数学。。。
* 屏幕后处理Shader
* Compute Shader
* 各种实例制作，不断强化美感、图形学以及数学。

从整体来看的话，大致是这样的一个框架结构：
Shader "name" { [Properties] SubShaders [FallBack] [CustomEditor] }


## Properties
属性的写法有个通用的格式：
[Attribute]_Name ("Display Name",Type) = Default Value

* [HDR]
* [Range]
* [PowerSlider(*)]
* [IntRange]
* [Toggle]
* [Enum]
* [NoScaleOffset]
* [Normal]
* [Header]
* [HideInInspector]