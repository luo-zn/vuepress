# 平均负载

平均负载是指单位时间内，系统处于**可运行状态**和**不可中断状态**的平均进程数，即平均活跃进程数，和CPU使用率没有直接关系。

1. 可运行状态: 是指正在使用CPU或者正在等待CPU的进程，即状为R(Running 或 Runnable)
2. 不可中断状态： 是指正处于内核态关键流程中的进程，并且这些流程是不可打断的，如常见的等待硬件设备的I/O响应。即状态为D(Uninterruptible Sleep,也叫Disk Sleep)

**不可中断状态存在的必要性**：  
当一个进程向磁盘读写数据时，为了保护数据的一致性，在得到磁盘回复前，它是不能被其他进程或者中断打断的，这时候的进程就处于不可中断状态。如果此时的进程被打断了，就容易出现磁盘数据与进程数据不一致的问题。所以**不可中断状态是系统对进程和硬件设备的一种保护机制**。

## 平均负载理想状态的分析

**平均负载最理想的情况是等于CPU个数**

1. 评判平均负载时，首先需要知道系统有几个CPU, 可通过top命令或者从/proc/cpuinfo中获取(如:grep 'model name' /proc/cpuinfo | wc -l)
2. 分析平均负载的三个值，这三个值体现**系统负载趋势**
    * 如果1分钟、5分钟、15分钟的三个值基本相同，或者相差不大，说明系统负载很平稳
    * 如果1分钟的值远小于15分钟的值，说明系统最近1分钟的负载在减少，而过去15分钟内却有很大的负载。
    * 如果1分钟的值远大于15分钟的值，说明最近1分钟的负载在增加，这种增加可能只是临时性的，也可能还会持续增加下支，所以需要持续观察。一旦1分钟的平均负载接近或超过了CPU的个数，就意味着系统正在发生过载的问题，此时要分析问题的根源，并想办法优化。

例子：  
如一个单CPU系统上看到平均负载为 1.89，0.70，8.89，则说明在过去1分钟内，系统有89%的超载，而在15分钟内有789%的超载，从整体趋势来看，系统的负载在降低。

一般情况下，当**平均负载高于CPU数量70%**的时候，应该需要分析排查负载高的问题。

## 平均负载与CPU使用率

平均负载与CPU使用率这两个概念不是对等的。从定义上来讲，平均负载是指单位时间内，处于可运行状态和不可中断状态的进程数，所以它不仅包括了**正在使用CPU**的进程，还包括**等待CPU**和**等待I/O**的进程。

CPU使用率，是指单位时间内CPU繁忙情况的统计，中平均负载并不一定完全对应。

按场景分析有如下情况：  
* CPU密集型进程，使用大量CPU会导致平均负载升高，此时两者是一致的
* I/O密集型进程，等待I/O也会导致平均负载升高，但CPU使用率不一定很高
* 大量等待CPU的进程调度也会导致平均负载升高，此时的CPU使用率也会比较高

