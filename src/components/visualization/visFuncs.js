const visFuncs = {
  renderProsCons(proConsObj) {
    Object.keys(proConsObj).forEach(proConKey => {
      let currProducer = proConsObj[proConKey];

      let currCirc = d3.select('#svg-container')
      .append('circle')
      .attr('r', 26)
      .attr('cx', currProducer.cx)
      .attr('cy', currProducer.cy)

      if (currProducer.connections) currCirc.attr('fill', '#a7e8c2')
      else currCirc.attr('fill', 'darkgray')
    })
  },

  renderBrokers(brokersObj) {
    Object.keys(brokersObj).forEach(brokerKey => {
      let currBroker = brokersObj[brokerKey];

      let currSquare = d3.select('#svg-container')
      .append('rect')
      .attr('x', currBroker.x)
      .attr('y', currBroker.y)
      .attr('width', 50)
      .attr('height', 50)
      .attr('rx', 10)
      .attr('ry', 10)
      .attr('fill', '#bb8fce')
    })
  },

  renderPipes(fromArr, toArr) {

  }
}

export default visFuncs;