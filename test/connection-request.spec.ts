import 'mocha';
import {expect} from 'chai';
import {ConnectionRequest} from '../lib/requests/connection-request';
import {TransportationType} from '../lib/enums/transportation-type';
import {AccessibilityType} from '../lib/enums/accessibility-type';
import {LocationType} from '../lib/enums/location-type';
import {LocationRequest} from '../lib/requests/location-request';


describe('ConnectionRequest', () => {
    describe('Initializing', () => {
        it('has set URL for byFromTo constructor', () => {
            const url: string = ConnectionRequest.byFromTo('Rafz', 'Zürich HB').getUrl();

            expect(url).to.be.a('string');
            expect(url).to.be.equal('http://transport.opendata.ch/v1/connections?from=Rafz&to=Z%C3%BCrich%20HB');
        });
    });

    describe('Parameterization', () => {
        it('has param "via" set correctly', () => {
            const url: string = ConnectionRequest
                .byFromTo('Rafz', 'Eglisau')
                .via('Wil', 'Eglisau')
                .getUrl();

            expect(url).to.be.equal('http://transport.opendata.ch/v1/connections?from=Rafz&to=Eglisau&via[]=Wil&via[]=Eglisau');
        });

        it('has param "date" set correctly', () => {
            const date: Date = new Date();
            date.setFullYear(2018);
            date.setMonth(9);
            date.setDate(23);

            const url: string = ConnectionRequest
                .byFromTo('Rafz', 'Eglisau')
                .onDate(date)
                .getUrl();

            expect(url).to.be.equal('http://transport.opendata.ch/v1/connections?from=Rafz&to=Eglisau&date=2018-10-23');
        });

        it('has param "time" set correctly', () => {
            const time: Date = new Date();
            time.setHours(12);
            time.setMinutes(36);

            const url: string = ConnectionRequest
                .byFromTo('Rafz', 'Eglisau')
                .atTime(time)
                .getUrl();

            expect(url).to.be.equal('http://transport.opendata.ch/v1/connections?from=Rafz&to=Eglisau&time=12%3A36');
        });

        it('has param "isArrivalTime" set correctly', () => {
            const url: string = ConnectionRequest
                .byFromTo('Rafz', 'Eglisau')
                .dateTimeIsArrival(true)
                .getUrl();

            expect(url).to.be.equal('http://transport.opendata.ch/v1/connections?from=Rafz&to=Eglisau&isArrivalTime=1');
        });

        it('has param "transportations[]" set correctly', () => {
            const url: string = ConnectionRequest
                .byFromTo('Rafz', 'Eglisau')
                .withTransports(TransportationType.S_SN_R, TransportationType.BUS)
                .getUrl();

            expect(url).to.be.equal('http://transport.opendata.ch/v1/connections?from=Rafz&to=Eglisau&transportations[]=s_sn_r&transportations[]=bus');
        });

        it('has param "limit" set correctly', () => {
            const url: string = ConnectionRequest
                .byFromTo('Rafz', 'Eglisau')
                .limitResponse(3)
                .getUrl();

            expect(url).to.be.equal('http://transport.opendata.ch/v1/connections?from=Rafz&to=Eglisau&limit=3');
        });

        it('has param "page" set correctly', () => {
            const url: string = ConnectionRequest
                .byFromTo('Rafz', 'Eglisau')
                .pageOfResponse(1)
                .getUrl();

            expect(url).to.be.equal('http://transport.opendata.ch/v1/connections?from=Rafz&to=Eglisau&page=1');
        });

        it('has param "direct" set correctly', () => {
            const url: string = ConnectionRequest
                .byFromTo('Rafz', 'Eglisau')
                .onlyDirect(true)
                .getUrl();

            expect(url).to.be.equal('http://transport.opendata.ch/v1/connections?from=Rafz&to=Eglisau&direct=1');
        });

        it('has param "sleeper" set correctly', () => {
            const url: string = ConnectionRequest
                .byFromTo('Rafz', 'Eglisau')
                .hasBeds(true)
                .getUrl();

            expect(url).to.be.equal('http://transport.opendata.ch/v1/connections?from=Rafz&to=Eglisau&sleeper=1');
        });

        it('has param "couchette" set correctly', () => {
            const url: string = ConnectionRequest
                .byFromTo('Rafz', 'Eglisau')
                .hasCouchettes(true)
                .getUrl();

            expect(url).to.be.equal('http://transport.opendata.ch/v1/connections?from=Rafz&to=Eglisau&couchette=1');
        });

        it('has param "bike" set correctly', () => {
            const url: string = ConnectionRequest
                .byFromTo('Rafz', 'Eglisau')
                .bikesAllowed(true)
                .getUrl();

            expect(url).to.be.equal('http://transport.opendata.ch/v1/connections?from=Rafz&to=Eglisau&bike=1');
        });

        it('has param "accessibility" set correctly', () => {
            const url: string = ConnectionRequest
                .byFromTo('Rafz', 'Eglisau')
                .accessibleBy(AccessibilityType.ASSISTED_BOARDING)
                .getUrl();

            expect(url).to.be.equal('http://transport.opendata.ch/v1/connections?from=Rafz&to=Eglisau&accessibility=assisted_boarding');
        });
    });

    describe('Valid request by from and to', () => {
        it('responds as expected', () => {
            return ConnectionRequest
                .byFromTo('Rafz', 'Bern')
                .bikesAllowed(true)
                .atTime(new Date())
                .send()
                .then(response => {
                    expect(response).to.be.an('array');
                    expect(response[0].from).not.to.be.undefined;
                    expect(response[0].to).not.to.be.undefined;
                    expect(response[0].duration).not.to.be.undefined;
                });
        });
    });
});
