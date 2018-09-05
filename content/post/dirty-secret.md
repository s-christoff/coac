---
author: "Sarah Christoff"
date: 2017-10-24
linktitle: dirtysecret
title: I'll give you my Dirty Little Secret
weight: 10
---

<html><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8"><title>I’ll give you my Dirty Little Secret</title><style>
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
<h1 class="p-name">I’ll give you my Dirty Little Secret</h1>
</header>
<section data-field="body" class="e-content">
<section name="774d" class="section section--body section--first section--last"><div class="section-divider"><hr class="section-divider"></div><div class="section-content"><div class="section-inner sectionLayout--insetColumn"><h3 name="1138" id="1138" class="graf graf--h3 graf--leading graf--title">I’ll give you my Dirty Little Secret</h3><p name="89d6" id="89d6" class="graf graf--p graf-after--h3">Currently Reading: Medicine Bottles, Python Documentation</p><p name="3c01" id="3c01" class="graf graf--p graf-after--p">This week has been pretty uneventful as I’m preparing for my next surgery.</p><p name="b196" id="b196" class="graf graf--p graf-after--p">However, I finished the project given to me by my mentor!</p><p name="344f" id="344f" class="graf graf--p graf-after--p">I was to take Vault and build an application that returns the value for a key via a web interface. This would be easy if I knew a lick of Python, but I didn’t, so I started by getting familiar with Vault instead.</p><p name="29cb" id="29cb" class="graf graf--p graf-after--p">I went through Vault’s <a href="https://www.vaultproject.io/intro/getting-started/install.html" data-href="https://www.vaultproject.io/intro/getting-started/install.html" class="markup--anchor markup--p-anchor" rel="noopener" target="_blank">Getting Started</a> documentation to get comfortable with their API, creating Vault servers, and what secret management actually is.</p><figure name="82a5" id="82a5" class="graf graf--figure graf-after--p"><div class="aspectRatioPlaceholder is-locked" style="max-width: 486px; max-height: 280px;"><div class="aspectRatioPlaceholder-fill" style="padding-bottom: 57.599999999999994%;"></div><img class="graf-image" data-image-id="0*UqF18i5yRrHq_q_Z.png" data-width="486" data-height="280" data-external-src="https://tctechcrunch2011.files.wordpress.com/2015/04/graphic-key2x.png" src="https://cdn-images-1.medium.com/max/800/0*UqF18i5yRrHq_q_Z.png"></div></figure><p name="600c" id="600c" class="graf graf--p graf-after--figure">Secret management takes all your sensitive data, passwords, SSH keys, tokens, etc, and stores them in one place. This makes it so you can always have a centralized hub of your sensitive information and it’s just not written down on a post-it note somewhere.</p><p name="59b3" id="59b3" class="graf graf--p graf-after--p">Vault is a secret management tool made by our friends over at Hashicorp. It not only stores your secrets, but it will roll your keys, make it easier to revoke keys, and handle leases on keys so that they aren’t staying out partying in cyberspace forever.</p><p name="af4f" id="af4f" class="graf graf--p graf-after--p">Thanks to this blog over at <a href="https://modularsystems.io/blog/integrating-vault-python-app/" data-href="https://modularsystems.io/blog/integrating-vault-python-app/" class="markup--anchor markup--p-anchor" rel="noopener" target="_blank">modularsystems.io</a> I was able to get familiar with <a href="https://github.com/ianunruh/hvac" data-href="https://github.com/ianunruh/hvac" class="markup--anchor markup--p-anchor" rel="noopener" target="_blank">HVAC</a>, which is a Python library to make it even easier to talk to the Vault API.</p><p name="62e7" id="62e7" class="graf graf--p graf-after--p">But I need to learn Python, so I stuck to the most generic, basic library there is, the requests library. Sticking to the request library paid off, in the end I learned a lot about how Python likes to be formatted (and how much I hate it), and how rewarding finishing projects can be.</p><h4 name="1c76" id="1c76" class="graf graf--h4 graf-after--p">So, how’s it work?</h4><p name="e6f8" id="e6f8" class="graf graf--p graf-after--h4">There’s a couple files to break each function up, there is vaultinit, pyvault, and returnkey. My naming conventions aren’t great, but they’re getting better.</p><p name="b7cd" id="b7cd" class="graf graf--p graf-after--p">VaulInit takes care of initializing Vault, unsealing Vault, and getting us the client token. It also checks if Vault has already be initialized, and if so, sends you right over to the PyVault function instead.</p><p name="fa4e" id="fa4e" class="graf graf--p graf-after--p">If my small time around Linux has taught me anything it is that you do not share anything with the word ‘root’ in it. Using the root token to read and write to Vault felt dirty, so I knew there had to be another way around it. My way isn’t perfect though, and I’m not sure yet what the ideal way to do this would be. In the end, we write the client token to a super secret file (literally) so it can be accessed as needed.</p><pre name="1969" id="1969" class="graf graf--pre graf-after--p">with open(&quot;supersecrets&quot;, &quot;w&quot;) as out:<br> out.write(default_token.json()[&#39;auth&#39;][&#39;client_token&#39;])</pre><pre name="f897" id="f897" class="graf graf--pre graf-after--pre">PyVault reads the client token and uses that to generate and return our secrets. It stores the value in a value variable so that we may be able to use it elsewhere.</pre><pre name="75e1" id="75e1" class="graf graf--pre graf-after--pre">return_value = requests.get(&#39;{}/secret/foo&#39;.format(url), headers=client_token)<br> value = (return_value.json()[&#39;data&#39;][&#39;value&#39;])<br> return value</pre><pre name="dfc2" id="dfc2" class="graf graf--pre graf-after--pre">ReturnKey brings everything together VaultInit and PyVault, running them both and then outputting the value variable we made in PyVault to our browser via [Bottle](https://bottlepy.org/docs/dev/)!</pre><pre name="eed3" id="eed3" class="graf graf--pre graf-after--pre">The whole project is on [Github](https://github.com/s-christoff/pyvault) and needs a lot of refactoring.</pre><pre name="35dd" id="35dd" class="graf graf--pre graf-after--pre graf--trailing">It may be a catastrophe of code, but it&#39;s my first bit of Python.</pre></div></div></section>
</section>