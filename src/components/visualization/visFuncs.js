const visFuncs = {
  calcXCoords(nodeObj, svgWidthPix) {
    console.log('HERE1', nodeObj);
    console.log('HERE2', svgWidthPix);
    const numOfNodes = Object.keys(nodeObj).length; //number of nodes in the object
    const nodesEachSide = Math.floor(numOfNodes / 2)
    const centerX = Math.floor(svgWidthPix / 2);
    const nodeHorizontalSpacing = 125;
    
    let currX = centerX - (nodeHorizontalSpacing * nodesEachSide);
    if (numOfNodes % 2 === 0) currX = currX - Math.floor(currX / 2);
    for (const name of Object.keys(nodeObj)) {
      if (numOfNodes % 2 !== 0) {
        nodeObj[name].cx = currX;
        currX += nodeHorizontalSpacing;
      } else {
        console.log('numOfNodes even!')
        nodeObj[name].cx = currX;
        currX += nodeHorizontalSpacing;
      }
    }

    console.log('End result of calcXCoords: ', nodeObj);
    return nodeObj;
  },

  renderProds(prodsObj) {
    Object.keys(prodsObj).forEach(prodKey => {
      let currProducer = prodsObj[prodKey];

      let currCirc = d3.select('#svg-container')
      .append('circle')
      .attr('r', 26)
      .attr('cx', currProducer.cx)
      .attr('cy', 50)

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
      .attr('y', 290)
      .attr('width', 50)
      .attr('height', 50)
      .attr('rx', 10)
      .attr('ry', 10)
      .attr('fill', '#bb8fce')
    })
  },

  renderCons(consObj) {
    Object.keys(consObj).forEach(conKey => {
      let currConsumer = consObj[conKey];

      let currCirc = d3.select('#svg-container')
      .append('circle')
      .attr('r', 26)
      .attr('cx', currConsumer.cx)
      .attr('cy', 600)

      if (currConsumer.connections) currCirc.attr('fill', '#a7e8c2')
      else currCirc.attr('fill', 'darkgray')
    })
  },

  renderPipes(fromArr, toArr) {

  }
}

export default visFuncs;