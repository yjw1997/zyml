<template>
  <div id="documentCenter"
       class="index">
    <MyNav></MyNav>
    <MyMenu activeIndex="6-1"></MyMenu>
    <div class="breadcrumb">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>当前位置：</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/idnex/home' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/idnex/documentCenter' }">开发者中心</el-breadcrumb-item>
        <el-breadcrumb-item>文档中心</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="box tc">
      <div class="w60 ib"
           style="height: 100%">
        <div class="documentCenterLeft">
          <div class="search">
            <el-input v-model="searchContent"
                      placeholder="请输入搜索关键字"
                      style="width: 155px"></el-input>
            <el-button>搜索</el-button>
          </div>
          <el-tree :data="data"
                   @node-click="handleNodeClick"
                   :render-content="renderContent"
                   node-key="id"
                   :default-expanded-keys="[2, 4,6,8,10,12,14,16,18]"></el-tree>
        </div>
        <div class="documentCenterRight tl">
          <div class="drBox"
               v-if="showCon === 2 || showCon === 1">
            <div class="drTitle"> 什么是ArcGIS API for JavaScript？</div>
            <div class="drContent">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ArcGIS JavaScript API是一个在web应用中嵌入GIS地图和任务的轻量级的方式。通过这个API可以很容易地建立和部署应用。可以在应用中使用所有需要的ArcGIS Server上可用的地图和工具。JavaScript API 版权归ESRI所有，为客户提供免费的在线应用。</div>
            <div class="drTitle"> ArcGIS JavaScript API包括什么？</div>

            <div class="drContent">ArcGIS JavaScript API为在web应用中使用提供下列资源</div>
            <div class="drContent">Maps - API支持ArcGIS Server的动态地图服务和缓冲（切片）地图服务。通过ArcGIS JavaScript API，能够用任意投影显示地图。</div>
            <div class="drContent">Graphics - 通过允许用户绘制图形和用户在地图的图形要素上单击或悬停鼠标提供信息弹出窗口来增强web应用。</div>
            <div class="drContent">Graphics - Tasks - API包含常用GIS任务的类和方法:</div>
            <ul class="drContent"
                style="list-style:square url('
                sqpurple.gif');">
              <li>查询</li>
              <li>查找地址</li>
              <li>查找属性</li>
              <li>Identify要素</li>
              <li>地理处理</li>
            </ul>
            <div class="drTitle"> 面向读者</div>
            <div class="drContent">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;API是提供给那些具有一定JavaScript编程经验和了解面向对象概念的读者使用。此外，读者还应该对地图产品有一定的了解。</div>

          </div>
          <div class="drBox"
               v-if="showCon === 3">
            <div class="drTitle"> API帮助简介</div>
            <div class="drContent">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                 ArcGIS JavaScript API是一个在web应用中嵌入GIS地图和任务的轻量级的方式。通过这个API可以很容易地建立和部署应用。可以在应用中使用所有需要的ArcGIS Server上可用的地图和工具。JavaScript API 版权归ESRI所有，为客户提供免费的在线应用。
            </div>
            <div class="drTitle"> 主要功能介绍</div>
            <div class="apiContent"
                 v-for=" i in count"
                 :key="i">
              <img src="@static/img/frontdesk/case.png"
                   width="250px"
                   height="150px">
              <div class="apiTitle">
                地图Map
              </div>
              <div class="apiCon">
                esri.Map类创建一个容器和为增加图层，图形，信息窗口和其它导航控制所必需的DOM结构。
              </div>
            </div>
          </div>
          <div class="drBox"
               v-if="showCon === 6 ">
            <div class="drTitle">描述</div>
            <div class="drContent">
                esri.Map类创建一个容器和为增加图层，图形，信息窗口和其它导航控制所必需的DOM结构。地图通常使用DIV增加到页面。地图的宽度和高度被初始化为DIV容器的宽度和高度。第一个图层增加到地图后，Map.onLoad事件被触发。此时地图是全功能的。Map.onLoad处理函数用于增加内容和该白地图行为。
            </div>
            <div class="drTitle2">
              <div class="drImg1 ib fl"><span class="p15">构造函数</span></div>
              <img src="@static/img/frontdesk/drTitle2.png"
                   class="drImg2 fl">
            </div>
            <el-table :data="tableData"
                      style="width: 100%"
                      border
                      stripe>
              <el-table-column prop="date"
                               label="构造函数"
                               width="220"
                               align="left">
              </el-table-column>
              <el-table-column prop="name"
                               label="描述"
                               align="left">
              </el-table-column>
            </el-table>
            <div class="drTitle2">
              <div class="drImg1 ib fl"><span class="p15">属性表</span></div>
              <img src="@static/img/frontdesk/drTitle2.png"
                   class="drImg2 fl">
            </div>
            <el-table :data="tableData2"
                      style="width: 100%"
                      border
                      stripe>
              <el-table-column prop="name1"
                               label="属性"
                               width="180"
                               align="left">
              </el-table-column>
              <el-table-column prop="name2"
                               label="类型"
                               width="180"
                               align="left">
              </el-table-column>
              <el-table-column prop="name3"
                               label="类型"
                               align="left">
              </el-table-column>
            </el-table>
            <div class="drTitle">方法表</div>
            <div class="drTitle2">
              <div class="drImg1 ib fl"><span class="p15">地图功能</span></div>
              <img src="@static/img/frontdesk/drTitle2.png"
                   class="drImg2 fl">
            </div>
            <el-table :data="tableData3"
                      style="width: 100%"
                      border
                      stripe>
              <el-table-column prop="name1"
                               label="方法"
                               width="180"
                               align="left">
              </el-table-column>
              <el-table-column prop="name2"
                               label="返回值"
                               width="180"
                               align="left">
              </el-table-column>
              <el-table-column prop="name3"
                               label="描述"
                               align="left">
              </el-table-column>
            </el-table>
            <div class="drTitle2">
              <div class="drImg1 ib fl"><span class="p15">地图导航</span></div>
              <img src="@static/img/frontdesk/drTitle2.png"
                   class="drImg2 fl">
            </div>
            <el-table :data="tableData4"
                      style="width: 100%"
                      border
                      stripe>
              <el-table-column prop="name1"
                               label="方法"
                               width="180"
                               align="left">
              </el-table-column>
              <el-table-column prop="name2"
                               label="返回值"
                               width="180"
                               align="left">
              </el-table-column>
              <el-table-column prop="name3"
                               label="描述"
                               align="left">
              </el-table-column>
            </el-table>
            <div class="drTitle2">
              <div class="drImg1 ib fl"><span class="p15">事件</span></div>
              <img src="@static/img/frontdesk/drTitle2.png"
                   class="drImg2 fl">
            </div>
            <el-table :data="tableData5"
                      style="width: 100%"
                      border
                      stripe>
              <el-table-column prop="name1"
                               label="事件"
                               width="270"
                               align="left">
              </el-table-column>
              <el-table-column prop="name2"
                               label="描述"
                               align="left">
              </el-table-column>
            </el-table>
          </div>
          <div class="drBox"
               v-if="showCon === 8 ">
            <div class="drTitle">描述</div>
            <div class="drContent">
              边界框的最大和最小的x坐标和y坐标。 </div>
            <div class="drTitle2">
              <div class="drImg1 ib fl"><span class="p15">构造函数</span></div>
              <img src="@static/img/frontdesk/drTitle2.png"
                   class="drImg2 fl">
            </div>
            <el-table :data="tableData6"
                      style="width: 100%"
                      border
                      stripe>
              <el-table-column prop="name1"
                               label="构造函数"
                               width="220"
                               align="left">
              </el-table-column>
              <el-table-column prop="name2"
                               label="描述"
                               align="left">
              </el-table-column>
            </el-table>
            <div class="drTitle2">
              <div class="drImg1 ib fl"><span class="p15">属性表</span></div>
              <img src="@static/img/frontdesk/drTitle2.png"
                   class="drImg2 fl">
            </div>
            <el-table :data="tableData7"
                      style="width: 100%"
                      border
                      stripe>
              <el-table-column prop="name1"
                               label="属性"
                               width="180"
                               align="left">
              </el-table-column>
              <el-table-column prop="name2"
                               label="类型"
                               width="180"
                               align="left">
              </el-table-column>
              <el-table-column prop="name3"
                               label="描述"
                               align="left">
              </el-table-column>
            </el-table>
            <div class="drTitle2">
              <div class="drImg1 ib fl"><span class="p15">方发表</span></div>
              <img src="@static/img/frontdesk/drTitle2.png"
                   class="drImg2 fl">
            </div>
            <el-table :data="tableData3"
                      style="width: 100%"
                      border
                      stripe>
              <el-table-column prop="name1"
                               label="方法"
                               width="180"
                               align="left">
              </el-table-column>
              <el-table-column prop="name2"
                               label="返回值"
                               width="180"
                               align="left">
              </el-table-column>
              <el-table-column prop="name3"
                               label="描述"
                               align="left">
              </el-table-column>
            </el-table>
            <div class="drTitle2">
              <div class="drImg1 ib fl"><span class="p15">地图导航</span></div>
              <img src="@static/img/frontdesk/drTitle2.png"
                   class="drImg2 fl">
            </div>
            <el-table :data="tableData4"
                      style="width: 100%"
                      border
                      stripe>
              <el-table-column prop="name1"
                               label="方法"
                               width="180"
                               align="left">
              </el-table-column>
              <el-table-column prop="name2"
                               label="返回值"
                               width="180"
                               align="left">
              </el-table-column>
              <el-table-column prop="name3"
                               label="描述"
                               align="left">
              </el-table-column>
            </el-table>
            <div class="drTitle2">
              <div class="drImg1 ib fl"><span class="p15">事件</span></div>
              <img src="@static/img/frontdesk/drTitle2.png"
                   class="drImg2 fl">
            </div>
            <el-table :data="tableData5"
                      style="width: 100%"
                      border
                      stripe>
              <el-table-column prop="name1"
                               label="事件"
                               width="270"
                               align="left">
              </el-table-column>
              <el-table-column prop="name2"
                               label="描述"
                               align="left">
              </el-table-column>
            </el-table>
          </div>
          <div class="drBox"
               v-if="showCon === 10 ">
            <div class="drTitle">描述</div>
            <div class="drContent">线符号用于绘画图形图层上的线型的要素。</div>
            <div class="drTitle2">
              <div class="drImg1 ib fl"><span class="p15">属性表</span></div>
              <img src="@static/img/frontdesk/drTitle2.png"
                   class="drImg2 fl">
            </div>
            <el-table :data="tableData9"
                      style="width: 100%"
                      border
                      stripe>
              <el-table-column prop="name1"
                               label="属性"
                               width="220"
                               align="left">
              </el-table-column>
              <el-table-column prop="name2"
                               label="类型"
                               align="left">
              </el-table-column>
              <el-table-column prop="name3"
                               label="描述"
                               align="left">
              </el-table-column>
            </el-table>
            <div class="drTitle2">
              <div class="drImg1 ib fl"><span class="p15">方法表</span></div>
              <img src="@static/img/frontdesk/drTitle2.png"
                   class="drImg2 fl">
            </div>
            <el-table :data="tableData10"
                      style="width: 100%"
                      border
                      stripe>
              <el-table-column prop="name1"
                               label="方法"
                               width="180"
                               align="left">
              </el-table-column>
              <el-table-column prop="name2"
                               label="返回值"
                               width="180"
                               align="left">
              </el-table-column>
              <el-table-column prop="name3"
                               label="描述"
                               align="left">
              </el-table-column>
            </el-table>
          </div>
          <div class="drBox"
               v-if="showCon === 12 ">
            <div class="drTitle">描述</div>
            <div class="drContent">InfoWindow是一个HTML弹出消息。信息窗口通常包含Graphic的属性。在图形上的默认行为是单击图形后显示信息窗口。为了单击显示信息窗口， InfoTemplate是必须的。另外，信息窗口能够被用于在地图上显示自定义内容。</div>
            <div class="drTitle2">
              <div class="drImg1 ib fl"><span class="p15">属性表</span></div>
              <img src="@static/img/frontdesk/drTitle2.png"
                   class="drImg2 fl">
            </div>
            <el-table :data="tableData11"
                      style="width: 100%"
                      border
                      stripe>
              <el-table-column prop="name1"
                               label="属性"
                               width="220"
                               align="left">
              </el-table-column>
              <el-table-column prop="name2"
                               label="类型"
                               align="left">
              </el-table-column>
              <el-table-column prop="name3"
                               label="描述"
                               align="left">
              </el-table-column>
            </el-table>
            <div class="drTitle2">
              <div class="drImg1 ib fl"><span class="p15">常量</span></div>
              <img src="@static/img/frontdesk/drTitle2.png"
                   class="drImg2 fl">
            </div>
            <el-table :data="tableData12"
                      style="width: 100%"
                      border
                      stripe>
              <el-table-column prop="name1"
                               label="常量"
                               width="180"
                               align="left">
              </el-table-column>
              <el-table-column prop="name2"
                               label="描述"
                               width="180"
                               align="left">
              </el-table-column>
            </el-table>
            <div class="drTitle2">
              <div class="drImg1 ib fl"><span class="p15">方法表</span></div>
              <img src="@static/img/frontdesk/drTitle2.png"
                   class="drImg2 fl">
            </div>
            <el-table :data="tableData13"
                      style="width: 100%"
                      border
                      stripe>
              <el-table-column prop="name1"
                               label="方法"
                               width="180"
                               align="left">
              </el-table-column>
              <el-table-column prop="name2"
                               label="返回值"
                               width="180"
                               align="left">
              </el-table-column>
              <el-table-column prop="name3"
                               label="描述"
                               width="180"
                               align="left">
              </el-table-column>
            </el-table>
            <div class="drTitle2">
              <div class="drImg1 ib fl"><span class="p15">事件</span></div>
              <img src="@static/img/frontdesk/drTitle2.png"
                   class="drImg2 fl">
            </div>
            <el-table :data="tableData14"
                      style="width: 100%"
                      border
                      stripe>
              <el-table-column prop="name1"
                               label="事件"
                               width="180"
                               align="left">
              </el-table-column>
              <el-table-column prop="name2"
                               label="描述"
                               align="left">
              </el-table-column>
            </el-table>
          </div>
          <div class="drBox"
               v-if="showCon === 14 ">
            <div class="drTitle">描述</div>
            <div class="drContent">所有可以加到地图里的图层的基础类。</div>
            <div class="drTitle2">
              <div class="drImg1 ib fl"><span class="p15">属性表</span></div>
              <img src="@static/img/frontdesk/drTitle2.png"
                   class="drImg2 fl">
            </div>
            <el-table :data="tableData15"
                      style="width: 100%"
                      border
                      stripe>
              <el-table-column prop="name1"
                               label="属性"
                               width="220"
                               align="left">
              </el-table-column>
              <el-table-column prop="name2"
                               label="类型"
                               align="left">
              </el-table-column>
              <el-table-column prop="name3"
                               label="描述"
                               align="left">
              </el-table-column>
            </el-table>
            <div class="drTitle2">
              <div class="drImg1 ib fl"><span class="p15">方法表</span></div>
              <img src="@static/img/frontdesk/drTitle2.png"
                   class="drImg2 fl">
            </div>
            <el-table :data="tableData16"
                      style="width: 100%"
                      border
                      stripe>
              <el-table-column prop="name1"
                               label="属性"
                               width="180"
                               align="left">
              </el-table-column>
              <el-table-column prop="name2"
                               label="类型"
                               width="180"
                               align="left">
              </el-table-column>
              <el-table-column prop="name3"
                               label="描述"
                               align="left">
              </el-table-column>
            </el-table>
            <div class="drTitle2">
              <div class="drImg1 ib fl"><span class="p15">事件</span></div>
              <img src="@static/img/frontdesk/drTitle2.png"
                   class="drImg2 fl">
            </div>
            <el-table :data="tableData17"
                      style="width: 100%"
                      border
                      stripe>
              <el-table-column prop="name1"
                               label="事件"
                               width="180"
                               align="left">
              </el-table-column>
              <el-table-column prop="name2"
                               label="描述"
                               align="left">
              </el-table-column>
            </el-table>
          </div>
          <div class="drBox"
               v-if="showCon === 16 ">
            <div class="drTitle">描述</div>
            <div class="drContent">支持绘制几何体的功能的工具栏。</div>
            <div class="drTitle2">
              <div class="drImg1 ib fl"><span class="p15">构造函数</span></div>
              <img src="@static/img/frontdesk/drTitle2.png"
                   class="drImg2 fl">
            </div>
            <el-table :data="tableData18"
                      style="width: 100%"
                      border
                      stripe>
              <el-table-column prop="name1"
                               label="构造函数"
                               width="220"
                               align="left">
              </el-table-column>
              <el-table-column prop="name2"
                               label="描述"
                               align="left">
              </el-table-column>
            </el-table>
            <div class="drTitle2">
              <div class="drImg1 ib fl"><span class="p15">属性表
                </span></div>
              <img src="@static/img/frontdesk/drTitle2.png"
                   class="drImg2 fl">
            </div>
            <el-table :data="tableData19"
                      style="width: 100%"
                      border
                      stripe>
              <el-table-column prop="name1"
                               label="属性"
                               width="220"
                               align="left">
              </el-table-column>
              <el-table-column prop="name2"
                               label="类型"
                               width="140"
                               align="left">
              </el-table-column>
              <el-table-column prop="name3"
                               label="描述"
                               align="left">
              </el-table-column>
            </el-table>
            <div class="drTitle2">
              <div class="drImg1 ib fl"><span class="p15">常量</span></div>
              <img src="@static/img/frontdesk/drTitle2.png"
                   class="drImg2 fl">
            </div>
            <el-table :data="tableData20"
                      style="width: 100%"
                      border
                      stripe>
              <el-table-column prop="name1"
                               label="常量"
                               width="180"
                               align="left">
              </el-table-column>
              <el-table-column prop="name2"
                               label="描述"
                               align="left">
              </el-table-column>
            </el-table>
            <div class="drTitle2">
              <div class="drImg1 ib fl"><span class="p15">方法表</span></div>
              <img src="@static/img/frontdesk/drTitle2.png"
                   class="drImg2 fl">
            </div>
            <el-table :data="tableData21"
                      style="width: 100%"
                      border
                      stripe>
              <el-table-column prop="name1"
                               label="方法"
                               width="180"
                               align="left">
              </el-table-column>
              <el-table-column prop="name2"
                               label="返回值"
                               width="180"
                               align="left">
              </el-table-column>
              <el-table-column prop="name3"
                               label="描述"
                               align="left">
              </el-table-column>
            </el-table>
            <div class="drTitle2">
              <div class="drImg1 ib fl"><span class="p15">事件</span></div>
              <img src="@static/img/frontdesk/drTitle2.png"
                   class="drImg2 fl">
            </div>
            <el-table :data="tableData22"
                      style="width: 100%"
                      border
                      stripe>
              <el-table-column prop="name1"
                               label="事件"
                               width="180"
                               align="left">
              </el-table-column>
              <el-table-column prop="name2"
                               label="描述"
                               align="left">
              </el-table-column>
            </el-table>
          </div>
          <div class="drBox"
               v-if="showCon === 18 ">
            <div class="drTitle">描述</div>
            <div class="drContent">表示ArcGIS Server REST API提供的一个几何服务资源。用于在几何体上执行各种的操作，例如投影，简化，缓存和空间关系。</div>
            <div class="drTitle2">
              <div class="drImg1 ib fl"><span class="p15">构造函数</span></div>
              <img src="@static/img/frontdesk/drTitle2.png"
                   class="drImg2 fl">
            </div>
            <el-table :data="tableData23"
                      style="width: 100%"
                      border
                      stripe>
              <el-table-column prop="name1"
                               label="构造函数"
                               width="220"
                               align="left">
              </el-table-column>
              <el-table-column prop="name2"
                               label="描述"
                               align="left">
              </el-table-column>
            </el-table>
            <div class="drTitle2">
              <div class="drImg1 ib fl"><span class="p15">属性表
                </span></div>
              <img src="@static/img/frontdesk/drTitle2.png"
                   class="drImg2 fl">
            </div>
            <el-table :data="tableData24"
                      style="width: 100%"
                      border
                      stripe>
              <el-table-column prop="name1"
                               label="属性"
                               width="220"
                               align="left">
              </el-table-column>
              <el-table-column prop="name2"
                               label="类型"
                               width="140"
                               align="left">
              </el-table-column>
              <el-table-column prop="name3"
                               label="描述"
                               align="left">
              </el-table-column>
            </el-table>
            <div class="drTitle2">
              <div class="drImg1 ib fl"><span class="p15">常量</span></div>
              <img src="@static/img/frontdesk/drTitle2.png"
                   class="drImg2 fl">
            </div>
            <el-table :data="tableData25"
                      style="width: 100%"
                      border
                      stripe>
              <el-table-column prop="name1"
                               label="常量"
                               width="180"
                               align="left">
              </el-table-column>
              <el-table-column prop="name2"
                               label="描述"
                               align="left">
              </el-table-column>
            </el-table>
            <div class="drTitle2">
              <div class="drImg1 ib fl"><span class="p15">方法表</span></div>
              <img src="@static/img/frontdesk/drTitle2.png"
                   class="drImg2 fl">
            </div>
            <el-table :data="tableData26"
                      style="width: 100%"
                      border
                      stripe>
              <el-table-column prop="name1"
                               label="方法"
                               width="180"
                               align="left">
              </el-table-column>
              <el-table-column prop="name2"
                               label="返回值"
                               width="180"
                               align="left">
              </el-table-column>
              <el-table-column prop="name3"
                               label="描述"
                               align="left">
              </el-table-column>
            </el-table>
            <div class="drTitle2">
              <div class="drImg1 ib fl"><span class="p15">事件</span></div>
              <img src="@static/img/frontdesk/drTitle2.png"
                   class="drImg2 fl">
            </div>
            <el-table :data="tableData27"
                      style="width: 100%"
                      border
                      stripe>
              <el-table-column prop="name1"
                               label="事件"
                               width="180"
                               align="left">
              </el-table-column>
              <el-table-column prop="name2"
                               label="描述"
                               align="left">
              </el-table-column>
            </el-table>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import MyNav from '@fc/nav'
import MyMenu from '@fc/myMenu'
import Footer from '@fc/footer'
export default {
  name: 'documentCenter',
  components: {
    MyNav, MyMenu, Footer
  },
  data () {
    return {
      data: [
        {
          id: 1,
          label: '入门指导',
          children: [{
            id: 2,
            label: '概述'
          }]
        },
        {
          id: 3,
          label: 'API帮助简介'
        }, {
          id: 4,
          label: '参考类',
          children: [
            {
              id: 5,
              label: '核心类',
              children: [
                {
                  id: 6,
                  label: 'Map'
                }
              ]
            },
            {
              id: 7,
              label: '基础类',
              children: [
                {
                  id: 8,
                  label: 'Extent'
                }
              ]
            },
            {
              id: 9,
              label: '符号',
              children: [
                {
                  id: 10,
                  label: 'LineSymbol'
                }
              ]
            },
            {
              id: 11,
              label: '控件类',
              children: [
                {
                  id: 12,
                  label: 'infoWindow'
                }
              ]
            },
            {
              id: 13,
              label: '地图图层类',
              children: [
                {
                  id: 14,
                  label: 'Layer'
                }
              ]
            },
            {
              id: 15,
              label: '工具类',
              children: [
                {
                  id: 16,
                  label: 'Draw'
                }
              ]
            },
            {
              id: 17,
              label: '服务类',
              children: [
                {
                  id: 18,
                  label: 'GeometryService'
                }
              ]
            }
          ]
        }
      ],
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      searchContent: '',
      showCon: 6,
      count: 6,
      tableData: [
        { date: 'esri.Map(divId,options?)', name: '在给定的HTML容器中创建地图，HTML容器通常是DIV。地图大小和容器大小一致。地图的构造函数也能包含选项参数。这些选项参数能包容任意顺序。' }
      ],
      tableData2: [
        {
          name1: 'attribution',
          name2: 'Attribution',
          name3: '当地图属性激活的时候，参考地图创建的属性微件。'
        },
        {
          name1: 'autoResize',
          name2: 'Boolean',
          name3: '当浏览器窗口或者面板微件关闭的时候，地图自适应的调整大小，该值为true。'
        },
        {
          name1: 'autoResize',
          name2: 'Boolean',
          name3: '当浏览器窗口或者面板微件关闭的时候，地图自适应的调整大小，该值为true。'
        },
        {
          name1: 'basemapLayerIds',
          name2: 'String[]	',
          name3: '与构成底图图层一致的ID数组'
        },
        {
          name1: 'extent',
          name2: 'Extent',
          name3: '地图的当前范围。该属性是只读的。'
        },
        {
          name1: 'fadeOnZoom',
          name2: 'Boolean',
          name3: '缩放时，指示地图逐渐消失是否生效。'
        },
        {
          name1: 'geographicExtent',
          name2: 'Extent',
          name3: '地图在地理坐标系中的范围。'
        },
        {
          name1: 'graphics',
          name2: 'GraphicsLayer',
          name3: '从GraphicsLayer中增加删除图形。'
        },
        {
          name1: 'graphicsLayerIds',
          name2: 'String[]',
          name3: '地图里当前GraphicsLayers的数组。'
        },
        {
          name1: 'height',
          name2: 'Number',
          name3: '地图的当前高度，高度单位是屏幕像数'
        },
        {
          name1: 'id',
          name2: 'String',
          name3: '地图位于页面的HTML DIV或其他元素的引用。该属性在地图构造函数里设置。'
        },
        {
          name1: 'infoWindow',
          name2: 'InfoWindow',
          name3: '在地图上显示信息窗口'
        },
        {
          name1: 'isClickRecenter',
          name2: 'Boolean',
          name3: '当属性为true，按shift+click键重定义地图中心点。'
        },
        {
          name1: 'isDoubleClickZoom',
          name2: 'Boolean',
          name3: '当属性为true，双击放大地图可用，允许用户使用鼠标双击放大和重定义地图中心点。'
        }

      ],
      tableData3: [
        {
          name1: 'addLayer(layer,index?)',
          name2: 'Layer',
          name3: '增加ESRI图层到地图。'
        },
        {
          name1: 'getInfoWindowAnchor(screenCoords)',
          name2: 'String',
          name3: '设置调用InfoWindow.show方法时信息窗口的定位点。'
        },
        {
          name1: 'getLayer(id)',
          name2: 'Layer',
          name3: '返回地图一个单独的图层。'
        }
      ],
      tableData4: [
        {
          name1: 'centerAndZoom(mapPoint,levelOrFactor)',
          name2: 'Deferred',
          name3: '地图居中并缩放。'
        },
        {
          name1: 'centerAt(mapPoint)',
          name2: 'Deferred',
          name3: '以指定地图坐标作为中心点坐标重定位地图。'
        },
        {
          name1: 'disableClickRecenter()',
          name2: 'none',
          name3: '不允许单击地图来重定位地图中心点。'
        }
      ],
      tableData5: [
        {
          name1: 'onBasemapChange(event)',
          name2: '当用户切换底图时触发。'
        },
        {
          name1: 'onBeforeUnload(map)',
          name2: '地图部署好之前触发。'
        },
        {
          name1: 'onClick(event)',
          name2: '当用户使用鼠标单击地图且鼠标在HTML页面的地图范围内时触发。'
        }
      ],
      tableData6: [
        {
          name1: 'esri.geometry.Extent(xmin, ymin, xmax, ymax, spatialReference)',
          name2: '创建一个范围对象。坐标表示边界框左下角和右上角的坐标。空间参考也是必需的。'
        },
        {
          name1: 'esri.geometry.Extent(json)',
          name2: '使用JSON对象创建一个范围对象。'
        }
      ],
      tableData7: [
        {
          name1: 'xmax',
          name2: 'Number',
          name3: '范围框右上角x坐标值'
        },
        {
          name1: 'xmin',
          name2: 'Number',
          name3: '范围框左下角x坐标。'
        },
        {
          name1: 'ymax',
          name2: 'Number',
          name3: '范围框右上角y坐标。'
        },
        {
          name1: 'ymin',
          name2: 'Number',
          name3: '范围框左下角y坐标。'
        }
      ],
      tableData8: [
        {
          name1: 'centerAt(point)',
          name2: 'Extent',
          name3: '一个以参数点为中心的同样宽度和高度的范围被返回'
        },
        {
          name1: 'contains(point)',
          name2: 'Boolean',
          name3: '当返回值为true，参数点包含在当前范围内。'
        },
        {
          name1: 'expand(factor)',
          name2: 'Extent',
          name3: '通过给定因素扩张范围。例如，1.5表示将增大50%。'
        }
      ],
      tableData9: [
        {
          name1: 'width',
          name2: 'Number',
          name3: '线符号的宽度（单位：像素）。'
        }
      ],
      tableData10: [
        {
          name1: 'setWidth(width)',
          name2: 'LineSymbol',
          name3: '设置LineSymbol宽度。'
        }
      ],
      tableData11: [
        {
          name1: 'anchor',
          name2: 'String',
          name3: '关于图形的信息窗口的位置。参数值见常量表。'
        },
        {
          name1: 'coords',
          name2: 'Point',
          name3: '信息窗口屏幕坐标的参照点。'
        },
        {
          name1: 'fixedAnchor',
          name2: 'String',
          name3: '信息窗口总是在指定位置显示。参数值见常量表。'
        },
        {
          name1: 'isShowing',
          name2: 'Boolean',
          name3: '确定当前信息窗口是否被显示在地图上。'
        }
      ],
      tableData12: [
        {
          name1: 'ANCHOR_LOWERLEFT',
          name2: '信息窗口位于点的左下方。'
        },
        {
          name1: 'ANCHOR_LOWERRIGHT',
          name2: '信息窗口位于点的右下方。'
        },
        {
          name1: 'ANCHOR_UPPERLEFT',
          name2: '信息窗口位于点的左上方。'
        },
        {
          name1: 'ANCHOR_UPPERRIGHT',
          name2: '信息窗口位于点的右上方。'
        }
      ],
      tableData13: [
        {
          name1: 'hide()',
          name2: 'none',
          name3: '隐藏信息窗口。'
        },
        {
          name1: 'move(point)',
          name2: 'none',
          name3: '移动信息窗口到指定屏幕点。'
        },
        {
          name1: 'resize(width, height)',
          name2: 'none',
          name3: '修改信息窗口大小为指定的像数高和宽。'
        }
      ],
      tableData14: [
        {
          name1: ' onHide()',
          name2: '当信息窗口被隐藏时触发。'
        },
        {
          name1: 'onShow()',
          name2: '当信息窗口被可见时触发。'
        }
      ],
      tableData15: [
        {
          name1: ' id',
          name2: 'String',
          name3: '图层ID。如果没有指定，esri.Map指定值。 默认情况下，图层ID是"layer"+数字。ID仅仅能在图层构造函数中被用户定义。'
        },
        {
          name1: 'loaded',
          name2: 'Boolean',
          name3: '当图层被加载时，值变为true，图层属性可以被访问。onLoad事件也被触发。'
        },
        {
          name1: 'opacity',
          name2: 'Number',
          name3: '图层的不透明或透明度。属性值范围从0.0到1.0，当值是0.0时，100 % 透明，当值为1.0时，不透明。'
        }
      ],
      tableData16: [
        {
          name1: ' hide()',
          name2: 'none',
          name3: '设置图层的可见性。设置为false，图层没有删除，但是从视窗隐藏。'
        },
        {
          name1: 'setOpacity(opacity)',
          name2: 'none',
          name3: '设置图层不透明度。 值范围从0.0到1.0，0.0是100%透明，1.0是不透明。'
        },
        {
          name1: 'show()',
          name2: 'none',
          name3: '设置图层的可见性为"true"。'
        }

      ],
      tableData17: [
        {
          name1: ' onError(error)',
          name2: '当接收图层出现问题时触发该事件。'
        },
        {
          name1: 'onLoad(layer)',
          name2: '图层的属性成功填充后触发事件。图层加到地图以前该事件必须是成功的。'
        },
        {
          name1: 'onOpacityChange(opacity)',
          name2: '当图层不透明度被修改时触发，返回不透明度的值。'
        }
      ],
      tableData18: [
        {
          name1: 'esri.toolbars.Draw(map)',
          name2: '创建新的Draw对象。地图是一个必需的参数。'
        }
      ],
      tableData19: [
        {
          name1: ' fillSymbol',
          name2: 'SimpleFillSymbol',
          name3: '符号被用于绘制Polygon或Extent。'
        },
        {
          name1: 'lineSymbol',
          name2: 'SimpleLineSymbol',
          name3: '符号被用于绘制Polyline。'
        },
        {
          name1: 'markerSymbol',
          name2: 'SimpleMarkerSymbol',
          name3: '符号被用于绘制Point或Multipoint。'
        }
      ],
      tableData20: [
        {
          name1: 'EXTENT',
          name2: '绘制一个extent box。'
        },
        {
          name1: 'FREEHAND_POLYGON',
          name2: '绘制一个freehand polygon。'
        },
        {
          name1: 'FREEHAND_POLYLINE',
          name2: '绘制一个freehand polyline。'
        }
      ],
      tableData21: [
        {
          name1: 'activate(geometryType)',
          name2: 'none',
          name3: '为绘制几何体激活工具栏。激活工具条禁用地图导航。'
        },
        {
          name1: 'deactivate()',
          name2: 'none',
          name3: '禁用工具栏并激活地图导航。'
        },
        {
          name1: 'setFillSymbol(fillSymbol)',
          name2: 'none',
          name3: '设置填充符号。'
        }
      ],
      tableData22: [
        {
          name1: 'onDrawEnd(geometry)',
          name2: '绘制完成时触发。'
        }
      ],
      tableData23: [
        {
          name1: 'esri.tasks.GeometryService(url)',
          name2: '创建一个新的GeometryService对象. URL是一个必需的参数。'
        }
      ],
      tableData24: [
        {
          name1: 'url',
          name2: 'String',
          name3: '表示ArcGIS Server REST资源的定位器服务的URL。 使用Services Directory获得URL。'
        }
      ],
      tableData25: [
        {
          name1: 'SPATIAL_REL_COINCIDENCE',
          name2: '几何体的边框必须有一个交叉点，但是不考虑内部的关系（两者可以覆盖，一个包含在另一个里面，或者内部可能是不相交的）。这个关系应用于多段线和多边形。'
        },
        {
          name1: 'SPATIAL_REL_CROSS',
          name2: '如果两个多段线有唯一的共同点，并且至少其中一个不是终端，则多段线交叉。如果一个多线段和一个多边形在多边形内部共有一个多线段，并且共有的多线段不等于全部多线段，则多线段和多边形交叉。如果其中一个几何体是空的，则几何体不交叉。'
        },
        {
          name1: 'SPATIAL_REL_DISJOINT',
          name2: '如果两个几何体的交集是空，则是不相交的。如果disjoint是false，则两个几何体相交。'
        }
      ],
      tableData26: [
        {
          name1: 'areasAndLengths(areasAndLengthsParameters,callback?, errback?)',
          name2: 'dojo.Deferred',
          name3: '当几何体类型是Polygon时获得Graphic[]的面积和长度。'
        },
        {
          name1: 'buffer(bufferParameters, callback?, errback?)',
          name2: 'dojo.Deferred',
          name3: '在给定的几何体周边指定距离创建缓冲区多边形。完成时，onBufferComplete事件被触发并且可选的callback函数被调用。callback函数和事件处理器接收包含缓冲区几何体的Graphic数组。'
        },
        {
          name1: 'labelPoints(polygons, callback?, errback?)',
          name2: 'dojo.Deferred',
          name3: '为每个多边形计算内部点。这些内部点能用于在客户端标识多边形。'
        }
      ],
      tableData27: [
        {
          name1: 'onAreasAndLengthsComplete(areasAndLengths)',
          name2: '当areasAndLengths操作完成时触发该事件。'
        },
        {
          name1: 'onBufferComplete(geometries)',
          name2: '当缓冲操作完成时触发该事件。'
        },
        {
          name1: 'onError(error)',
          name2: '当执行任务发生错误时触发该事件。'
        }
      ]
    }
  },
  methods: {
    handleNodeClick (data) {
      if (data.id === 4 || data.id === 5 || data.id === 7 || data.id === 9 || data.id === 11 || data.id === 13 || data.id === 15 || data.id === 17) return false
      console.log(data.id)
      this.showCon = data.id
    },
    renderContent (h, { node, data, store }) {
      //   console.log('data', data)
      //   console.log('node', node)
      //   console.log('store', store)
      return (
        <span>
          <i class="el-icon-service"></i>
          <span>{node.label}</span>
        </span>
      )
      //   return (
      //     <span>
      //       <span>{node.label}</span>
      //     </span>
      //   )
    }
  }
}
</script>
<style lang="less" scoped>
#documentCenter {
  .box {
    height: 800px !important;
  }
  .breadcrumb {
    margin-left: 386px;
    display: inline-block;
    .p10();
  }
  .documentCenterLeft {
    width: 20%;
    .ib();
    .fl();
    box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.06);
    border-radius: 0px 0px 4px 4px;
    .search {
      .psx();
    }
  }
  .documentCenterRight {
    width: 79%;
    display: inline-block;
    height: 799px;
    overflow: auto;
    .drBox {
      margin-left: 25px;
      margin-right: 25px;
      margin-top: 20px;
      .drTitle {
        padding-bottom: 15px;
        padding-top: 20px;
        border-bottom: 1px solid #eaedf3;
        color: #000;
        font-size: 22px;
      }
      .drContent {
        font-size: 14px;
        color: #7d8696;
        margin-top: 15px;
        margin-bottom: 15px;
        line-height: 25px;
      }
      .drTitle2 {
        height: 30px;
        width: 100%;
        margin-top: 15px;
        border-bottom: 1px solid #eaedf3;
      }
      .drImg1 {
        background-image: url("../../../../static/img/frontdesk/drTitle1.png");
        background-repeat: no-repeat;
        background-size: cover;
        height: 100%;
        font-size: 14px;
        color: #fff;
        line-height: 26px;
        width: 86px;
        height: 29px;
      }
      .drImg2 {
        padding-left: 0;
        height: 100%;
        width: 50px;
      }
      .apiContent {
        line-height: 24px;
        width: 250px;
        padding: 10px;
        .tc();
        .ib();
        .apiTitle {
          .tl();
          font-size: 16px;
        }
        .apiCon {
          color: #666666;
          font-size: 14px;
          .tl();
        }
      }
    }
  }
}
.el-table th,
.el-table tr {
  background-color: #eee !important;
}
</style>
