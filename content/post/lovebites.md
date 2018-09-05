---
author: "Sarah Christoff"
date: 2017-10-06
linktitle: lovebites
title: Love Bit(e)s
weight: 10
---

<!DOCTYPE html><html><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8"><title>Love Bit(e)s</title><style>
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
<h1 class="p-name">Love Bit(e)s</h1>
</header>
<section data-field="body" class="e-content">
<section name="5509" class="section section--body section--first section--last"><div class="section-divider"><hr class="section-divider"></div><div class="section-content"><div class="section-inner sectionLayout--insetColumn"><h3 name="b485" id="b485" class="graf graf--h3 graf--leading graf--title">Love Bit(e)s</h3><p name="ecbd" id="ecbd" class="graf graf--p graf-after--h3">Currently Reading: The Manga Guide to Microprocessors, The Manga Guide to Electricity, The Little Schemer</p><p name="e59c" id="e59c" class="graf graf--p graf-after--p">In my previous post, <a href="http://catonacomputer.com/black-magic-computers/" data-href="http://catonacomputer.com/black-magic-computers/" class="markup--anchor markup--p-anchor" rel="noopener" target="_blank">Black Magic Computers</a>, I talked about semiconductors, transistors, logic gates, and more. This will hopefully build upon that post, as I talk about binary arithmetic.</p><h4 name="7a3e" id="7a3e" class="graf graf--h4 graf-after--p">So, what is a bit?</h4><p name="ce49" id="ce49" class="graf graf--p graf-after--h4">The dictionary definition of a bit is “a small piece, part, or quantity of something”, but we also have heard bit in computing a lot. A bit is short for binary digit and is the smallest unit of data that a computer uses. It has a value of either a 0 or a 1.</p><p name="6f83" id="6f83" class="graf graf--p graf-after--p">I like to think of them as the computer world’s version of atoms.</p><figure name="3393" id="3393" class="graf graf--figure graf-after--p"><div class="aspectRatioPlaceholder is-locked" style="max-width: 650px; max-height: 366px;"><div class="aspectRatioPlaceholder-fill" style="padding-bottom: 56.3%;"></div><img class="graf-image" data-image-id="0*2wJFkhgl_IY7rOO7.jpg" data-width="650" data-height="366" data-external-src="http://transmissionsmedia.com/wp-content/uploads/2013/01/206868-binary-code-hacking.jpg" src="https://cdn-images-1.medium.com/max/800/0*2wJFkhgl_IY7rOO7.jpg"></div></figure><p name="f3d3" id="f3d3" class="graf graf--p graf-after--figure">A bit represents either high voltage* (on), which is a 1, or low voltage (off) which is a 0.</p><p name="d162" id="d162" class="graf graf--p graf-after--p"><em class="markup--em markup--p-em">*Voltage is the measurement of volts. Volts are the difference from high to low potential. Check out this </em><a href="https://www.khanacademy.org/science/physics/electric-charge-electric-force-and-voltage/electric-potential-voltage/v/voltage" data-href="https://www.khanacademy.org/science/physics/electric-charge-electric-force-and-voltage/electric-potential-voltage/v/voltage" class="markup--anchor markup--p-anchor" rel="noopener" target="_blank"><em class="markup--em markup--p-em">Khan Academy video</em></a><em class="markup--em markup--p-em"> for more information:</em></p><figure name="8d05" id="8d05" class="graf graf--figure graf-after--p"><div class="aspectRatioPlaceholder is-locked" style="max-width: 361px; max-height: 449px;"><div class="aspectRatioPlaceholder-fill" style="padding-bottom: 124.4%;"></div><img class="graf-image" data-image-id="0*39MTRUnqTP_tJbB6.png" data-width="361" data-height="449" data-external-src="http://www.wirebiters.com/wp-content/uploads/2014/01/binary-hexadecimal-decimal-chart.png" src="https://cdn-images-1.medium.com/max/800/0*39MTRUnqTP_tJbB6.png"></div></figure><p name="9901" id="9901" class="graf graf--p graf-after--figure">(Ignoring Hexadecimal for now)</p><p name="458c" id="458c" class="graf graf--p graf-after--p">Normally, we use the decimal number system (base 10 notation), but you can do calculations with binary (base two notation) digits as well!</p><p name="d0e3" id="d0e3" class="graf graf--p graf-after--p">If we have a decimal number, such as 205, it could also be expressed as two one hundreds, zero tens, and five ones. The key words being the “places” we use, ones, tens, hundreds, etc. This is what makes it base ten notation.</p><p name="26cf" id="26cf" class="graf graf--p graf-after--p">If we make those smaller and bring it down to base two, having our places be ones, twos, fours, ands eights, we would be using base two notation.</p><p name="84ad" id="84ad" class="graf graf--p graf-after--p">In binary we can use this to express digits like such:</p><pre name="85ed" id="85ed" class="graf graf--pre graf-after--p">Place:   8  4  2  1 <br>Binary:  1  0  1  1 =&gt; 11</pre><p name="f473" id="f473" class="graf graf--p graf-after--pre">In this example we are counting all the places of the ones, or 8 + 2 + 1, which equals 11!</p><h4 name="dcc0" id="dcc0" class="graf graf--h4 graf-after--p">Binary Addition</h4><p name="fe77" id="fe77" class="graf graf--p graf-after--h4">First, starting off adding two bits we get a table that looks like this:</p><pre name="c175" id="c175" class="graf graf--pre graf-after--p">0 + 0 = 0<br>0 + 1 = 1<br>1 + 0 = 1<br>1 + 1 = 10</pre><p name="63a8" id="63a8" class="graf graf--p graf-after--pre">The last one is the most important to look at, which is 1 + 1 = 1 0. The 1 in the 1 0 is carried over from the previous place.</p><p name="e9c3" id="e9c3" class="graf graf--p graf-after--p">Trying out four bit addition, we could do something such as :</p><pre name="db33" id="db33" class="graf graf--pre graf-after--p">0 1 1 1 =&gt; 7 <br>+ 0 0 1 0 =&gt; 2<br>  1   1  <br>  1 0 0 1 =&gt; 9</pre><h4 name="32c7" id="32c7" class="graf graf--h4 graf-after--pre">Binary Subtraction</h4><p name="5f02" id="5f02" class="graf graf--p graf-after--h4">Binary uses a technique called <em class="markup--em markup--p-em">Two’s Complement</em> to create negative values. To get Two’s complement of an integer you can write out the binary, invert the digits, and then add one.</p><p name="f76e" id="f76e" class="graf graf--p graf-after--p">If we wanted negative seven:</p><pre name="16b4" id="16b4" class="graf graf--pre graf-after--p">0 1 1 1 = 7</pre><pre name="0fed" id="0fed" class="graf graf--pre graf-after--pre">1 0 0 0 = the inversion of 7<br>+     1<br>1 0 0 1 =&gt; -7 / 9</pre><p name="a91e" id="a91e" class="graf graf--p graf-after--pre">You may be saying “but that is nine!”, and you’d be right. But, let’s put this in an equation.</p><pre name="065d" id="065d" class="graf graf--pre graf-after--p">0 1 1 1 = 7<br>+   ( 1 0 0 1 ) = -7 <br>     0 0 0 0</pre><p name="d610" id="d610" class="graf graf--p graf-after--pre">The signature of the integer is dependent on where it is at in the equation. Here we can see it is negative seven since it is on the bottom, and if the equation were flipped, it would be a nine. Typically, the larger number resides on top, which is how we can find the signature of the integer by learning the top integer.</p><p name="b166" id="b166" class="graf graf--p graf-after--p">The last important thing to be covered is overflow. When doing four bit, two bit, or any digit math, your answer should be the amount of digits of the math type you’re doing. Above we are doing four bit addition, even though there is a carry in that problem, and the full answer is 1 0 0 0 0, we ignore that 1 since it flows past four digits.</p><p name="dc70" id="dc70" class="graf graf--p graf-after--p graf--trailing">My current goals are to figure out the best way to learn Python for me, I’ve been trying a mixture of Codewars and reading, but none of it really sticks. I’ve been told repetitively that someday it “clicks” though. If you have any good videos or reading recommendations, send them my way!</p></div></div></section>
</section>