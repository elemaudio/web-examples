# Planets

A real-time generative melody played through a simple sine tone bell synthesizer into
a lush reverb. The synth output is measured by an oscilloscope, which is then plotted as
Lissajous curves wrapped around the surface of a slowly rotating sphere.

## Live Demo

* [https://elemaudio.github.io/web-examples/](https://elemaudio.github.io/web-examples/)

## Running locally

Running this example locally requires the `@elemaudio/core` and `@elemaudio/srvb` packages, which are both
privately hosted in the Elementary Audio private registry. If you already have a license, you
can skip to the following instructions, otherwise you can purchase a license by visiting [our website](https://www.elementary.audio/pricing).

This app is a simple web app built with [Parcel](https://parceljs.org/), which means getting
up and running is easy:

* Clone the repository
* `cd planets && npm install`
* `npm start` to run the local development server
* `npm run build` to bundle production assets
