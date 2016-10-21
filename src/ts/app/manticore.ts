/// <reference path="../common/types.d.ts" />
/// <reference path="../common/shims.ts" />
/// <reference path="../common/data.ts" />
/// <reference path="../common/bestiary.ts" />
/// <reference path="../common/typed-workers.ts" />
/// <reference path="../common/messaging.ts" />
/// <reference path="../model/bestiary.ts" />

/// <reference path="ui.ts" />
/// <reference path="appcache.ts" />

module manticore {
    function awaitContentLoaded() {
        return new Promise((resolve, reject) => {
            document.addEventListener("DOMContentLoaded", _ => {
                manticore.appcache.handleReloads();
                resolve({});
            })
        });
    }


        
    function allocate(party: data.IParty, monsters: data.Monster[]) {
        const allocationWorker = workers.newWorker<[data.IParty, data.Monster[]], any>("static/js/processing.js");
        
        return new Promise(resolve => {
            allocationWorker.onmessage = (message) => {
                resolve(message.data);
            };
            allocationWorker.postMessage([party, monsters]);
        });
    }


    ui.initialize(
        document.getElementById("application")!,
        model.dataAccessWorker(),
        awaitContentLoaded()
            .then(_ => undefined)
            .catch(e => console.error("An error occured bootstrapping the application", e)),
        allocate
    );
}