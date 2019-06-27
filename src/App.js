import React, { Component, Suspense } from 'react';
import './App.css';
import Particles from 'react-particles-js';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Rank from './components/Rank/Rank';
import Chart from './components/Chart/Chart';
import Switch from './components/Switch/Switch';
import dataForChart from './data.json';
import OurService from './components/OurService/OurService';
import DataSource from './components/DataSource/DataSource';
import Footer from './components/Footer/Footer';

const particlesOptions = {
	particles: {
		number: {
			value: 120,
			density: {
				enable: true,
				value_area: 1500
			}
		}
	}
};



//update variable
let currentCatIndexGlobal = 0;
const backgroundColors = [
	'rgba(75,192,192,0.7', // junior 
	'rgba(255,206,86,0.7)', // medior
	'rgba(255,99,132,0.7)', // senior
	'rgba(170,13,197,0.5)', // for test
	'rgba(170,13,197,0.5)' //last color is used for the Radar chart
];
const pointColors = [  // these are used for the points on the Radar chart
	'rgba(75,192,192,1)', // junior hover
	'rgba(255,206,86,1', // medior hover
	'rgba(255,99,132,1)', // senior hover
]
// 'rgba(255,99,132,1)',
const chartTitle = [' Front-end technologies', ' Backend technologies', ' Mobile technologies'];

const navToggler = document.getElementsByClassName('navbar-toggler');

// Toggles the header background color to match the collapsible nav when using the navbar-toggler
const headerToggle = () => {
    const header = document.querySelector('header');
    return header.classList.toggle('is-open');
}

const dataExtractor = (categoryIndex) => {
  return dataForChart[categoryIndex].reduce(( data, tech ) => {
		data.langArray.push(tech.name);   
		data.juniorArray.push(tech.junior);
		data.mediorArray.push(tech.medior);
		data.seniorArray.push(tech.senior);
		return data;
  }, {
		langArray: [],
		juniorArray: [],
		mediorArray: [],
		seniorArray: []	  
  });
};


class App extends Component {
  constructor(){
	super();
	const currentTopic = dataForChart[currentCatIndexGlobal][0].name;
	const rawData = dataExtractor(currentCatIndexGlobal);
	
	this.state = {
		cData: {},
		currentTopic: currentTopic,
		rawData: rawData,
		contributors: [],
		chartChoice: "Polar",
		zoomLevel: 55
	}
}



componentDidMount() {
	this.getData(this.state.currentTopic);
	// this.fetchContributors();
	window.addEventListener('scroll', this.handleScroll);
	navToggler[0].addEventListener('click', headerToggle);
}

getData(currentSelection) {
	const { langArray, juniorArray, mediorArray, seniorArray } = this.state.rawData;
	const cIndex = langArray.indexOf(currentSelection);
	this.setState({
		currentTopic: currentSelection,
		cData: {
			datasets: [
				{
					data: [juniorArray[cIndex], mediorArray[cIndex], seniorArray[cIndex]],
					label: currentSelection,
					backgroundColor: this.state.chartChoice === "Polar" ? backgroundColors : backgroundColors[4],
					borderColor: "white",
					hoverBorderColor: "white",
					hoverBackgroundColor: pointColors,
					pointBackgroundColor: pointColors,
					pointBorderColor: "purple",
					pointBorderWidth: 1,
					pointHoverBackgroundColor: pointColors,
					pointHoverBorderColor: pointColors,
					pointRadius: 5,
					pointHoverRadius: 7

				}
			],
			labels: ['Junior','Medior','Senior']
		}
	}, () => {
		this.setState({
			minimZoom: 100 - Math.ceil(Math.max.apply(null, this.state.cData.datasets[0].data))
		})
	});

	
}

onTopicClick = (topic) => {
	this.getData(topic);
}

onNavClick = (index) => {
	currentCatIndexGlobal = index;
	this.setState({
		rawData: dataExtractor(index)
	},
		() => {
			this.getData(this.state.rawData.langArray[0]);
		})
}

changeChart = () => {
	const choice = this.state.chartChoice === "Polar" ? "Radar" : "Polar";
	this.setState(
		{
			chartChoice: choice
		}, () => { this.getData(this.state.currentTopic) })
}

zoom = (event) => {
	this.setState({
		zoomLevel: 100 - Number(event.target.value)
	});
}
handleZoomIncrement = () => {
	this.setState({
		zoomLevel: this.state.zoomLevel + 5
	});
}
handleZoomDecrement = () => {
	this.setState({
		zoomLevel: this.state.zoomLevel - 5
	});
}

render() {
	const { cData, rawData, currentTopic, chartChoice, zoomLevel, minimZoom } = this.state;
    return (
		<div id="top">
			<Particles className="particles" params={particlesOptions} />
			<Header />
			<Navigation onNavClick={this.onNavClick} currentCategoryIndex={currentCatIndexGlobal} />
			<section className="trends">
				<h2 className="title">Most wanted {chartTitle[currentCatIndexGlobal]}</h2>
				<div className="chart-container">
					<Rank langArray={rawData.langArray} onTopicClick={this.onTopicClick} checkbox={currentTopic} />
					{/* <Tooltip /> */}
					<div className="chartHolder">
						<div className="chartbox">
							<Chart data={cData} type={chartChoice} zoomLevel={zoomLevel} />
						</div>
						<div className="switchbox">
							<p>Chart type</p>
							<Switch onClick={this.changeChart} leftText="Polar" rightText="Radar" />
						</div>
						<div className="zoombox">
							<p>Zoom</p>
							<div className="zoomSlider">
								<div onClick={() => this.handleZoomIncrement()}>-</div><input className="slider" type="range" value={100 - this.state.zoomLevel} min="1" max={minimZoom} step="1" onChange={this.zoom} style={{zIndex: 1}}/><div  onClick={() => this.handleZoomDecrement()}>+</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<OurService />
			<DataSource />
			<Suspense fallback={<div>Loading...</div>}>
				<Footer />
			</Suspense>
		</div>
    );
  }
}

export default App;
