import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';
@Component({
  selector: 'app-for-capital',
  templateUrl: './for-capital.component.html',

})
export class ForCapitalComponent  {

  termino: string = "";
  errorConsulta: boolean = false;
  countries: Country[] = [];

  constructor(private countryService: CountryService) { }

  buscar( termino: string){
    this.errorConsulta = false


    this.countryService.searchCapital(termino)
    .subscribe( (paises) => {
      this.countries = paises;

    }, (err)=>{
      this.errorConsulta = true;
      this.countries = [];
    })
  }
}
