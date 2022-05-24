import { Component, OnInit } from '@angular/core';
import * as d3 from "d3";

class CountryUrls {
  CountryName: string = '';
  code: string = '';
}

@Component({
  selector: 'app-search-trends',
  templateUrl: './search-trends.component.html',
  styleUrls: ['./search-trends.component.css']
})

export class SearchTrendsComponent implements OnInit {
  keywordString: string = '';
  countryCode: string = '';
  countrySelectionMenu: CountryUrls[] = [];

  private data = [
    {"Framework": "Vue", "Stars": "166443", "Released": "2014"},
    {"Framework": "React", "Stars": "150793", "Released": "2013"},
    {"Framework": "Angular", "Stars": "62342", "Released": "2016"},
    {"Framework": "Backbone", "Stars": "27647", "Released": "2010"},
    {"Framework": "Ember", "Stars": "21471", "Released": "2011"},
  ];
  private svg: any;
  private margin = 50;
  private width = 750;
  private height = 600;
  // The radius of the pie chart is half the smallest side
  private radius = Math.min(this.width, this.height) / 2 - this.margin;
  private colors: string = '#FFFFFF';

  constructor() {
    this.countrySelectionMenu.push(
      {
        CountryName : 'United States',
        code : 'us'
      },
      {
        CountryName : 'Afghanistan',
        code : 'af'
      },
      {
        CountryName : 'Antigua',
        code : 'ag'
      },
      {
        CountryName : 'Australia',
        code : 'au'
      },
      {
        CountryName : 'Austria',
        code : 'at'
      },
      {
        CountryName : 'Bahamas',
        code : 'bs'
      },
      {
        CountryName : 'Belgium',
        code : 'be'
      },
      {
        CountryName : 'Bhutan',
        code : 'bt'
      },
      {
        CountryName : 'Bolivia',
        code : 'bo'
      },
      {
        CountryName : 'Brazil',
        code : 'br'
      },
      {
        CountryName : 'Bangladesh',
        code : 'bd'
      },
      {
        CountryName : 'Cambodia',
        code : 'kh'
      },
      {
        CountryName : 'Canada',
        code : 'ca'
      },
      {
        CountryName : 'Chile',
        code : 'cl'
      },
      {
        CountryName : 'China',
        code : 'cn'
      },
      {
        CountryName : 'Colombia',
        code : 'co'
      },
      {
        CountryName : 'Costa Rica',
        code : 'cr'
      },
      {
        CountryName : 'Czech Republic',
        code : 'cz'
      },
      {
        CountryName : 'Denmark',
        code : 'dk'
      },
      {
        CountryName : 'Egypt',
        code : 'eg'
      },
      {
        CountryName : 'Finland',
        code : 'fi'
      },
      {
        CountryName : 'France',
        code : 'fr'
      },
      {
        CountryName : 'Germany',
        code : 'de'
      },
      {
        CountryName : 'Ghana',
        code : 'gh'
      },
      {
        CountryName : 'Hong Kong',
        code : 'hk'
      },
      {
        CountryName : 'India',
        code : 'in'
      },
      {
        CountryName : 'Indonesia',
        code : 'id'
      },
      {
        CountryName : 'Italy',
        code : 'it'
      },
      {
        CountryName : 'Japan',
        code : 'jp'
      },
      {
        CountryName : 'Kenya',
        code : 'ke'
      },
      {
        CountryName : 'Malaysia',
        code : 'my'
      },
      {
        CountryName : 'Mexico',
        code : 'mx'
      },
      {
        CountryName : 'Netherlands',
        code : 'nl'
      },
      {
        CountryName : 'New Zealand',
        code : 'nz'
      },
      {
        CountryName : 'Philippines',
        code : 'ph'
      },
      {
        CountryName : 'Poland',
        code : 'pl'
      },
      {
        CountryName : 'Russia',
        code : 'ru'
      },
      {
        CountryName : 'Saudi Arabia',
        code : 'sa'
      },
      {
        CountryName : 'Singapore',
        code : 'sg'
      },
      {
        CountryName : 'South Africa',
        code : 'za'
      },
      {
        CountryName : 'Spain',
        code : 'es'
      },
      {
        CountryName : 'Switzerland',
        code : 'se'
      },
      {
        CountryName : 'Turkey',
        code : 'tr'
      },
      {
        CountryName : 'United Kingdom',
        code : 'uk'
      }
    )
  }

  ngOnInit(): void {
  }

  getKeywordsResult = () => {
    let chart = d3.Tree(flare, {
      label: d => d.name,
      sort: (a, b) => d3.descending(a.height, b.height), // reduce link crossings
      tree: d3.cluster,
      title: (d, n) => `${n.ancestors().reverse().map(d => d.data.name).join(".")}`, // hover text
      link: (d, n) => n.children
        ? `https://github.com/prefuse/Flare/tree/master/flare/src/${n.ancestors().reverse().map(d => d.data.name).join("/")}`
        : `https://github.com/prefuse/Flare/blob/master/flare/src/${n.ancestors().reverse().map(d => d.data.name).join("/")}.as`,
      width: 1152,
      height: 1152,
      margin: 110
    })
  }
}
