[![License](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://github.com/UCyborg/uBlock-for-firefox-legacy/blob/master/LICENSE.txt)

*** 

<h1 align="center">
<sub>
<img  src="https://raw.githubusercontent.com/UCyborg/uBlock-for-firefox-legacy/master/doc/img/icon38@2x.png"
      height="38"
      width="38">
</sub>
uBlockUXP
</h1>
<p align="center">
<sup> <!-- Pronounciation -->
      pronounced <i>you-block origin</i> (<code>/ˈjuːˌblɒk/</code>) — <i>you</i> decide what enters your browser.
</sup>
<br>
<sup> <!-- Languages -->
      <img src="https://raw.githubusercontent.com/UCyborg/uBlock-for-firefox-legacy/master/doc/img/languageicon-36.png" width="18" height="18">
      <sup>
            English,
            <a href="https://github.com/fang5566/uBlock/blob/master/README.md#ublock-origin">Chinese (中文)</a>,
            <a href="https://github.com/delightbot/uBlock/blob/master/README.md#ublock-origin">Korean (한국어)</a>,
            <a href="https://github.com/ialexsilva/uBlock/blob/master/README.md#ublock-origin">Português (Brasil)</a>
      </sup>
</sup>
<br>
<br>
<sup><a href="https://github.com/gorhill/uBlock/wiki/uBlock-Origin-is-completely-unrelated-to-the-web-site-ublock.org"><b>BEWARE!</b> uBlock Origin is (and has always been) COMPLETELY UNRELATED to the web site <code>ublock.org</code></a>.</sup>
</p>

***

**An efficient blocker add-on for various browsers. Fast, potent, and lean.**

uBlockUXP is **NOT** an "ad blocker": [it is a wide-spectrum blocker](https://github.com/gorhill/uBlock/wiki/Blocking-mode) -- which happens to be able to function as a mere "ad blocker". The default behavior of uBlockUXP when newly installed is to block ads, trackers and malware sites -- through [_EasyList_](https://easylist.github.io/#easylist), [_EasyPrivacy_](https://easylist.github.io/#easyprivacy), [_Peter Lowe’s ad/tracking/malware servers_](https://pgl.yoyo.org/adservers/policy.php), various lists of [malware](http://www.malwaredomainlist.com/) [sites](http://www.malwaredomains.com/), and uBlock Origin's [own filter lists](https://github.com/uBlockOrigin/uAssets/tree/master/filters).

* [Documentation](#documentation)
* [Purpose & General Info](#philosophy)
* [Performance and Efficiency](#performance)
  * [Memory](#memory)
  * [CPU](#cpu)
  * [Blocking](#blocking)
  * [Quick tests](#quick-tests)
* [Installation](#installation)
  * [Chromium](#chromium)
  * [Firefox](#firefox--firefox-for-android)
  * [Microsoft Edge](#microsoft-edge)
  - [Safari (macOS)](#safari-macos)
* [Release History](#release-history)
* [Privacy policy](https://github.com/gorhill/uBlock/wiki/Privacy-policy)
* [Wiki](https://github.com/gorhill/uBlock/wiki)

## Documentation

 Basic mode | Advanced-user mode
:----------:|:------------------:
[Popup user interface](https://github.com/gorhill/uBlock/wiki/Quick-guide:-popup-user-interface) | [A point-and-click firewall which can be configured on a per-site basis](https://github.com/gorhill/uBlock/wiki/Dynamic-filtering:-quick-guide) 
<a href="https://github.com/gorhill/uBlock/wiki/Quick-guide:-popup-user-interface"><img src="https://user-images.githubusercontent.com/585534/38453883-09446c74-3a2b-11e8-9440-dbeb319b0f28.png" /></a><br><sup>.<br>.</sup> | <a href="https://github.com/gorhill/uBlock/wiki/Dynamic-filtering:-quick-guide"><img src="https://user-images.githubusercontent.com/585534/38453884-0bb2ac8c-3a2b-11e8-942a-16071cc8f855.png" /></a><br><sup>Configure as you wish:<br>picture shows 3rd-party scripts and frames blocked by default everywhere</sup>

Visit the [uBlock Origin's wiki](https://github.com/gorhill/uBlock/wiki) for documentation.

For support/questions/help, there is [/r/uBlockOrigin](https://www.reddit.com/r/uBlockOrigin/) on Reddit.

## Philosophy

uBlockUXP is not an *ad blocker*; it's a general-purpose blocker. uBlockUXP blocks ads through its support of the [Adblock Plus filter syntax](https://adblockplus.org/en/filters). uBlock Origin [extends](https://github.com/gorhill/uBlock/wiki/Filter-syntax-extensions) the syntax and is designed to work with custom rules and filters. Furthermore, advanced mode allows uBlock Origin to work in [default-deny mode](https://github.com/gorhill/uBlock/wiki/Dynamic-filtering:-default-deny), which mode will cause [all 3rd-party network requests](https://requestpolicycontinued.github.io/#what-are-cross-site-requests) to be blocked by default, unless allowed by the user.

That said, it's important to note that using a blocker is **NOT** [theft](https://twitter.com/LeaVerou/status/518154828166725632). Don't fall for this creepy idea. The _ultimate_ logical consequence of `blocking = theft` is the criminalisation of the inalienable right to privacy.

Ads, "unintrusive" or not, are just the visible portions of privacy-invading apparatus entering your browser when you visit most sites nowadays. **uBlock Origin's main goal is to help users neutralize such privacy-invading apparatus** — in a way that welcomes those users who don't wish to use more technical, involved means (such as [µMatrix](https://github.com/gorhill/uMatrix)).

_EasyList_, _Peter Lowe's Adservers_, _EasyPrivacy_ and _Malware domains_ are enabled by default when you install uBlock Origin. Many more lists are readily available to block trackers, analytics, and more. Hosts files are also supported.

Once you install uBlock Origin, you may easily un-select any of the pre-selected filter lists if you think uBlock Origin blocks too much. For reference, Adblock Plus installs with only _EasyList_ enabled by default.

## Performance

#### Memory

<div align="center">
On average, uBlock Origin does make your browser run leaner. <sup>[1]</sup><br><br>

Chromium<br>
<img src="https://cloud.githubusercontent.com/assets/585534/10074141/15f04128-629c-11e5-9155-177fd4909083.png" /><br><br>

Firefox<br>
<img src="https://cloud.githubusercontent.com/assets/585534/10074130/0577118c-629c-11e5-9902-bf367c6a96c3.png" /><br><br>

</div>

<sup>[1] Details of the benchmark available at <a href="https://github.com/gorhill/uBlock/wiki/Firefox-version:-benchmarking-memory-footprint">Firefox version: benchmarking memory footprint</a>.</sup><br>

#### CPU

<p align="center">
uBlock Origin is also easy on the CPU<br>
<img src="https://raw.githubusercontent.com/UCyborg/uBlock-for-firefox-legacy/master/doc/benchmarks/cpu-usage-overall-chart-20141226.png" /><br>
<sup>Details of the benchmark available in <a href="https://github.com/UCyborg/uBlock-for-firefox-legacy/blob/master/doc/benchmarks/cpu-usage-overall-20141226.ods">this LibreOffice spreadsheet</a>.</sup>
</p>

#### Blocking

<p align="center">
Being lean and efficient doesn't mean blocking less<br>
<img src="https://raw.githubusercontent.com/UCyborg/uBlock-for-firefox-legacy/master/doc/benchmarks/privex-201502-16.png" /><br>
<sup>For details of benchmark, see 
<a href="https://github.com/gorhill/uBlock/wiki/uBlock-and-others%3A-Blocking-ads%2C-trackers%2C-malwares">uBlock Origin and others: Blocking ads, trackers, malwares</a>.
</p>

## Installation

Feel free to read [about the extension's required permissions](https://github.com/gorhill/uBlock/wiki/Permissions).


#### Note for compatibility browsers

To benefit from uBlockUXP higher efficiency, it's advised that you don't use other inefficient blockers at the same time (such as AdBlock or Adblock Plus). uBlockUXP will do [as well or better](#blocking) than most popular ad blockers. Other blockers can also prevent uBlockUXP privacy or anti-blocker features from working properly. It's compatibilty for Palemoon(http://palemoon.org) and Basilisk(https://www.basilisk-browser.org) Browsers. This addon use XUL continues standard 
as UXP.

#### Deploying

Below is documentation to assist administrators in deploying uBlock Origin:

- [Deploying uBlock Origin](https://github.com/gorhill/uBlock/wiki/Deploying-uBlock-Origin)
    - Firefox: [Deploying uBlock Origin for Firefox with CCK2 and Group Policy](http://decentsecurity.com/ublock-for-firefox-deployment/) (external)
    - Google Chrome: [Managing Google Chrome with adblocking and security](https://decentsecurity.com/ublock-for-google-chrome-deployment/) (external)

## Release History

See the [releases pages](https://github.com/UCyborg/uBlock-for-firefox-legacy/releases) for a history of releases and highlights for each release.

## About

[uBlock Origin's manifesto](MANIFESTO.md).

Free. Open source. For users by users. No donations sought.

Without the preset lists of filters, this extension is nothing. So if ever you
really do want to contribute something, think about the people working hard
to maintain the filter lists you are using, which were made available to use by
all for free.

You can contribute by helping translate uBlock Origin [on Crowdin](https://crowdin.net/project/ublock).

## License

[GPLv3](https://github.com/UCyborg/uBlock-for-firefox-legacy/blob/master/LICENSE.txt).
