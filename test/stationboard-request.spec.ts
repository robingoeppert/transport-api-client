import 'mocha';
import {expect} from 'chai';
import {StationboardRequest} from '../lib/requests/stationboard-request';
import {TransportationType} from '../lib/enums/transportation-type';
import moment = require('moment');
import {Moment} from 'moment';
import {StationboardType} from '../lib/enums/stationboard-type';


describe('StationboardRequest', () => {
    describe('Initializing', () => {
        it('has set URL for byStationName constructor', () => {
            const request: StationboardRequest = StationboardRequest.byStationName('Rafz');
            const url: string = request.getUrl();
            expect(url).to.be.a('string');
            expect(url).to.be.equal('http://transport.opendata.ch/v1/stationboard?station=Rafz');
        });

        it('has set URL for byStationId constructor', () => {
            const request: StationboardRequest = StationboardRequest.byStationId('8503059');
            const url: string = request.getUrl();
            expect(url).to.be.a('string');
            expect(url).to.be.equal('http://transport.opendata.ch/v1/stationboard?id=8503059');
        });
    });

    describe('Parameterization', () => {
        it('has param "limit" set correctly', () => {
            const url: string = StationboardRequest
                .byStationName('Rafz')
                .limitResponse(3)
                .getUrl();

            expect(url).to.be.equal('http://transport.opendata.ch/v1/stationboard?station=Rafz&limit=3');
        });

        it('has param "transportations" set correctly', () => {
            const url: string = StationboardRequest
                .byStationName('Rafz')
                .withTransports(TransportationType.BUS, TransportationType.S_SN_R)
                .getUrl();

            expect(url).to.be.equal('http://transport.opendata.ch/v1/stationboard?station=Rafz&transportations[]=bus&transportations[]=s_sn_r');
        });

        it('has param "datetime" set correctly', () => {
            const date: Moment = moment();
            const datetimeString: string = encodeURIComponent(date.format('YYYY-MM-DD hh:mm'));

            const url: string = StationboardRequest
                .byStationName('Rafz')
                .atDateTime(date.toDate())
                .getUrl();

            expect(url).to.be.equal('http://transport.opendata.ch/v1/stationboard?station=Rafz&datetime=' + datetimeString);
        });

        it('has param "type" set correctly', () => {
            const url: string = StationboardRequest
                .byStationName('Rafz')
                .ofType(StationboardType.ARRIVAL)
                .getUrl();

            expect(url).to.be.equal('http://transport.opendata.ch/v1/stationboard?station=Rafz&type=arrival');
        });
    });

    describe('Valid request by station name', () => {
        it('responds as expected', () => {
            return StationboardRequest
                .byStationName('Rafz')
                .withTransports(TransportationType.BUS)
                .limitResponse(2)
                .send()
                .then(response => {
                    expect(response).to.be.an('array');
                    expect(response[0].stop).not.to.be.undefined;
                    expect(response[0].name).not.to.be.undefined;
                    expect(response[0].to).not.to.be.undefined;
                });
        });
    });

    describe('Valid request by station ID', () => {
        it('responds as expected', () => {
            return StationboardRequest
                .byStationId('8503059')
                .withTransports(TransportationType.S_SN_R)
                .ofType(StationboardType.ARRIVAL)
                .limitResponse(4)
                .send()
                .then(response => {
                    expect(response).to.be.an('array');
                    expect(response[0].stop).not.to.be.undefined;
                    expect(response[0].name).not.to.be.undefined;
                    expect(response[0].to).not.to.be.undefined;
                });
        });
    });
});
