import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CardComponent } from '../card/card.component';
import { Card } from '../_models/card';
import { Tag } from '../_models/tags';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
  providers: []
})
export class PortfolioComponent {

  projects: Card[] = [
    // {
    //   id: 1,
    //   name: 'Forecast CLI',
    //   summary: "A command-line weather application providing real-time forecasts and 6-day predictions. Built with Go backend integrating WeatherAPI and ipinfo.io services, featuring location detection and custom city lookup.",
    //   description: "Forecast CLI delivers instant weather information directly to your terminal. The tool automatically detects your location via IP address or accepts custom locations through command-line flags. It displays comprehensive current conditions including temperature, humidity, and 'feels-like' temperature, along with a detailed 6-day forecast featuring sunrise/sunset times and precipitation probability.The system integrates WeatherAPI for meteorological data and ipinfo.io for geolocation services, packaged as an efficient lightweight Go application. Key features include: custom location lookup via the --location flag; temporary API key override using --apiKey (takes precedence over .env file configuration). This project is simple but efficient, it's terminal-native operation without browser dependencies.",
    //   projectLink: 'https://github.com/barbaracalderon/forecast-cli',
    //   tags: [Tag.GOLANG],
    //   pictures: ["../../assets/forecast_01.png", "../../assets/forecast_02.png"]
    // }
  ]


  constructor(private titleService: Title) {
    this.titleService.setTitle('Bhavana | Portfolio')
  }

  trackById(index: number, project: Card): number {
    return project.id;
  }

}
