# Interactive Graphs Documentation

## Overview

Your portfolio now supports **interactive graphs** using Plotly.js. You can add interactive visualizations to any article in your `src/content/projects/` directory.

## How to Use

### 1. Convert Markdown to MDX

To use interactive components, your article file must use the `.mdx` extension (instead of `.md`).

### 2. Import Graph Components

Add imports at the top of your MDX file (after the frontmatter):

```mdx
---
title: "Your Article Title"
# ... other frontmatter
---

import YourGraphComponent from "../../components/graphs/YourGraphComponent.astro";

## Your Content

<YourGraphComponent />
```

### 3. Create Custom Graph Components

Create a new component in `src/components/graphs/`:

```astro
---
import PlotlyGraph from "../PlotlyGraph.astro";

const data = [
  {
    x: [1, 2, 3, 4, 5],
    y: [1, 4, 9, 16, 25],
    mode: "lines+markers",
    name: "My Data",
    line: { color: "#1d4ed8", width: 3 },
  },
];

const layout = {
  title: "My Graph Title",
  xaxis: { title: "X Axis" },
  yaxis: { title: "Y Axis" },
};
---

<PlotlyGraph id="my-unique-graph-id" data={data} layout={layout} />
```

## Example Graphs Included

Your H-RSSM article now has three interactive graphs:

1. **CapacityCurve** - MSE vs latent dimension comparison
2. **GradientAttenuation** - Dual-axis plot with gradient scaling
3. **LinearProbes** - Multiple probe accuracy traces

## Plotly.js Features

All graphs support:
- ✅ **Hover tooltips** - See exact values on hover
- ✅ **Zoom & pan** - Click and drag to zoom, double-click to reset
- ✅ **Download** - Save as PNG via the toolbar
- ✅ **Responsive** - Auto-resize on screen size changes

## Graph Customization

### Data Format

```javascript
const data = [
  {
    x: [...],           // X values
    y: [...],           // Y values
    mode: "lines+markers", // or "lines", "markers"
    name: "Series Name",
    line: {
      color: "#1d4ed8",
      width: 3,
      dash: "solid"    // or "dash", "dot"
    },
    marker: {
      size: 10,
      symbol: "circle" // or "square", "diamond"
    },
  },
];
```

### Layout Options

```javascript
const layout = {
  title: "Graph Title",
  xaxis: {
    title: "X Axis Label",
    type: "linear",    // or "log"
  },
  yaxis: {
    title: "Y Axis Label",
  },
  hovermode: "x unified", // Shows all series at once
  legend: {
    x: 0.7,
    y: 0.95,
  },
};
```

### Dual-Axis Graphs

```javascript
const data = [
  {
    x: [...],
    y: [...],
    yaxis: "y",  // Left axis
  },
  {
    x: [...],
    y: [...],
    yaxis: "y2", // Right axis
  },
];

const layout = {
  yaxis: {
    title: "Left Axis",
  },
  yaxis2: {
    title: "Right Axis",
    overlaying: "y",
    side: "right",
  },
};
```

## Advanced: 3D Plots

Plotly supports 3D visualizations:

```javascript
const data = [{
  type: "scatter3d",
  mode: "markers",
  x: [...],
  y: [...],
  z: [...],
}];
```

## More Resources

- [Plotly.js Documentation](https://plotly.com/javascript/)
- [Plotly Chart Types](https://plotly.com/javascript/basic-charts/)
- Component location: `src/components/PlotlyGraph.astro`
- Example graphs: `src/components/graphs/`

## Tips

- Each graph needs a **unique ID**
- Use your accent color (`#1d4ed8`) for consistency
- Keep data arrays manageable (< 10,000 points for performance)
- Test in dev mode: `npm run dev`
