---
author: "Sarah Christoff"
date: 2018-11-01
linktitle: raftfollwup
title: I was wrong - the talk follow up. 
weight: 10
---

<html><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8"><title>I was wrong — the talk followup.</title><style>
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
      section[data-field=subtitle],
      section[data-field=description] {
        display: none;
      }
      </style></head><body><article class="h-entry">
<header>
<h1 class="p-name">I was wrong — the talk followup.</h1>
</header>
<section data-field="subtitle" class="p-summary">
I criticize myself more harshly than any other. I advise my bosses to be direct and honest with their feedback whenever possible, so it…
</section>
<section data-field="body" class="e-content">
<section name="2474" class="section section--body section--first section--last"><div class="section-divider"><hr class="section-divider"></div><div class="section-content"><div class="section-inner sectionLayout--insetColumn"><h3 name="f389" id="f389" class="graf graf--h3 graf--leading graf--title">I was wrong — the talk followup.</h3><p name="ec1f" id="ec1f" class="graf graf--p graf-after--h3">I criticize myself more harshly than any other. I advise my bosses to be direct and honest with their feedback whenever possible, so it leaves out any chance that I could misinterpret it and fall down a rabbit hole of self loathing. Maybe this is what Xanax is supposed to help with, I’m not entirely sure.</p><p name="c64e" id="c64e" class="graf graf--p graf-after--p">Last week at Hashiconf I gave the most intense talk I’ve given yet, “You. Must. Build. A. Raft!”. It was fun and lighthearted, meant to explain concepts such as Byzantine Fault Tolerance and Paxos in a manner where my dog could understand it. I wanted to give the talk some type of storyline, so I framed it around a discussion I had with my lead awhile back.</p><p name="05ff" id="05ff" class="graf graf--p graf-after--p">

I drool over redundancy. I don’t know why, but the more reliable and redundant a system is, the more I want to find out how I <i>could</i> break it. I was discussing with my lead how I wanted to implement a multi-master, multi-region set up for an application we were working on. He advised me that because of the application uses Raft, the latency may cause issues between regions and that I shouldn’t do it. I heeded his advise, but a voice in the back of my head wondered if it was Raft, or the application’s fault. So my talk was born.</p>

<p name="fc9b" id="fc9b" class="graf graf--p graf-after--p">
For the sake of everyone reading, I’ll only focus on the Raft portion of my talk. Each node in Raft has a randomized timer, when these timers hit their limit they attempt to go into leader election. The way we prevent these timers from timing out is by having the leader send heartbeats to each node, resetting their timer.</p>

<p name="e8c7" id="e8c7" class="graf graf--p graf-after--p">
Since the timers are randomized, I believed that if we used Raft across multiple regions that any latency issues would be solved by the leader election process.</p>

<figure name="53fe" id="53fe" class="graf graf--figure graf-after--p"><div class="aspectRatioPlaceholder is-locked" style="max-width: 700px; max-height: 395px;"><div class="aspectRatioPlaceholder-fill" style="padding-bottom: 56.49999999999999%;"></div><img class="graf-image" data-image-id="1*bkw_U6YMGi0ARG3UysDJnw.png" data-width="2110" data-height="1192" data-is-featured="true" src="https://cdn-images-1.medium.com/max/800/1*bkw_U6YMGi0ARG3UysDJnw.png"></div>
<figcaption class="imageCaption">You.Must.Build.A.Raft!</figcaption></figure><p name="2fc7" id="2fc7" class="graf graf--p graf-after--figure">
If latency occurs, and a timeout happens, then a new term occurs and the leader election process happens. I figured this leader election process was supposed to be flexible and happen a lot.</p>
<p name="7dfa" id="7dfa" class="graf graf--p graf-after--p">
I was wrong. A week later, the <a href="https://blog.github.com/2018-10-30-oct21-post-incident-analysis/" data-href="https://blog.github.com/2018-10-30-oct21-post-incident-analysis/" class="markup--anchor markup--p-anchor" rel="noopener" target="_blank">Github Outage</a> occurred. Github was down for 24 hours and 11 minutes.</p>

<p name="b026" id="b026" class="graf graf--p graf-after--p">
To summarize: increased latency  between regions caused a leader to be promoted in a new region leading to inconsistencies in data and a degredation in user experience.</p>
<figure name="01be" id="01be" class="graf graf--figure graf-after--p"><div class="aspectRatioPlaceholder is-locked" style="max-width: 700px; max-height: 556px;"><div class="aspectRatioPlaceholder-fill" style="padding-bottom: 79.4%;"></div><img class="graf-image" data-image-id="0*jCzu3fdtVhj3XsRT.png" data-width="1700" data-height="1350" src="https://cdn-images-1.medium.com/max/800/0*jCzu3fdtVhj3XsRT.png"></div><figcaption class="imageCaption">Github Outage 2018</figcaption></figure><p name="ca2d" id="ca2d" class="graf graf--p graf-after--figure">

I ended my talk last week saying my lead and I were both correct, but leaning towards myself being more correct due to how Raft should handle leader election. However how something <i> should </i> work, and how something <b>actually </b> works, are two completely different monsters. From what GitHub was saying in their outage report, I was not correct. Having a multi-region multi-master set up could cause downtime whenever a leader is promoted across regions.</p><p name="7a19" id="7a19" class="graf graf--p graf-after--p">

Were there things that could have prevented this from happening? Maybe, but with the replication at this scale across regions, that’s a hell of a problem. Having a private network with more controllable and predictable latency could have helped, but you're still replicating large amounts of data and shifting traffic between regions. This could lead to poor user experience (cue customer saying: "Sometimes my site is slow!") and data loss. </p>

<p name="14c2" id="14c2" class="graf graf--p graf-after--p graf--trailing">
I’m sending this out so that before my talk is released on Youtube, and three people watch it in full, and one of those three calls me out on this, I’ll have a retort. For those of you who do watch my talk, if what happened to GitHub is as they described, this <strong class="markup--strong markup--p-strong">could</strong> be seen as a Byzantine Failure due to the loss of consensus and inconsistency in reports. Which is pretty frickin’ cool.</p></div></div></section>
</section>