# 缓解DDoS攻击的方法

DDoS: 分布式拒绝服务攻击(Distributed Denial of Service)  
DDos的前身是Dos(Denial of Service)，即拒绝服务攻击：指利用大量的合理请求，来占用过多的目标资源，从而使目标服务无法响应正常的请求。  
DDoS则是在DoS的基础上采用分布式架构，利用多台主机同时攻击目标主机，从而使即使部署了网络防御设备的目标服务在面对大量网络请求时也无法应对。  

## DDoS有以下几种类型

* 消耗带宽。服务器、路由器交换机等网络设备的带宽都是有固定上限的。带宽耗尽后就会发生网络拥堵，从而无法传输其他正常的网络报文。
* 消耗操作系统资源。网络服务的正常运行需要消耗系统资源，服务器上的CPU、内存等物理资源和连接表等软件资源也都是有限的，一旦资源耗尽，系统就不能处理正常的网络连接。
* 消耗应用程序的运行资源。应用程序的运行，通常还需要与其他的资源或系统交互。如果应用程序一直忙于处理无效请求，也会导致正常请求的处理变慢，甚至无法响应。