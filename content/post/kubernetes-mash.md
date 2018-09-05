---
author: "Sarah Christoff"
date: 2017-10-17
linktitle: Kubernetes Mash
title: Kubernetes Mash - It was a Spookernetes Bash!
weight: 10
---

<html><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8"><title>Kubernetes Mash — It was a Spookernetes Bash!</title><style>
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
<h1 class="p-name">Kubernetes Mash — It was a Spookernetes Bash!</h1>
</header>
<section data-field="body" class="e-content">
<section name="d4f3" class="section section--body section--first section--last"><div class="section-divider"><hr class="section-divider"></div><div class="section-content"><div class="section-inner sectionLayout--insetColumn"><h3 name="93e2" id="93e2" class="graf graf--h3 graf--leading graf--title">Kubernetes Mash — It was a Spookernetes Bash!</h3><p name="4dc1" id="4dc1" class="graf graf--p graf-after--h3">Currently Reading: The Magna Guide to Microprocessors, <a href="https://www.safaribooksonline.com/library/view/kubernetes-up-and/9781491935668/titlepage01.html" data-href="https://www.safaribooksonline.com/library/view/kubernetes-up-and/9781491935668/titlepage01.html" class="markup--anchor markup--p-anchor" rel="noopener" target="_blank">Kubernetes Up &amp; Running</a></p><figure name="0452" id="0452" class="graf graf--figure graf-after--p"><div class="aspectRatioPlaceholder is-locked" style="max-width: 700px; max-height: 394px;"><div class="aspectRatioPlaceholder-fill" style="padding-bottom: 56.3%;"></div><img class="graf-image" data-image-id="1*24IDOEJxrp-8fjo8c9DXpQ.jpeg" data-width="1920" data-height="1080" src="https://cdn-images-1.medium.com/max/800/1*24IDOEJxrp-8fjo8c9DXpQ.jpeg"></div></figure><p name="253a" id="253a" class="graf graf--p graf-after--figure"><a href="https://github.com/s-christoff/spookernetes" data-href="https://github.com/s-christoff/spookernetes" class="markup--anchor markup--p-anchor" rel="noopener" target="_blank">Spookernetes</a> was my first ‘real’ DevOps project. By real, I mean I talked to other DevOp-sy people and they said that they’ve done similar things in their day to day. Only, instead of a day, this took me awhile.</p><p name="1574" id="1574" class="graf graf--p graf-after--p">Phase One of Spookernetes was to set up Traefik as a load balancer, Consul as a service registry, and use something to return a unique ID (container ID) in a browser.</p><p name="79f0" id="79f0" class="graf graf--p graf-after--p">Initially I went through some <a href="http://www.katacoda.com" data-href="http://www.katacoda.com" class="markup--anchor markup--p-anchor" rel="noopener" target="_blank">katacodas</a> to learn how to make <a href="https://traefik.io/" data-href="https://traefik.io/" class="markup--anchor markup--p-anchor" rel="noopener" target="_blank">Traefik</a> work with Nginx. Once I finally had Traefik working, I went through the step by step <a href="https://www.consul.io/intro/index.html" data-href="https://www.consul.io/intro/index.html" class="markup--anchor markup--p-anchor" rel="noopener" target="_blank">Consul Getting Started</a> which helped me gain some familiarity with Consul. However, that didn’t make setting up automatic service discovery any easier (and I’m still not sure with Docker Compose that is a thing I can do). I used Registrator to automatically register all services with Consul. In the end, I forgot I needed something that actually knows PHP to read my PHP files, which is why PHP FPM is just thrown in there.</p><p name="31f5" id="31f5" class="graf graf--p graf-after--p">Phase One’s biggest hiccup was making Nginx and PHP FPM mesh. In the end, I found out you could just use the Nginx configuration file (default.conf) to return what I needed.</p><p name="8788" id="8788" class="graf graf--p graf-after--p">Phase Two was much more challenging. Now it was time to take my cute Docker compose file and shove it into Kubernetes. Once my services were working on Kubernetes, I was supposed to step up network policies to have only certain Nginx’s talk to certain PHP-FPMs, and show that fake Nginx’s could not talk to PHP FPM.</p><p name="3ff4" id="3ff4" class="graf graf--p graf-after--p">I started off using <a href="http://kompose.io" data-href="http://kompose.io" class="markup--anchor markup--p-anchor" rel="noopener" target="_blank">Kompose</a>, and I had high hopes. Kompose will take your Docker-Compose file, and translate it into a bunch of YAML files for Kubernetes to understand. Kompose quickly crushed my dreams as I realized it is not easy to take the configuration files on your local machine and make them magically appear somewhere, somehow, on the cloud. This is where I learned it is okay to ask for help! Instead of realizing this sooner I spent a couple days at a coffee shop, way too stressed out over configuration files.</p><p name="00a7" id="00a7" class="graf graf--p graf-after--p"><a href="https://kubernetes.io/docs/tasks/configure-pod-container/configmap/" data-href="https://kubernetes.io/docs/tasks/configure-pod-container/configmap/" class="markup--anchor markup--p-anchor" rel="noopener" target="_blank">ConfigMaps</a> were confusing at first, but after a brief sit down with my mentor, I learned that past all the ‘techie’ talk that ConfigMaps take data you need and store it in a key/value store so that it can be used later. With a brief understanding of ConfigMaps, and the realization I could make my own images by simply baking files into already made images, I was able to start standing up my services.</p><p name="bf54" id="bf54" class="graf graf--p graf-after--p">Next it was onto Network Policies! I used <a href="https://v1-7.docs.kubernetes.io/docs/concepts/services-networking/network-policies/" data-href="https://v1-7.docs.kubernetes.io/docs/concepts/services-networking/network-policies/" class="markup--anchor markup--p-anchor" rel="noopener" target="_blank">Kubernetes’ documentation</a> for version 1.7. After spending a couple hours not understanding what was wrong with my network-policies.yaml, I realized I was using the 1.8 documentation. Their documentation was pretty clear, and I was able to use the labels I created and set an ipBlock for the IP range my actual Nginx service is set in. I stood up a service called ‘Nginxfaker’ to show that it couldn’t talk to PHP-FPM.</p><p name="73e6" id="73e6" class="graf graf--p graf-after--p">This project really opened my eyes to how much I need to learn about Kubernetes, and how your mentors and friends are there to save your sanity!</p><p name="17aa" id="17aa" class="graf graf--p graf-after--p">I want to learn all the nifty tricks things you can do with Kubernetes, but I’m also curious about Nomad, and HashiCorp products. I think it would be fun to do a Nomad + Vault + Consul + Packer project to gain some familiarity with that family of tools, even though this project had me interacting with Consul.</p><p name="3e6e" id="3e6e" class="graf graf--p graf-after--p">This week I want to learn about encryption, keep reading about microprocessors, and I will hopefully have a firm grasp and familiarity with lists in Python.</p><p name="0e00" id="0e00" class="graf graf--p graf-after--p graf--trailing">Kubernetes is starting to get a lot less spooky!</p></div></div></section>