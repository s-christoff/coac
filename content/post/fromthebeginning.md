---
author: "Sarah Christoff"
date: 2018-02-08
linktitle: fromthebeginning
title: From the Beginning - A Brief Overview of Virtual Machines
weight: 10
---

<html><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8"><title>From the Beginning — A Brief Overview of Virtual Machines</title><meta name="description" content="“But, how does a hypervisor actually work?”"><style>
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
<h1 class="p-name">From the Beginning — A Brief Overview of Virtual Machines</h1>
</header>
<section data-field="subtitle" class="p-summary">
“But, how does a hypervisor actually work?”
</section>
<section data-field="body" class="e-content">
<section name="9fe2" class="section section--body section--first section--last"><div class="section-divider"><hr class="section-divider"></div><div class="section-content"><div class="section-inner sectionLayout--insetColumn"><h3 name="bea8" id="bea8" class="graf graf--h3 graf--leading graf--title">From the Beginning — A Brief Overview of Virtual Machines</h3><h3 name="3c59" id="3c59" class="graf graf--h3 graf--startsWithDoubleQuote graf-after--h3">“But, how does a hypervisor actually work?”</h3><p name="a3e0" id="a3e0" class="graf graf--p graf-after--h3">I’ve asked this question time and time again but I’ve never really gotten the answer I want. I’ve seen the graphs — I understand how the layers work and what order they go in. But how do these layers talk to each other, what kind of secrets lie between them?</p><h3 name="0d20" id="0d20" class="graf graf--h3 graf-after--p">Mom, where do hypervisors come from?</h3><p name="f10b" id="f10b" class="graf graf--p graf-after--h3">Check out: <a href="https://www.vm.ibm.com/vm40hist.pdf" data-href="https://www.vm.ibm.com/vm40hist.pdf" class="markup--anchor markup--p-anchor" rel="nofollow noopener" target="_blank">https://www.vm.ibm.com/vm40hist.pdf</a></p><p name="eef0" id="eef0" class="graf graf--p graf-after--p">The 1960s were a wild time. I wasn’t alive — but I’ve heard stories. During this time is when IBM’s Cambridge Scientific Center developed CP-40, CP standing for Control Program. CP-40 was the original hypervisor and established virtual machine architecture.</p><figure name="af55" id="af55" class="graf graf--figure graf-after--p"><div class="aspectRatioPlaceholder is-locked" style="max-width: 500px; max-height: 350px;"><div class="aspectRatioPlaceholder-fill" style="padding-bottom: 70%;"></div><img class="graf-image" data-image-id="1*M3mJs71Wu6xu5TVKFb2e9Q.png" data-width="500" data-height="350" src="https://cdn-images-1.medium.com/max/800/1*M3mJs71Wu6xu5TVKFb2e9Q.png"></div><figcaption class="imageCaption">IBM System/370</figcaption></figure><p name="a89b" id="a89b" class="graf graf--p graf-after--figure">In 1972 IBM announced that the System/370, released two years prior in 1970, would include virtual storage. IBM also announced the release of VM/360, the first official release of their virtual storage operating systems. Over the next decade IBM released even more hardware support.</p><p name="d58c" id="d58c" class="graf graf--p graf-after--p">In 1999 VMWare introduces VMWare Virtual Platform, and then a few year later in 2005 offers some virtualization technology for free!</p><h3 name="3404" id="3404" class="graf graf--h3 graf-after--p">What’s the different between a Type One and a Type Two?</h3><figure name="eeb6" id="eeb6" class="graf graf--figure graf-after--h3"><div class="aspectRatioPlaceholder is-locked" style="max-width: 575px; max-height: 231px;"><div class="aspectRatioPlaceholder-fill" style="padding-bottom: 40.2%;"></div><img class="graf-image" data-image-id="0*EnWzbzG_ZpJTVD03." data-width="575" data-height="231" src="https://cdn-images-1.medium.com/max/800/0*EnWzbzG_ZpJTVD03."></div><figcaption class="imageCaption">Type One Hypervisor vs Type Two Hypervisor</figcaption></figure><p name="df33" id="df33" class="graf graf--p graf-after--figure">A type one hypervisors (also known as full virtualization, or bare metal) sits on top of the actual hardware. On top of the hypervisor sits the virtual machines, or guest operating systems.</p><p name="6e1a" id="6e1a" class="graf graf--p graf-after--p">In a type two hypervisor, the hypervisor sits on top of the operating system, and creates the virtual machines on top of it from there.</p><p name="1198" id="1198" class="graf graf--p graf-after--p">Examples of Type One Hypervisors: KVM, Xen, Hyper-V</p><p name="7eae" id="7eae" class="graf graf--p graf-after--p">Examples of Type Two Hypervisors: VirtualBox, VMWare Fusion</p><h3 name="9953" id="9953" class="graf graf--h3 graf-after--p">Vocabulary Lesson:</h3><figure name="c676" id="c676" class="graf graf--figure graf-after--h3"><div class="aspectRatioPlaceholder is-locked" style="max-width: 700px; max-height: 288px;"><div class="aspectRatioPlaceholder-fill" style="padding-bottom: 41.099999999999994%;"></div><img class="graf-image" data-image-id="1*wLGVPa7yoE1FzoBelvOsIQ.png" data-width="808" data-height="332" src="https://cdn-images-1.medium.com/max/800/1*wLGVPa7yoE1FzoBelvOsIQ.png"></div><figcaption class="imageCaption">Control Flow Graph</figcaption></figure><p name="1e69" id="1e69" class="graf graf--p graf-after--figure"><strong class="markup--strong markup--p-strong">Control Flow Graph</strong>: A graph that represents all paths that must be traversed through a program during its execution.</p><figure name="c5e0" id="c5e0" class="graf graf--figure graf-after--p"><div class="aspectRatioPlaceholder is-locked" style="max-width: 700px; max-height: 517px;"><div class="aspectRatioPlaceholder-fill" style="padding-bottom: 73.9%;"></div><img class="graf-image" data-image-id="1*LhSELlbZ9R8FGfUz0GvASQ.png" data-width="834" data-height="616" src="https://cdn-images-1.medium.com/max/800/1*LhSELlbZ9R8FGfUz0GvASQ.png"></div><figcaption class="imageCaption">Basic Block Example, Source: <a href="https://www2.cs.arizona.edu/~collberg/Teaching/453/2009/Handouts/Handout-15.pdf" data-href="https://www2.cs.arizona.edu/~collberg/Teaching/453/2009/Handouts/Handout-15.pdf" class="markup--anchor markup--figure-anchor" rel="nofollow noopener" target="_blank">https://www2.cs.arizona.edu/~collberg/Teaching/453/2009/Handouts/Handout-15.pdf</a></figcaption></figure><p name="f4ab" id="f4ab" class="graf graf--p graf-after--figure"><strong class="markup--strong markup--p-strong">Basic Block</strong>: A straight-line sequence of code, the only branch in is the entry and the only branch out is the exit</p><p name="0194" id="0194" class="graf graf--p graf-after--p"><strong class="markup--strong markup--p-strong">User Mode</strong>: CPU mode where executing code does not <em class="markup--em markup--p-em">direct </em>access to the underlying hardware. Code running in user mode must use system APIs to access hardware.</p><p name="face" id="face" class="graf graf--p graf-after--p"><strong class="markup--strong markup--p-strong">Kernel Mode</strong>: CPU Mode where code has unrestricted access to the underlying hardware.</p><h3 name="0761" id="0761" class="graf graf--h3 graf-after--p">How does a Type One Hypervisor work?</h3><figure name="0dd4" id="0dd4" class="graf graf--figure graf-after--h3"><div class="aspectRatioPlaceholder is-locked" style="max-width: 700px; max-height: 525px;"><div class="aspectRatioPlaceholder-fill" style="padding-bottom: 75%;"></div><img class="graf-image" data-image-id="0*Y5TqVY_weS-cW36E." data-width="960" data-height="720" src="https://cdn-images-1.medium.com/max/800/0*Y5TqVY_weS-cW36E."></div><figcaption class="imageCaption">Type One Hypervisor, Source: Modern Operating Systems Fourth Edition</figcaption></figure><p name="4681" id="4681" class="graf graf--p graf-after--figure">As stated above a Type One Hypervisor sits on the hardware itself. The guest operating system believes it is running in kernel mode, but is actually running in user mode. When the hypervisor receives an instruction it inspects it to see if it was from the guest operating system or a user program in the virtual machine.</p><p name="b5e6" id="b5e6" class="graf graf--p graf-after--p">If it comes from the guest operating system then it arranges for the instruction to be carried out. If the instruction comes from a user program in the virtual machine then it emulates what the real hardware would do when confronted with a sensitive instruction — it either ignores it or it traps to the guest operating system.</p><h3 name="a044" id="a044" class="graf graf--h3 graf-after--p">How does a Type Two Hypervisor work?</h3><p name="36cb" id="36cb" class="graf graf--p graf-after--h3">A type two hypervisor sits on top of the operating system — running as an ordinary user program. Say we put a CD-ROM into our disk drive, when that operating system starts all basic blocks with sensitive instructions get changed into procedures that the type two hypervisor handles. Blocks are cached and then executed, which helps speed things up. Sensitive instructions given by the guest operating system are never executed by the true hardware.</p><h3 name="f146" id="f146" class="graf graf--h3 graf-after--p">What about Paravirtualization?</h3><figure name="102a" id="102a" class="graf graf--figure graf-after--h3"><div class="aspectRatioPlaceholder is-locked" style="max-width: 667px; max-height: 274px;"><div class="aspectRatioPlaceholder-fill" style="padding-bottom: 41.099999999999994%;"></div><img class="graf-image" data-image-id="1*hAk1Abpqdozik7mpUkE0CA.png" data-width="667" data-height="274" src="https://cdn-images-1.medium.com/max/800/1*hAk1Abpqdozik7mpUkE0CA.png"></div><figcaption class="imageCaption">True Virtualization vs Paravirtualization, Modern Operating Systems Fourth Edition</figcaption></figure><p name="7fbb" id="7fbb" class="graf graf--p graf-after--figure">With paravirtualization all sensitive instructions are hypervisor calls, which makes the guest operating system act like a program, and the hypervisor acts like an operating system.</p><p name="957f" id="957f" class="graf graf--p graf-after--p">This means the hypervisor must define a set of procedures the guest system can use, effectively creating an API for the guest operating system to talk to the hypervisor.</p><p name="b237" id="b237" class="graf graf--p graf-after--p">Related Articles:</p><p name="f124" id="f124" class="graf graf--p graf-after--p">Basic Blocks / Control Flow: <a href="https://www2.cs.arizona.edu/~collberg/Teaching/453/2009/Handouts/Handout-15.pdf" data-href="https://www2.cs.arizona.edu/~collberg/Teaching/453/2009/Handouts/Handout-15.pdf" class="markup--anchor markup--p-anchor" rel="nofollow noopener" target="_blank">https://www2.cs.arizona.edu/~collberg/Teaching/453/2009/Handouts/Handout-15.pdf</a></p><p name="93d7" id="93d7" class="graf graf--p graf-after--p">User Mode/ Kernel Mode:</p><div name="c93b" id="c93b" class="graf graf--mixtapeEmbed graf-after--p"><a href="https://blog.codinghorror.com/understanding-user-and-kernel-mode/" data-href="https://blog.codinghorror.com/understanding-user-and-kernel-mode/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://blog.codinghorror.com/understanding-user-and-kernel-mode/"><strong class="markup--strong markup--mixtapeEmbed-strong">Understanding User and Kernel Mode</strong><br><em class="markup--em markup--mixtapeEmbed-em">Most operating systems have some method of displaying CPU utilization. In Windows, this is Task Manager. CPU usage is…</em>blog.codinghorror.com</a><a href="https://blog.codinghorror.com/understanding-user-and-kernel-mode/" class="js-mixtapeImage mixtapeImage u-ignoreBlock" data-media-id="eaa3be5a31d86cdae14f15ff1b8554ca" data-thumbnail-img-id="0*iHiPotbtApwSz5Yp." style="background-image: url(https://cdn-images-1.medium.com/fit/c/160/160/0*iHiPotbtApwSz5Yp.);"></a></div><p name="747e" id="747e" class="graf graf--p graf-after--mixtapeEmbed">Virtualization:</p><figure name="c3dc" id="c3dc" class="graf graf--figure graf--iframe graf-after--p graf--trailing"></figure></div></div></section>
</section>