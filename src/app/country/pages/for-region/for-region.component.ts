import { Component} from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-for-region',
  templateUrl: './for-region.component.html',
  styles: [`
    button{
      margin-right: 5px;
    }
  `]

})
export class ForRegionComponent {

  regiones:string[] = ["africa", "americas", "asia", "europe", "oceania"];
  regionActiva: string = '';
  countriesRegion: Country[] = [];

  constructor(private countryService: CountryService) { }

  activarRegion( region:string){

    if (region === this.regionActiva) { return;}

    this.regionActiva = region;
    this.countriesRegion = [];

    this.countryService.getCountryForRegion(region)
     .subscribe( (countries ) => {this.countriesRegion = countries});
  }
}
