# Buffer/Cache

## Cache

Cache叫高速缓存存储器，也叫高速缓存，即缓存。它位于CPU和内存之间的容量较小但速度很快的存储器。因为CPU的速度远远高于内存的速度，CPU从内存中读取数据需要等待很长的时间，而Cache保存着CPU重复使用的数据，直接从Cache读取数据会更快，减少CPU等待的时间，提高了系统的性能。  

cache是为了提高CPU和内存之间的数据交换速度而设计的。  

Cache是内核页缓存和Slab用到的内存，对应的是/proc/meminfo中的Cached与SReclaimable之和。

## Buffer

Buffer叫缓冲区，用于存储速度不同步的设备或优先级不同的设备之间传输数据。通过buffer可以减少进程间通信需要等待的时间，当存储速度快的设备与存储速度慢的设备进行通信时，存储慢的数据先把数据存放到buffer,达到一定程度后存储快的设备再读取buffer的数据，在此期间存储快的设备CPU可以干其他的事情。

buffer是为了提高内存和I/O设备(如硬盘等)之间的数据交换速度而设计的。  

buffer是内核缓冲区用到的内存，对应的是/proc/meminfo中的Buffers值。

## 两者的对比

* cache是cpu与内存间的缓冲，buffer是内存与磁盘间的缓冲，都是为了解决速度不对等而设计的。
  * cache是把读取过的数据缓存起来，重新读取时若命中就不需要去读硬盘了，或没命中则读硬盘。被缓存的数据会根据读取频率进行组织，把最频繁读取的内容放在最容易找到的位置，把不再读取的内容不断往后排，直至删除。
  * buffer是根据磁盘的读写设计的，把分散的写操作集中进行，减少磁盘碎片的反复寻道，从而提高系统性能。linux有一个守护进程定期清空缓冲内容(即写入磁盘)，也可以通过sync命令手动清空缓冲。
* buffer是即将要被写入磁盘的，而cache是被从磁盘中读出来的
  * buffer是由各种进程分配的，被用在如输入队列等方面。如某个进程需要读入多个字段内容，在所有字段被读入完整前，进程把先前读入的字段放在buffer中保存。
  * cache经常被用在磁盘的I/O请求上，如有多个进程要访问某个文件，于是该文件便被做成cache以方便下次访问，这样可提高系统性能。

## 释放cache

```bash
echo 1 > /proc/sys/vm/drop_caches #释放页缓存
echo 2 > /proc/sys/vm/drop_caches #释放目录项和inodes
echo 3 > /proc/sys/vm/drop_caches #释放页缓存、目录项和inodes
```
