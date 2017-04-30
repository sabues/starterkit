/* This file contains references to the vendor libraries
we'reusing in this project. This is used by weback in the production build only.
A separatebundle for vendor code is useful since it's unlikely to change as often
as the application code. So all the libraries we reference
here will be written to vendor.js so they can be
cached until one of them change. So basically, this aviods customers having
to download a huge JS file anytime a line
of code changes. They jonly have to download vendor.js when
a vendor library changes which should be less frequent.
Any files that aren't referenced here will be bundled into
main.js for the prduction build.
*/

/* eslint-disable no-unused-vars */

import fetch from 'whatwg-fetch';
