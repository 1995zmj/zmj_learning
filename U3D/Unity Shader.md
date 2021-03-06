[将线性代数形象化 总结篇](https://zhuanlan.zhihu.com/p/33485760) [线性代数的本质 - 系列合集](https://www.bilibili.com/video/av6731067/)

# 向量

## 总结

1. 向量是定义在一组基坐标系中，满足可加性和缩放性的一类东西的集合。带长度的箭头，或是一个有序的数组是向量的一种形象化表示。
2. 向量的加法和数乘，可类比实数的加减乘除。
3. 所有向量都可以看做是对基向量的缩放和相加操作。
4. 向量空间的一组基是张成该空间的一个线性无关向量集。

## 运算

### 加法运算

$$\vec{v} + \vec{w}$$

示例：

$$\begin{bmatrix}     3 \\\\      -5  \end{bmatrix}  +  \begin{bmatrix}     2 \\\\      1  \end{bmatrix}  =  \begin{bmatrix}     3 + 2 \\\\      -5 + 1  \end{bmatrix}$$

### 数乘运算

$$2 \vec{v}$$

示例：

$$2  \begin{bmatrix}     3 \\\\      -5  \end{bmatrix}  =  \begin{bmatrix}     2(3) \\\\      2(-5) \end{bmatrix}$$

# 矩阵与线性变换

## 总结

- 矩阵既是静态的又是动态的。它既描述了线性变换的过程，也描述了线性变换的结果。
- 变换，暗示了可以用运动的角度来理解输入和输出。矩阵的实质就是空间的变换。
- 基向量很有用。向量看作是基向量的系数。
- 矩阵乘法，描述的就是多个空间变换过程的结合。

## 运算

$$

=

x

- y

=

$$

## 复合运算

$$
\begin{bmatrix} a & b\\\\ c & d
\end{bmatrix}
\begin{bmatrix} e & f\\\\ g & h
\end{bmatrix}
$$

$$
= e

- g
=
$$

$$
\begin{bmatrix} a & b\\\\ c & d
\end{bmatrix}
\begin{bmatrix} f\\\\ h
\end{bmatrix}
=
f
\begin{bmatrix} a\\\\ c
\end{bmatrix}
+
h
\begin{bmatrix} b\\\\ d
\end{bmatrix}
=
\begin{bmatrix} af + bh\\\\ cf + dh
\end{bmatrix}
$$

$$
\begin{bmatrix} a & b\\\\ c & d
\end{bmatrix}
\begin{bmatrix} e & f\\\\ g & h
\end{bmatrix}
=
\begin{bmatrix} ae + bg & af + bh\\\\ ce + dg & cf + dh
\end{bmatrix}
$$

## 矩阵乘法的几个运算律直观解释

不满足交换律*AB* ≠ *BA* 满足乘法结合律(*AB*)*C* = *A*(*BC*) 左分配律(*A* + *B*)*C* = *AC* + *BC* 右分配律*C*(*A* + *B*) = *CA* + *CB*

# 行列式

## 总结

1. 行列式就是衡量变换后的空间相对于原空间的缩放比例。
2. 行列式的正负表示变换前后空间是否翻转，可用右手法则判断。 3.行列式为0，表示空间被压缩。

## 运算

$$

=

ad - bc

$$

$$

=

a

- b
- c

$$

# 逆矩阵、列空间与秩

## 总结

1. 矩阵的逆，相当于求一个线性变换的逆变换。*AA*称恒等变换*I*。

    − 1

2. $\det(A) \neq 0 \lrArr A^{-1}$存在，$\det(A) = 0 \lrArr A^{-1}$不存在。
3. 矩阵的秩，即矩阵列空间的维度。更形象一点的表述为变换后空间的维度。
4. 变换后落在原点的向量的集合，称为矩阵的“零空间”，“核”。

## 线性方程组

$$

=

=

^{-1}

$$

## 逆矩阵

[用初等行运算（高斯－若尔当）来求逆矩阵](https://www.shuxuele.com/algebra/matrix-inverse-row-operations-gauss-jordan.html) [用余子式、代数余子式和伴随来求逆矩阵](https://www.shuxuele.com/algebra/matrix-inverse-minors-cofactors-adjugate.html)

# 对偶性

## 点积

### 运算

$$\vec{v} \cdot \vec{w} = \sum_{i = 0}^{n}(v_iw_i)$$

### 几何意义

$$

=

() $$

*v⃗* 在 *w⃗* 上的投影长度乘上 *w⃗* 本身的长度；或者 *w⃗* 在 *v⃗* 上的投影长度乘上 *v⃗* 本身的长度。

## 叉积

### 运算

$$ \begin{bmatrix} v_1 \ v_2 \ v_3 \ \end{bmatrix}

\begin{bmatrix} w_1 \ w_2 \ w_3 \ \end{bmatrix}

=

\begin{bmatrix} v_2 w_3 - v_3 w_2 \ v_3 w_1 - v_1 w_3 \ v_1 w_2 - v_2 w_1 \ \end{bmatrix} $$

### 几何意义

$$

=

() $$

### 

*v⃗* 和 *w⃗* 所形成的平行四边形的面积。

## 总结

1. 高维空间到一维空间的投影矩阵，可看成一个向量（对偶性）
2. 点积，实质上就是高维空间到一维空间的投影
3. 叉乘，实质上就是求满足给定体积和底面积的平行六面体的高
4. 叉乘方向用右手定则判定
5. 点积与叉乘背后有着联系

# 基变换与相似矩阵

主要是坐标的相互变换

相似矩阵 *P* − 1*AP* = *B*

## 总结

1. 基变换将不同坐标系视角下的向量联系了起来
2. 过渡矩阵描述的就是基变换的过程与结果
3. 善于利用基变换可将问题化繁为简，类比于函数的换元法
4. 相似矩阵中相似的两个矩阵实质就是不同坐标系视角描述的同一个线性变换
5. 线代真美~

# 矩阵的特征

*Av⃗* = *γv⃗*

det (*A* − *γI*) = 0