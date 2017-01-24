html * { background: url() }
html * { opacity: 0.95 }
var html; function url(){};
document.write('<'+'link href="#" rel="stylesheet">');
// <script charset="ISO-8859-1" src="#"></script>

/**

</tt>

<!-- HTML -->

<h1>Polyglot Inception<sup>4</sup></h1>
<h2>HTML = JS = CSS = JPEG</h2>

<p>
  This document is a four-fold inception and a so-called 
  "<a href="https://en.wikipedia.org/wiki/Polyglot_(computing)">Polyglot</a>" 
  – a script written in several languages. 
  It is a HTML, JavaScript, CSS and JPEG all at the same time!
</p>

<h3>Levels of Inception</h3>

<ol>
  <li>page is loaded and interpreted as an HTML file</li>
  <li>the HTML contains a with a <code>&lt;script src="#"&gt;</code> tag.</li>
  <li>the external script dynamically writes a <code>&lt;link rel="stylesheet"&gt;</code></li>
  <li>the stylesheet renders <code>background: url()</code> – the final JPEG</li>
</ol>

<p>
  This project was created by Martin Kleppe, aka <a href="http://twitter.com/aemkei">@aemkei</a>. For other creative hacks, visit <a href="http://aem1k.com/">aem1k.com</a>.
</p>

<h3>How Does it Work?</h3>

<ul>
  <li>
    You should view the page source and open the network panel, 
    to see what is going on.
  </li>
  <li>
    Our main document starts with the signature "FF D8 FF E1" 
    that identifies the file as a JPEG with EXIF data.
  </li>
  <li>
    The following two bytes will define the header size. 
    In our case "0A 3D" leaves space for (at least) 2621 bytes. 
  </li>
  <li>
    Because the encoding is set to "ISO-8859-1", 
    the first bunch of characters are <code>ÿØÿá = {}</code>,
    which is a valid JavaScript variable declaration.
  </li>
  <li>
    The equal sign "=" is not a allowed in CSS selectors 
    but it won't cause the interpretor to stop, 
    so the following rules will be applied. 
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
    Last thing we need is to include the JPEG image data and 
    close the block comment at the end of the file.
  </li>
</ul>

<h3>Related Projects</h3>

<ul>
  <li><a href="http://blog.portswigger.net/2016/12/bypassing-csp-using-polyglot-jpegs.html">PortSwigger: JPEG+JS</a></li>
  <li><a href="http://www.thinkfu.com/blog/gifjavascript-polyglots">Thinkfu: GIF+JS</a></li>
  <li><a href="http://lcamtuf.coredump.cx/squirrel/">Squirrel: HTML+JPEG</a></li>
</ul>  

<!-- Meta Data -->

<title>Polyglot Inception: HTML = JS = CSS = JPEG</title>

<meta property="og:image" content="http://incept10n.com/" />
<meta property="og:title" content="Polyglot Inception" />
<meta property="og:description" content="A four-fold document that is an HTML, JS, CSS and JPEG at the same time. By @aemkei" />
<meta property="twitter:image" content="http://incept10n.com/" />
<meta name="twitter:card" content="summary" />
<meta name="twitter:site" content="@aemkei" />

<sub>

<!-- Image Data -->