(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{"013z":function(e,t,a){"use strict";var o=a("q1tI"),i=a.n(o),n=a("NmYn"),l=a.n(n),s=a("Wbzz"),c=a("Xrax"),r=a("k4MR"),d=a("TSYQ"),b=a.n(d),g=a("QH2O"),p=a.n(g),u=a("qKvR"),m=function(e){var t,a=e.title,o=e.theme,i=e.tabs,n=void 0===i?[]:i;return Object(u.b)("div",{className:b()(p.a.pageHeader,(t={},t[p.a.withTabs]=n.length,t[p.a.darkMode]="dark"===o,t))},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12"},Object(u.b)("h1",{id:"page-title",className:p.a.text},a)))))},h=a("BAC9"),A=function(e){var t=e.relativePagePath,a=e.repository,o=Object(s.useStaticQuery)("1364590287").site.siteMetadata.repository,i=a||o,n=i.baseUrl,l=i.subDirectory,c=n+"/edit/"+i.branch+l+"/src/pages"+t;return n?Object(u.b)("div",{className:"bx--row "+h.row},Object(u.b)("div",{className:"bx--col"},Object(u.b)("a",{className:h.link,href:c},"Edit this page on GitHub"))):null},f=a("FCXl"),O=a("dI71"),y=a("I8xM"),w=function(e){function t(){return e.apply(this,arguments)||this}return Object(O.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,o=e.slug,i=o.split("/").filter(Boolean).slice(-1)[0],n=a.map((function(e){var t,a=l()(e,{lower:!0,strict:!0}),n=a===i,c=new RegExp(i+"/?(#.*)?$"),r=o.replace(c,a);return Object(u.b)("li",{key:e,className:b()((t={},t[y.selectedItem]=n,t),y.listItem)},Object(u.b)(s.Link,{className:y.link,to:""+r},e))}));return Object(u.b)("div",{className:y.tabsContainer},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(u.b)("nav",{"aria-label":t},Object(u.b)("ul",{className:y.list},n))))))},t}(i.a.Component),v=a("MjG9"),k=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,o=e.location,i=e.Title,n=t.frontmatter,d=void 0===n?{}:n,b=t.relativePagePath,g=t.titleType,p=d.tabs,h=d.title,O=d.theme,y=d.description,S=d.keywords,j=Object(k.a)().interiorTheme,N=Object(s.useStaticQuery)("2456312558").site.pathPrefix,x=N?o.pathname.replace(N,""):o.pathname,T=p?x.split("/").filter(Boolean).slice(-1)[0]||l()(p[0],{lower:!0}):"",B=O||j;return Object(u.b)(r.a,{tabs:p,homepage:!1,theme:B,pageTitle:h,pageDescription:y,pageKeywords:S,titleType:g},Object(u.b)(m,{title:i?Object(u.b)(i,null):h,label:"label",tabs:p,theme:B}),p&&Object(u.b)(w,{title:h,slug:x,tabs:p,currentTab:T}),Object(u.b)(v.a,{padded:!0},a,Object(u.b)(A,{relativePagePath:b})),Object(u.b)(f.a,{pageContext:t,location:o,slug:x,tabs:p,currentTab:T}),Object(u.b)(c.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},Mau6:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return s})),a.d(t,"default",(function(){return d}));var o=a("wx14"),i=a("zLVn"),n=(a("q1tI"),a("7ljp")),l=a("013z"),s=(a("qKvR"),{}),c={_frontmatter:s},r=l.a;function d(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(n.b)(r,Object(o.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h2",null,"Logging Solutions on IBM Cloud"),Object(n.b)("p",null,"The logs such as system log and application log are useful for debugging and monitoring cluster activity. Most of container platform supports a logging solution including OpenShift Container Platform.  "),Object(n.b)("p",null,"By default, logs are generated and written locally.  Several logging solutions are available to collect, forward, and view the logs in OpenShift on IBM Cloud.  "),Object(n.b)("h2",null,"Choosing a logging solution"),Object(n.b)("p",null,"You can choose your logging solution based on which cluster components you need to collect logs for. There are several logs produced in different components in OpenShift as follow:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Application log"),Object(n.b)("li",{parentName:"ul"},"OpenShift Master log"),Object(n.b)("li",{parentName:"ul"},"OpenShift Worker Nodes/Pods log  ")),Object(n.b)("p",null,"A common implementation is to choose a logging service that you prefer based on its analysis and interface capabilities, such as IBM Log Analysis with LogDNA or Built-in OpenShift Logging functions.  "),Object(n.b)("p",null,"You can then use IBM Cloud Activity Tracker with LogDNA to audit user activity in the cluster.  We will discuss it in the later section.  "),Object(n.b)("h2",null,"Application Log"),Object(n.b)("p",null,"You would generate your applications’ logs for several purposes.  If your applications encounter errors, it would log those errors and those logs may be useful for debugging.  Every application may write logs in different places with different format.  Therefore, you may need to consider how to take care of those logs.  "),Object(n.b)("p",null,"With OpenShift cluster, you would aggregate your applications logs into a central location since your applications may run on several different pods/nodes.  For example, you would forward your application logs to LogDNA and let LogDNA manage those logs.  "),Object(n.b)("h2",null,"OpenShift Master log"),Object(n.b)("p",null,"To collect, forward, and view logs for your cluster’s Kubernetes master, you can take a snapshot of the Master logs at any point in time to collect in an IBM Cloud Object Storage bucket. The snapshot includes anything that is sent through the API server, such as pod scheduling, deployments, or RBAC policies.",Object(n.b)("br",{parentName:"p"}),"\n",Object(n.b)("a",{parentName:"p",href:"https://cloud.ibm.com/docs/containers?topic=containers-health#collect_master"},"https://cloud.ibm.com/docs/containers?topic=containers-health#collect_master"),"  "),Object(n.b)("h2",null,"OpenShift Worker Nodes/Pods log"),Object(n.b)("p",null,"There are several ways to check the Worker nodes/pods log.  You can use the CLI to check the logs of an individual OpenShift pod.  You can also use GUI with several different solutions such as OpenShift Web Console, IBM Log Analysis with LogDNA, and external servers with Fluend.  We will take a look at those solutions in the following sections.  "),Object(n.b)("h2",null,"Using the CLI for OpenShift Pod logs"),Object(n.b)("p",null,"You can run the command “oc logs ",Object(n.b)("em",{parentName:"p"},"pod_name")," ” to see the OpenShift pod logs as below."),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre"},'$ oc logs httpd-1-htzpn\n=> sourcing 10-set-mpm.sh ...\n=> sourcing 20-copy-config.sh ...\n=> sourcing 40-ssl-certs.sh ...\nAH00558: httpd: Could not reliably determine the server\'s fully qualified domain name, using 172.30.48.85. Set the \'ServerName\' directive globally to suppress this message\n[Sat Oct 12 14:18:15.760713 2019] [ssl:warn] [pid 1] AH01909: 172.30.48.85:8443:0 server certificate does NOT include an ID which matches the server name\n[Sat Oct 12 14:18:15.761653 2019] [:notice] [pid 1] ModSecurity for Apache/2.9.3 (http://www.modsecurity.org/) configured.\n[Sat Oct 12 14:18:15.761668 2019] [:notice] [pid 1] ModSecurity: APR compiled version="1.4.8"; loaded version="1.4.8"\n[Sat Oct 12 14:18:15.761673 2019] [:notice] [pid 1] ModSecurity: PCRE compiled version="8.32 "; loaded version="8.32 2012-11-30"\n[Sat Oct 12 14:18:15.761680 2019] [:notice] [pid 1] ModSecurity: LUA compiled version="Lua 5.1"\n[Sat Oct 12 14:18:15.761684 2019] [:notice] [pid 1] ModSecurity: YAJL compiled version="2.0.4"\n[Sat Oct 12 14:18:15.761688 2019] [:notice] [pid 1] ModSecurity: LIBXML compiled version="2.9.1"\n[Sat Oct 12 14:18:15.761693 2019] [:notice] [pid 1] ModSecurity: Status engine is currently disabled, enable it by set SecStatusEngine to On.\nAH00558: httpd: Could not reliably determine the server\'s fully qualified domain name, using 172.30.48.85. Set the \'ServerName\' directive globally to suppress this message\n[Sat Oct 12 14:18:15.854039 2019] [ssl:warn] [pid 1] AH01909: 172.30.48.85:8443:0 server certificate does NOT include an ID which matches the server name\n[Sat Oct 12 14:18:15.854206 2019] [http2:warn] [pid 1] AH10034: The mpm module (prefork.c) is not supported by mod_http2. The mpm determines how things are processed in your server. HTTP/2 has more demands in this regard and the currently selected mpm will just not do. This is an advisory warning. Your server will continue to work, but the HTTP/2 protocol will be inactive.\n[Sat Oct 12 14:18:15.854933 2019] [lbmethod_heartbeat:notice] [pid 1] AH02282: No slotmem from mod_heartmonitor\n[Sat Oct 12 14:18:15.859059 2019] [mpm_prefork:notice] [pid 1] AH00163: Apache/2.4.34 (Red Hat) OpenSSL/1.0.2k-fips configured -- resuming normal operations\n[Sat Oct 12 14:18:15.859089 2019] [core:notice] [pid 1] AH00094: Command line: \'httpd -D FOREGROUND\'\n[Sat Oct 12 14:18:36.654769 2019] [autoindex:error] [pid 38] [client 172.30.75.75:42370] AH01276: Cannot serve directory /opt/rh/httpd24/root/var/www/html/: No matching DirectoryIndex (index.html) found, and server-generated directory index forbidden by Options directive\n172.30.75.75 - - [12/Oct/2019:14:18:36 +0000] "GET / HTTP/1.1" 403 3985 "-" "curl/7.54.0"\n$\n')),Object(n.b)("p",null,"You can use the —follow option with “oc logs” command to monitor the logs for that pod continually.  "),Object(n.b)("h2",null,"Using OpenShift Web Console for Pod logs on IBM Cloud"),Object(n.b)("p",null,"OpenShift provides a capability to see Pod’s logs on the Web Console as shown in below.  "),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"945px"}},"\n      ",Object(n.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"57.638888888888886%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAABcSAAAXEgFnn9JSAAACpklEQVQoz41SS08TYRRtokSeQSx9zKvzaDud0hcFCkgppUCNojFGDALRlQtDXLk1LhAopRSCiSsTF26NunDjr3DlBhMXQAc1GvABVIGSe739eMSFMU5y5pzzPc7cm7mW/PwiLCw+gvzCImRyszCTzUNmJgdTmVmYmMzA5FQWJqezzM/M5mHiwTTzmewczNHdMnLzD2k/B/cm8mCRFQ05QULRpaCseph28iLaHTza7NwfcGIjweYg7eTRTuDoHE/nOZ7uixK6PGGwRGNx1ANRePzkKRRME5aW3sHqagEKBRPMtQ9gmmuwWjhAgbF5oGl9hc4dYXl5Bd+8fQ+WeOo8BqNn4cWr17gJiObGNn7a3sfPxX38Uizhxg7+zwPl1/qPXbBEWjtR9Qbh2fOXbOfrt++4sVnEza0ibm0X8dfOLpZKpX9id28P9og/rv8ESzDShk3hNrg9fgdTff2YSPYy7k31YXciyfwxev6mUxhPJKGnL43jd++DJUCBoWgnXBseRWujHXnRhYIko9XmwKqaOobK6lqGI19VU4vVh+tlX1NXDydOVmAyfZkqbI5RYAeMjN2kv+xGt9eHqtuDCmlZ1dClqEy7aBrK66KsoUCQaCIkxY2KRixrYG204blLw1RhuJUFXqdAiY1OOVRH3fAzLl/w+vwU5kWvbhDrKFIQJynIUycOTsAGqw0qTlVi/4UhsBjBFgy1dJYDgcJA9ehAAeDzBxhrh54qB90IgEc3gD4CNKtgc/CMKRjqG85g+iJVaDSFMURtj4yOoSiJ1J6KLllGQRTR6XSig+DkOAaO54+9IAjM88SiJOHphnpMD16llmMD0Nw1CEM3xkHzt4MejhO6wBeJg4+0N9QFRnOCaV+km3nFiIHW1EFoB5W0m7SghWHgyi34Dafg8lFcfYvPAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(n.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"ibmcloud_ocp_dashboard_pod_logs",title:"ibmcloud_ocp_dashboard_pod_logs",src:"/static/22c3289685e9e3e94c26de61f9934493/005b4/ibmcloud_ocp_dashboard_pod_logs.png",srcSet:["/static/22c3289685e9e3e94c26de61f9934493/7fc1e/ibmcloud_ocp_dashboard_pod_logs.png 288w","/static/22c3289685e9e3e94c26de61f9934493/a5df1/ibmcloud_ocp_dashboard_pod_logs.png 576w","/static/22c3289685e9e3e94c26de61f9934493/005b4/ibmcloud_ocp_dashboard_pod_logs.png 945w"],sizes:"(max-width: 945px) 100vw, 945px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(n.b)("p",null,"You can see the same logs with the oc command as shown in the later section. Using the CLI for OpenShift Pod logs.  "),Object(n.b)("h2",null,"EFK stack in OpenShift is NOT supported on IBM Cloud"),Object(n.b)("p",null,"Unlike other environment, the EFK stack such as Elasticsearch, Fluentd, and Kibana as shown in Figure 12 is NOT supported on IBM Cloud because you cannot modify the default configuration of the Red Hat OpenShift on IBM Cloud cluster.  "),Object(n.b)("p",null,Object(n.b)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"650px"}},"\n      ",Object(n.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAABcSAAAXEgFnn9JSAAACTElEQVQoz3WSSW/bMBCF/aP7N9rek15aoNcWOWYpCuRQOK1tWbZiK3KseNFCrZSozYrleaXppEUPFfBAcjT6OPM0PX/pkvP1gtjdkETdUlE2VFS7f5QX9R9lolLieUVpVqh9mlXUNA0NzIR68Uin7PoK6bcblGWFyXSKwXAkNVT7X4MhoihGUZQQokBT16jrCm3b4nAAJAhVVeGwb/DTcKm33nhkXl4iWa0oq/cUJTklXKgKYl7ItaR61ymJqiUASk3ByTM/06HLX2O4m3rUc/yIWnmWEfIjgSDOYMwsJGmBuZPhy48lPNfH1mUYT2aYGgYsa4HhoI83n84RtM84AekEDCJOqnYZ8RQwx8PiCQkvsA1yrBkHCyKwMIb0EAcidPs9/CDAvc/gMIb9vnupULbMQk70AgzTElEi8GhvkOY1TMuGpo2xeLQx0nT5Lj9+DENWGUtfZ/pE+llj3x3+tqyAdALGvIQrq0ryHY7tH89104KLBnnZwg85tLGOQohjPgzLVGv3P2DEK4iyxtJeyb/Z4IkJfNe3CGS7YZJhem8iTbmC5Bca0g+3eHlOQEMC/TCVHXcnD0NBDktJm5p0vOjRzehW+rLeerR2mJzJlp5PftHZ2Uc6v7qhoq5oPjcVsD+RHkYJp9druKjlXLVwHBc7OWdBEIK5a0Qhw3a9UnP4mjz2nnAbbaBPxnj/7q2KDWc+9eZ2SFufkxPk9LCKaGL5NFuGZCwYabMN9bUFDaY29UcWGZYnczOVO5uvSNceyN5GUjFJf+n6bkO/ATESMpJPyVp5AAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(n.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"ibmcloud_efk_not_supported",title:"ibmcloud_efk_not_supported",src:"/static/ae2d5a84fb093bd72f76cc9a77c93107/90640/ibmcloud_efk_not_supported.png",srcSet:["/static/ae2d5a84fb093bd72f76cc9a77c93107/7fc1e/ibmcloud_efk_not_supported.png 288w","/static/ae2d5a84fb093bd72f76cc9a77c93107/a5df1/ibmcloud_efk_not_supported.png 576w","/static/ae2d5a84fb093bd72f76cc9a77c93107/90640/ibmcloud_efk_not_supported.png 650w"],sizes:"(max-width: 650px) 100vw, 650px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),"  "),Object(n.b)("p",null,"Therefore, the EFK in the OpenShift on IBM Cloud is not an option for the logging solution.  "),Object(n.b)("h2",null,"Using IBM Log Analysis with LogDNA"),Object(n.b)("p",null,"You can manage container logs by deploying LogDNA agent to OpenShift cluster. The agent collects logs with the extension .log and extensionless files that are stored in the /var/log directory of pods from all namespaces, including kube-system. The agent then forwards the logs to the IBM Log Analysis with LogDNA service as shown in below.  "),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"945px"}},"\n      ",Object(n.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"32.98611111111111%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAABcSAAAXEgFnn9JSAAABfklEQVQoz11R2Y6bQBDk/z8gUqR8RbRJHiI5T3m0pWTjtXEWbBYTA+YaYA5gqMpALiktlaq6Z9TTXePV3YC6GyH6CU0/omqHFaXQKws5OVjUTqe1xq1UaOUIZSx6PUE6LKxdnlUa3nAO2CYJ71XFqixotKYxmkssfM8zZumNWknmRcnrLeM0Wf4L/FW9tvBEdGEcXnF4fkFwSRBdc5S1WG5BaTdRniFJEmingRnWAr+7rLWF53mG0Yp1Z+DBnWWVhB+mPD7H3B9DpllB/+QziV5oC8FGCCbXhL5/ZBCeeT5fuN1uudlsuNvt+O7De7x+84ofP32GN9vRrdvj+yVjlNx5iTMWlWAvezZlxaEUlEpRiJZN01C0nTtTjGP3+H7PIAj49fERDw9vuftycB4axR9piadTxMMp5Lcnn/m9/OWJa6oHw3EcqVzTZdNlRzuD/8VaMBPhKT2wkxq9NBSdYtNKLlqZ0U1mnNZr/qfWOV4+xRlK590K6zwELEU/4CfoyBL4ILAMlgAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(n.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"ibmcloud_logdna",title:"ibmcloud_logdna",src:"/static/e7468a5d0354f3df39b0312f2bda16d8/005b4/ibmcloud_logdna.png",srcSet:["/static/e7468a5d0354f3df39b0312f2bda16d8/7fc1e/ibmcloud_logdna.png 288w","/static/e7468a5d0354f3df39b0312f2bda16d8/a5df1/ibmcloud_logdna.png 576w","/static/e7468a5d0354f3df39b0312f2bda16d8/005b4/ibmcloud_logdna.png 945w"],sizes:"(max-width: 945px) 100vw, 945px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(n.b)("p",null,"The sample output on the LogDNA dashboard is shown in below.  "),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"945px"}},"\n      ",Object(n.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"55.90277777777778%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAABcSAAAXEgFnn9JSAAACGElEQVQoz32TS2sUQRSFGzODAYXEMA+nu2eSfnfXu5+ZBLKJCv4DwYW4cOH//wH3eKtnEhDExcctqqhT59yqCqToKasE5ZWidjjSz1+/6dv3H6TdQFkpZtKi4SpPtZJ0m5Z0SJi5FnSX1VQ2mqwbKdhtI7q8uMCbIMDl5Vt8/vSMr1+e4WQFK8q5qrpAVTcztZDIihJJliPNMpRFPhOFO6zWGwri25S2mzXCMKLr62sqipx6Z6i3ih7GngYeWyWokYqkMiTONFLPc8Zoxvh9iOIDBYe7nPZRhCxJabVaQQiB+6HFYCWOg8PoNJwSszOp9BkFIT0SWvG85LakCcJoT8HN6iMFHJeh5XLpFzF1BvdesDc4tprFFRptoa1jWmjjoIxlDJy18C5fBT+stq+Ci8XiJDh06Ix32KFnh0aeescRTwiFqmHXjGKXSknKsvTF4T8E+xY9Cz6MHUZ2aJUX5Igc18P9Ox0gfGQFrRVl6f8EO+7dHNlhcgqtFixiIDm2YHxtlJndclxYa84O4797yILk7U98u63VdJyG+caVaIjjETui+kxZ+zlJUkreo2bBeH9LwXq7exHEcnGBmt/cpEs8mQyPusCjynCvSlRCo2/tTF0VSO4O2McR4ijkGiLcbZEkCT/sQ0Pvrzb07mpNN+uYuumJ35sjqx2f7Eh7dEeVHknakZSdSLlpHue15Z/DcStNSe5/laE/TP07oxYpEXAAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(n.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"ibmcloud_logdna_dashboard",title:"ibmcloud_logdna_dashboard",src:"/static/c0c094b9d83b358c396a395c8d5dd063/005b4/ibmcloud_logdna_dashboard.png",srcSet:["/static/c0c094b9d83b358c396a395c8d5dd063/7fc1e/ibmcloud_logdna_dashboard.png 288w","/static/c0c094b9d83b358c396a395c8d5dd063/a5df1/ibmcloud_logdna_dashboard.png 576w","/static/c0c094b9d83b358c396a395c8d5dd063/005b4/ibmcloud_logdna_dashboard.png 945w"],sizes:"(max-width: 945px) 100vw, 945px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(n.b)("h2",null,"Using Fluentd with an external server"),Object(n.b)("p",null,"To collect, forward, and view logs for a cluster component, you can create a logging configuration by using Fluentd. When you create a logging configuration, the Fluentd cluster component collects logs from the paths for a specified source. Fluentd can then forward these logs to an external server that accepts a syslog protocol as shown in below."),Object(n.b)("p",null,Object(n.b)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"945px"}},"\n      ",Object(n.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"42.36111111111111%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAABcSAAAXEgFnn9JSAAABnUlEQVQoz01S2W7bMBDU/39EUfQTWvS9efFbA8etEyuGZcXWYVGiLuqmuNMlnaYdYLiUwB3O7tLL64lGDRqmlcbZuNiP2tHtmd2gSQ0LqX6hstfUcpzmlebF/KM2LserS0Xd719omwZlWaJTCsMwYJpGLMuMqm4QRzGEyPlbI04ziELCgQjvG8d1NeSJvKY2SXCJbuSfInphBueQhBCUZRldo5TiNKQkC8kQZ/HKwlbKqVi8K0KvRF5R9+7PrWgpzmocg4tzURQFGnZtIaREyq6cCi8szM5rJGzEQilFRZFjnBYWrDoyxuAmSgrjAodzgvM5RNu27rBhXp8DXE9veD4cEAQB/Ncjfjw8YLPZ4Gn7hK/fv9HnL5/wejyRJ9nhPE/IZUNpJvF2iSDLGvM8w15k2E7MvX1hob4b7peww6ZpIdm51hq+75MVT2+CPDsxvRqu39B6j1j06qi1gWKRqmpYQEFWNUqmLCuM4wj6GMq9h7bHnn0a+NtdPvA/LfI8x+PjT+z3e+x2Oxy47O1260rvuo4nu7pcW83CT+cPpMFhcMr+cVgAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(n.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"ibmcloud_external_efk",title:"ibmcloud_external_efk",src:"/static/604f4d3280ede3b4c515d5d78e80c744/005b4/ibmcloud_external_efk.png",srcSet:["/static/604f4d3280ede3b4c515d5d78e80c744/7fc1e/ibmcloud_external_efk.png 288w","/static/604f4d3280ede3b4c515d5d78e80c744/a5df1/ibmcloud_external_efk.png 576w","/static/604f4d3280ede3b4c515d5d78e80c744/005b4/ibmcloud_external_efk.png 945w"],sizes:"(max-width: 945px) 100vw, 945px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),"  "),Object(n.b)("h2",null,"Understanding options for logging on IBM Cloud"),Object(n.b)("p",null,"To help understand when to use the built-in OpenShift tools or IBM Cloud Log Analysis with LogDNA, you can review the following table.",Object(n.b)("br",{parentName:"p"}),"\n","Note that this is for OpenShift 3.11 statement. With OpenShift 4.2, this will be updated."),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",{parentName:"tr",align:"left"},"OpenShift tools:Built-in OpenShift logging tools"),Object(n.b)("th",{parentName:"tr",align:"left"},"IBM Cloud integrations:IBM Log Analysis with LogDNA"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"},"• Built-in view of pod logs in the OpenShift web console.• Built-in pod logs are not configured with persistent storage. You must integrate with a cloud database to back up the logging data and make it highly available and manage the logs yourself.Note: You cannot run the Ansible playbook to deploy the OpenShift Container Platform Elasticsearch, Fluentd, and Kibana (EFK) stack because you cannot modify the default configuration of the Red Hat OpenShift on IBM Cloud cluster."),Object(n.b)("td",{parentName:"tr",align:"left"},"• Customizable user interface for live streaming of log tailing, real-time troubleshooting, issue alerts, and log archiving.• Aggregated logs across clusters and cloud providers.• Historical access to logs that is based on the plan you choose.• Highly available, scalable, and compliant with industry security standards.• Integrated with IBM Cloud IAM for user access management.• Quick integration with the cluster via a script.• Flexible plans, including a free Lite option.• Log Analysis with DNA can aggregate and manage logs from multiple Kubernetes and OpenShift clusters, several Cloud Databases services, and the Certificate Manager Service.• 3rd party LogDNA agent has to be added to worker nodes to forward logs from pod containers to the IBM Log Analysis with LogDNA service.")))),Object(n.b)("h2",null,"Third-party services or configure your own logging"),Object(n.b)("p",null,"In case you have special requirements for logging, you can set up your own logging solution. Check out third-party logging services such as Splunk that you can add to OpenShift cluster.",Object(n.b)("br",{parentName:"p"}),"\n",Object(n.b)("a",{parentName:"p",href:"https://cloud.ibm.com/docs/containers?topic=containers-supported_integrations#health_services"},"https://cloud.ibm.com/docs/containers?topic=containers-supported_integrations#health_services"),"  "),Object(n.b)("h2",null,"Solution for Audit Logging"),Object(n.b)("p",null,"You can also collect Kubernetes API audit logs from OpenShift cluster on IBM Cloud and forward them to IBM Log Analysis with LogDNA. To access OpenShift (Kubernetes) audit logs, you must create an audit webhook in the cluster.  "),Object(n.b)("p",null,"The Kubernetes audit system in OpenShift cluster consists of an audit webhook, a log collection service and Web Server app, and a logging agent. The webhook collects the Kubernetes API server events from the Master. The log collection service is a Kubernetes ClusterIP service that is created from an image from the public IBM Cloud registry. This service exposes a simple node.js HTTP webserver app that is exposed only on the private network. The webserver app parses the log data from the audit webhook and creates each log as a unique JSON line. Finally, the logging agent forwards the logs from the webserver app to IBM Log Analysis with LogDNA, where you can view the logs.  "),Object(n.b)("p",null,Object(n.b)("a",{parentName:"p",href:"https://cloud.ibm.com/docs/containers?topic=containers-health#webhook_logdna"},"https://cloud.ibm.com/docs/containers?topic=containers-health#webhook_logdna")),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"939px"}},"\n      ",Object(n.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"31.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAYAAADDl76dAAAACXBIWXMAABcSAAAXEgFnn9JSAAABSElEQVQY0z2R227bMBBE9f8I0OcW6Is/JDX8WKAo4qSR60hxIvkiSpZE6k6J8ilDpyYwmOVwZ3ex9GTdM5gLvTYMn2h77dDr6aZd9ZG80TSdZpoMo8VkZvQ4Mc8zybnCqwtFt/2LlJKyLFFK8f80TUNRFJ+6RFU1u2iPVNUth8vlFp7LFi8XZ3L/mSg+stkGHE6Ctm3RWjsWaUoYhq7hMAzWP7upPu5VdS0shCDLBEmm8FTdYaz48hrz89ea973g/v4Hi8WC3E5m+oHd70dn9P0NQRDw9OeZ5XLJarVi/bDm2/ev3H25w9++4XXWYKaRRGS87iKKUtmOCWHwYvdidzRqalm6nNlMrvBkDIdDzPvbjr5r2Wx8nh4fiI8ZXnQqOQjJPvngK05ZRVq0TouTgmOqiE9XPqaVe5f1QGlRqJ66s583Qhjl/AOVicN95p+7XQAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(n.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"ibmcloud_audit_log_activity_tracker",title:"ibmcloud_audit_log_activity_tracker",src:"/static/2fd00751363cc13f331211767494e283/9f734/ibmcloud_audit_log_activity_tracker.png",srcSet:["/static/2fd00751363cc13f331211767494e283/7fc1e/ibmcloud_audit_log_activity_tracker.png 288w","/static/2fd00751363cc13f331211767494e283/a5df1/ibmcloud_audit_log_activity_tracker.png 576w","/static/2fd00751363cc13f331211767494e283/9f734/ibmcloud_audit_log_activity_tracker.png 939w"],sizes:"(max-width: 939px) 100vw, 939px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(n.b)("p",null,"Sample output of audit log events on the Activity Tracker dashboard is shown in below.  "),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"57.98611111111111%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAABcSAAAXEgFnn9JSAAACKElEQVQoz22TTU8TURiFxwgYSUlYGNtS6Eznft87H51OQWKIAoLBytYFC43GqImu/fvv8b1TWgRdnNxO0j7znDnTxJUNuaKhFy9f0c3HL/Th5hPV7TH5cka+imkp1G33HePru4SahKtIcYQpyIaS3NF7Sra3n2Jj4zF2dnpYLN7henEFnWcYj8c4GKecDAdphuFoH4O9fQw5g+GoO4+1QXawj73RCHuDZ5iEE0r6/ecYDIa0u7tLSiuaBkO1ykgoSxMdKI9hA+FqUmHGaSi3FRs29HtxTcdNQ9Z5Ck6jOLqiZMx0mQvq9/sIweNwWiKIFJNcIhVsECMtJsqBb8Dx3bXgz59fn6Lm30ilSMsJXHtByaMkQZIktLW11QHnlQcbIpcMUr4DsCGnBFtyKkz42vD58+ISTVXCWEvOSoTDt8SsJXBzcxNFEdDWYWko1APDFTggZVvN5/ezc1QsobQmo/KlYfLAsGXDSqVsqNnQ3VZlGFfMbdmZZvzZ2AI/zt+gLguGG7JG3DeMQO8d5mxYRqBgoLwPFLbiLIGazwicroBawM8fVI6GTeHWlWPVjJ9lB11VZlh8tpIrf+PKU35Mq8p+fnnfsOC73VW+HaUbJnSwbhQbRymheZRfPMqMR9FxFPOfUaw1XLlAIf82tP8YpnI5ytfTs/UoWt2+Nk/YjGHU6/XQti2sVrBKQEoFofQ6UhlIbTkG1sdRHE7qGo4l4msj+d9lmnP6A83qWOL5F8HaAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(n.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"ibmcloud_activity_tracker_dashboard",title:"ibmcloud_activity_tracker_dashboard",src:"/static/300933b5089c0bf5f0c586fc60db7e64/3cbba/ibmcloud_activity_tracker_dashboard.png",srcSet:["/static/300933b5089c0bf5f0c586fc60db7e64/7fc1e/ibmcloud_activity_tracker_dashboard.png 288w","/static/300933b5089c0bf5f0c586fc60db7e64/a5df1/ibmcloud_activity_tracker_dashboard.png 576w","/static/300933b5089c0bf5f0c586fc60db7e64/3cbba/ibmcloud_activity_tracker_dashboard.png 1152w","/static/300933b5089c0bf5f0c586fc60db7e64/0b124/ibmcloud_activity_tracker_dashboard.png 1728w","/static/300933b5089c0bf5f0c586fc60db7e64/31cb0/ibmcloud_activity_tracker_dashboard.png 1952w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "))}d.isMDXComponent=!0},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-day-2-logging-log-dna-ibm-index-mdx-d591964d464dd068f67b.js.map