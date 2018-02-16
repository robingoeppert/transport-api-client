import 'mocha';
import {expect} from 'chai';
import {LocationRequest} from '../lib/requests/location-request';
import {LocationType} from '../lib/enums/location-type';
import {TransportationType} from '../lib/enums/transportation-type';
import {Location} from '../lib/objects/location';


describe('LocationRequest', () => {
    describe('Initializing', () => {
        it('has set base URL and API route', () => {
            const locationRequest: LocationRequest = new LocationRequest();
            const url: string = locationRequest.getUrl();
            expect(url).to.be.a('string');
            expect(url).to.be.equal('http://transport.opendata.ch/v1/locations');
        });
    });

    describe('Valid request by name', () => {
        const locationRequest: LocationRequest = new LocationRequest()
            .byName('Rafz')
            .ofType(LocationType.POINT_OF_INTEREST)
            .withTransports(TransportationType.BUS, TransportationType.S_SN_R);

        it('has assembled required URL components', () => {
            const url: string = locationRequest.getUrl();

            expect(url).to.be.equal('http://transport.opendata.ch/v1/locations?query=Rafz&type=poi&transportations[]=bus&transportations[]=s_sn_r');
        });

        it('responds as expected', async () => {
            const response: Location[] = await locationRequest.send();
            expect(response).to.be.an('array');
            expect(response[0].id).not.to.be.undefined;
            expect(response[0].name).not.to.be.undefined;
        });
    });
});
