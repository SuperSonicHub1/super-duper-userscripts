# super-duper-userscripts
Tampermonkey scripts I've created for my sanity and amusement.

You can thank GitHub for the *wacky* repository name by the way.

> Great repository names are short and memorable. Need inspiration? How about **super-duper-memory**?

**NOTE**: I'm a lazy programmer, and so this README will slowly fall out of step with its
contents. All scripts here are short, self explanatory, and require little action
on the part of the user, so I doubt they all need an explanation. If you're confused about
something, leave an issue and I'll explain it.

## letsblock.it "Self-hosting"

[letsblock.it](https://github.com/letsblockit/letsblockit) was a great community tool for sharing parametric blocklists.
I found it especially useful for its YouTube features.
Over the summer, the project was shut down by its maintainers, which was a shame, but they left behind a (mostly) easy-to-use tool for still making use of people's templates on the command line.
I use GH Actions to generate the blocklist whenever I update my filters, and then use this repo itself as the host so I can easily access it from my browsers.

<img
  alt="Icon for VS Marketplace Consistent Copy"
  src="https://visualstudio.microsoft.com/wp-content/uploads/2019/06/BrandVisualStudioWin2019-3.svg"
  width="48">

## VS Marketplace Consistent Copy
The majority of the time, the VS Marketplace's "Copy" button simply doesn't work, so I fixed it! Made with Tampermonkey.

To see if the copy command worked, check your dev tools' console. I could modify it to also shoot a HTML5 notification, but that sounds like it would become annoying very quickly.

![Icon for Functional Ctrl Commands on nano-editor.org](https://www.nano-editor.org/favicon.ico)

## Functional Ctrl Commands on nano-editor.org
Make the Nano Editor website's dummy shortcuts functional! Well, some of them.

`^N`, `^W`, and `^T` don't function, at least on Chrome anyway, and therefore are commented out in the code.

![Icon for Media Session Support on KHInsider Downloads](https://downloads.khinsider.com/images/favicon.ico)

## Media Session Support on KHInsider Downloads
Adds Media Session support to the world's largest host of VGM.

For more information on the Media Session API, read web.dev's article on it: https://web.dev/media-session/
