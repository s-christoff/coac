---
author: "Sarah Christoff"
date: 2017-09-04
linktitle: blackmagiccomputers
title: Black Magic Computers
weight: 10
---



<html><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8"><title>Black Magic Computers</title><style>
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
<h1 class="p-name">Black Magic Computers</h1>
</header>
<section data-field="body" class="e-content">
<section name="e559" class="section section--body section--first section--last"><div class="section-divider"><hr class="section-divider"></div><div class="section-content"><div class="section-inner sectionLayout--insetColumn"><h3 name="90d5" id="90d5" class="graf graf--h3 graf--leading graf--title">Black Magic Computers</h3><p name="9679" id="9679" class="graf graf--p graf-after--h3">Currently Reading: Understanding Linux Network Internals, Kubernetes Up &amp; Running, The Manga Guide to Electricity</p><p name="c450" id="c450" class="graf graf--p graf-after--p">(<em class="markup--em markup--p-em">Warning: I’m not a chemist, physicist, or even in college. This is just my understanding of these tools, but if I’m wrong, let me know!)</em></p><p name="8458" id="8458" class="graf graf--p graf-after--p">This week I accidentally tripped into a bunch of “Crash Course Chemistry” videos when trying to understand semiconductors (which stemmed from trying to understand how computer’s work).</p><p name="5da3" id="5da3" class="graf graf--p graf-after--p">Check out crash course here: (<a href="https://www.youtube.com/user/crashcourse" data-href="https://www.youtube.com/user/crashcourse" class="markup--anchor markup--p-anchor" rel="noopener" target="_blank">https://www.youtube.com/user/crashcourse)</a></p><p name="3ece" id="3ece" class="graf graf--p graf-after--p">So, what is a semiconductor?:</p><p name="ebd0" id="ebd0" class="graf graf--p graf-after--p">A chemical or substance that conducts electricity, but only under certain circumstances. That’s where the “semi” comes from, because it only “semi” wants too.</p><p name="8ccb" id="8ccb" class="graf graf--p graf-after--p">Semiconductors either have a negative or positive charge based off what chemicals are bonding with Silicon (doping), if it has more free electrons, it’s negative, if the bond is looking for a free electron it’s positive.</p><figure name="772a" id="772a" class="graf graf--figure graf-after--p"><div class="aspectRatioPlaceholder is-locked" style="max-width: 300px; max-height: 266px;"><div class="aspectRatioPlaceholder-fill" style="padding-bottom: 88.7%;"></div><img class="graf-image" data-image-id="0*w6mTIvY4GqevhtCj.jpg" data-width="300" data-height="266" data-external-src="https://catonacomputer.com/wp-content/uploads/2017/09/messageImage_1504278940670-300x266.jpg" src="https://cdn-images-1.medium.com/max/800/0*w6mTIvY4GqevhtCj.jpg"></div></figure><p name="cba2" id="cba2" class="graf graf--p graf-after--figure">For example, Boron has three outer electrons (<a href="https://www.chem4kids.com/files/elements/005_shells.html" data-href="https://www.chem4kids.com/files/elements/005_shells.html" class="markup--anchor markup--p-anchor" rel="noopener" target="_blank">https://www.chem4kids.com/files/elements/005_shells.html</a>) which would make the doping positive, however Phosphorus (<a href="https://www.chem4kids.com/files/elements/015_shells.html" data-href="https://www.chem4kids.com/files/elements/015_shells.html" class="markup--anchor markup--p-anchor" rel="noopener" target="_blank">https://www.chem4kids.com/files/elements/015_shells.html</a>) has five outer electrons which makes makes the doping negative.</p><p name="5b30" id="5b30" class="graf graf--p graf-after--p">There are P (positive) types and N (negative) types of bonding. A diode is half P type and half N Type which makes a diode neutral. Diode’s are easily summarized as a “one way street” for electricity to pass through, meaning it can go one way, but not the other. Based off how the electrical current (such as a battery) is flowing through the diode this conducts where the electrons go. The electrons always go the opposite way of the current.</p><figure name="6307" id="6307" class="graf graf--figure graf-after--p"><div class="aspectRatioPlaceholder is-locked" style="max-width: 279px; max-height: 300px;"><div class="aspectRatioPlaceholder-fill" style="padding-bottom: 107.5%;"></div><img class="graf-image" data-image-id="0*WKgw0pZaKAf4mbTd.jpg" data-width="279" data-height="300" data-external-src="https://catonacomputer.com/wp-content/uploads/2017/09/messageImage_1504192698111-279x300.jpg" src="https://cdn-images-1.medium.com/max/800/0*WKgw0pZaKAf4mbTd.jpg"></div></figure><p name="28f9" id="28f9" class="graf graf--p graf-after--figure">If the negative is hooked up to the positive, and the positive to the negative, then the electrons will be attracted to the open holes and will quit (Reverse Bias). However, if you flip the battery around the extra electrons on the negative side will be pushed over to the positive side and the excess electrons will continue to flow (Forward Bias).</p><p name="b44b" id="b44b" class="graf graf--p graf-after--p">Perfectly summarized by my sister (who knew having a physicist as a sister would come in handy?) — “All electricity is, is electrons looking for a home where they’re wanted and loved.”</p><figure name="f153" id="f153" class="graf graf--figure graf-after--p"><div class="aspectRatioPlaceholder is-locked" style="max-width: 300px; max-height: 203px;"><div class="aspectRatioPlaceholder-fill" style="padding-bottom: 67.7%;"></div><img class="graf-image" data-image-id="0*rLQKW47FQDE6jDP5.png" data-width="300" data-height="203" data-external-src="https://catonacomputer.com/wp-content/uploads/2017/09/Semiconductor_Family_Tree_-_Essential_Guide_to_Semiconductors__The-300x203.png" src="https://cdn-images-1.medium.com/max/800/0*rLQKW47FQDE6jDP5.png"></div></figure><p name="2f62" id="2f62" class="graf graf--p graf-after--figure">Now semiconductors are pretty dope (doping joke, harhar), and you can see they’re the reason we have computers today.</p><p name="28dc" id="28dc" class="graf graf--p graf-after--p">Fun tid-bit I learned, Digital components treat electricity as on or off, yes or no, true or false, which is why they mostly make up computers. Analog components treat electricity like a flowing stream, like how your car’s speedometer keeps track of you speeding.</p><p name="4063" id="4063" class="graf graf--p graf-after--p">A transistor is a more complicated diode that is either PNP or NPN, which can either turn the current on or off, or amplify the current. This makes a transistor both analog and digital. Now, transistors are very helpful in making logic gates (AND, OR, XOR) which is a physical representation of a boolean function.</p><p name="bc7b" id="bc7b" class="graf graf--p graf-after--p">That’s a bit confusing, but to put it simply it’s how you would actually show (this would be an AND gate):</p><p name="a70d" id="a70d" class="graf graf--p graf-after--p">In [1]: if 1 and 1:</p><p name="2e90" id="2e90" class="graf graf--p graf-after--p">…: print(True)</p><p name="b6b2" id="b6b2" class="graf graf--p graf-after--p">…:</p><p name="f30d" id="f30d" class="graf graf--p graf-after--p">True</p><p name="595c" id="595c" class="graf graf--p graf-after--p">So, if the current is running through transistor A, it would return true, and if current is running through transistor B, it would return true, which would make our whole expression true.</p><p name="44d5" id="44d5" class="graf graf--p graf-after--p">Now, a computer uses something called a flip-flop (<a href="https://en.wikipedia.org/wiki/Flip-flop_%28electronics%29" data-href="https://en.wikipedia.org/wiki/Flip-flop_(electronics)" class="markup--anchor markup--p-anchor" rel="noopener" target="_blank">https://en.wikipedia.org/wiki/Flip-flop_(electronics</a>) which stores state information. I like to think of it as something that saves numbers, and if you put a bunch of flip-flops together that makes a register, and if you put a bunch of registers together, that makes a memory chip.</p><p name="0d3c" id="0d3c" class="graf graf--p graf-after--p">Here is a photo of my flip-flop, and what I based it off of.</p><figure name="edac" id="edac" class="graf graf--figure graf-after--p"><div class="aspectRatioPlaceholder is-locked" style="max-width: 225px; max-height: 300px;"><div class="aspectRatioPlaceholder-fill" style="padding-bottom: 133.29999999999998%;"></div><img class="graf-image" data-image-id="0*fpTJjx8435a8MdF5.jpg" data-width="225" data-height="300" data-external-src="https://catonacomputer.com/wp-content/uploads/2017/09/IMG_5598-e1504559726284-225x300.jpg" src="https://cdn-images-1.medium.com/max/800/0*fpTJjx8435a8MdF5.jpg"></div></figure><figure name="5e73" id="5e73" class="graf graf--figure graf-after--figure"><div class="aspectRatioPlaceholder is-locked" style="max-width: 700px; max-height: 279px;"><div class="aspectRatioPlaceholder-fill" style="padding-bottom: 39.900000000000006%;"></div><img class="graf-image" data-image-id="0*0SNMtli9BK5N29PN.gif" data-width="700" data-height="279" data-external-src="https://www.radio-electronics.com/info/circuits/logic-basic-circuits/NOR_R-S_flip_flop.gif" src="https://cdn-images-1.medium.com/max/800/0*0SNMtli9BK5N29PN.gif"></div></figure><p name="1dea" id="1dea" class="graf graf--p graf-after--figure">So, basically we’re taking a thing that can make small numbers, and grouping them to make bigger numbers, and then grouping the things that make bigger numbers to make even bigger numbers.</p><h4 name="494e" id="494e" class="graf graf--h4 graf-after--p">Really.Big.Numbers.</h4><figure name="95ee" id="95ee" class="graf graf--figure graf-after--h4"><div class="aspectRatioPlaceholder is-locked" style="max-width: 300px; max-height: 188px;"><div class="aspectRatioPlaceholder-fill" style="padding-bottom: 62.7%;"></div><img class="graf-image" data-image-id="0*WwJQU68vpQQs-ClM.gif" data-width="300" data-height="188" data-external-src="https://catonacomputer.com/wp-content/uploads/2017/09/memorychip-300x188.gif" src="https://cdn-images-1.medium.com/max/800/0*WwJQU68vpQQs-ClM.gif"></div></figure><p name="6c6f" id="6c6f" class="graf graf--p graf-after--figure">With a memory chip there are incoming wires (Address Wires) and outgoing wires (Data Wires). An address comes in on the address wires and that selects a register, which outputs that information through the data wires. For running a program, you would use something like a program counter (or instruction pointer) . What a program counter does is keep the program sequence running by pointing to the next instruction to be executed.</p><p name="ac93" id="ac93" class="graf graf--p graf-after--p">That’s about as far as I’ve gotten with logic gates, and how a computer works. Switching gears into my other interest, networking and the black magic it uses. I started digging into Understanding Linux Networking Internals about halfway into Understanding the Linux Kernel. The big question I’ve been asking this week is not only how the packet is built on your machine, but how it is sent out.</p><figure name="98db" id="98db" class="graf graf--figure graf-after--p"><div class="aspectRatioPlaceholder is-locked" style="max-width: 196px; max-height: 300px;"><div class="aspectRatioPlaceholder-fill" style="padding-bottom: 153.1%;"></div><img class="graf-image" data-image-id="0*_gHO3yIyeeAzGRot.png" data-width="196" data-height="300" data-external-src="https://catonacomputer.com/wp-content/uploads/2017/09/protocols-196x300.png" src="https://cdn-images-1.medium.com/max/800/0*_gHO3yIyeeAzGRot.png"></div></figure><p name="2f24" id="2f24" class="graf graf--p graf-after--figure">It starts with routes, which stores the necessary information to forward traffic towards a destination. There are many different types of data structures used by the routing code for the Linux Kernel to make this as efficient as possible. If you have a bunch of routes, you then have a routing table. Once the routing table confirms your next hop, the packet is sent over ethernet interface.</p><p name="8803" id="8803" class="graf graf--p graf-after--p">The biggest question I’m having lately is, how do we use radio waves to transmit data (like data packets) and how do receivers even.. receive them?</p><p name="ad8a" id="ad8a" class="graf graf--p graf-after--p">Last stop is Kubernetes, and my current project, Spookernetes. I am currently following this guide (<a href="https://github.com/kelseyhightower/kubernetes-the-hard-way/" data-href="https://github.com/kelseyhightower/kubernetes-the-hard-way/" class="markup--anchor markup--p-anchor" rel="noopener" target="_blank">https://github.com/kelseyhightower/kubernetes-the-hard-way/</a>)(<em class="markup--em markup--p-em">Sorry, CoreOS documentation, you were too out of date)</em> to set up Kubernetes “the hard way” on GCE. It didn’t think the hard way meant wrestling with ETCD for four hours, but luckily this is teaching me how every part of Kubernetes works together. It’s kind of like solving a big Rubik’s cube in my mind! Also, choosing Container Linux instead of Ubuntu has taught me a lot about the restrictions in place on Container Linux. But why are these restrictions, such as making /usr/bin/ read only, helpful?</p><p name="f9e5" id="f9e5" class="graf graf--p graf-after--p graf--trailing">Spookernetes is on GitHub and currently is a work in progress, using Docker Compose, Kompose, Consul, Traefik, Nginx, and more. (<a href="https://github.com/s-christoff/spookernetes" data-href="https://github.com/s-christoff/spookernetes" class="markup--anchor markup--p-anchor" rel="noopener" target="_blank">https://github.com/s-christoff/spookernetes</a>).</p></div></div></section>
</section>
