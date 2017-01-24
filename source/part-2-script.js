html * { background: url() }
var html; function url(){};

/**

</tt>
<h1>Polyglot Inception<sup>4</sup></h1>
<h2>HTML = JS = CSS = JPEG</h2>

<p>
  This document is a four-fold inception and a so-called 
  "<a href="https://en.wikipedia.org/wiki/Polyglot_(computing)">Polyglot</a>" 
  – a script written in several languages. 
  It is a HTML, JavaScript, CSS and JPEG all at the same time!
</p>

<ol>
  <li>page is loaded and interpreted as an HTML file</li>
  <li>the HTML contains a with a <code>&lt;script src="#"&gt;</code> tag.</li>
  <li>the external script dynamically writes a <code>&lt;link rel="stylesheet"&gt;</code></li>
  <li>the stylesheet renders <code>background: url()</code> – the final JPEG</li>
</ol>

<h3>How does it work?</h3>

<ul>
  <li>
    Our main document starts with the signature "FF D8 FF E1" 
    that identifies the file as a JPEG with EXIF data.
  </li>
  <li>
    The following two bytes will define the header size. 
    In our case "0A 3D" will leave space for (at least) 2621 bytes. 
  </li>
  <li>
    Because the encoding is set to "ISO-8859-1", 
    the first bunch of characters are <code>ÿØÿá = {}</code>,
    which is a valid JavaScript variable declaration.
  </li>
  <li>
    The equal sign "=" is not a allowed in CSS selectors 
    but it won't cause the interpretor to stop, 
    so the following rule will be applied. 
  </li>
  <li>
    The rule <code>html * { background: url() }</code> 
    is valid CSS and JS at the same time - but to avoid 
    "undefined" errors in JavaScript, we need to 
    <a href="https://developer.mozilla.org/en-US/docs/Glossary/Hoisting">hoist</a> 
    the variable "html" and the function "url".
  </li>
  <li>
    Line and block comments make it possible 
    to apply the HTML structure and load our script.
  </li>
  <li>
    To render HTML on the first run, the "Content-Type" header
    must be "text/html". Fortunately this type will be ignored
    later, when we refer to it as a JS, CSS and JPEG.
  </li>
  <li>
    Last thing we need is a open block comment <code>/**</code>, 
    include the JPEG image data and close the comment at the end.
  </li>
</ul>

<script charset="ISO-8859-1" src="#"></script>
**/

// 
document.write('<'+'link href="#" rel="stylesheet">');

/**
<title>Polyglot Inception: HTML = CSS = JS = JPEG</title>

<meta property="og:image" content="http://incept10n.com/" />
<meta property="og:title" content="Polyglot Inception" />
<meta property="og:description" content="A four-fold document that is a HTML, CSS, JS and JPEG at the same time." />
<meta property="twitter:image" content="http://incept10n.com/" />
<meta name="twitter:card" content="summary" />
<meta name="twitter:site" content="@aemkei" />

<small>