import 'mocha';
import {expect} from 'chai';
import {LocationRequest} from '../lib/requests/location-request';
import {LocationType} from '../lib/enums/location-type';
import {TransportationType} from '../lib/enums/transportation-type';


describe('LocationRequest', () => {
    describe('Initializing', () => {
        it('has set URL for byName constructor', () => {
            const locationRequest: LocationRequest = LocationRequest.byName('Test');
            const url: string = locationRequest.getUrl();
            expect(url).to.be.a('string');
            expect(url).to.be.equal('http://transport.opendata.ch/v1/locations?query=Test');
        });

        it('has set URL for byCoordinates constructor', () => {
            const locationRequest: LocationRequest = LocationRequest.byCoordinates(45.332, 8.79);
            const url: string = locationRequest.getUrl();
            expect(url).to.be.a('string');
            expect(url).to.be.equal('http://transport.opendata.ch/v1/locations?x=45.332&y=8.79');
        });
    });

    describe('Parameterization', () => {
        it('has param "type" set correctly', () => {
            const url: string = LocationRequest
                .byName('Rafz')
                .ofType(LocationType.POINT_OF_INTEREST)
                .getUrl();

            expect(url).to.be.equal('http://transport.opendata.ch/v1/locations?query=Rafz&type=poi');
        });

        it('has param "transportations" set correctly', () => {
            const url: string = LocationRequest
                .byCoordinates(45.332, 8.79)
                .withTransports(TransportationType.BUS, TransportationType.CABLEWAY)
                .getUrl();

            expect(url).to.be.equal('http://transport.opendata.ch/v1/locations?x=45.332&y=8.79&transportations[]=bus&transportations[]=cableway');
        });
    });

    describe('Valid request by name', () => {
        it('responds as expected', () => {
            return LocationRequest
                .byName('Rafz')
                .ofType(LocationType.POINT_OF_INTEREST)
                .send()
                .then(response => {
                    expect(response).to.be.an('array');
                    expect(response[0].id).not.to.be.undefined;
                    expect(response[0].name).not.to.be.undefined;
                });
        });
    });

    describe('Valid request by coordinates', () => {
        it('responds as expected', () => {
            return LocationRequest
                .byCoordinates(45.332, 8.79)
                .withTransports(TransportationType.BUS, TransportationType.S_SN_R)
                .send()
                .then(response => {
                    expect(response).to.be.an('array');
                    expect(response[0].id).not.to.be.undefined;
                    expect(response[0].name).not.to.be.undefined;
                });
        });
    });
});
