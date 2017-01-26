inception * { background: url() }
var inception; function url(){};
document.write('<'+'link href="#" rel="stylesheet">');
// <script charset="ISO-8859-1" src="#"></script>
/** </tt>

<!-- HTML -->

<h1>Polyglot Inception<sup>4</sup></h1>
<h2>HTML = JS = CSS = JPEG</h2>

<p>
  This document a four-fold inception and a so-called "<a href="https://en.wikipedia.org/wiki/Polyglot_(computing)">Polyglot</a>" - a page written in several formats. It is a HTML, JavaScript, CSS and JPEG all at the same time!
</p>

<!-- Injected Image -->

<inception><pre>
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
</pre></inception>

<h3>Levels of Inception</h3>

<ol>
  <li>page is loaded and interpreted as an HTML file</li>
  <li>HTML contains <tt>&lt;script src="#"&gt;</tt> tag.</li>
  <li>script writes <tt>&lt;link href="#" rel="stylesheet"&gt;</tt></li>
  <li>stylesheet renders <tt>background: url()</tt> - the final JPEG</li>
</ol>

<p>This project was created by Martin Kleppe, aka <a href="http://twitter.com/aemkei">@aemkei</a>. For other creative hacks, visit <a href="http://aem1k.com/">aem1k.com</a>.</p>

<h3>How Does it Work?</h3>

<ul>
  <li>View the page source and watch the network panel, to see what is going on.</li>
  <li>The document starts with the HEX signature "FF D8 FF E1" that identifies the file as a JPEG with EXIF data.</li>
  <li>The following two bytes define the header size. In our case "0A 3D" leaves space for 2621 bytes. </li>
  <li>Because the encoding was set to "ISO-8859-1", the first characters are <tt>ÿØÿá = {}</tt>, which is a valid JavaScript expression.</li>
  <li>The equal sign is not a allowed in CSS selectors but it won't cause the interpretor to stop. </li>
  <li>The rule <tt>inception * { background: url() }</tt> is valid CSS and JS at the same time.</li>
  <li>To avoid "undefined" errors in JavaScript, we need to hoist the variable "inception" and the function "url".</li>
  <li>When using <tt>href="#"</tt>, <tt>src="#"</tt> or <tt>url()</tt> it will point to the same ressource. </li>
  <li>Line and block comments make it possible to apply the HTML structure and load our script.</li>
  <li>To render HTML on the first run, the "Content-Type" header must be "text/html". Fortunately this type will be ignored later, when we refer to it as a JS, CSS and JPEG.</li>
  <li>Last thing we need is to include the JPEG image data and close the block comment at the end of the file.</li>
</ul>

<h3>Related Projects</h3>

<ul>
  <li><a href="http://blog.portswigger.net/2016/12/bypassing-csp-using-polyglot-jpegs.html">PortSwigger: JPEG+JS</a></li>
  <li><a href="http://www.thinkfu.com/blog/gifjavascript-polyglots">Thinkfu: GIF+JS</a></li>
  <li><a href="http://lcamtuf.coredump.cx/squirrel/">Squirrel: HTML+JPEG</a></li>
</ul>  

<!-- Meta Data -->

<title>Polyglot Inception: HTML = JS = CSS = JPEG</title>

<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="twitter:site" content="@aemkei" />
<meta name="twitter:card" content="summary" />
<meta property="og:image" content="http://incept10n.com/" />
<meta property="twitter:image" content="http://incept10n.com/" />
<meta property="og:title" content="Polyglot Inception" />
<meta property="og:description" content="A four-fold document that is an HTML, JS, CSS and JPEG at the same time. By @aemkei" />

<h3>Image Data:</h3>

<sub>

<!-- Image Data -->