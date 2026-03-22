---
title: "Hyperbolic Recurrent State-Space Model (H-RSSM)"
description: "Personal research on hyperbolic latent spaces for world models and variational optimization behavior."
publishedAt: "2026-03-01"
coverImage: "/images/projects/placeholder-cover.svg"
coverImageAlt: "H-RSSM project cover"
skills:
  - "World Models"
  - "Geometric Deep Learning"
  - "Variational Inference"
  - "Hyperbolic Geometry"
---

## Project overview

Introduced the horospherical Gaussian, a distribution family on hyperbolic space with closed-form KL divergence in O(d), designed to support ELBO-based training of hyperbolic world models at computational cost comparable to Euclidean baselines.

## Story and approach

Trained sequential world models (RSSM/GRU) with hyperbolic versus Euclidean latent spaces on synthetic tree-structured MDPs. Through dimensional sweep and linear probing, identified three distinct variational optimization failure regimes and observed an empirical crossover around d2* approximately 7. Resume status: ongoing.

Validated analytic expressions against Monte Carlo estimates with reported error below 0.02%.

## Images and media

![Placeholder project figure](/images/projects/placeholder-cover.svg)

Tip: place images in public/images/projects and reference them like:

![Project screenshot](/images/projects/project-1-screenshot.png)

## Next steps

[Placeholder] Add additional experiments, ablations, and updated results as this ongoing research progresses.
