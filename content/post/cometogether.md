---
author: "Sarah Christoff"
date: 2017-09-13
linktitle: cometogether
title: Come Register - Right Now, Over Me
weight: 10
---

<html><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8"><title>Come Register — Right Now, Over Me!</title><style>
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
<h1 class="p-name">Come Register — Right Now, Over Me!</h1>
</header>
<section data-field="body" class="e-content">
<section name="a004" class="section section--body section--first section--last"><div class="section-divider"><hr class="section-divider"></div><div class="section-content"><div class="section-inner sectionLayout--insetColumn"><h3 name="9e9e" id="9e9e" class="graf graf--h3 graf--leading graf--title">Come Register — Right Now, Over Me!</h3><p name="372a" id="372a" class="graf graf--p graf-after--h3">Currently Reading: The Manga Guide to Electricity, Kubernetes Up &amp; Running, Linux Networking Internals.</p><p name="7843" id="7843" class="graf graf--p graf-after--p">In a previous post I asked “What is Consul and what does it do?” This blog is going to cover that question.</p><p name="7955" id="7955" class="graf graf--p graf-after--p">Consul is a key/value store (like ETCD, or Zookeeper), but it also supports service discovery and health checking. Consul is also designed to span across multiple data centers to increase redundancy.</p><h4 name="69ab" id="69ab" class="graf graf--h4 graf-after--p">But, what is service discovery, and why do we need it?</h4><p name="e12f" id="e12f" class="graf graf--p graf-after--h4">We didn’t always need it — but we currently live in a cloud based world. This means everything is dynamic, scaling, and constantly moving due to failures. So, any code that calls out to a service needs a way to be routed to the correct place, in case the place that service lives has been blown up.</p><p name="9961" id="9961" class="graf graf--p graf-after--p">I found this graph in the Nginx blog that describes this well:</p><figure name="d572" id="d572" class="graf graf--figure graf-after--p"><div class="aspectRatioPlaceholder is-locked" style="max-width: 700px; max-height: 714px;"><div class="aspectRatioPlaceholder-fill" style="padding-bottom: 102%;"></div><img class="graf-image" data-image-id="0*xhKxITCGoBkminww.png" data-width="1024" data-height="1044" data-external-src="https://cdn.wp.nginx.com/wp-content/uploads/2016/04/Richardson-microservices-part4-1_difficult-service-discovery.png" src="https://cdn-images-1.medium.com/max/800/0*xhKxITCGoBkminww.png"></div></figure><p name="95ea" id="95ea" class="graf graf--p graf-after--figure"><em class="markup--em markup--p-em">(Source:</em><a href="https://www.nginx.com/blog/service-discovery-in-a-microservices-architecture/" data-href="https://www.nginx.com/blog/service-discovery-in-a-microservices-architecture/" class="markup--anchor markup--p-anchor" rel="noopener" target="_blank"><em class="markup--em markup--p-em"> https://www.nginx.com/blog/service-discovery-in-a-microservices-architecture/</em></a><em class="markup--em markup--p-em">)</em></p><p name="ca73" id="ca73" class="graf graf--p graf-after--p">There are two discovery patterns that solve this problem: client-side discovery and server-side discovery.</p><p name="68b9" id="68b9" class="graf graf--p graf-after--p">Client-Side Discovery is when the client is responsible for discovering the location of the service, which it does by querying the service registry. The client then uses a load balancing algorithm to find out which of the services to send its request to.</p><p name="f5d4" id="f5d4" class="graf graf--p graf-after--p">Server-Side Discovery is when the client makes a request to the load balancer and the load balancer is responsible for querying the service registry.</p><p name="ba76" id="ba76" class="graf graf--p graf-after--p">Cool. So service discovery is used because the location of services is constantly changing.We build databases and systems to handle incoming traffic and make routing to the correct place possible.</p><h4 name="e8be" id="e8be" class="graf graf--h4 graf-after--p">What is so special about Consul?</h4><p name="5756" id="5756" class="graf graf--p graf-after--h4">First, what Consul’s architecture looks like:</p><figure name="f830" id="f830" class="graf graf--figure graf-after--p"><div class="aspectRatioPlaceholder is-locked" style="max-width: 700px; max-height: 726px;"><div class="aspectRatioPlaceholder-fill" style="padding-bottom: 103.69999999999999%;"></div><img class="graf-image" data-image-id="0*tKu2fANOENUN5c7_.png" data-width="2315" data-height="2400" data-external-src="https://www.consul.io/assets/images/consul-arch-420ce04a.png" src="https://cdn-images-1.medium.com/max/800/0*tKu2fANOENUN5c7_.png"></div></figure><p name="7f46" id="7f46" class="graf graf--p graf-after--figure"><em class="markup--em markup--p-em">(Source: </em><a href="https://www.consul.io/docs/internals/architecture.html" data-href="https://www.consul.io/docs/internals/architecture.html" class="markup--anchor markup--p-anchor" rel="noopener" target="_blank"><em class="markup--em markup--p-em">https://www.consul.io/docs/internals/architecture.html</em></a><em class="markup--em markup--p-em">)</em></p><p name="4397" id="4397" class="graf graf--p graf-after--p">To start simple, let’s cover to main protocols Consul uses — Gossip Protocol and Consensus Protocol.</p><p name="1de0" id="1de0" class="graf graf--p graf-after--p"><strong class="markup--strong markup--p-strong">Gossip Protocol (also known as Epidemic Protocol)</strong></p><figure name="ca1c" id="ca1c" class="graf graf--figure graf-after--p"><div class="aspectRatioPlaceholder is-locked" style="max-width: 700px; max-height: 394px;"><div class="aspectRatioPlaceholder-fill" style="padding-bottom: 56.3%;"></div><img class="graf-image" data-image-id="0*SCdRm6TvcoxvG-dN.png" data-width="1280" data-height="720" data-external-src="https://thepreppypostgrad.com/wp-content/uploads/2014/04/mean-girls.png" src="https://cdn-images-1.medium.com/max/800/0*SCdRm6TvcoxvG-dN.png"></div></figure><p name="6b5d" id="6b5d" class="graf graf--p graf-after--figure">Gossip Protocol is a <strong class="markup--strong markup--p-strong">style</strong> of protocol intended to resemble how gossip travels throughout a workplace or high school. Gossip protocol works by randomly pairing computers so they can share information. Once both computers have the same information or state, the interaction is done.</p><p name="aee1" id="aee1" class="graf graf--p graf-after--p">Consul uses SWIM (<em class="markup--em markup--p-em">S</em>calable <em class="markup--em markup--p-em">W</em>eakly-consistent <em class="markup--em markup--p-em">I</em>nfection-style Process Group<em class="markup--em markup--p-em"> M</em>embership Protocol), with some minor adaptations, such as LifeGuard which you can read about here:</p><div name="2173" id="2173" class="graf graf--mixtapeEmbed graf-after--p"><a href="https://arxiv.org/abs/1707.00788" data-href="https://arxiv.org/abs/1707.00788" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://arxiv.org/abs/1707.00788"><strong class="markup--strong markup--mixtapeEmbed-strong">[1707.00788] Lifeguard : SWIM-ing with Situational Awareness</strong><br><em class="markup--em markup--mixtapeEmbed-em">Abstract: SWIM is a peer-to-peer group membership protocol that uses randomized probing and gossip to obtain attractive…</em>arxiv.org</a><a href="https://arxiv.org/abs/1707.00788" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock" data-media-id="3df697b8e17ed99785c83f47730c69dc"></a></div><p name="db9f" id="db9f" class="graf graf--p graf-after--mixtapeEmbed">Consul makes two gossip pools (grouping of servers that exchange information at random via SWIM), a LAN and a WAN pool. The LAN is used within a data center, which allows for fast and reliable detection of failures or additions. The WAN pool is used across data centers, which would help if an entire data center lost connectivity.</p><p name="8dc5" id="8dc5" class="graf graf--p graf-after--p">These two pools make up Consul’s node communication.</p><p name="1b20" id="1b20" class="graf graf--p graf-after--p"><em class="markup--em markup--p-em">Tip: Consul uses Serf’s libraries to implement Gossip Protocol.</em></p><p name="df66" id="df66" class="graf graf--p graf-after--p"><strong class="markup--strong markup--p-strong">Consensus Protocol</strong></p><figure name="38c3" id="38c3" class="graf graf--figure graf-after--p"><div class="aspectRatioPlaceholder is-locked" style="max-width: 700px; max-height: 394px;"><div class="aspectRatioPlaceholder-fill" style="padding-bottom: 56.3%;"></div><img class="graf-image" data-image-id="0*phrzrEzMo9ofizBn.jpg" data-width="700" data-height="394" data-external-src="https://img.wennermedia.com/article-leads-horizontal/rs-senate-17d31259-fb4f-41f5-8898-98427877a927.jpg" src="https://cdn-images-1.medium.com/max/800/0*phrzrEzMo9ofizBn.jpg"></div></figure><p name="6187" id="6187" class="graf graf--p graf-after--figure">A consensus protocol solves the problem of having multiple processes agree upon a single value. They must be able to communicate with one another, put forth their values, and work properly even in an event of failure.</p><p name="0a76" id="0a76" class="graf graf--p graf-after--p">Consensus Protocols must solve the consensus problem. Consul uses the RAFT algorithm.</p><p name="a09f" id="a09f" class="graf graf--p graf-after--p">Raft nodes can be followers, candidates, or leaders. Logs (ordered sequences of entries) are a unit of work in the Raft System. All nodes start out as followers, which means they can accept logs from leaders or cast votes. If a node doesn’t hear from the leader for some time, or get any logs, it becomes a candidate. As a candidate, a node requests votes from other candidates, and when one candidate receives the majority of votes, it becomes a leader. The leader’s job is to accept new log entries and to replicate those log entries to all the followers. This is leader election, and there can only be one leader at a time.</p><p name="7096" id="7096" class="graf graf--p graf-after--p">To check out more about RAFT: (<a href="https://thesecretlivesofdata.com/raft/" data-href="https://thesecretlivesofdata.com/raft/" class="markup--anchor markup--p-anchor" rel="noopener" target="_blank">https://thesecretlivesofdata.com/raft/</a>)</p><p name="46ec" id="46ec" class="graf graf--p graf-after--p">Consul uses RAFT (Consensus Protocol) to elect a leader for all incoming transactions, and then uses SWIM (Gossip Protocol) to message all nodes when leader election takes place. With use of these two protocols, Consul provides high availability and reliable communication across data centers.</p><p name="2336" id="2336" class="graf graf--p graf-after--p">What makes Consul so great is the features it provides of doing health checks, service discovery, and being a Key/Value store all in one tool.</p><p name="c1f5" id="c1f5" class="graf graf--p graf-after--p">Now that I know what a Service Registry is, and how Consul works, figuring out how to configure Spookernetes may be a bit easier. I’ve set up Consul on my Google Cloud instance and manually registered it with Nginx, so progress is being made! Configuring Registrator (Automatic Service Discovery) and Consul to work together over a Bridged network has been a challenge though. Consul and Registrator work over a host network, so if I can have Consul and Registrator only talk via a host network but also be attached to the bridge network, then I’ll have overcome this roadblock.</p><p name="d869" id="d869" class="graf graf--p graf-after--p graf--trailing">Since I just had sinus surgery, I don’t have too many questions, other than why can’t I actually rest instead of study?</p></div></div></section>
</section>