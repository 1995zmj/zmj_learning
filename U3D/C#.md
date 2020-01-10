# C# 使用技巧

获取变量名
```c#
string abc = "123";
Debug.Log(nameof(abc));
```

模块
```c#
#region " EMIT EVENT "
#endregion
```

```c#

 public override bool Equals(object obj) 
{
    // If this and obj do not refer to the same type, then they are not equal.
    if (obj.GetType() != this.GetType()) return false;

    // Return true if  x and y fields match.
    var other = (Point) obj;
    return (this.x == other.x) && (this.y == other.y);
}
```
