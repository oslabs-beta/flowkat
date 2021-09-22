//WILL NOT BE USING; DELETE EVENTUALLY

// const visFuncs = {
//   calcXCoords(nodeObj, svgWidthPix, type) {
//     console.log('HERE1', nodeObj);
//     console.log('HERE2', svgWidthPix);
//     const numOfNodes = Object.keys(nodeObj).length; //number of nodes in the object
//     const nodesEachSide = Math.floor(numOfNodes / 2)
//     const centerX = Math.floor(svgWidthPix / 2);
//     const nodeHorizontalSpacing = 125;
    
//     let currX = centerX - (nodeHorizontalSpacing * nodesEachSide);

//     if (numOfNodes % 2 === 0) currX = currX - Math.floor(currX / 2);

//     if (type === 'producer' || type === 'consumer') {
//       for (const name of Object.keys(nodeObj)) {
//         if (numOfNodes % 2 !== 0) {
//           nodeObj[name].cx = currX;
//           currX += nodeHorizontalSpacing;
//         } else {
//           console.log('numOfNodes even!')
//           nodeObj[name].cx = currX;
//           currX += nodeHorizontalSpacing;
//         }
//       }
//     } else if (type === 'broker') {
//       currX += 210;
//       for (const name of Object.keys(nodeObj)) {
//         if (numOfNodes % 2 !== 0) {
//           nodeObj[name].x = currX;
//           currX += nodeHorizontalSpacing;
//         } else {
//           console.log('numOfNodes even!')
//           nodeObj[name].x = currX;
//           currX += nodeHorizontalSpacing;
//         }
//       }
//     }

//     console.log('End result of calcXCoords: ', nodeObj);
//     return nodeObj;
//   },

//   renderProds(prodsObj) {
//     Object.keys(prodsObj).forEach(prodKey => {
//       let currProducer = prodsObj[prodKey];

//       let currCirc = d3.select('#svg-container')
//       .append('circle')
//       .attr('r', 26)
//       .attr('cx', currProducer.cx)
//       .attr('cy', 50)

//       if (currProducer.connections) currCirc.attr('fill', '#79B4B7')
//       else currCirc.attr('fill', 'darkgray')
//     })
//   },

//   renderBrokers(brokersObj) {
//     Object.keys(brokersObj).forEach(brokerKey => {
//       let currBroker = brokersObj[brokerKey];

//       let currSquare = d3.select('#svg-container')
//       .append('rect')
//       .attr('x', currBroker.x)
//       .attr('y', 290)
//       .attr('width', 50)
//       .attr('height', 50)
//       .attr('rx', 10)
//       .attr('ry', 10)
//       .attr('fill', '#bb8fce')
//     })
//   },

//   renderCons(consObj) {
//     Object.keys(consObj).forEach(conKey => {
//       let currConsumer = consObj[conKey];

//       let currCirc = d3.select('#svg-container')
//       .append('circle')
//       .attr('r', 26)
//       .attr('cx', currConsumer.cx)
//       .attr('cy', 600)

//       currCirc.attr('fill', '#79B4B7');
//     })
//   },

//   renderPipes(state) {
//     for (const producerName of Object.keys(state.producers)) {
//       let producerObj = state.producers[producerName];
//       let targetBrokers = producerObj.connections;

//       console.log(targetBrokers);
      
//       targetBrokers.forEach(brokerName => {
//         console.log(brokerName);
//         let currPipe = d3.select('#svg-container')
//         .append('line')
//         .attr('x1', producerObj.cx)
//         .attr('y1', producerObj.cy)
//         .attr('x2', state.brokers[brokerName]['x'] + 20) //add 20 pix offset to account for center of square
//         .attr('y2', state.brokers[brokerName]['y'] + 20)
//         .attr('stroke', '#F46C99')
//         .attr('stroke-width', 12)
//         .attr('opacity', 0.5)
//       })
//     }

//     for (const brokerName of Object.keys(state.brokers)) {
//       let brokerObj = state.brokers[brokerName];
//       let targetConsumers = brokerObj.connections;

//       console.log(targetConsumers);
      
//       targetConsumers.forEach(consumerName => {
//         console.log(consumerName);
//         let currPipe = d3.select('#svg-container')
//         .append('line')
//         .attr('x1', brokerObj.x + 20)
//         .attr('y1', brokerObj.y + 20)
//         .attr('x2', state.consumers[consumerName]['cx']) //add 20 pix offset to account for center of square
//         .attr('y2', state.consumers[consumerName]['cy'])
//         .attr('stroke', '#F46C99')
//         .attr('stroke-width', 12)
//         .attr('opacity', 0.5)
//       })
//     }
//   },
// }

// export default visFuncs;