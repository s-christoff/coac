---
author: "Sarah Christoff"
date: 2017-09-04
linktitle: allaroundme
title: All around me are familiar inter-faces
weight: 10
---

<html><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8"><title>All around me are familiar (inter)faces</title><style>
      * {
        font-family: Georgia, Cambria, "Times New Roman", Times, serif;
      }
      html, body {
        margin: 0;
        padding: 0;
      }
      h1 {
        font-size: 50px;
        margin-bottom: 17px;
        color: #333;
      }
      h2 {
        font-size: 24px;
        line-height: 1.6;
        margin: 30px 0 0 0;
        margin-bottom: 18px;
        margin-top: 33px;
        color: #333;
      }
      h3 {
        font-size: 30px;
        margin: 10px 0 20px 0;
        color: #333;
      }
      header {
        width: 640px;
        margin: auto;
      }
      section {
        width: 640px;
        margin: auto;
      }
      section p {
        margin-bottom: 27px;
        font-size: 20px;
        line-height: 1.6;
        color: #333;
      }
      section img {
        max-width: 640px;
      }
      footer {
        padding: 0 20px;
        margin: 50px 0;
        text-align: center;
        font-size: 12px;
      }
      .aspectRatioPlaceholder {
        max-width: auto !important;
        max-height: auto !important;
      }
      .aspectRatioPlaceholder-fill {
        padding-bottom: 0 !important;
      }
      header,
      section[data-field=subtitle] {
        display: none;
      }
      </style></head><body><article class="h-entry">
<header>
<h1 class="p-name">All around me are familiar (inter)faces</h1>
</header>
<section data-field="body" class="e-content">
<section name="aba2" class="section section--body section--first section--last"><div class="section-divider"><hr class="section-divider"></div><div class="section-content"><div class="section-inner sectionLayout--insetColumn"><h3 name="ee27" id="ee27" class="graf graf--h3 graf--leading graf--title">All around me are familiar (inter)faces</h3><p name="5ac3" id="5ac3" class="graf graf--p graf-after--h3">Currently Reading: Understanding the Linux Kernel, 3rd Edition, by Daniel P. Bovet</p><p name="7f9e" id="7f9e" class="graf graf--p graf-after--p">This week’s challenge was overcoming the idea of dumb questions, and just asking things. In the end, someone has to ask them, right?</p><p name="f87c" id="f87c" class="graf graf--p graf-after--p">It started with figuring out PHP FPM, and wondering “What is FPM”. A quick google search showed that FPM stands for “FastCGI Process Manager”. This brought me down the hole of.. what is FastCGI, what makes it Fast, and heck, what is CGI?</p><figure name="a3b6" id="a3b6" class="graf graf--figure graf-after--p"><div class="aspectRatioPlaceholder is-locked" style="max-width: 300px; max-height: 105px;"><div class="aspectRatioPlaceholder-fill" style="padding-bottom: 35%;"></div><img class="graf-image" data-image-id="0*pYstdYw3tCVnqjGs.jpg" data-width="300" data-height="105" data-external-src="https://catonacomputer.wpengine.com/wp-content/uploads/2017/08/cgi-300x105.jpg" src="https://cdn-images-1.medium.com/max/800/0*pYstdYw3tCVnqjGs.jpg"></div></figure><p name="e37c" id="e37c" class="graf graf--p graf-after--figure">(<a href="https://www.e-cartouche.ch/content_reg/cartouche/formats/en/image/cgi/google_anfrage.jpg" data-href="https://www.e-cartouche.ch/content_reg/cartouche/formats/en/image/cgi/google_anfrage.jpg" class="markup--anchor markup--p-anchor" rel="noopener" target="_blank">https://www.e-cartouche.ch/content_reg/cartouche/formats/en/image/cgi/google_anfrage.jpg)</a></p><p name="ef94" id="ef94" class="graf graf--p graf-after--p">So, CGI (Common Gateway Interface) is a set of rules that defines how a web server and the things around it talk to each other. This made what I thought a web server was a lot less magical when I realized I was only taking care of managing connections, taking care of data, etc.</p><p name="fa08" id="fa08" class="graf graf--p graf-after--p">Summarized in RFC 3875 (<a href="https://tools.ietf.org/html/rfc3875" data-href="https://tools.ietf.org/html/rfc3875" class="markup--anchor markup--p-anchor" rel="noopener" target="_blank">https://tools.ietf.org/html/rfc3875</a>) :</p><p name="0643" id="0643" class="graf graf--p graf--startsWithDoubleQuote graf-after--p">“The server is responsible for managing connection, data transfer,<br> transport and network issues related to the client request, whereas<br> the CGI script handles the application issues, such as data access<br> and document processing.”</p><p name="39f5" id="39f5" class="graf graf--p graf-after--p">Okay, so now that I understood what CGI is, I wanted to figure out what makes FastCGI so sonic fast. FastCGI is CGI but better because it uses persistent processes to handle a series of requests, instead of each request needing it’s own process.</p><p name="2f9a" id="2f9a" class="graf graf--p graf-after--p">Simple enough… and PHP FPM, well, that’s just a way to manage all the PHP requests coming through FastCGI by allocating different workers, etc.</p><p name="9131" id="9131" class="graf graf--p graf-after--p">I kept seeing this word “interface” and being told repeatedly “think of it as a protocol”. When trying to figure out what the difference between an interface and a protocol was, I found this:(<a href="https://serverfault.com/questions/454092/difference-between-protocol-and-service-interface" data-href="https://serverfault.com/questions/454092/difference-between-protocol-and-service-interface" class="markup--anchor markup--p-anchor" rel="noopener" target="_blank">https://serverfault.com/questions/454092/difference-between-protocol-and-service-interface</a>).</p><p name="83fe" id="83fe" class="graf graf--p graf--startsWithDoubleQuote graf-after--p">“Because of service interface being “in” the protocol, you can not differentiate them. the protocols consist of interfaces.”</p><p name="0452" id="0452" class="graf graf--p graf-after--p">Protocols consist of interfaces, but what does that really mean? In the OSI reference model the packet is sent through the layers, and this means every layer must communicate with the layer below and above it. It communicates through these different layers through service interfaces.</p><figure name="cc50" id="cc50" class="graf graf--figure graf-after--p"><div class="aspectRatioPlaceholder is-locked" style="max-width: 500px; max-height: 398px;"><div class="aspectRatioPlaceholder-fill" style="padding-bottom: 79.60000000000001%;"></div><img class="graf-image" data-image-id="0*4uWjvh_VWe8w669S.jpg" data-width="500" data-height="398" data-external-src="https://ecomputernotes.com/images/Communication-between-the-layers-in-OSI-model.jpg" src="https://cdn-images-1.medium.com/max/800/0*4uWjvh_VWe8w669S.jpg"></div></figure><p name="aa5d" id="aa5d" class="graf graf--p graf-after--figure">How I understand it, is an interface is where two “systems” (which can be loosely defined) talk to each other, and a protocol is a set of rules for two devices to talk to one another.</p><p name="c561" id="c561" class="graf graf--p graf-after--p">Sticking with the interface theme, I was digging through the Calico code when I stumbled across this:</p><div name="21e8" id="21e8" class="graf graf--mixtapeEmbed graf-after--p"><a href="https://github.com/projectcalico/cni-plugin" data-href="https://github.com/projectcalico/cni-plugin" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://github.com/projectcalico/cni-plugin"><strong class="markup--strong markup--mixtapeEmbed-strong">projectcalico/cni-plugin</strong><br><em class="markup--em markup--mixtapeEmbed-em">cni-plugin - Calico CNI plugin</em>github.com</a><a href="https://github.com/projectcalico/cni-plugin" class="js-mixtapeImage mixtapeImage u-ignoreBlock" data-media-id="806914869f5d13d0b55328ad86f3d2d5" data-thumbnail-img-id="0*cjXUTEMC9S1SMLBE." style="background-image: url(https://cdn-images-1.medium.com/fit/c/160/160/0*cjXUTEMC9S1SMLBE.);"></a></div><p name="6b2a" id="6b2a" class="graf graf--p graf-after--mixtapeEmbed">I always thought that a CNI was a competitor of Calico, but that’s because my understanding of it was pretty poor. After digging around, and asking in the Kubernetes Users slack, someone sat me down and explained that CNI (Container Network Interface) is what Kubernetes uses to have pods talk to one another.</p><p name="226d" id="226d" class="graf graf--p graf-after--p">If you’re sitting here going “That’s what Calico, Weave, Flannel, etc do!”, well that’s true too. Those services are actually establishing the connection, assigning the IPs, so forth, and the CNI (Container Network<strong class="markup--strong markup--p-strong"> Interface</strong>) is what is bridging (haha, bridging, networking) that gap between the container and the plugin (Calico, Weave, etc) itself.</p><p name="09f9" id="09f9" class="graf graf--p graf-after--p">Docker has it’s own network interface too (libnetwork), but it really doesn’t play nice with Kubernetes, which is why Kubernetes uses CNI (built by CoreOS, used by rkt).</p><p name="945b" id="945b" class="graf graf--p graf-after--p">Check out more on why they don’t use libnetwork here: <a href="https://blog.kubernetes.io/2016/01/why-Kubernetes-doesnt-use-libnetwork.html" data-href="https://blog.kubernetes.io/2016/01/why-Kubernetes-doesnt-use-libnetwork.html" class="markup--anchor markup--p-anchor" rel="noopener" target="_blank">https://blog.kubernetes.io/2016/01/why-Kubernetes-doesnt-use-libnetwork.html</a></p><p name="fbc1" id="fbc1" class="graf graf--p graf-after--p">For the kubernetes project, I’m working on learning about different CIs to see which would work best in the platform. Jenkins seemed most popular when I started making the graph, however looking at Gitlab, Circle-CI and Travis-CI. Also, as much as I love the interface of Docker, I want to take the elitist route and try rkt since I’m using Container Linux as my image.</p><p name="6eb5" id="6eb5" class="graf graf--p graf-after--p">Right now I’m less in the “building and creating a universe” stage and more in the “reading about everything and watching tons of videos” stage. It’s not as rewarding as building my own universe (platform), but it’s the dirty work that will make me more informed in the long run.</p><p name="ac0d" id="ac0d" class="graf graf--p graf-after--p">Ending on a fun note, I signed up for my employer’s Raspberry Pi competition, and gained a good amount of interests for the ideas. However, some of the ideas seem a little unrealistic, but it’s a friendly competition so what could it hurt! So far I’ve got:</p><ul class="postList"><li name="eb84" id="eb84" class="graf graf--li graf-after--p">Rock ’Em Sock ’Em Robots — Fighting Robots.</li><li name="f487" id="f487" class="graf graf--li graf-after--li">Coffee Machine / Cocktail Maker — Can be triggered with a flag — coffee for terraform deploys or through RedShell, perhaps through google home / Cortana / Mac, maybe you can send it commands directly? HipChat integration ?</li><li name="1c2c" id="1c2c" class="graf graf--li graf-after--li">Fortune Bot — dispense random unix facts via printer or something with Stallman’s face on them</li><li name="d303" id="d303" class="graf graf--li graf-after--li">Hydroponic Farm</li></ul><figure name="120d" id="120d" class="graf graf--figure graf-after--li"><div class="aspectRatioPlaceholder is-locked" style="max-width: 650px; max-height: 300px;"><div class="aspectRatioPlaceholder-fill" style="padding-bottom: 46.2%;"></div><img class="graf-image" data-image-id="0*uKhbw--kPtcGsI4m.jpg" data-width="650" data-height="300" data-external-src="https://www.retroland.com/wp-content/uploads/2012/02/Rock%E2%80%99em-Sock%E2%80%99em-Robots.jpg" src="https://cdn-images-1.medium.com/max/800/0*uKhbw--kPtcGsI4m.jpg"></div></figure><p name="fd6d" id="fd6d" class="graf graf--p graf-after--figure">The Rock ’Em Sock ’Em Robots idea is the unrealistic one, where one robot would be an AI that you would fight against, and hooking up both robots up to servos so they can fight. But, we’ll see what happens.</p><p name="e045" id="e045" class="graf graf--p graf-after--p graf--trailing">Next week will be more diving into networking, and hopefully I’ll get <em class="markup--em markup--p-em">some </em>of these questions answered!</p></div></div></section>
</section>