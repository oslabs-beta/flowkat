const visFuncs = {
  renderProducers(arrProds) {
    for (let i = 0; i < arrProds.length; i++) {
      let currProducer = arrProds[i];

      let currCirc = d3.select('#svg-container')
      .append('circle')
      .attr('r', 26)
      .attr('cx', currProducer.cx)
      .attr('cy', currProducer.cy)

      if (currProducer.connections) currCirc.attr('fill', '#a7e8c2')
      else currCirc.attr('fill', 'darkgray')
    }
  },

  renderBrokers(arrBrokers) {
    for (let i = 0; i < arrBrokers.length; i++) {
      let currBroker = arrBrokers[i];

      let currSquare = d3.select('#svg-container')
      .append('rect')
      .attr('x', currBroker.x)
      .attr('y', currBroker.y)
      .attr('width', 50)
      .attr('height', 50)
      .attr('rx', 10)
      .attr('ry', 10)
      .attr('fill', '#bb8fce')
    }
  }
}

export default visFuncs;