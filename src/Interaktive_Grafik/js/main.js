const width = 800,
    height = 800,
    maxRadius = (Math.min(width, height) / 2) - 50;

const formatNumber = d3.format(',d');

const x = d3.scaleLinear()
    .range([0, 2 * Math.PI])
    .clamp(true);

const y = d3.scaleSqrt()
    .range([maxRadius*.1, maxRadius]);

const color = d3.scaleOrdinal(d3.schemeCategory20);

const partition = d3.partition();
