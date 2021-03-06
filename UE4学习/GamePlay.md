* 游戏模式
两个主要类负责处理进行中游戏的相关信息：Game Mode 和 Game State。

即使最开放的游戏也拥有基础规则，而这些规则构成了 Game Mode。在最基础的层面上，这些规则包括：

出现的玩家和观众数量，以及允许的玩家和观众最大数量。

玩家进入游戏的方式，可包含选择生成地点和其他生成/重生成行为的规则。

游戏是否可以暂停，以及如何处理游戏暂停。

关卡之间的过渡，包括游戏是否以动画模式开场。

基于规则的事件在游戏中发生，需要进行追踪并和所有玩家共享时，信息将通过 Game State 进行存储和同步。这些信息包括：

游戏已运行的时间（包括本地玩家加入前的运行时间）。

每个个体玩家加入游戏的时间和玩家的当前状态。

当前 Game Mode 的基类。

游戏是否已开始。


Game State
Game State 负责启用客户端监控游戏状态。从概念上而言，Game State 应该管理所有已连接客户端已知的信息（特定于 Game Mode 但不特定于任何个体玩家）。它能够追踪游戏层面的属性，如已连接玩家的列表、夺旗游戏中的团队得分、开放世界游戏中已完成的任务，等等。

Game State 并非追踪玩家特有内容（如夺旗比赛中特定玩家为团队获得的分数）的最佳之处，因为它们由 Player State 更清晰地处理。整体而言，GameState 应该追踪游戏进程中变化的属性。这些属性与所有人皆相关，且所有人可见。Game mode 只存在于服务器上，而 Game State 存在于服务器上且会被复制到所有客户端，保持所有已连接机器的游戏进程更新。

AGameStateBase 是基础实现，其部分默认功能包括：




PlayerController（玩家控制器） 是Pawn和控制它的人类玩家间的接口。PlayerController本质上代表了人类玩家的意愿。

当您设置PlayerController时，您需要考虑的一个事情就是您想在PlayerController中包含哪些功能及内容。您可以在 Pawn 中处理所有输入， 尤其是不太复杂的情况下。但是，如果您的需求非常复杂，比如在一个游戏客户端上的多玩家、或实时地动态修改角色的功能，那么最好 PlayerController中处理输入。在这种情况中，PlayerController决定要干什么，然后将命令（比如“开始蹲伏”、“跳跃”）发布给Pawn。

同时，某些情况下，则必须把输入处理或其他功能放到PlayerController中。PlayerController在整个游戏在过程中都是一直存在的，但是Pawn可能是临时存在的。 比如，在死亡竞技模式的游戏中，您可能死了又重生，所以您将获得一个新的Pawn，但是您的PlayerController都是一样的。在这个示例中，如果您将分数保存到您的Pawn上， 那么分数将会重置，但是如果您将分数保存到PlayerController上，它将不会重置。



Level Blueprint 表现
而LevelScriptActor应该专注于本Level的表示逻辑，比如改变Level内某些Actor的运动轨迹，或者某一个区域的重力，或者触发一段特效或动画
GameMode 逻辑
GameMode应该专注于玩法，比如胜利条件，怪物刷新等。

跟下层的PlayerController比较，GameMode关心的是构建一个游戏本身的玩法，PlayerController关心的玩家的行为。这两个行为是独立正交可以自由组合的。所以想想哪些逻辑属于游戏，哪些属于玩家，就应该清楚写在哪里了。

跟上层的GameInstance比较，GameInstance关注的是更高层的不同World之间的逻辑，虽然有时候他也把手伸下来做些UI的管理工作，不过严谨来说，在UE里UI是独立于World的一个结构，所以也还算能理解。因此可以把不同GameMode之间协调的工作交给GameInstance，而GameMode只专注自己的玩法世界。