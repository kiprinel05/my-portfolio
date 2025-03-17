"use client";

import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import { motion } from "framer-motion";

const SkillGraph = () => {
  const svgRef = useRef(null);

  useEffect(() => {
    const width = 800;
    const height = 600;

    const nodes = [
      { id: "Programming Languages", type: "main" },
      { id: "C++" },
      { id: "C#" },
      { id: "Java" },
      { id: "Kotlin" },
      { id: "JavaScript" },
      { id: "Python" },
      { id: "Web Development", type: "main" },
      { id: "HTML5" },
      { id: "CSS3" },
      { id: "Tailwind CSS" },
      { id: "Next.js" },
      { id: "Node.js" },
      { id: "Frameworks & Libraries", type: "main" },
      { id: "React" },
      { id: "Unreal Engine" },
      { id: ".NET" },
      { id: "QT" },
      { id: "Platforms & Tools", type: "main" },
      { id: "Git" },
      { id: "Linux" },
      { id: "Android" },
      { id: "Blender" },
      { id: "Adobe Photoshop" },
      { id: "Databases", type: "main" },
      { id: "PostgreSQL" },
    ];

    const links = [
      { source: "Programming Languages", target: "C++" },
      { source: "Programming Languages", target: "C#" },
      { source: "Programming Languages", target: "Java" },
      { source: "Programming Languages", target: "Kotlin" },
      { source: "Programming Languages", target: "JavaScript" },
      { source: "Programming Languages", target: "Python" },
      { source: "Web Development", target: "HTML5" },
      { source: "Web Development", target: "CSS3" },
      { source: "Web Development", target: "Tailwind CSS" },
      { source: "Web Development", target: "Next.js" },
      { source: "Web Development", target: "Node.js" },
      { source: "Frameworks & Libraries", target: "React" },
      { source: "Frameworks & Libraries", target: "Unreal Engine" },
      { source: "Frameworks & Libraries", target: ".NET" },
      { source: "Frameworks & Libraries", target: "QT" },
      { source: "Platforms & Tools", target: "Git" },
      { source: "Platforms & Tools", target: "Linux" },
      { source: "Platforms & Tools", target: "Android" },
      { source: "Platforms & Tools", target: "Blender" },
      { source: "Platforms & Tools", target: "Adobe Photoshop" },
      { source: "Databases", target: "PostgreSQL" },
    ];

    const svg = d3
      .select(svgRef.current)
      .attr("viewBox", `0 0 ${width} ${height}`)
      .style("width", "100%")
      .style("height", "100%")
      .style("background", "#0f172a")
      .style("border-radius", "1rem");

    const simulation = d3
      .forceSimulation(nodes)
      .force(
        "link",
        d3
          .forceLink(links)
          .id((d) => d.id)
          .distance(50)
      )
      .force("charge", d3.forceManyBody().strength(0))
      .force("center", d3.forceCenter(width / 2, height / 2))
      .force("collide", d3.forceCollide().radius(30))
      .force("bounds", () => {
        nodes.forEach((node) => {
          node.x = Math.max(30, Math.min(width - 30, node.x));
          node.y = Math.max(30, Math.min(height - 30, node.y));
        });
      });

    const link = svg
      .selectAll("line")
      .data(links)
      .enter()
      .append("line")
      .attr("stroke", "#94a3b8")
      .attr("stroke-width", 2)
      .attr("opacity", 0.5);

    const node = svg
      .selectAll("circle")
      .data(nodes)
      .enter()
      .append("circle")
      .attr("r", (d) => (d.type === "main" ? 15 : 10))
      .attr("fill", (d) => (d.type === "main" ? "#f43f5e" : "#38bdf8"))
      .attr("stroke", "#1e40af")
      .attr("stroke-width", 2)
      .style("cursor", "pointer")
      .call(drag(simulation))
      .on("mouseover", function () {
        d3.select(this)
          .transition()
          .duration(200)
          .attr("r", 20)
          .attr("fill", "#0ea5e9");
      })
      .on("mouseout", function () {
        d3.select(this)
          .transition()
          .duration(200)
          .attr("r", (d) => (d.type === "main" ? 15 : 10))
          .attr("fill", (d) => (d.type === "main" ? "#f43f5e" : "#38bdf8"));
      });

    const text = svg
      .selectAll("text")
      .data(nodes)
      .enter()
      .append("text")
      .attr("fill", "white")
      .attr("font-size", "7px")
      .attr("text-anchor", "middle")
      .attr("dy", 4)
      .style("font-family", "sans-serif")
      .text((d) => d.id);

    simulation.on("tick", () => {
      link
        .attr("x1", (d) => d.source.x)
        .attr("y1", (d) => d.source.y)
        .attr("x2", (d) => d.target.x)
        .attr("y2", (d) => d.target.y);

      node.attr("cx", (d) => d.x).attr("cy", (d) => d.y);
      text.attr("x", (d) => d.x).attr("y", (d) => d.y);
    });
  }, []);

  const drag = (simulation) => {
    function dragstarted(event, d) {
      if (!event.active) simulation.alphaTarget(0.3).restart();
      d.fx = d.x;
      d.fy = d.y;
    }
    function dragged(event, d) {
      d.fx = event.x;
      d.fy = event.y;
    }
    function dragended(event, d) {
      if (!event.active) simulation.alphaTarget(0);
      d.fx = null;
      d.fy = null;
    }
    return d3
      .drag()
      .on("start", dragstarted)
      .on("drag", dragged)
      .on("end", dragended);
  };

  return (
    <motion.svg
      ref={svgRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    />
  );
};

export default SkillGraph;
