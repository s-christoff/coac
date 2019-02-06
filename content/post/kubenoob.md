---
author: "Sarah Christoff"
date: 2017-08-08
linktitle: kubenoob
title: Kube Noob
weight: 10
---

<html><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8"><title>Kubes Noob</title><style>
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
<h1 class="p-name">Kubes Noob</h1>
</header>
<section data-field="body" class="e-content">
<section name="de86" class="section section--body section--first section--last"><div class="section-divider"><hr class="section-divider"></div><div class="section-content"><div class="section-inner sectionLayout--insetColumn"><h3 name="899e" id="899e" class="graf graf--h3 graf--leading graf--title">Kubes Noob</h3><figure name="73a5" id="73a5" class="graf graf--figure graf-after--h3"><div class="aspectRatioPlaceholder is-locked" style="max-width: 700px; max-height: 700px;"><div class="aspectRatioPlaceholder-fill" style="padding-bottom: 100%;"></div><img class="graf-image" data-image-id="0*JGZ0btGDrtRrh_z_.jpg" data-width="1080" data-height="1080" data-external-src="https://68.media.tumblr.com/e08c5a46f3b19c3b9c5b6dac365a249f/tumblr_ou3dsljOXP1qhwvdmo1_1280.jpg" src="https://cdn-images-1.medium.com/max/800/0*JGZ0btGDrtRrh_z_.jpg"></div></figure><p name="59d0" id="59d0" class="graf graf--p graf-after--figure">(Source: Hannah Hillam: (<a href="https://verbalvomits.tumblr.com/post/163741753121/me-trying-to-do-anything-lately" data-href="https://verbalvomits.tumblr.com/post/163741753121/me-trying-to-do-anything-lately" class="markup--anchor markup--p-anchor" rel="noopener" target="_blank">https://verbalvomits.tumblr.com/post/163741753121/me-trying-to-do-anything-lately</a>))</p><p name="1833" id="1833" class="graf graf--p graf-after--p">I never thought my first project would be so difficult, or how hard it would be to stick to it. I keep being told over and over again that it’s not hard to start a project, it’s just hard to complete it. Halfway into deploying Kubernetes on my Google Cloud cluster, I’m starting to believe them. I’ve spent hours staring at my home directory to build the energy to debug a service, or install an application. Luckily, with each small victory, the easier it becomes to complete more of the project.</p><p name="26a3" id="26a3" class="graf graf--p graf-after--p">It started with this guide:</p><div name="f3e2" id="f3e2" class="graf graf--mixtapeEmbed graf-after--p"><a href="https://coreos.com/kubernetes/docs/latest/getting-started.html" data-href="https://coreos.com/kubernetes/docs/latest/getting-started.html" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://coreos.com/kubernetes/docs/latest/getting-started.html"><strong class="markup--strong markup--mixtapeEmbed-strong">CoreOS</strong><br><em class="markup--em markup--mixtapeEmbed-em">CoreOS provides Container Linux, Tectonic for Kubernetes and the Quay image registry; key components to secure…</em>coreos.com</a><a href="https://coreos.com/kubernetes/docs/latest/getting-started.html" class="js-mixtapeImage mixtapeImage u-ignoreBlock" data-media-id="0b813a25c41a53f6508c1a474f4f65da" data-thumbnail-img-id="0*BHw7_IwBOyicWRUg." style="background-image: url(https://cdn-images-1.medium.com/fit/c/160/160/0*BHw7_IwBOyicWRUg.);"></a></div><p name="2ab5" id="2ab5" class="graf graf--p graf-after--mixtapeEmbed">It seemed easy enough, roll up the cluster, add all the configuration files, and start the services. Boom, you have Kubernetes orchestrating your docker containers, and hey, you have Flannel (so you can connect it to your Raspberry Pi, since Flannel ❤ ARM) and a Calico overlay too.</p><p name="50fa" id="50fa" class="graf graf--p graf-after--p">I quickly found out I vastly under-estimated the complexity of this project. I’ve spent hours re-reading the guide, crawling through Stack Overflow, and even joining the Kubernetes, Calico, and Docker Slack channels. I finally gained the courage to ask for help in the Slack groups, which sent me to the CoreOS IRC channel. Once I connected with someone there, I learned that the guide I’ve been using was out of date (which is nicely printed at the top, in small text).</p><p name="738f" id="738f" class="graf graf--p graf-after--p">Nowadays when people deploy Kubernetes onto their cluster I s’pose they enjoy using nifty applications, such as Kops, Tectonic, anything with Kubeadm, and so forth.</p><p name="ff4c" id="ff4c" class="graf graf--p graf-after--p">But, what’s the point of using those tools if you don’t understand how Kubernetes really works? How are you supposed to fix this when it breaks, if a tool did the hard part for you?</p><p name="a827" id="a827" class="graf graf--p graf-after--p">After another couple hours of finding out how to make your own cloud-config files, ripping down my old cluster and building a new one, and some more coffee, I finally was able to get flannel and docker to start. (Hint, if flannel isn’t able to start due to not being able to reach out to it’s API, it’s probably because your ETCD_ENDPOINTs are not set properly.)</p><p name="a0ef" id="a0ef" class="graf graf--p graf-after--p">The biggest lessons I’ve learned so far is how to set timers for yourself, and realize when you’re not making progress. Even with starting this blog, I’ve been putting off until the completion of the entire Kubernetes project itself to make a single post. Or, when I could not figure out why I was getting an error when I tried to start etcd2 that it couldn’t connect to an API, I waited hours before asking a friend. This project has started me putting my anxieties and confidence behind me, and taking the plunge so I can get things done.</p><p name="9cd7" id="9cd7" class="graf graf--p graf-after--p">Now, the fun actually begins, of putting applications within the docker containers.</p><p name="692e" id="692e" class="graf graf--p graf-after--p">Kubernetes is an open-source container orchestration service, and one of the neatest things I’ve seen since the Turing Machine.</p><p name="7572" id="7572" class="graf graf--p graf-after--p">For how it works, check out:</p><div name="45fa" id="45fa" class="graf graf--mixtapeEmbed graf-after--p graf--trailing"><a href="https://deis.com/blog/2016/kubernetes-illustrated-guide/" data-href="https://deis.com/blog/2016/kubernetes-illustrated-guide/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://deis.com/blog/2016/kubernetes-illustrated-guide/"><strong class="markup--strong markup--mixtapeEmbed-strong">The Children&#39;s Illustrated Guide to Kubernetes</strong><br><em class="markup--em markup--mixtapeEmbed-em">Introducing Phippy, an intrepid little PHP app, and her journey to Kubernetes.What is this? Well, I wrote a book that…</em>deis.com</a><a href="https://deis.com/blog/2016/kubernetes-illustrated-guide/" class="js-mixtapeImage mixtapeImage u-ignoreBlock" data-media-id="ed4f23ffd04fad4233650a3ed9177c73" data-thumbnail-img-id="0*pgLdX2rer8JXXL-f." style="background-image: url(https://cdn-images-1.medium.com/fit/c/160/160/0*pgLdX2rer8JXXL-f.);"></a></div></div></div></section>
</section>