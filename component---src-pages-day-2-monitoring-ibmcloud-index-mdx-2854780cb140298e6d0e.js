(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{"013z":function(e,t,a){"use strict";var i=a("q1tI"),o=a.n(i),n=a("NmYn"),s=a.n(n),l=a("Wbzz"),r=a("Xrax"),b=a("k4MR"),c=a("TSYQ"),d=a.n(c),p=a("QH2O"),u=a.n(p),g=a("qKvR"),m=function(e){var t,a=e.title,i=e.theme,o=e.tabs,n=void 0===o?[]:o;return Object(g.b)("div",{className:d()(u.a.pageHeader,(t={},t[u.a.withTabs]=n.length,t[u.a.darkMode]="dark"===i,t))},Object(g.b)("div",{className:"bx--grid"},Object(g.b)("div",{className:"bx--row"},Object(g.b)("div",{className:"bx--col-lg-12"},Object(g.b)("h1",{id:"page-title",className:u.a.text},a)))))},A=a("BAC9"),h=function(e){var t=e.relativePagePath,a=e.repository,i=Object(l.useStaticQuery)("1364590287").site.siteMetadata.repository,o=a||i,n=o.baseUrl,s=o.subDirectory,r=n+"/edit/"+o.branch+s+"/src/pages"+t;return n?Object(g.b)("div",{className:"bx--row "+A.row},Object(g.b)("div",{className:"bx--col"},Object(g.b)("a",{className:A.link,href:r},"Edit this page on GitHub"))):null},f=a("FCXl"),y=a("dI71"),O=a("I8xM"),w=function(e){function t(){return e.apply(this,arguments)||this}return Object(y.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,i=e.slug,o=i.split("/").filter(Boolean).slice(-1)[0],n=a.map((function(e){var t,a=s()(e,{lower:!0,strict:!0}),n=a===o,r=new RegExp(o+"/?(#.*)?$"),b=i.replace(r,a);return Object(g.b)("li",{key:e,className:d()((t={},t[O.selectedItem]=n,t),O.listItem)},Object(g.b)(l.Link,{className:O.link,to:""+b},e))}));return Object(g.b)("div",{className:O.tabsContainer},Object(g.b)("div",{className:"bx--grid"},Object(g.b)("div",{className:"bx--row"},Object(g.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(g.b)("nav",{"aria-label":t},Object(g.b)("ul",{className:O.list},n))))))},t}(o.a.Component),v=a("MjG9"),j=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,i=e.location,o=e.Title,n=t.frontmatter,c=void 0===n?{}:n,d=t.relativePagePath,p=t.titleType,u=c.tabs,A=c.title,y=c.theme,O=c.description,N=c.keywords,B=Object(j.a)().interiorTheme,x=Object(l.useStaticQuery)("2456312558").site.pathPrefix,M=x?i.pathname.replace(x,""):i.pathname,S=u?M.split("/").filter(Boolean).slice(-1)[0]||s()(u[0],{lower:!0}):"",C=y||B;return Object(g.b)(b.a,{tabs:u,homepage:!1,theme:C,pageTitle:A,pageDescription:O,pageKeywords:N,titleType:p},Object(g.b)(m,{title:o?Object(g.b)(o,null):A,label:"label",tabs:u,theme:C}),u&&Object(g.b)(w,{title:A,slug:M,tabs:u,currentTab:S}),Object(g.b)(v.a,{padded:!0},a,Object(g.b)(h,{relativePagePath:d})),Object(g.b)(f.a,{pageContext:t,location:i,slug:M,tabs:u,currentTab:S}),Object(g.b)(r.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},vz2Y:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return l})),a.d(t,"default",(function(){return c}));var i=a("wx14"),o=a("zLVn"),n=(a("q1tI"),a("7ljp")),s=a("013z"),l=(a("qKvR"),{}),r={_frontmatter:l},b=s.a;function c(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(n.b)(b,Object(i.a)({},r,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h2",null,"Monitoring Solutions on IBM Cloud"),Object(n.b)("p",null,"Red Hat OpenShift Container Platform has been one of popular platforms for the Cloud computing environment and it will take an important role in IBM Cloud strategy.  "),Object(n.b)("p",null,"There are several infrastructures which OpenShift supports such as AWS, Azure, VMware, and Bare Metal servers. "),Object(n.b)("p",null,"At 1st of August in 2019, Red Hat OpenShift on IBM Cloud was first generally available with OpenShift version 3.11 as well.",Object(n.b)("br",{parentName:"p"}),"\n","We have a series of technical documents which talk about the Day2 operation solution for OpenShift.  "),Object(n.b)("p",null,"This document is a part of the series of those documents.  In this document, we will discuss the overview of observability solutions for the OpenShift such as monitoring, logging, and event management.  Especially, we focus on the solution on IBM Cloud in this document.  We will provide deeper discussions of those solutions in another document.  "),Object(n.b)("p",null,"There ware separate pages which cover the observability solutions on other Cloud providers such as AWS as well as on-premise environment such as on VMware."),Object(n.b)("h2",null,"Overview of the Observability Solutions on IBM Cloud"),Object(n.b)("p",null,"The overview of the observability solutions for OpenShift on IBM Cloud is shown in below.  "),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"945px"}},"\n      ",Object(n.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"38.888888888888886%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAABcSAAAXEgFnn9JSAAABg0lEQVQoz1VSa2vcMBD0//8/KaSUfirkSuAopNfj8ujFucgv+SXbsmyfNFPZl6TOwnilWXlgdjdo9QTVjR9o/L1UBnndo6jnbJb8Cb4uqx6nqMApLhFLhbRoEcnOBVwCXMfZWgJuxVzqAObPByuzlGkSsa4qKqXY9hOC1R9wzi3ZwqPvYZIY+nSC7dqFV82IF2nQmDNE2iJvzniSFsNoYa1j3Q4INjc3rKoKh8OB2+2WaZpSyoJVURBdR5fENNowyjoeZc02Llm/5ry+FXyIWn75FXOazv8F7+8PFEIsgrvdjmEYetGMVVlykJL6zx3zUvPrT8GjSJgfX6hek8VWkhXcbO84TG52dxFcW36HtVhijCM0mx/vjUP4e4/Hx7/YPwt8u82wf3rG1ferubWY+74W/BTWF+1gOKjKWxR0pudsKctL6k7TmJF++tR68E5yP0S3DKzVI4KyGS6rod5WRA1Iy96vQouk0P5skMgOSa793fOei/15fhvnHUR2eTcjjBv3D4seYjWnHXrsAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(n.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"ibmcloud_observability_overview",title:"ibmcloud_observability_overview",src:"/static/272a7714da4d8683f5efc1ed848e9953/005b4/ibmcloud_observability_overview.png",srcSet:["/static/272a7714da4d8683f5efc1ed848e9953/7fc1e/ibmcloud_observability_overview.png 288w","/static/272a7714da4d8683f5efc1ed848e9953/a5df1/ibmcloud_observability_overview.png 576w","/static/272a7714da4d8683f5efc1ed848e9953/005b4/ibmcloud_observability_overview.png 945w"],sizes:"(max-width: 945px) 100vw, 945px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(n.b)("p",null,"On IBM Cloud, there are many services available to manage OpenShift such as IBM Cloud Monitoring with Sysdig for Monitoring, IBM Log Analysis with LogDNA for Logging, IBM Cloud Activity Tracker with LogDNA for Auditing, and so on.  "),Object(n.b)("h2",null,"Monitoring Solutions"),Object(n.b)("p",null,"Metrics would be useful to monitor OpenShift cluster. You can use OpenShift features and/or the services on IBM Cloud to monitor the health of the cluster. There are a few solutions available to monitor OpenShift on IBM Cloud.  "),Object(n.b)("h2",null,"Choosing a monitoring solution"),Object(n.b)("p",null,"There are many metrics you can gather in OpenShift.  The following table shows a list of tools which gather metrics with OpenShift on IBM Cloud.  "),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",{parentName:"tr",align:"left"},"Metrics"),Object(n.b)("th",{parentName:"tr",align:"left"},"Tools"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"},"Application Metrics"),Object(n.b)("td",{parentName:"tr",align:"left"},"Prometheus")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"}),Object(n.b)("td",{parentName:"tr",align:"left"},"IBM Cloud Application Performance Management")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"}),Object(n.b)("td",{parentName:"tr",align:"left"},"Node Exporter with Prometheus/Grafana dashboard")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"},"System Metrics:  Worker Nodes Metrics"),Object(n.b)("td",{parentName:"tr",align:"left"},"Heapster (kubectl top command)")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"}),Object(n.b)("td",{parentName:"tr",align:"left"},"IBM Cloud Console")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"}),Object(n.b)("td",{parentName:"tr",align:"left"},"IBM Monitoring with Sysdig dashboard")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"}),Object(n.b)("td",{parentName:"tr",align:"left"},"cAdvisor (Kubelet)")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"},"System Metrics:  Pods/Containers Metrics"),Object(n.b)("td",{parentName:"tr",align:"left"},"kube-state-metrics with Prometheus/Grafana dashboard")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"}),Object(n.b)("td",{parentName:"tr",align:"left"},"Heapster (kubectl top command)")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"}),Object(n.b)("td",{parentName:"tr",align:"left"},"IBM Cloud Console")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"}),Object(n.b)("td",{parentName:"tr",align:"left"},"IBM Monitoring with Sysdig dashboard")))),Object(n.b)("p",null,"For the application metrics, we will talk about the IBM Cloud Availability Monitoring and Prometheus in the following sections.  "),Object(n.b)("p",null,"For the system metrics, we will talk about Grafana dashboard, IBM Cloud Console, and IBM Monitoring with Sysdig dashboard in the following sections.  "),Object(n.b)("p",null,"With those monitoring solutions, you would use other tools such as IBM Cloud Event Management, PagerDuty, Slack, Email, and so on to generate/receive alerts and events as shown in below.  "),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"943px"}},"\n      ",Object(n.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"58.68055555555556%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAABcSAAAXEgFnn9JSAAACK0lEQVQoz11TyY7TQBDNL8KVH+A0R36AX0DMAcRluCFxgCAYxCDlggZllhARzyQhC5lsXjLxvnbXo7rtGEPJ5W5Xdb16VV1ubZyI3CAjLyr0uvfTUnl/7yW0c2Otaq+VfWGYUBDE5PL+/nCedcf+VpYLAkvge5BSoCnr9Qrz+Rzj8Rjr1RJE+ii+bYB3M8DN8b8oQElby8Z5z6CtaakIEkJQwSpEQdeDEf28HTOWpCwvtP/4y5SevL6g2dbT34WQpJJxCLVSBgx8HwPjhksJyzQVkyzLYBgGJpMJs5dalVxedPG+3YZpmjUz9VK4rTjJqWk8gB1WZdZg1Xdv6uBrf1XXGGcCNvf7L2DBJ8MAWb9HMs816oGJGyW4/LWALMrecitwNVrC5BblednA550lHr0yyA7SsoepAGWODfPjBxJJDAUlOZApIuGgk04XP4ZTHazs32836A5XoCppZ+jg+GxWl9NK0oIESYR5XhfZLDnmJI7rVzYJ043RnztIUu7vnYMoLbBZz+jo6RHutksuOVU3x08cE5qQvNdX6O3ZF5UMK1ZKFODV9QC27WE4H9GDxw8xXfxmhpLHxNrCffuGRBTWJatVBAHCF88Qn7ysS1bMpSwT7xlUnfS9gOztjnssy7HJ0wT2YkG6d41yZVHAPG3D7pxVDEVzIHDT7yJKLOx2ezr9/KkEDKKsHEpSAy3xjzKTVCvAw4ucb1vZi8rnWRaSONbjYjsO1F/3B5SmlPKblPqhAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(n.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"ibmcloud_monitoring_solutions",title:"ibmcloud_monitoring_solutions",src:"/static/982d091bb6071b2ec8bf653f3d7875fa/692e9/ibmcloud_monitoring_solutions.png",srcSet:["/static/982d091bb6071b2ec8bf653f3d7875fa/7fc1e/ibmcloud_monitoring_solutions.png 288w","/static/982d091bb6071b2ec8bf653f3d7875fa/a5df1/ibmcloud_monitoring_solutions.png 576w","/static/982d091bb6071b2ec8bf653f3d7875fa/692e9/ibmcloud_monitoring_solutions.png 943w"],sizes:"(max-width: 943px) 100vw, 943px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(n.b)("p",null,"As mentioned in the table above, there are three tools we would introduce for applications monitoring.  With any tools, you might want to report several metrics such as “number of requests received”, “number of successfully processed requests”, and “number of failed requests”.  You would find out what metrics you need for your application and if you can gather those metrics with the tools we will explain.  "),Object(n.b)("h2",null,"Monitor Applications by Prometheus"),Object(n.b)("p",null,"You can also monitor your applications by Prometheus.  The OpenShift on IBM Cloud includes the built-in Prometheus which can be used for the platform monitoring but for the application monitoring.  Therefore, you need to install your own Prometheus to gather metric for your application.  "),Object(n.b)("h2",null,"Monitor Applications by IBM Cloud Availability Monitoring"),Object(n.b)("p",null,"By using IBM Cloud Availability Monitoring, you can monitor the responsiveness and throughput of your Cloud Foundry applications which are running on IBM Cloud.  You can also proactively detect, isolate, and diagnose performance issues of your Cloud Foundry applications before they impact users of your Cloud Foundry applications.  The IBM Cloud Availability Monitoring dashboard displays availability and response time information for monitored URLs of your Cloud Foundry applications.\nWhat does this mean is that the IBM Cloud Availability Monitoring service does NOT support your applications running on the OpenShift on IBM Cloud unfortunately.  "),Object(n.b)("h2",null,"Monitoring Applications by IBM Cloud Application Performance Monitoring"),Object(n.b)("p",null,"IBM Cloud Application Performance Monitoring is an solution to monitor application performance. IBM provides it as a SaaS offering running on IBM Cloud.  With this offering, you can monitor your OpenShift resources at OS level.  At the current version, it doesn’t provide you at the container nor application level performance metric unfortunately. "),Object(n.b)("p",null,Object(n.b)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"939px"}},"\n      ",Object(n.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"36.45833333333333%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAABcSAAAXEgFnn9JSAAABj0lEQVQoz3WSS2/TQBSF/TtZs+YnsAWVTTZIiEXXbBFCqpBYNEgB0YaUVk2wY6d28xrF9thx/H593KTrjnR0rzQz55x7Zgw/ysibnqJqqOruVIuiJsoEaUmaVYTRgX+Wwy6IycuGum4pT+ePaOVOTdt2PG4jjCjccxiP0aFmvVWEWnNIM+wHj4W3pBaxLE2Z/LkijjRt1/PcUsEBwxdVZdk47ob7mc3Kdtg4C+hq6Cv6rsPVOZ8vJ1yZK1rhK8sS13XFaX0iCoJAsGOlxGEYp6RlxcZPmC+EdHyDc3fH+ReTV4Nr3n2y+Hr5lxcvX/Px7AO2CA6HQ0ajEcMfQ0zTZPB+wNuzN0xurSfCLMtx16GMuWHteKzE8Y0VcPFryfdrxa0XcH7xk2+/78UxEkmKUookSej7HsuaM5tNsd0thhbCeL9H+TGLxSNTydOdzuiaUoZpBP1pbImSY3p10z6b4U5nGCpICHSCL9iFUuVFfS2QPohELClOe9O5x8NSkckPOL5wUR7rU58XlQg1eBvNf7VxCAq8DZtoAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(n.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"ibmcloud_apm",title:"ibmcloud_apm",src:"/static/c7b91c2080673446f801e8d045846d8b/9f734/ibmcloud_apm.png",srcSet:["/static/c7b91c2080673446f801e8d045846d8b/7fc1e/ibmcloud_apm.png 288w","/static/c7b91c2080673446f801e8d045846d8b/a5df1/ibmcloud_apm.png 576w","/static/c7b91c2080673446f801e8d045846d8b/9f734/ibmcloud_apm.png 939w"],sizes:"(max-width: 939px) 100vw, 939px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),"  "),Object(n.b)("h2",null,"Monitor Applications by IBM Cloud App Management"),Object(n.b)("p",null,"IBM provides another solution for your application management.  You can build an IBM Cloud App Management as your application performance solution on your IBM Cloud account.  As of writing, IBM does not provide SaaS offering with IBM Cloud App Management yet.  "),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"939px"}},"\n      ",Object(n.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"34.02777777777777%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAABcSAAAXEgFnn9JSAAABeklEQVQoz22RSY/aQBCF/f+l/IdkiJRrbkRRNJEykxPDJAfCYmyDDV4asxjc2G5vX9omnCYlPVWrq+u9qteGzBS5qlBlTaGRF6VGRaZzlpe3fEeuEEnG6ZJR6rd13VBplFVNF4vVDiN5feW8E4RCIOIYmeWkUqKUom2h0GJ3wWtW4IeCaLfva9Dq3NI0TU9ouXuMyLJxPcHUXLOZm8S2w/Wc6vJNtVQl32cXvH1B9W+Spid7G8uOUOYF0T7F8XbYpsPKtDgcUwbDJZ+ftnranJm1IRBHtkFM4PtstgEvL2P+TCa4rsvw65DHx2+3ldNUIjSh6QQksqCsW+KT5N2nCQ9fVsTHc988X5haNCIKQ5y1x4+nZ8bjMaPRiPeDDww+PvB76mJctV/xIcFxQ63s4/sBUt91/nTRfdBFZj1U1fx3VVXktHWpPYwxplbIwon0uIK5zjM7YmqHzByBuY77NUztzf281E1zXXODE5sowQtPbMUFcZD8/LXmL2qEC5TDs/vQAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(n.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"ibmcloud_icam",title:"ibmcloud_icam",src:"/static/dbf46b86de195ae90af5b40224243499/9f734/ibmcloud_icam.png",srcSet:["/static/dbf46b86de195ae90af5b40224243499/7fc1e/ibmcloud_icam.png 288w","/static/dbf46b86de195ae90af5b40224243499/a5df1/ibmcloud_icam.png 576w","/static/dbf46b86de195ae90af5b40224243499/9f734/ibmcloud_icam.png 939w"],sizes:"(max-width: 939px) 100vw, 939px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(n.b)("p",null,"With IBM Cloud App Management Advanced, you can manage your microservice-based applications such as Nodes and Liberty applications running on your OpenShift cluster on IBM Cloud as shown in below.  "),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"945px"}},"\n      ",Object(n.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"57.98611111111111%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAABcSAAAXEgFnn9JSAAAB60lEQVQoz42SW24TQRBFZxsg8RERWSCBiIJQJCArYDesjRXwBSwAvhxwbMfzsj39mOnn1KVqbAUQWKJHR11zq1V9u6uLxxfXNLu8pvOLt3T+4g09nL38bx7MLunR01d09vw1nT27oidX76hYrDYQlpsa67LBXSXz34h+90+9wYap2xZf5yUVOQHeZxozSD46Aa8jGk/kWQePchuoUCZA6UBaBxgTT9I0FqfWaB2ptwnz244K0zv0gyPrEpQZ0LsAbT0s69bFo3aYjR1gBzEgxXto1mIaBXGK29JQYfsBu72hlEcIPkTkccQ40i/oQMoZIaYpn1k/wLEEPJaV5qbUCp9uSlpUinfKcM5xEVmUp3mIEY4hjlNKkx55rjqFWmv0IWA8FlzV7JCL4f2Hj/R5XvLRIzsM2FmDrTFomWXXYaU61uxUSAo659HzyQQx4H3gpmasG0vFj6rDF27397Kb7oPtA3IhNG36xxDHUlSOL9kD03Ucu+y4y9wAZTzpgTvlE4UQKeZ8z957apyjIP8pke57Uvz/O3umjwGbdqAiRi97HxyQNCahGQxKq7G2CiujsGaWpmOHfH/B35O4iBA4psxPa88Od/yGlnz2aj8w7Kbz1HKi5bjleMvsJo1RYdJqzgvNEYl3nPu2UPQTistvN8oMb5IAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(n.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"ibmcloud_app_monitor_by_icam",title:"ibmcloud_app_monitor_by_icam",src:"/static/6db4895a677e09df593985bacf8de7c3/005b4/ibmcloud_app_monitor_by_icam.png",srcSet:["/static/6db4895a677e09df593985bacf8de7c3/7fc1e/ibmcloud_app_monitor_by_icam.png 288w","/static/6db4895a677e09df593985bacf8de7c3/a5df1/ibmcloud_app_monitor_by_icam.png 576w","/static/6db4895a677e09df593985bacf8de7c3/005b4/ibmcloud_app_monitor_by_icam.png 945w"],sizes:"(max-width: 945px) 100vw, 945px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(n.b)("h2",null,"Monitor OpenShift Master on IBM Cloud"),Object(n.b)("p",null,"OpenShift Master is monitored by IBM. IBM Cloud automatically scans the Master for vulnerabilities that are found in Kubernetes. If vulnerabilities are found, IBM Cloud automatically applies fixes and resolves vulnerabilities on behalf of the user to ensure Master protection.  "),Object(n.b)("h2",null,"Monitor OpenShift Worker Nodes"),Object(n.b)("p",null,"On the Kubernetes Cluster dashboard on IBM Cloud Console, you can see the health of your Worker Nodes and status of Master as shown in below.  "),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"945px"}},"\n      ",Object(n.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"62.84722222222222%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAABcSAAAXEgFnn9JSAAAChklEQVQ4y5VSW2vUQBjNL/fFUtFq2dp7u6i9WAq1oE+i+CQoiC+1lhZt3Xt2c79MkplkknzHbzeLFuyLA4cvGb7LOecbY+v5MW08O6advRNqtV/Q6u4Btbb2OB7SWvvlDOuMTc7b2T+Z3x81NfuvaPfglNqHp3x/RK/ffyFjaa2NhSdruLe4jIWlVSw8bnB/6ekfPFhex6OVLSzO4+p2Gysb2xx30drcwcPWBte28ObdJzIQh+BD/4OPZwF9+OrS2882XZs5UXOPKCMyItuCECk5QQaRpLBdD5mUCMIYaSYRixRSKtRKopIZiiTB5aWJ8+9DnH0bYNR3ISNBGedbTkKGKmskqqCsqMGf0DWhrGoUuoRmFBWhEAKJaUI4PnQUA7lkpEDBUaYohSDwMOt6QIbwfbijIUHx9DhG4jFDZlaWJYjFTLVUKbNka+zUhCdNaKpmw/NKo6inQzXJqsD4Z5+MuPsL9sU51ZYJ1blG+OMKSuVNM5pZgzrL4PpXiJWHMLHgpl3UdQ1dMrsqZTUJxVnADXvMMJVIpJpVqrzAxPEQTGXdOlWawPIumHmBOEqYZY8VaFCh2CPFUZLKRNMwihNMLJumfuXc0OGl+EE4YymVgtIaNS8r9rtwsz5c0UUsJ6CSoHlZJefpTJFgEuZVhxlycqc3oCgWSGUOxxeNHG5UFAV0xX6x4cReK38E6Q0B9rqOAlRhgzL0SfsurM6Yt8ysPD8kZkMiK8ny1D/vrqqJKvr7T3Pc/p9aY0eal8JPwrIdRFE0e3PDsc0EYpasZrLzomrq5gua19553DAnw7RDGow9GjsRTRg3vTHd9Cc0sgJmKyhKNMVpg0SWd2KqLMsr6k5S+g1H5r75tYXpgAAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(n.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"ibmcloud_master_status_dashboard",title:"ibmcloud_master_status_dashboard",src:"/static/0f290caecea36c9324dd169868ab6d3c/005b4/ibmcloud_master_status_dashboard.png",srcSet:["/static/0f290caecea36c9324dd169868ab6d3c/7fc1e/ibmcloud_master_status_dashboard.png 288w","/static/0f290caecea36c9324dd169868ab6d3c/a5df1/ibmcloud_master_status_dashboard.png 576w","/static/0f290caecea36c9324dd169868ab6d3c/005b4/ibmcloud_master_status_dashboard.png 945w"],sizes:"(max-width: 945px) 100vw, 945px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(n.b)("p",null,"You can also see each Worker nodes’ status on the Worker Nodes tab as shown in below.  "),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"945px"}},"\n      ",Object(n.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"48.958333333333336%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAABcSAAAXEgFnn9JSAAACG0lEQVQoz41RyU4UURSt/9Y4BJAoIK20TDIoAhIHYG007owJG3FhdKGrVnqo6q56Y9WrqnO89YJ7F+fdm/vueE6y+ew1tvZPsHd0hs2DE/T3D7Gx+xJrT19gU+IdNq7tzuFbbD9/hSc7R9g+eIPdw1PsHZ9j//gMu0fn6O+cIJlbWcdCb5M35h7w5vwy7yz2eHtxNeLWvRXBw+gvrPQ5t/Q4YunROlefbIjts7e+xYXlNd693+P8ch8JSVDljPY/8Set8e7zCB8uJvh0OUXVxHjskWhlobOMxjoobTiZag4nitY6zvKCznsqrdk0Deu6Ztu2vJpofvk+5uWPMb/9zKhNCV8GCpBkhcdglPJqPIUra850YKoCjQ9UtqRxgdpWdGVDK//W1wxNKyshrtXKk+sKk5lnmnskU1UiV4aFdihDQy9bmlxJkmchjZQNEbkur/1KhvroS20c/PHiN9aOv/L0/S8kualgJZjlGrPCcDoYsBiOmA7HUuhku7IbxnGWUxkvG1YcpTN21+Rdfq5ZSA/t4mAkhQmoqkDrHIw2sPkVbJHDzqZoheQ61CjLCsZadDy3LaCUhnUejRfeiwLpTHdx1k37r2ElolgaI5gM6LKUvsgpDUUM4SyEKE6HTpQuL4hAdSmnKxUvaITXULedKCUKbZHJlELUmg5HUOMJnK/gq0bUqzuxBEFiQWJ1R1H8M7aMddp1tNXd2fgLVILWQZAvxz8AAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(n.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"ibmcloud_worker_status_dashboard",title:"ibmcloud_worker_status_dashboard",src:"/static/e94341c0c3fa4806222122d61eb16c25/005b4/ibmcloud_worker_status_dashboard.png",srcSet:["/static/e94341c0c3fa4806222122d61eb16c25/7fc1e/ibmcloud_worker_status_dashboard.png 288w","/static/e94341c0c3fa4806222122d61eb16c25/a5df1/ibmcloud_worker_status_dashboard.png 576w","/static/e94341c0c3fa4806222122d61eb16c25/005b4/ibmcloud_worker_status_dashboard.png 945w"],sizes:"(max-width: 945px) 100vw, 945px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(n.b)("p",null,"To monitor detailed metric for Worker Nodes, IBM Monitoring with Sysdig is your 1st choice of the solutions on IBM Cloud. The 2nd choice would be the built-in Prometheus in OpenShift.  "),Object(n.b)("h2",null,"Using IBM Cloud Monitoring with Sysdig"),Object(n.b)("p",null,"You can gain operational visibility into the performance and health of the OpenShift by deploying Sysdig agent to OpenShift Worker Nodes to forward metrics to IBM Cloud Monitoring with Sysdig as shown in below.  "),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"34.02777777777777%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAABcSAAAXEgFnn9JSAAABUElEQVQoz3VSy07DMBDM/9/hwK9AL6UnLgUhRKKmJH2kTUvaqInfjj2snYLUAyOtJuvH7HonScekk9ZDGueVHhBCKDOGNJDKxrXAgoKpcd+YAfombOSExJxYr8Hq2l8YQ9f1sNbSBYNhoINao+t7KKXAhUCx2aFjHLfwf1+JIsHLqsSp2vvlqsJnukCalyRo44Eg3ByP0CQYCjk3YHCjQCj2CyllbCCRyjjSBNfW7w5nlOsdPrIvNKczZrMZ2rbF48sbTu0FVVWhKAqUqzWyLMN0OsV8/hr5/uGO+DkIWmeNpnnpKLgsNnhPl5Qr1HVNXRlk5RZVfYTgHIzGwrhA0zTI8zwWWBA/TSZI03TsMMynZ8J/Ny329QHbag8h5PgU2gtw13kGDIPHf0g6rhyXGkwoHzg4G1zkQiPkgXuuqCs15nJ0P7qs7dVd+hPoTsh/AJmoFw/DtwQJAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(n.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"ibmcloud_sysdig",title:"ibmcloud_sysdig",src:"/static/314480595c19d5e14a69361c8b7aad7a/3cbba/ibmcloud_sysdig.png",srcSet:["/static/314480595c19d5e14a69361c8b7aad7a/7fc1e/ibmcloud_sysdig.png 288w","/static/314480595c19d5e14a69361c8b7aad7a/a5df1/ibmcloud_sysdig.png 576w","/static/314480595c19d5e14a69361c8b7aad7a/3cbba/ibmcloud_sysdig.png 1152w","/static/314480595c19d5e14a69361c8b7aad7a/0b124/ibmcloud_sysdig.png 1728w","/static/314480595c19d5e14a69361c8b7aad7a/ca008/ibmcloud_sysdig.png 1981w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(n.b)("p",null,"For your reference, the following figure shows a sample data on the Sysdig Dashboard on IBM Cloud with the OpenShift cluster.",Object(n.b)("br",{parentName:"p"}),"\n",Object(n.b)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"943px"}},"\n      ",Object(n.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"54.861111111111114%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAABcSAAAXEgFnn9JSAAACDklEQVQoz3VTWYsTQRDOz1LENxcF8UHEFUHB4/8pKOIaF3FJZMUHFw/wItnN5pjM2dNz9nT3fGX1JJu4ig3fVFfXV9VV1TW9p3sDzBYh0kwhSFL4sUCUFAiTDF6QwI8kglgiSUtEomA9xTIQnS6LBmleMxr2KzD3EvQuXb+LyXRGdV2TYvx3AX8qa5zfV02D3s7tRzj41afD+WschUPGOwwnfbxf7iMslxCJhFIKbdtCpAJlXiGpQwxPX2Ew2cNP+Ql5XjByUtqgd+XWQwyO+/Rm9AyH8306igd0cPKChouXFFVLCv2IZCa7DOI4oiIrKdUxvT15Tv0fT+ib+EhlWSJJYqoVZ3j5xj1M5l6Xu20NGUYLS7aT7aZI1Wgqq7ornbMlyxz+Ms+e1U3aWBfwPkbHUzKcrjsGO2DdFqydnVLXikQq1/YVB+1KcjfcIq054MVrdzCdzcgYA2v5Tmu7IGdwuiO7R5NSbs/bc1zXY2pcD11APwg4Cy7UamqtYeK/0FrzFFSkVM2X67/tcH7cFvQuXN3FaOKRLxSizFJWgZ9/i1K1VLu90uRFBYlMUV6ZjW3Nw0rnknd2H+PDl1MaeQ0y7nlj1v3Bdsrc4uGlr2PB2WztGw5WNGNbHpubD/D5+5i8MOK/RZLMC3bOO+lHMS38gDzG3I9pPPUoShKKRcqcggK2O47IcgiZkR+n+A0ZGjm9EqAzygAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(n.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"ibmcloud_sysdig_dashboard",title:"ibmcloud_sysdig_dashboard",src:"/static/6eda228bf8630de589a896468ec62fdd/692e9/ibmcloud_sysdig_dashbaord.png",srcSet:["/static/6eda228bf8630de589a896468ec62fdd/7fc1e/ibmcloud_sysdig_dashbaord.png 288w","/static/6eda228bf8630de589a896468ec62fdd/a5df1/ibmcloud_sysdig_dashbaord.png 576w","/static/6eda228bf8630de589a896468ec62fdd/692e9/ibmcloud_sysdig_dashbaord.png 943w"],sizes:"(max-width: 943px) 100vw, 943px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),"  "),Object(n.b)("h2",null,"Using Built-in Prometheus"),Object(n.b)("p",null,"You can configure other tools for more monitoring capabilities, such as Prometheus. Prometheus is an open source monitoring, logging, and alerting tool that was designed for Kubernetes. The tool retrieves detailed information about the cluster, worker nodes, and deployment health based on the Kubernetes logging information as shown in below.  "),Object(n.b)("p",null,Object(n.b)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"939px"}},"\n      ",Object(n.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"42.36111111111111%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAABcSAAAXEgFnn9JSAAAB10lEQVQoz2WSzY/SUBTF+U9du3PnyvgHmJi40MXsTBxdMBtjZoijDM4oMkz4UHGEFmFAhlLa0tLS0i/Kz1tITNT7cvKSl/fOPefcV/BWPkmaEqUb4iQVJMRxQhTHe0T7PRbolsPCWbLJMlK5v9lkZIJUsJWlWx6FdRiTCYlXr+PpOpbtsPJ8/q2twFl6uK775yxerxkpKvp8TuyH2MuQgrta77obikKYq5VuURQIXEzLZKpNCVxNHhs79bky27Z3b/J6efiK8oczXCxGQiyEwX9qsnDI1u+QBQre5Bj13V36zRdoc4tGo0GlUqFUKvGpWuXjxTmvy0UedR9w0jul4OUKJbul2HEkn8mthqEWsZr3mHeeoHcPuT65Q+/sPjeDawbDMZZpYhjGrvnsdsJk3GcU91G08Z4wzydKNqyjBN1c4MzO0d48ZPr5AHt0jH75mNHVczqdjkQwo9v9Qa1WQ1VVmqK4XH6PYzh4q1QsywCipUm4mBHZcxJnTuD0cS4vCIZfJPkxtqpg/OzS635neDOm3W7TarWoiuWjoyJPD55RyXP0EwpL1+PXtzq96lsGVxWU6inT3lcCGY4vX8ZfhwRRKOojQnEQhuFfeefDmc10An+Fafv8BlBITidllPr7AAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(n.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"ibmcloud_builtin_gap",title:"ibmcloud_builtin_gap",src:"/static/7e91231a6c2e6e212a14444dd9b4b78e/9f734/ibmcloud_builtin_gap.png",srcSet:["/static/7e91231a6c2e6e212a14444dd9b4b78e/7fc1e/ibmcloud_builtin_gap.png 288w","/static/7e91231a6c2e6e212a14444dd9b4b78e/a5df1/ibmcloud_builtin_gap.png 576w","/static/7e91231a6c2e6e212a14444dd9b4b78e/9f734/ibmcloud_builtin_gap.png 939w"],sizes:"(max-width: 939px) 100vw, 939px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),"  "),Object(n.b)("p",null,"As an example, the following screenshot shows the Grafana dashboard comes with the built-in monitoring solution in OpenShift on IBM Cloud.  "),Object(n.b)("p",null,Object(n.b)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"943px"}},"\n      ",Object(n.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"60.76388888888889%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAABcSAAAXEgFnn9JSAAACeElEQVQoz1WT/07TUBTHG4QgMVFgG1vp2t723tsf24Cto2OwrVSi60h8C9/AJzCCZpuJvo9GQeIf/ufbmBDxHM9tYegfn5zvPefs3NP2O21vtwtR7wgOjlI4GBTEhwn0KEa9ATGE6KCgEw+gS3G/P8p74sNj6MZ92O/183ySjkF7vPYQRBCiHzZRcIkeRb/RQik9NAwTa7qB+j+Ypo2WxQgbHYej5zL0XRsZc7BuOaBtlHWoU0GELShXqlDZNqFqMiiRLm3VoFLVoUwx11t6HkuVgk3qeVKuwkahsVw1QFtZfQQW3dqQIXCbI7cc9BSMLiEcy0XPEdhu7qDLBHLbLWrUq2LHlRgwDrLIgaatrMEOF/g5G8JlNsCLbIjfT0d4RfFiPMQv4wFekv6WjfDT8wF+VXpS1FTPzxcJXk2G8IN+87KzSwOX1yAKBP6angDMU/w9I1ScpnijmN3miD+z4nwzv81T/Xp+jNezFPDDU3x1SgOXaKCUDr57PYb3byc4O5vg/Cz7n3PKnWf33OUozojpmww+Tk9x/KwN2gN6ZMtm6DUiMGwf9TrHbYu+MOmaKVE3SbMAdYNTTeS12rab1ze3LFwvGbhersN62cRKzbodyFwMwybYNNghrSywwHbIHi42dzvoCg9tsowjQ2TkDJusw4SPjHugtKlss0QDpRdgmj6DmEzqOBI49wlvgetKaLTaIMgJQgQQtjrgqh7Kt/b2gXsN1UOXSNpweRWkEHicpJiMEoyibm5atckd6hz4AW3L8o05baespp5ICrnoyzc0LAnq/R0lWU7cPwHXawP371HnoNUj3aF/VQR+M170hDtFXmnH68BfxZiIoN9OsrwAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(n.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"ibmcloud_builtin_gap_dashboard",title:"ibmcloud_builtin_gap_dashboard",src:"/static/a37d215e513284fa9865d9f61e3c0397/692e9/ibmcloud_builtin_gap_dashboard.png",srcSet:["/static/a37d215e513284fa9865d9f61e3c0397/7fc1e/ibmcloud_builtin_gap_dashboard.png 288w","/static/a37d215e513284fa9865d9f61e3c0397/a5df1/ibmcloud_builtin_gap_dashboard.png 576w","/static/a37d215e513284fa9865d9f61e3c0397/692e9/ibmcloud_builtin_gap_dashboard.png 943w"],sizes:"(max-width: 943px) 100vw, 943px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),"  "),Object(n.b)("h2",null,"Understanding options for monitoring on IBM Cloud"),Object(n.b)("p",null,"To help understand when to use the IBM Cloud Monitoring with Sysdig or the built-in OpenShift monitoring tools, you can review the following table.  "),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",{parentName:"tr",align:"left"},"OpenShift tools:Built-in OpenShift monitoring tools"),Object(n.b)("th",{parentName:"tr",align:"left"},"IBM Cloud integrations:IBM Monitoring with Sysdig"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("div",null,"• OpenShift built-in monitoring pre-configured and self-updating monitoring stack for cluster components."),Object(n.b)("div",null,"• Based on Prometheus open source project and ecosystem."),Object(n.b)("div",null,"•Includes a set of Grafana dashboards."),Object(n.b)("div",null,"• Built-in Prometheus and Grafana deployments in openshift-monitoring project for cluster metrics."),Object(n.b)("div",null,"• At-a-glance, real-time view of how your pods consume cluster resources that can be accessed from the OpenShift Cluster Console."),Object(n.b)("div",null,"• Monitoring is on a per-cluster basis. It provides monitoring for single cluster."),Object(n.b)("div",null,"• The openshift-monitoring project stack is set up in a single zone only."),Object(n.b)("div",null,"• No persistent storage is available to back up or view metric history."),Object(n.b)("div",null,"• Includes a set of alerts to notify the cluster administrator about problems.")),Object(n.b)("td",{parentName:"tr",align:"left"},"•",Object(n.b)("div",null,"Includes advanced monitoring and troubleshooting capabilities such as customizable user interface (custom dashboards) for a unified look at your cluster metrics, container security, resource usage, alerts, and custom events."),Object(n.b)("div",null,"• Provides operational visibility to the performance and health of cluster components, applications, and services for multiple clusters."),Object(n.b)("div",null,"• Aggregated metrics and container monitoring across clusters and cloud providers for consistent operations enablement."),Object(n.b)("div",null,"• Historical access to metrics that is based on the timeline and plan, and ability to capture and download trace files."),Object(n.b)("div",null,"• Highly available, scalable, and compliant with industry security standards."),Object(n.b)("div",null,"• 3rd party Sysdig service agent has to be added to worker nodes to forward metrics to IBM® Cloud Monitoring with Sysdig service."),Object(n.b)("div",null,"• Integrated with IBM Cloud IAM for user access management."),Object(n.b)("div",null,"• Quick integration with the cluster via a script."),Object(n.b)("div",null,"• Free trial to try out the capabilities."),Object(n.b)("div",null),Object(n.b)("div",null),Object(n.b)("div",null),Object(n.b)("div",null))))),Object(n.b)("h2",null,"Third-party services or configure your own logging"),Object(n.b)("p",null,"In case you have special requirements for monitoring, you can set up your own monitoring solution. Check out third-party monitoring services such as Datadog that you can add to OpenShift cluster.  "),Object(n.b)("p",null,Object(n.b)("a",{parentName:"p",href:"https://cloud.ibm.com/docs/containers?topic=containers-supported_integrations#health_services"},"https://cloud.ibm.com/docs/containers?topic=containers-supported_integrations#health_services"),"  "),Object(n.b)("p",null,"As an example of those monitoring services, the following figure shows an overview of monitoring service with Datadog for OpenShift on IBM Cloud."),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"943px"}},"\n      ",Object(n.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"37.15277777777778%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAABcSAAAXEgFnn9JSAAABXUlEQVQoz5VRy27bMBD0//9CUfTc9txbYNjJOXGA1A81rgMHhiRTEmVR4kMPzoSSGyDIrUss9jGL4WB3FksL0xOy0iiVQWM6VE2L11SGnoFxPbTtpnjNr/4xf6+lcpiJPy/Q2zXjc85TnDIrKtaNm+q6sfwfa7sBs9fnI+TfA2XVID5n2OyOUJVDwCe1xhhkWTbVWV5gvd5juz2g0QbW2Al3ziHPM9Y6KJRNhyFMX2oHkV9Y1ZaFvDBOBF+OJ97eLrlYLLhaPXK/P3D+K+LdzYG7aMf5fM7lYsnvP3/g67cv3OyeMSsqi6EfWJQ1TmnOp82RZWnZ9T782FKpikIIam3oAW6fzvy9Stn2/dRPkoRRFOHh/n4UERSOhIPnJRxE5JKpKFnXOhApqk87HOdGQ3je4yM0FW2Pq0LX9iyVRVaosEszqmUiJBvtpmnvPYErwRT/cY356AEPwXO89Bt0nBRRaNOu4AAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(n.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"ibmcloud_datadog",title:"ibmcloud_datadog",src:"/static/58a20daf7160702b89377c1be5fc3840/692e9/ibmcloud_datadog.png",srcSet:["/static/58a20daf7160702b89377c1be5fc3840/7fc1e/ibmcloud_datadog.png 288w","/static/58a20daf7160702b89377c1be5fc3840/a5df1/ibmcloud_datadog.png 576w","/static/58a20daf7160702b89377c1be5fc3840/692e9/ibmcloud_datadog.png 943w"],sizes:"(max-width: 943px) 100vw, 943px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-day-2-monitoring-ibmcloud-index-mdx-2854780cb140298e6d0e.js.map