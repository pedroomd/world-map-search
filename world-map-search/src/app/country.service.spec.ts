import { TestBed } from '@angular/core/testing';
import { ApolloQueryResult } from '@apollo/client';
import {
  ApolloTestingModule,
  ApolloTestingController,
} from 'apollo-angular/testing'

import { CountryService, GET_COUNTRY } from './country.service';

describe('CountryService', () => {
  let service: CountryService;
  let controller: ApolloTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ApolloTestingModule],
    });

    TestBed.configureTestingModule({providers: [CountryService]})
    controller = TestBed.inject(ApolloTestingController);
    service = TestBed.inject(CountryService);
  });

  it('it should query countries from Country Service', () => {
    service.getCountry("PT").subscribe((country : any) => {
      
      expect(country.data.country.name).toEqual('Portugal');
      expect(country.data.country.capital).toEqual('Lisbon');
      expect(country.data.country.emoji).toEqual('🇵🇹');
      expect(country.data.country.phone).toEqual('351');
      expect(country.data.country.currency).toEqual("EUR");
      expect(country.data.continent.continent).toEqual("Europe");
      
    })

    const op = controller.expectOne(GET_COUNTRY);
    expect(op.operation.variables['countryId']).toEqual('PT');

    op.flush({
      data: {
        country: {
          name: "Portugal",
          native: "Portugal",
          capital: "Lisbon",
          emoji: "🇵🇹",
          phone: "351",
          currency: "EUR",
          continent: {
            name: "Europe"
          },
          languages: [
            {
              "code": "pt",
              "name": "Portuguese"
            }
          ]
        },
      },
    });

    controller.verify();
  });
});
